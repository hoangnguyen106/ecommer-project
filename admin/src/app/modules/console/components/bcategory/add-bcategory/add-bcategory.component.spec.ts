import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBcategoryComponent } from './add-bcategory.component';

describe('AddBcategoryComponent', () => {
  let component: AddBcategoryComponent;
  let fixture: ComponentFixture<AddBcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBcategoryComponent]
    });
    fixture = TestBed.createComponent(AddBcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
