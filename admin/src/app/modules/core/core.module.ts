import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoreRoutes } from './core.routing';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guard/auth.guard';

@NgModule({
  imports: [CommonModule, CoreRoutes],
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class CoreModule {}
