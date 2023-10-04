import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/console/models/product';
import { ProductService } from 'src/app/modules/console/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() grid = 3;
  col: any;
  selectedRating: number = 3;
  @Input() products: any;

  proId = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    console.log('product-card: ', this.products);
  }

  // Thêm vào yêu thích
  addToWishList(prodId: any) {
    console.log(this.proId._id);
    this.productService.addToWishList(prodId).subscribe((res) => {
      console.log(res);
    });
  }

  onRatingChanged(rating: number): void {
    this.selectedRating = rating;
    // Add any additional logic you need when the rating changes.
  }
}
