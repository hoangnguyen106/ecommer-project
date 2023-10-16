import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-enqiry-list',
  templateUrl: './enqiry-list.component.html',
  styleUrls: ['./enqiry-list.component.scss'],
})
export class EnqiryListComponent {
  enquiries!: any;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private enquiryService: EnquiryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadAllEnquiry();
  }

  loadAllEnquiry() {
    this.enquiryService.getAllEnquiry().subscribe((res) => {
      this.enquiries = res;
      console.log('enquiry', res);
    });
  }

  // addNewProject() {
  //   const modalRef = this.modalService.open(A, this.options);

  //   modalRef.result
  //     .then((result: any) => {
  //       if (result) {
  //         setTimeout(() => {
  //           this.loadAllEnquiry();
  //         }, 1000);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
}
