import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrandService } from '../../services/brand.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
})
export class AddBrandComponent {
  addBrand: FormGroup;
  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private brandService: BrandService,
    public fb: FormBuilder
  ) {
    this.addBrand = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onAddBrand() {
    this.brandService.createBrand(this.addBrand.value).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
      this.addBrand.reset();
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
