import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../../services/category.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Category } from '../../../models/category';
import { Router } from '@angular/router';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  categories!: any;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadAllCategory();
  }
  // Load all category
  loadAllCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.categories = res;
      console.log('category', res);
    });
  }

  // THêm mới category
  addNewCategory() {
    const modalRef = this.modalService.open(AddCategoryComponent, this.options);

    modalRef.result
      .then(() => {
        this.loadAllCategory();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Cập nhật category
  openEditCategory(item: Category) {
    // Push params lên url
    this.router.navigate(['/console/list-category'], {
      queryParams: { id: item._id },
    });

    // Open popup edit
    const modalRef = this.modalService.open(AddCategoryComponent, this.options);
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllCategory();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Xóa category
  openDeleteCategory(item: Category) {
    const modalRef = this.modalService.open(
      DeleteCategoryComponent,
      this.options
    );
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllCategory();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
