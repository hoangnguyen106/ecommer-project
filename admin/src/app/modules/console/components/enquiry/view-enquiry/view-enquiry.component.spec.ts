import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnquiryComponent } from './view-enquiry.component';

describe('ViewEnquiryComponent', () => {
  let component: ViewEnquiryComponent;
  let fixture: ComponentFixture<ViewEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEnquiryComponent]
    });
    fixture = TestBed.createComponent(ViewEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
