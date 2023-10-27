import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ColorService } from '../../../services/color.service';
import { Color } from '../../../models/color';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.scss'],
})
export class AddColorComponent implements OnInit {
  addColor!: FormGroup;
  id!: string | null;
  isAddMode: boolean = true;
  @Input() item!: Color;

  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private colorService: ColorService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Lấy params từ url
    this.id = this.route.snapshot.queryParams['id'];

    this.addColor = this.fb.group({
      title: ['', Validators.required],
    });

    // Check params có tồn tại hay không
    if (this.id === undefined) {
      this.isAddMode = true;
    } else {
      this.loadData(this.item._id);
      this.isAddMode = false;
    }
  }
  // Lấy ra dữ liệu từng color theo id
  loadData(id: any) {
    this.colorService
      .getColorById(id)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        this.addColor.patchValue(res);
      });
  }

  // Select cách edit hay add
  onSubmit() {
    if (this.isAddMode) {
      this.onAddColor();
    } else {
      this.onUpdateColor();
    }
  }

  // Add color
  onAddColor() {
    this.colorService.createColor(this.addColor.value).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
      this.addColor.reset();
    });
  }

  // Update brand
  onUpdateColor() {
    this.colorService
      .updateColor(this.id, this.addColor.value)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        if (res != null) {
          this.router.navigate(['/console/list-color'], {
            queryParams: {},
          });
          this._NgbActiveModal.close();
        }
        this.addColor.reset();
      });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
    this.router.navigate(['/console/list-color'], {
      queryParams: {},
    });
  }
}
