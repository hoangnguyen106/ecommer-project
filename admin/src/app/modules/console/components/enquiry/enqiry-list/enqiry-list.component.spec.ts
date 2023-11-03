import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqiryListComponent } from './enqiry-list.component';

describe('EnqiryListComponent', () => {
  let component: EnqiryListComponent;
  let fixture: ComponentFixture<EnqiryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnqiryListComponent]
    });
    fixture = TestBed.createComponent(EnqiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
