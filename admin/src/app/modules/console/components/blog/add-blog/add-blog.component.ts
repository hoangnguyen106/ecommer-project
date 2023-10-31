import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BcategoryService } from '../../../services/bcategory.service';
import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent implements OnInit {
  addBlog: FormGroup;
  bCategory: any;
  loadImage: any;

  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private blogService: BlogService,
    private bCategoryService: BcategoryService,
    private uploadService: UploadService,
    public fb: FormBuilder
  ) {
    this.addBlog = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      images: this.fb.array([]),
    });
  }
  ngOnInit(): void {
    this.getAllBCategory();
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

  onAddBlog() {
    this.blogService.createBlog(this.addBlog.value).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
      this.addBlog.reset();
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
