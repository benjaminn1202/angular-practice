import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { BlogModel } from '../models/blog-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  private apiUrl = 'http://localhost:3000/blog-models';
  
  private refreshSource = new Subject<void>();
  refresh$ = this.refreshSource.asObservable();

  constructor(private http : HttpClient) {}

  triggerRefresh() {
    this.refreshSource.next();
  }

  getPosts(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>(this.apiUrl)
  }

  createPost(post: BlogModel): Observable<BlogModel> {
    return this.http.post<BlogModel>(this.apiUrl, post)
  }

  updatePost(id: number, post: Partial<BlogModel>): Observable<BlogModel> {
    return this.http.put<BlogModel>(`${this.apiUrl}/${id}`, post)
  }

  deletePost(id : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}