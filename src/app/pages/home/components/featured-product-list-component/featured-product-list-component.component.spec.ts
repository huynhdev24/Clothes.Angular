import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductListComponentComponent } from './featured-product-list-component.component';

describe('FeaturedProductListComponentComponent', () => {
  let component: FeaturedProductListComponentComponent;
  let fixture: ComponentFixture<FeaturedProductListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedProductListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProductListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
