import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: any;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log('product', res);
    });
  }

  addNewProject() {
    const modalRef = this.modalService.open(AddProductComponent, this.options);

    modalRef.result
      .then((result: any) => {
        if (result) {
          setTimeout(() => {
            this.loadAllProducts();
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
