import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConsoleRoutes } from './console.routing';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guard/auth.guard';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { AddBrandComponent } from './components/brand/add-brand/add-brand.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { AddBlogComponent } from './components/blog/add-blog/add-blog.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { AddBcategoryComponent } from './components/bcategory/add-bcategory/add-bcategory.component';
import { BcategoryListComponent } from './components/bcategory/bcategory-list/bcategory-list.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { AddColorComponent } from './components/color/add-color/add-color.component';
import { EnqiryListComponent } from './components/enquiry/enqiry-list/enqiry-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/config/authconfig.interceptor';
import { CouponListComponent } from './components/coupon/coupon-list/coupon-list.component';
import { AddCouponComponent } from './components/coupon/add-coupon/add-coupon.component';
import { DeleteBrandComponent } from './components/brand/delete-brand/delete-brand.component';
import { DeleteCategoryComponent } from './components/category/delete-category/delete-category.component';
import { DeleteColorComponent } from './components/color/delete-color/delete-color.component';
import { DeleteCouponComponent } from './components/coupon/delete-coupon/delete-coupon.component';
import { DeleteBcategoryComponent } from './components/bcategory/delete-bcategory/delete-bcategory.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { ViewEnquiryComponent } from './components/enquiry/view-enquiry/view-enquiry.component';
import { DeleteEnquiryComponent } from './components/enquiry/delete-enquiry/delete-enquiry.component';
import { ViewOrderComponent } from './components/order/view-order/view-order.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ConsoleRoutes,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    CustomersComponent,
    ProductListComponent,
    BrandListComponent,
    AddBrandComponent,
    CategoryListComponent,
    AddCategoryComponent,
    AddProductComponent,
    AddBlogComponent,
    BlogListComponent,
    AddBcategoryComponent,
    BcategoryListComponent,
    ColorListComponent,
    AddColorComponent,
    EnqiryListComponent,
    OrderListComponent,
    CouponListComponent,
    AddCouponComponent,
    DeleteBrandComponent,
    DeleteCategoryComponent,
    DeleteColorComponent,
    DeleteCouponComponent,
    DeleteBcategoryComponent,
    DeleteBlogComponent,
    ViewEnquiryComponent,
    DeleteEnquiryComponent,
    ViewOrderComponent,
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
})
export class ConsoleModule {}
