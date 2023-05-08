import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-featured-product-list-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-product-list-component.component.html',
  styleUrls: ['./featured-product-list-component.component.css']
})
export class FeaturedProductListComponentComponent {
  featuredProducts$!: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.featuredProducts$ = this.productService.getFeaturedProducts();
  }
}
