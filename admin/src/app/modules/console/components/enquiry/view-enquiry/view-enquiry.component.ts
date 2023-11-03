import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EnquiryService } from '../../../services/enquiry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Enquiry } from '../../../models/enquiry';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.scss'],
})
export class ViewEnquiryComponent implements OnInit {
  // addBrand!: FormGroup;
  dataEnquiry: any;
  id!: string | null;
  // isAddMode: boolean = true;
  @Input() item!: Enquiry;

  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private enquiryService: EnquiryService,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    console.log('id =============>', this.id);
    this.loadData(this.id);
  }

  // Lấy ra dữ liệu từng brand theo id
  loadData(id: any) {
    this.enquiryService
      .getEnquiryById(id)
      .pipe(first())
      .subscribe((res) => {
        this.dataEnquiry = res;
        console.log('data brand by id', res);
      });
  }

  // Đóng popup
  onClose() {
    this._NgbActiveModal.dismiss();
    this.router.navigate(['/console/list-enquiry'], {
      queryParams: {},
    });
  }
}
