import { Component, Input } from '@angular/core';
import { Color } from '../../../models/color';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorService } from '../../../services/color.service';

@Component({
  selector: 'app-delete-color',
  templateUrl: './delete-color.component.html',
  styleUrls: ['./delete-color.component.scss'],
})
export class DeleteColorComponent {
  @Input() item!: Color;
  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private colorService: ColorService
  ) {}

  confirmDelete() {
    this.colorService.deleteColor(this.item._id).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
