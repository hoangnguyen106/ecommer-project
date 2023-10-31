import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from '../../../services/blog.service';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { Router } from '@angular/router';
import { Blog } from '../../../models/blog';
import { DeleteBlogComponent } from '../delete-blog/delete-blog.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  blogs!: any;
  id!: string;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private blogService: BlogService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllBlogs();
  }

  loadAllBlogs() {
    this.blogService.getAllBlog().subscribe((res) => {
      this.blogs = res;
      console.log('product', res);
    });
  }

  onAddBlog() {
    const modalRef = this.modalService.open(AddBlogComponent, this.options);

    modalRef.result
      .then(() => {
        this.loadAllBlogs();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Cập nhật brand
  openEditBlog(item: Blog) {
    // Push params lên url
    this.router.navigate(['/console/list-blog'], {
      queryParams: { id: item._id },
    });

    // Open popup edit
    const modalRef = this.modalService.open(AddBlogComponent, this.options);
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllBlogs();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Xóa brand
  openDeleteBlog(item: Blog) {
    const modalRef = this.modalService.open(DeleteBlogComponent, this.options);
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllBlogs();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
