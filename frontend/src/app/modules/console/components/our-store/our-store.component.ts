import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-our-store',
  templateUrl: './our-store.component.html',
  styleUrls: ['./our-store.component.scss'],
})
export class OurStoreComponent implements OnInit {
  title = 'Our Store';
  selectedRating: number = 3;
  grid: number = 3;
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.loadProject();
  }

  // Lấy tất cả sản phẩm
  loadProject() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log(res);
    });
  }

  //Handle vote sao
  onRatingChanged(rating: number): void {
    this.selectedRating = rating;
    // Add any additional logic you need when the rating changes.
  }
  // Chia layout theo grid
  onGridChanged(grid: number) {
    this.grid = grid;
    console.log(grid);
  }
}
