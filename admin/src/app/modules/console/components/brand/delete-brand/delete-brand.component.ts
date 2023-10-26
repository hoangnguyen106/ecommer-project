import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrandService } from '../../../services/brand.service';
import { Brand } from '../../../models/brand';

@Component({
  selector: 'app-delete-brand',
  templateUrl: './delete-brand.component.html',
  styleUrls: ['./delete-brand.component.scss'],
})
export class DeleteBrandComponent {
  @Input() item!: Brand;
  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private brandService: BrandService
  ) {}

  confirmDelete() {
    this.brandService.deleteBrand(this.item._id).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
