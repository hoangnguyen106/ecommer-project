import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EnquiryService } from '../../../services/enquiry.service';
import { ViewEnquiryComponent } from '../view-enquiry/view-enquiry.component';
import { DeleteEnquiryComponent } from '../delete-enquiry/delete-enquiry.component';
import { Enquiry } from '../../../models/enquiry';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enqiry-list',
  templateUrl: './enqiry-list.component.html',
  styleUrls: ['./enqiry-list.component.scss'],
})
export class EnqiryListComponent {
  enquiries!: any;
  id!: string;
  setStatus!: string;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private enquiryService: EnquiryService,
    private modalService: NgbModal,
    private router: Router
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

  // Xem chi tiết enquiry
  openViewEnquiry(item: Enquiry) {
    // Push params lên url
    this.router.navigate(['/console/list-enquiry'], {
      queryParams: { id: item._id },
    });
    // Open popup add
    const modalRef = this.modalService.open(ViewEnquiryComponent, this.options);

    modalRef.result
      .then(() => {
        this.loadAllEnquiry();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Xóa enquiry
  openDeleteEnquiry(item: Enquiry) {
    const modalRef = this.modalService.open(
      DeleteEnquiryComponent,
      this.options
    );
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllEnquiry();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
