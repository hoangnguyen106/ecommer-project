import { Component } from '@angular/core';
import { BcategoryService } from '../../../services/bcategory.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddBcategoryComponent } from '../add-bcategory/add-bcategory.component';
import { Bcategory } from '../../../models/bcategory';
import { Router } from '@angular/router';
import { DeleteBcategoryComponent } from '../delete-bcategory/delete-bcategory.component';

@Component({
  selector: 'app-bcategory-list',
  templateUrl: './bcategory-list.component.html',
  styleUrls: ['./bcategory-list.component.scss'],
})
export class BcategoryListComponent {
  bcategories!: any;
  id!: string;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private bCategoryService: BcategoryService,
    private modalService: NgbModal,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadAllBcategory();
  }
  // Lấy ra all data category
  loadAllBcategory() {
    this.bCategoryService.getAllBcategory().subscribe((res) => {
      this.bcategories = res;
      console.log('bcategory', res);
    });
  }
  // Thêm mới Bcategory
  openAddBcategory() {
    const modalRef = this.modalService.open(
      AddBcategoryComponent,
      this.options
    );

    modalRef.result
      .then(() => {
        this.loadAllBcategory();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  openEditBcategory(item: Bcategory) {
    // Push params lên url
    this.router.navigate(['/console/list-bcategory'], {
      queryParams: { id: item._id },
    });

    // Open popup edit
    const modalRef = this.modalService.open(
      AddBcategoryComponent,
      this.options
    );
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllBcategory();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Xóa Bcategory
  openDeleteBcategory(item: Bcategory) {
    const modalRef = this.modalService.open(
      DeleteBcategoryComponent,
      this.options
    );
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllBcategory();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
