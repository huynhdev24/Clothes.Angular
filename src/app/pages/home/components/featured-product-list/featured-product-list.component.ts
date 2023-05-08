import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-featured-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-product-list.component.html',
  styleUrls: ['./featured-product-list.component.css']
})
export class FeaturedProductListComponent {
  featuredProducts$!: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.featuredProducts$ = this.productService.getFeaturedProducts();
  }
}
