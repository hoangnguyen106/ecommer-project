import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss'],
})
export class SingleBlogComponent implements OnInit {
  title = 'Single Blog';

  id: any;
  singlePageBlog: any;

  constructor(private singleBlog: BlogService, private route: ActivatedRoute) {}
  // ngAfterViewInit(): void {
  //   this.loadSinglePage();
  // }
  ngOnInit(): void {
    this.loadSinglePage();
  }

  loadSinglePage() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.singleBlog.getBlogById(this.id).subscribe({
      next: (res) => {
        this.singlePageBlog = res;
      },
    });
  }
}
