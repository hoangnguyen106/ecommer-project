import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEXP_NAME } from 'src/app/modules/shared/constants/regexp';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  title = 'Checkout';

  productDetail!: any;
  shippingForm: FormGroup;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private fb: FormBuilder
  ) {
    this.shippingForm = this.fb.group({
      country: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_NAME),
        ]),
      ],
      firstname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_NAME),
        ]),
      ],
      lastname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_NAME),
        ]),
      ],
      address: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_NAME),
        ]),
      ],
      city: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_NAME),
        ]),
      ],
      other: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_NAME),
        ]),
      ],
      state: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_NAME),
        ]),
      ],
      pincode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_NAME),
        ]),
      ],
    });
  }
  ngOnInit(): void {
    this.getAllCart();
  }

  // Lấy tất cả sản phẩm được thêm vào giỏ hàng
  getAllCart() {
    this.authService.getCart().subscribe((res) => {
      this.productDetail = res;
      console.log(res);
    });
  }

  calculateTotalPrice(): number {
    return this.productDetail.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
  }

  // Thêm vào địa chỉ shipping
  registerUser() {
    
  }
}
