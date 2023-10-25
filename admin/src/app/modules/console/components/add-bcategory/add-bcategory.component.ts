import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BcategoryService } from '../../services/bcategory.service';

@Component({
  selector: 'app-add-bcategory',
  templateUrl: './add-bcategory.component.html',
  styleUrls: ['./add-bcategory.component.scss'],
})
export class AddBcategoryComponent {
  addBCategory: FormGroup;
  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private bCategoryService: BcategoryService,
    public fb: FormBuilder
  ) {
    this.addBCategory = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onAddBCategory() {
    this.bCategoryService.createBCategory(this.addBCategory.value).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
      this.addBCategory.reset();
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
