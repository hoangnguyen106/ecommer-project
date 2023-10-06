import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-our-store',
  templateUrl: './our-store.component.html',
  styleUrls: ['./our-store.component.scss'],
})
export class OurStoreComponent implements OnInit {
  title = 'Our Store';
  selectedRating: number = 3;
  grid: number = 3;
  filter: FormGroup;
  products: Product[] = [];
  brands: any[] = [];
  category: any[] = [];
  tags: any[] = [];
  colors: any[] = [];

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.filter = this.fb.group({
      category: [''],
      brand: [''],
      tag: [''],
    });
  }
  ngOnInit(): void {
    this.loadProduct();
  }

  // Lấy tất cả sản phẩm
  loadProduct() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        this.brands.push(element.brand);
        this.category.push(element.category);
        this.tags.push(element.tags);
      }
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

  // Count số lượng sản phẩm
  getCount(id: string) {
    return this.products.filter((o) => o._id === id).length;
  }

  // filter brand, category, tag
  filterProduct(){
    
  }
}
