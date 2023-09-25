import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  title = 'Cart';

  productDetail!: any;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}
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

  // Xóa product ra khỏi giỏ hàng
  deleteProductFromCart(id: any) {
    console.log(id);
    this.authService.deleteProductFromCart(id).subscribe((res) => {
      this.getAllCart();
      this.toastrService.success('Delete cart successfully !!!');
    });
  }
  // Cập nhật product quantity trong giỏ hàng
  updateProductFromCart(cartDetail: any) {
    console.log(cartDetail);
    this.authService.updateProductFromCart(cartDetail).subscribe((res) => {
      console.log(res);
    });
  }
}
