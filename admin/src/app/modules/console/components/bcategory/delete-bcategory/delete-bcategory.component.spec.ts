import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBcategoryComponent } from './delete-bcategory.component';

describe('DeleteBcategoryComponent', () => {
  let component: DeleteBcategoryComponent;
  let fixture: ComponentFixture<DeleteBcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBcategoryComponent]
    });
    fixture = TestBed.createComponent(DeleteBcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
