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
    private clipboardService: ClipboardService
  ) {}

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
      },
    });
  }

  // Thêm vào giỏ hàng
  uploadCart() {
    this.authService.addToCart(this.singlePageProduct).subscribe((res) => {});
  }
}
