import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutes],
  exports: [RouterModule],
})
export class AuthModule {}
