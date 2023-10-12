import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../core/components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductListComponent } from './components/product-list/product-list.component';

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
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
];

export const ConsoleRoutes = RouterModule.forChild(routes);
