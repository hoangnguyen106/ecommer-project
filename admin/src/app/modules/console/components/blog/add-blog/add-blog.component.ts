import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BcategoryService } from '../../../services/bcategory.service';
import { UploadService } from '../../../services/upload.service';
import { Blog } from '../../../models/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent implements OnInit {
  addBlog!: FormGroup;
  bCategory: any;
  loadImage: any;
  
  id!: string | null;
  isAddMode: boolean = true;
  @Input() item!: Blog;

  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private blogService: BlogService,
    private bCategoryService: BcategoryService,
    private uploadService: UploadService,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getAllBCategory();
    // Lấy params từ url
    this.id = this.route.snapshot.queryParams['id'];
    console.log('id =============>', this.id);

    this.addBlog = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      images: this.fb.array([]),
    });

    // Check params có tồn tại hay không
    if (this.id === undefined) {
      this.isAddMode = true;
    } else {
      this.loadData(this.item._id);
      this.isAddMode = false;
    }
  }

  // Lấy ra dữ liệu từng blog theo id
  loadData(id: any) {
    this.blogService
      .getBlogById(id)
      .pipe(first())
      .subscribe((res) => {
        console.log('data brand by id', res);
        this.addBlog.patchValue(res);
      });
  }

  getAllBCategory() {
    this.bCategoryService.getAllBcategory().subscribe((res) => {
      this.bCategory = res;
    });
  }

  // Tạo mới item làm avatar để push
  createItem(data: any): FormGroup {
    console.log('data', data);
    return this.fb.group(data);
  }

  // Lấy ra mảng images cần thêm vào
  get photos(): FormArray {
    return this.addBlog.get('images') as FormArray;
  }

  // File upload image change
  onFileChange(event: any) {
    let files = event.target.files;

    console.log(files);

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    this.uploadService.uploadImage(formData).subscribe((res) => {
      this.loadImage = res;
      Object.values(res).forEach((data: any) => {
        this.photos.push(
          this.createItem({
            url: data.url,
            public_id: data.public_id,
          })
        );
      });

      console.log('Upload image', res);
    });
  }

  deleteImage(id: any) {
    console.log(id);
    this.uploadService.deleteImage(id).subscribe((res) => {
      console.log(res);
    });
  }

  // Select cách edit hay add
  onSubmit() {
    if (this.isAddMode) {
      this.onAddBlog();
    } else {
      this.onUpdateBlog();
    }
  }

  onAddBlog() {
    this.blogService.createBlog(this.addBlog.value).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
      this.addBlog.reset();
    });
  }

  // Update brand
  onUpdateBlog() {
    this.blogService
      .updateBlog(this.id, this.addBlog.value)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        if (res != null) {
          this.router.navigate(['/console/list-blog'], {
            queryParams: {},
          });
          this._NgbActiveModal.close();
        }
        this.addBlog.reset();
      });
  }

  // Đóng popup
  onClose() {
    this._NgbActiveModal.dismiss();
    this.router.navigate(['/console/list-blog'], {
      queryParams: {},
    });
  }
}
