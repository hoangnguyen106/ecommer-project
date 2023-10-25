import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
  addCategory: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private _NgbActiveModal: NgbActiveModal,
    public fb: FormBuilder
  ) {
    this.addCategory = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onAddCategory() {
    this.categoryService
      .createCategory(this.addCategory.value)
      .subscribe((res) => {
        if (res != null) {
          this._NgbActiveModal.close();
        }
        this.addCategory.reset();
      });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
