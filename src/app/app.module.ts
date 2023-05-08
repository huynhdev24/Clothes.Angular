import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { FeaturedProductListComponentComponent } from './pages/home/components/featured-product-list-component/featured-product-list-component.component';
import { LandingBannerComponentComponent } from './pages/home/components/landing-banner-component/landing-banner-component.component';
import { ProductItemComponent } from './pages/products/components/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    FeaturedProductListComponentComponent,
    LandingBannerComponentComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
