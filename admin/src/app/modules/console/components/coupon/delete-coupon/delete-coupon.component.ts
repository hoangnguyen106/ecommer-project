import { Component, Input } from '@angular/core';
import { Coupon } from '../../../models/coupon';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CouponService } from '../../../services/coupon.service';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.scss'],
})
export class DeleteCouponComponent {
  @Input() item!: Coupon;
  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private couponService: CouponService
  ) {}

  confirmDelete() {
    this.couponService.deleteCoupon(this.item._id).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
