import { Component, Input } from '@angular/core';
import { Bcategory } from '../../../models/bcategory';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BcategoryService } from '../../../services/bcategory.service';

@Component({
  selector: 'app-delete-bcategory',
  templateUrl: './delete-bcategory.component.html',
  styleUrls: ['./delete-bcategory.component.scss'],
})
export class DeleteBcategoryComponent {
  @Input() item!: Bcategory;
  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private bcategoryService: BcategoryService
  ) {}

  confirmDelete() {
    this.bcategoryService.deleteBCategory(this.item._id).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
