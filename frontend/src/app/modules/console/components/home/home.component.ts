import { Component, OnInit } from '@angular/core';
import { services } from '../../data';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  services = services;
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
}
