import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { SpecialProductComponent } from './components/special-product/special-product.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
@NgModule({
  declarations: [
    BlogCardComponent,
    ProductCardComponent,
    StarRatingComponent,
    SpecialProductComponent,
    BreadCrumbComponent,
    ColorComponent,
    CustomInputComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BlogCardComponent,
    ProductCardComponent,
    SpecialProductComponent,
    BreadCrumbComponent,
    StarRatingComponent,
    ColorComponent,
  ],
})
export class SharedModule {}
