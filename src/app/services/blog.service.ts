import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>('/assets/blogs.json');
  }

  getBlogById(id: number): Observable<any> {
    return this.getBlogs().pipe(
      map(blogs => blogs.find(b => b.id === id))
    );
  }
}
