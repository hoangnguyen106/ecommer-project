import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouponService } from '../../services/coupon.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss'],
})
export class AddCouponComponent {
  addCoupon: FormGroup;
  constructor(
    private couponService: CouponService,
    private _NgbActiveModal: NgbActiveModal,
    public fb: FormBuilder
  ) {
    this.addCoupon = this.fb.group({
      name: ['', Validators.required],
      expiry: ['', Validators.required],
      discount: ['', Validators.required],
    });
  }

  onAddCoupon() {
    this.couponService.createCoupon(this.addCoupon.value).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
      this.addCoupon.reset();
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
