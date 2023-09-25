import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProductComponent } from './special-product.component';

describe('SpecialProductComponent', () => {
  let component: SpecialProductComponent;
  let fixture: ComponentFixture<SpecialProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialProductComponent]
    });
    fixture = TestBed.createComponent(SpecialProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
