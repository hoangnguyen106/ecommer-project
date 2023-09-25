import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  title = 'Blogs';

  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}
  ngOnInit(): void {
    this.loadProduct();
  }

  // Lấy tất cả sản phẩm
  loadProduct() {
    this.blogService.getAllBlogs().subscribe((res) => {
      this.blogs = res;
      console.log(res);
    });
  }
}
