import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { AuthService } from 'src/app/modules/console/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  productDetail!: any;
  constructor(private authService: AuthService) {}


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

  // total sub
  calculateTotalPrice(): number {
    return this.productDetail.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
  }
}
