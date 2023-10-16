import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableListComponent } from './components/table-list/table-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginationComponent, TableListComponent],
  exports: [TableListComponent, PaginationComponent],
})
export class SharedModule {}
