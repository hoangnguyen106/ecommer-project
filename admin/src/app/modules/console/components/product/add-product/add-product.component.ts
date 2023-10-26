import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../../services/product.service';
import { ColorService } from '../../../services/color.service';
import { BrandService } from '../../../services/brand.service';
import { CategoryService } from '../../../services/category.service';
import { UploadService } from '../../../services/upload.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup;
  loadImage: any;
  colors: any;
  brands: any;
  categories: any;

  constructor(
    private productService: ProductService,
    private uploadService: UploadService,
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
      brand: ['Samsung', Validators.required],
      category: ['Apple', Validators.required],
      color: [[], Validators.required],
      quantity: ['', Validators.required],
      images: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.getAllColor();
    this.getAllBrand();
    this.getAllCategory();
  }
  // Lấy ra tất cả color
  getAllColor() {
    this.colorService.getAllColor().subscribe((res) => {
      console.log(res);
      this.colors = res;
    });
  }
  //  Lấy ra tất cả brand
  getAllBrand() {
    this.brandService.getAllBrand().subscribe((res) => {
      console.log(res);
      this.brands = res;
    });
  }

  // Lấy ra tất cả category
  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      console.log(res);
      this.categories = res;
    });
  }

  // Tạo mới item làm avatar để push
  createItem(data: any): FormGroup {
    console.log('data', data);
    return this.fb.group(data);
  }

  // Lấy ra mảng images cần thêm vào
  get photos(): FormArray {
    return this.addProduct.get('images') as FormArray;
  }

  // File upload image change
  onFileChange(event: any) {
    let files = event.target.files;

    console.log(files);

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    this.uploadService.uploadImage(formData).subscribe((res) => {
      this.loadImage = res;
      Object.values(res).forEach((data: any) => {
        this.photos.push(
          this.createItem({
            url: data.url,
            public_id: data.public_id,
          })
        );
      });

      console.log('Upload image', res);
    });
  }

  deleteImage(id: any) {
    console.log(id);
    this.uploadService.deleteImage(id).subscribe((res) => {
      console.log(res);
    });
  }

  // Thêm sản phẩm
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
