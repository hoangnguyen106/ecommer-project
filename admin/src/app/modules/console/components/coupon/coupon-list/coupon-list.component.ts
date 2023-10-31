import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CouponService } from '../../../services/coupon.service';
import { AddCouponComponent } from '../add-coupon/add-coupon.component';
import { Coupon } from '../../../models/coupon';
import { Router } from '@angular/router';
import { DeleteCouponComponent } from '../delete-coupon/delete-coupon.component';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss'],
})
export class CouponListComponent {
  coupons!: any;
  id!: string;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private couponService: CouponService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllCoupons();
  }
  // Lấy ra all data coupon
  loadAllCoupons() {
    this.couponService.getAllCoupon().subscribe((res) => {
      this.coupons = res;
      console.log('product', res);
    });
  }
  // THêm mới coupon
  openAddCoupon() {
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

  // Cập nhật coupon
  openEditCoupon(item: Coupon) {
    // Push params lên url
    this.router.navigate(['/console/list-coupon'], {
      queryParams: { id: item._id },
    });

    // Open popup edit
    const modalRef = this.modalService.open(AddCouponComponent, this.options);
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllCoupons();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Xóa coupon
  openDeleteCoupon(item: Coupon) {
    const modalRef = this.modalService.open(
      DeleteCouponComponent,
      this.options
    );
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllCoupons();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
