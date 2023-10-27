import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  addCategory!: FormGroup;
  id!: string | null;
  isAddMode: boolean = true;
  @Input() item!: Category;

  constructor(
    private categoryService: CategoryService,
    private _NgbActiveModal: NgbActiveModal,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Lấy params từ url
    this.id = this.route.snapshot.queryParams['id'];

    this.addCategory = this.fb.group({
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

  // Lấy ra dữ liệu từng category theo id
  loadData(id: any) {
    this.categoryService
      .getCategoryById(id)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        this.addCategory.patchValue(res);
      });
  }

  // Select cách edit hay add
  onSubmit() {
    if (this.isAddMode) {
      this.onAddCategory();
    } else {
      this.onUpdateCategory();
    }
  }

  onAddCategory() {
    this.categoryService
      .createCategory(this.addCategory.value)
      .pipe(first())
      .subscribe((res) => {
        if (res != null) {
          this._NgbActiveModal.close();
        }
        this.addCategory.reset();
      });
  }

  // Update brand
  onUpdateCategory() {
    this.categoryService
      .updateCategory(this.id, this.addCategory.value)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        if (res != null) {
          this.router.navigate(['/console/list-category'], {
            queryParams: {},
          });
          this._NgbActiveModal.close();
        }
        this.addCategory.reset();
      });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
    this.router.navigate(['/console/list-category'], {
      queryParams: {},
    });
  }
}
