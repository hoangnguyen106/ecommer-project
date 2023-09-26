import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
} from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { Cart } from '../../models/cart';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements AfterViewInit, OnInit {
  title = 'Product Detail';
  review = 0;
  id: any;
  singlePageProduct: any;
  addToCart: FormGroup;
  colorPro: any;

  myThumbnail = 'https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg';
  myFullresImage =
    'https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg';

  selectedRating: number = 3;
  onRatingChanged(rating: number): void {
    this.selectedRating = rating;
    // Add any additional logic you need when the rating changes.
  }

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private elementRef: ElementRef,
    private clipboardService: ClipboardService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) {
    this.addToCart = this.fb.group({
      productId: [''],
      color: ['', Validators.required],
      price: [''],
      quantity: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadSinglePage();
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = this.elementRef.nativeElement.querySelector(
          '#' + fragment
        );
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  copyLinkToClipboard() {
    this.clipboardService.copyFromContent(window.location.href);
  }
  // Load chi tiết sản phẩm theo id
  loadSinglePage() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.productService.getProductById(this.id).subscribe({
      next: (res) => {
        this.singlePageProduct = res;
        this.addToCart.patchValue({
          productId: this.singlePageProduct._id,
          price: this.singlePageProduct.price,
        });
      },
    });
  }

  // Lấy id color
  getColorId(data: string) {
    this.colorPro = data;
    this.addToCart.patchValue({
      color: this.colorPro,
    });
    console.log(this.colorPro);
  }

  // Thêm vào giỏ hàng
  uploadCart() {
    this.authService.addToCart(this.addToCart.value).subscribe({
      next: (res) => {
        this.toastrService.success('Add cart successfully !!!');
        this.router.navigate(['/console/cart']);
        console.log(res);
      },
      error: (err) => {
        this.toastrService.error('Please choose color and quantity !!!');
      },
    });
  }
}
