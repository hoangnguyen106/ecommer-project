import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../core/components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { AddBrandComponent } from './components/brand/add-brand/add-brand.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { AddBlogComponent } from './components/blog/add-blog/add-blog.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { AddBcategoryComponent } from './components/bcategory/add-bcategory/add-bcategory.component';
import { BcategoryListComponent } from './components/bcategory/bcategory-list/bcategory-list.component';
import { AddColorComponent } from './components/color/add-color/add-color.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { EnqiryListComponent } from './components/enquiry/enqiry-list/enqiry-list.component';

import { CouponListComponent } from './components/coupon/coupon-list/coupon-list.component';
import { AddCouponComponent } from './components/coupon/add-coupon/add-coupon.component';
import { DeleteBrandComponent } from './components/brand/delete-brand/delete-brand.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { ViewOrderComponent } from './components/order/view-order/view-order.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'list-product',
        component: ProductListComponent,
      },
      {
        path: 'add-brand',
        component: AddBrandComponent,
      },
      {
        path: 'delete-brand',
        component: DeleteBrandComponent,
      },
      {
        path: 'list-brand',
        component: BrandListComponent,
      },
      {
        path: 'list-brand/:id',
        component: BrandListComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'list-category',
        component: CategoryListComponent,
      },
      {
        path: 'add-color',
        component: AddColorComponent,
      },
      {
        path: 'list-color',
        component: ColorListComponent,
      },
      {
        path: 'add-blog',
        component: AddBlogComponent,
      },
      {
        path: 'list-blog',
        component: BlogListComponent,
      },
      {
        path: 'add-bcategory',
        component: AddBcategoryComponent,
      },
      {
        path: 'list-bcategory',
        component: BcategoryListComponent,
      },
      {
        path: 'list-enquiry',
        component: EnqiryListComponent,
      },
      {
        path: 'list-order',
        component: OrderListComponent,
      },
      {
        path: 'list-coupon',
        component: CouponListComponent,
      },
      {
        path: 'add-coupon',
        component: AddCouponComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
];

export const ConsoleRoutes = RouterModule.forChild(routes);
