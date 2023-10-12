import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareProductComponent } from './compare-product.component';
import { BreadCrumbComponent } from 'src/app/modules/shared/components/bread-crumb/bread-crumb.component';

describe('CompareProductComponent', () => {
  let component: CompareProductComponent;
  let fixture: ComponentFixture<CompareProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareProductComponent, BreadCrumbComponent],
    });
    fixture = TestBed.createComponent(CompareProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
