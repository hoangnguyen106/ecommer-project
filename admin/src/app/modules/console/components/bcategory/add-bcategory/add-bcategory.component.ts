import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BcategoryService } from '../../../services/bcategory.service';
import { Bcategory } from '../../../models/bcategory';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-bcategory',
  templateUrl: './add-bcategory.component.html',
  styleUrls: ['./add-bcategory.component.scss'],
})
export class AddBcategoryComponent implements OnInit {
  addBCategory!: FormGroup;

  id!: string | null;
  isAddMode: boolean = true;
  @Input() item!: Bcategory;

  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private bCategoryService: BcategoryService,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit(): void {
    // Lấy params từ url
    this.id = this.route.snapshot.queryParams['id'];
    console.log('id =============>', this.id);

    this.addBCategory = this.fb.group({
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

  // Lấy ra dữ liệu từng brand theo id
  loadData(id: any) {
    this.bCategoryService
      .getBCategoryById(id)
      .pipe(first())
      .subscribe((res) => {
        console.log('data brand by id', res);
        this.addBCategory.patchValue(res);
      });
  }

  // Select cách edit hay add
  onSubmit() {
    if (this.isAddMode) {
      this.onAddBcategory();
    } else {
      this.onUpdateBcategory();
    }
  }

  onAddBcategory() {
    this.bCategoryService
      .createBCategory(this.addBCategory.value)
      .subscribe((res) => {
        if (res != null) {
          this._NgbActiveModal.close();
        }
        this.addBCategory.reset();
      });
  }

  // Update Bcategory
  onUpdateBcategory() {
    this.bCategoryService
      .updateBCategory(this.id, this.addBCategory.value)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        if (res != null) {
          this.router.navigate(['/console/list-bcategory'], {
            queryParams: {},
          });
          this._NgbActiveModal.close();
        }
        this.addBCategory.reset();
      });
  }

  // Đóng popup
  onClose() {
    this._NgbActiveModal.dismiss();
    this.router.navigate(['/console/list-bcategory'], {
      queryParams: {},
    });
  }
}
