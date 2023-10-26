import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrandService } from '../../../services/brand.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Brand } from '../../../models/brand';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss'],
})
export class AddBrandComponent implements OnInit {
  addBrand!: FormGroup;
  id!: string | null;
  isAddMode: boolean = true;
  @Input() item!: Brand;

  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private brandService: BrandService,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit(): void {
    // Lấy params từ url
    this.id = this.route.snapshot.queryParams['id'];
    console.log('id =============>', this.id);

    this.addBrand = this.fb.group({
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
    this.brandService
      .getBrandById(id)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        this.addBrand.patchValue(res);
      });
  }

  // Select cách edit hay add
  onSubmit() {
    if (this.isAddMode) {
      this.onAddBrand();
    } else {
      this.onUpdateBrand();
    }
  }

  // Add brand
  onAddBrand() {
    this.brandService
      .createBrand(this.addBrand.value)
      .pipe(first())
      .subscribe((res) => {
        if (res != null) {
          this._NgbActiveModal.close();
        }
        this.addBrand.reset();
      });
  }

  // Update brand
  onUpdateBrand() {
    this.brandService
      .updateBrand(this.id, this.addBrand.value)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        if (res != null) {
          this.router.navigate(['/console/list-brand'], {
            queryParams: {},
          });
          this._NgbActiveModal.close();
        }
        this.addBrand.reset();
      });
  }

  // Đóng popup
  onClose() {
    this._NgbActiveModal.dismiss();
    this.router.navigate(['/console/list-brand'], {
      queryParams: {},
    });
  }
}
