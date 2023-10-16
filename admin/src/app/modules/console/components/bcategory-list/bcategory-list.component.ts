import { Component } from '@angular/core';
import { BcategoryService } from '../../services/bcategory.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddBcategoryComponent } from '../add-bcategory/add-bcategory.component';

@Component({
  selector: 'app-bcategory-list',
  templateUrl: './bcategory-list.component.html',
  styleUrls: ['./bcategory-list.component.scss'],
})
export class BcategoryListComponent {
  bcategories!: any;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private bCategoryService: BcategoryService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.loadAllBcategory();
  }

  loadAllBcategory() {
    this.bCategoryService.getAllBcategory().subscribe((res) => {
      this.bcategories = res;
      console.log('bcategory', res);
    });
  }

  addNewProject() {
    const modalRef = this.modalService.open(
      AddBcategoryComponent,
      this.options
    );

    modalRef.result
      .then((result: any) => {
        if (result) {
          setTimeout(() => {
            this.loadAllBcategory();
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
