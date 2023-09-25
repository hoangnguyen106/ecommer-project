import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/console/models/product';
import { ProductService } from 'src/app/modules/console/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() grid = 3;
  col: any;
  selectedRating: number = 3;
  @Input() products: any;

  constructor(private productService: ProductService) {}

  // Thêm vào yêu thích
  addToWishList(prodId: string) {
    console.log(prodId);
    this.productService.addToWishList(prodId).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  onRatingChanged(rating: number): void {
    this.selectedRating = rating;
    // Add any additional logic you need when the rating changes.
  }
}
