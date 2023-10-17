import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
import { ColorService } from '../../services/color.service';
import { BrandService } from '../../services/brand.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup;
  colors: any;
  brands: any;
  categories: any;

  constructor(
    private productService: ProductService,
    private _NgbActiveModal: NgbActiveModal,
    public fb: FormBuilder,
    private colorService: ColorService,
    private brandService: BrandService,
    private categoryService: CategoryService
  ) {
    this.addProduct = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      brand: ['Select brand', Validators.required],
      category: ['Select category', Validators.required],
      color: [[], Validators.required],
      quantity: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllColor();
    this.getAllBrand();
    this.getAllCategory();
  }

  getAllColor() {
    this.colorService.getAllColor().subscribe((res) => {
      console.log(res);
      this.colors = res;
    });
  }

  getAllBrand() {
    this.brandService.getAllBrand().subscribe((res) => {
      console.log(res);
      this.brands = res;
    });
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      console.log(res);
      this.categories = res;
    });
  }

  onAddProduct() {
    this.productService
      .createProduct(this.addProduct.value)
      .subscribe((res) => {
        console.log(res);
        if (res != null) {
          this._NgbActiveModal.close();
        }
        this.addProduct.reset();
      });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
