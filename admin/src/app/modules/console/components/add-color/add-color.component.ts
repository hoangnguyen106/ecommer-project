import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.scss'],
})
export class AddColorComponent {
  addColor: FormGroup;
  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private colorService: ColorService,
    public fb: FormBuilder
  ) {
    this.addColor = this.fb.group({
      title: ['', Validators.required],
    });
  }

  onAddColor() {
    this.colorService.createColor(this.addColor.value).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
      this.addColor.reset();
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
