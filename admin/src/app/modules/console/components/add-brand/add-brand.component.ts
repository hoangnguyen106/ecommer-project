import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
})
export class AddBrandComponent {
  constructor(private _NgbActiveModal: NgbActiveModal) {}

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
