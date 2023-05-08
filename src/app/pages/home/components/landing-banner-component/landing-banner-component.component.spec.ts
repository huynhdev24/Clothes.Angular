import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBannerComponentComponent } from './landing-banner-component.component';

describe('LandingBannerComponentComponent', () => {
  let component: LandingBannerComponentComponent;
  let fixture: ComponentFixture<LandingBannerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingBannerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
