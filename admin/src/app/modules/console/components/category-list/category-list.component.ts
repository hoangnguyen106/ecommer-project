import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../services/category.service';
import { AddCategoryComponent } from '../add-category/add-category.component';

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
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.loadAllCategory();
  }

  loadAllCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.categories = res;
      console.log('category', res);
    });
  }

  addNewProject() {
    const modalRef = this.modalService.open(AddCategoryComponent, this.options);

    modalRef.result
      .then((result: any) => {
        if (result) {
          setTimeout(() => {
            this.loadAllCategory();
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
