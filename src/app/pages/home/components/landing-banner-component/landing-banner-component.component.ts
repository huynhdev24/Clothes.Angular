import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-landing-banner-component',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './landing-banner-component.component.html',
  styleUrls: ['./landing-banner-component.component.css']
})
export class LandingBannerComponentComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
