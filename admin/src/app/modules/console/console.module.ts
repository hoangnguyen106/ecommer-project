import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConsoleRoutes } from './console.routing';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guard/auth.guard';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { AddBcategoryComponent } from './components/add-bcategory/add-bcategory.component';
import { BcategoryListComponent } from './components/bcategory-list/bcategory-list.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { EnqiryListComponent } from './components/enqiry-list/enqiry-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/config/authconfig.interceptor';

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
