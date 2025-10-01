import { Component } from '@angular/core';
import { BlogModel } from '../../models/blog-model';
import { Observable } from 'rxjs';
import { BlogService } from '../../services/blog-service';
import { BlogUpdateComponent } from '../blog-update-component/blog-update-component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SortByDatePipePipe } from '../../pipes/sort-by-date-pipe-pipe';

@Component({
  selector: 'app-blog-list-component',
  imports: [RouterOutlet, RouterLink, DatePipe, SortByDatePipePipe],
  templateUrl: './blog-list-component.html',
  styleUrl: './blog-list-component.css'
})
export class BlogListComponent {
  blogModels: BlogModel[] = []

  constructor(private blogService : BlogService){}

  ngOnInit(): void {
    this.refresh();
    this.blogService.refresh$.subscribe(() => {
      this.refresh();
    });
  }

  onDelete(id : number) {
    this.blogService.deletePost(id).subscribe({
      next: () => this.refresh(),
      error: err => console.error('Delete failed:', err)
    });
  }

  refresh() {
    this.blogService.getPosts().subscribe({
      next: (data) => this.blogModels = data,
      error: (err) => console.error('Error code ', err)
    })
  }
}
