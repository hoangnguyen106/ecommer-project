import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from '../../services/blog.service';
import { AddBlogComponent } from '../add-blog/add-blog.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  blogs!: any;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private blogService: BlogService,
    private modalService: NgbModal
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

  addNewProject() {
    const modalRef = this.modalService.open(AddBlogComponent, this.options);

    modalRef.result
      .then((result: any) => {
        if (result) {
          setTimeout(() => {
            this.loadAllBlogs();
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
