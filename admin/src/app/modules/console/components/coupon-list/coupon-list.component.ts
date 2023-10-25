import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CouponService } from '../../services/coupon.service';
import { AddCouponComponent } from '../add-coupon/add-coupon.component';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent {
  coupons!: any;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private couponService: CouponService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadAllCoupons();
  }

  loadAllCoupons() {
    this.couponService.getAllCoupon().subscribe((res) => {
      this.coupons = res;
      console.log('product', res);
    });
  }

  addNewCoupon() {
    const modalRef = this.modalService.open(AddCouponComponent, this.options);
    console.log(modalRef);
    modalRef.result
      .then(() => {
        this.loadAllCoupons();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
