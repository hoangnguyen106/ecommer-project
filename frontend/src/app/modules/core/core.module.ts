import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreRoutes } from './core.routing';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, CoreRoutes],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
})
export class CoreModule {}
