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

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, ConsoleRoutes],
  declarations: [DashboardComponent, CustomersComponent, ProductListComponent],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class ConsoleModule {}
