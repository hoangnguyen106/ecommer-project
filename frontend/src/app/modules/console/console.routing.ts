import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../core/components/main/main.component';
import { ExampleComponent } from './components/example/example.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { OurStoreComponent } from './components/our-store/our-store.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CompareProductComponent } from './components/compare-product/compare-product.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './components/refund-policy/refund-policy.component';
import { ShippingPolicyComponent } from './components/shipping-policy/shipping-policy.component';
import { TermandconditionComponent } from './components/termandcondition/termandcondition.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'product',
        children: [
          {
            path: '',
            component: OurStoreComponent,
          },
          {
            path: ':id',
            component: SingleProductComponent,
          },
        ],
      },
      {
        path: 'blogs',
        children: [
          {
            path: '',
            component: BlogsComponent,
          },
          {
            path: ':id',
            component: SingleBlogComponent,
          },
        ],
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my-orders',
        component: OrderComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my-profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'compare-product',
        component: CompareProductComponent,
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotpasswordComponent,
      },
      {
        path: 'reset-password/:token',
        component: ResetPasswordComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'refund-policy',
        component: RefundPolicyComponent,
      },
      {
        path: 'shipping-policy',
        component: ShippingPolicyComponent,
      },
      {
        path: 'term-conditions',
        component: TermandconditionComponent,
      },
      {
        path: 'example-document',
        component: ExampleComponent,
      },
      { path: '**', component: PagenotfoundComponent },
    ],
  },
];

export const ConsoleRoutes = RouterModule.forChild(routes);
