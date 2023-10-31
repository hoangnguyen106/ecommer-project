import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CouponService } from '../../../services/coupon.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Coupon } from '../../../models/coupon';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first, map } from 'rxjs';

const changeDateFormat = (date: any) => {
  const newDate = new Date(date).toLocaleDateString();
  const [month, day, year] = newDate.split('/');
  return [year, month, day].join('-');
};

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss'],
})
export class AddCouponComponent implements OnInit {
  addCoupon!: FormGroup;
  id!: string | null;
  isAddMode: boolean = true;
  @Input() item!: Coupon;

  constructor(
    private couponService: CouponService,
    private _NgbActiveModal: NgbActiveModal,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Lấy params từ url
    this.id = this.route.snapshot.queryParams['id'];
    console.log('id =============>', this.id);

    this.addCoupon = this.fb.group({
      name: ['', Validators.required],
      expiry: ['', Validators.required],
      discount: ['', Validators.required],
    });

    // Check params có tồn tại hay không
    if (this.id === undefined) {
      this.isAddMode = true;
    } else {
      this.loadData(this.item._id);

      this.isAddMode = false;
    }
  }

  // Lấy ra dữ liệu từng coupon theo id
  loadData(id: any) {
    console.log(id); // Adjust the format as needed

    this.couponService
      .getCouponById(id)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        this.addCoupon.patchValue(res);
        console.log(this.addCoupon.patchValue(res));
      });
  }

  // Select cách edit hay add
  onSubmit() {
    if (this.isAddMode) {
      this.onAddCoupon();
    } else {
      this.onUpdateBrand();
    }
  }
  // Thêm mới coupon
  onAddCoupon() {
    this.couponService.createCoupon(this.addCoupon.value).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
      this.addCoupon.reset();
    });
  }

  // Update brand
  onUpdateBrand() {
    this.couponService
      .updateCoupon(this.id, this.addCoupon.value)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        if (res != null) {
          this.router.navigate(['/console/list-coupon'], {
            queryParams: {},
          });
          this._NgbActiveModal.close();
        }
        this.addCoupon.reset();
      });
  }

  // Đóng popup
  onClose() {
    this._NgbActiveModal.dismiss();
    this.router.navigate(['/console/list-coupon'], {
      queryParams: {},
    });
  }
}
