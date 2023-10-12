import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'reset-password',
    component: ResetpasswordComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent,
  },
];

export const AuthRoutes = RouterModule.forChild(routes);
