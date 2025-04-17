import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  blogs:any=[];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }
}