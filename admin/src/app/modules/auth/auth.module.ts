import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AuthRoutes } from './auth.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    AuthRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
  ],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}
