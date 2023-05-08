import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductsComponent {
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {
    
  }

}
