import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    title: 'Clothes - Home'
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./pages/product/product.component')
  },
  {
    path: 'products/:gender',
    loadComponent: () => import('./pages/products/products.component')
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
