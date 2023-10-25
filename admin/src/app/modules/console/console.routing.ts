import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../core/components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { AddBcategoryComponent } from './components/add-bcategory/add-bcategory.component';
import { BcategoryListComponent } from './components/bcategory-list/bcategory-list.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { EnqiryListComponent } from './components/enqiry-list/enqiry-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';

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
        path: 'list-brand',
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
