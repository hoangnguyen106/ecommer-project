import { Component, Input } from '@angular/core';
import { Enquiry } from '../../../models/enquiry';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EnquiryService } from '../../../services/enquiry.service';

@Component({
  selector: 'app-delete-enquiry',
  templateUrl: './delete-enquiry.component.html',
  styleUrls: ['./delete-enquiry.component.scss'],
})
export class DeleteEnquiryComponent {
  @Input() item!: Enquiry;
  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private enquirysService: EnquiryService
  ) {}

  confirmDelete() {
    this.enquirysService.deleteEnquiry(this.item._id).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
