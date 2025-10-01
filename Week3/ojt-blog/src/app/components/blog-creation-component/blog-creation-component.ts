import { Component } from '@angular/core';
import { BlogModel, createBlogModel } from '../../models/blog-model';
import { Observable } from 'rxjs';
import { BlogService } from '../../services/blog-service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-creation-component',
  imports: [ReactiveFormsModule],
  templateUrl: './blog-creation-component.html',
  styleUrl: './blog-creation-component.css'
})
export class BlogCreationComponent {
  addPostForm: FormGroup;
  saving = false;

  constructor(private blogService : BlogService, private fb : FormBuilder) {
    this.addPostForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      content: ['', Validators.required],
    })
  }

  onCreate() {

    if(this.addPostForm.valid) {
      this.saving = true;
      // let blogModels: BlogModel[] = [];

      this.blogService.getPosts().subscribe({
        next: (data) => {
          const lastId = data[data.length - 1].id;
          const newPost = createBlogModel(lastId + 1, this.addPostForm.value.title, this.addPostForm.value.subtitle, this.addPostForm.value.content);
          this.blogService.createPost(newPost).subscribe({
            next: () => this.saving = false,
            error: () => this.saving = false
          })
        },
        error: (err) => console.error('Error code ', err)
      })
    }
  }
}
