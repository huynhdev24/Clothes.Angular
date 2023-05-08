import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LandingBannerComponentComponent } from "./components/landing-banner-component/landing-banner-component.component";
import { FeaturedProductListComponentComponent } from "./components/featured-product-list-component/featured-product-list-component.component";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    LandingBannerComponentComponent,
    FeaturedProductListComponentComponent
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export default class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
