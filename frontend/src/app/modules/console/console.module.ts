import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConsoleRoutes } from './console.routing';
import { RouterModule } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { OurStoreComponent } from './components/our-store/our-store.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CompareProductComponent } from './components/compare-product/compare-product.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './components/refund-policy/refund-policy.component';
import { ShippingPolicyComponent } from './components/shipping-policy/shipping-policy.component';
import { TermandconditionComponent } from './components/termandcondition/termandcondition.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ClipboardModule } from 'ngx-clipboard';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContainerComponent } from './components/container/container.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthService } from './services/auth.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './services/product.service';
import { BlogService } from './services/blog.service';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    ExampleComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OurStoreComponent,
    BlogsComponent,
    CompareProductComponent,
    WishlistComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    SingleBlogComponent,
    PrivacyPolicyComponent,
    RefundPolicyComponent,
    ShippingPolicyComponent,
    TermandconditionComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent,
    ContainerComponent,
    PagenotfoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConsoleRoutes,
    SharedModule,
    CoreModule,
    NgxImageZoomModule,
    ClipboardModule,
    NgbAlertModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: [AuthService, ProductService, BlogService, ContactService],
})
export class ConsoleModule {}
