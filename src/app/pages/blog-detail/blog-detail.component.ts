import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent implements OnInit {
  blog: any;
  comments: string[] = [];
  newComment = '';

addComment() {
  if (this.newComment.trim()) {
    this.comments.push(this.newComment.trim());
    this.newComment = '';
  }
}

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.blog = this.blogService.getBlogById(id);
    
  }
}
