import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/models/product';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
import { Unsubscriber } from 'src/app/shared/helpers/unsubscriber';
import {catchError, EMPTY, map, Observable, switchMap, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends Unsubscriber implements OnInit {
  product$!:Observable<Product>;
  selectedVariant: string | undefined;

  constructor(private privateService: ProductService, private route: ActivatedRoute, private router: Router) {
    super()
  }

  ngOnInit(): void {
    this.product$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => Number(params.get('id'))),
        switchMap((id: number) => {
          return this.productService.getProductById(id)
            .pipe(catchError(() => {
              this.router.navigate(['/']);
              return EMPTY;
            }))
          })
      );
  }

  selectVariant(variant: string): void {
    this.selectedVariant = variant;
  }
}
