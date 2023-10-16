import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcategoryListComponent } from './bcategory-list.component';

describe('BcategoryListComponent', () => {
  let component: BcategoryListComponent;
  let fixture: ComponentFixture<BcategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BcategoryListComponent]
    });
    fixture = TestBed.createComponent(BcategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
