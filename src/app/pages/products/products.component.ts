import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BehaviorSubject, combineLatestWith, map, Observable, switchMap} from "rxjs";
import { ProductService } from 'src/app/core/services/product.service';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { productsPageSize } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  gender$!: Observable<string>;
  products$!: Observable<Product[]>;
  page$ = new BehaviorSubject<number>(1);
  productsCount$!: Observable<number>;

  pagesCount!: number;
  sortOption!: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  
      this.gender$ = this.route.paramMap
        .pipe(map((params: ParamMap) => String(params.get('gender'))));
  
      this.products$ = this.page$
        .pipe(
          combineLatestWith(this.gender$),
          switchMap(([page, gender]) => {
            return this.productService.getProductsPaged(page, gender)
              .pipe(map(products => {
                if(products.length === 0) {
                  this.router.navigate(['/']);
                }
                return products;
              }))
          }));
  
      this.productsCount$ = this.gender$
        .pipe(switchMap(gender => {
          return this.productService.getProductsCountByGender(gender)
            .pipe(map(productsCount => {
              this.pagesCount = productsCount / productsPageSize;
              return productsCount;
            }));
        }));
  
      this.sortOption = "";
    }

    public nextPage(): void {
      if(this.page$.value < this.pagesCount) {
        this.page$.next(this.page$.value + 1);
      }
    }
  
    public previousPage(): void {
      if(this.page$.value > 1) {
        this.page$.next(this.page$.value - 1);
      }
    }
  
    public onSelectSortOption(event: any): void {
      this.sortOption = event.target.value;
    }
}
