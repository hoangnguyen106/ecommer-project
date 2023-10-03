import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  title = 'Wishlist';

  wishlistItems: any;

  constructor(
    private authService: AuthService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getUserWishList();
  }

  getUserWishList() {
    this.authService.getUserWishList().subscribe((res) => {
      this.wishlistItems = res;
      console.log(this.wishlistItems);
    });
  }

  removeFromWishList(id: any) {
    this.productService.addToWishList(id).subscribe((res) => {
      setTimeout(() => {
        this.getUserWishList();
      }, 200);
    });
  }
}
