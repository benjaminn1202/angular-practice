import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-update-component',
  imports: [ReactiveFormsModule, BlogUpdateComponent, RouterLink],
  templateUrl: './blog-update-component.html',
  styleUrl: './blog-update-component.css'
})
export class BlogUpdateComponent {
  updatePostForm: FormGroup;
  saving = false;
  id !: number;

  constructor(private router : Router, private route : ActivatedRoute, private blogService : BlogService, private fb : FormBuilder) {
    this.updatePostForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      content: ['', Validators.required],
    })
  }
  
  ngOnInit() {
    this.refreshUpdateBlogForm();
  }

  onUpdate() {
    if(this.updatePostForm.invalid) return;
    this.saving = true;

    this.blogService.getPosts().subscribe(posts => {
      const post = posts.find(p => p.id == this.id)

      if(post) {
        const updatedPost = {
          id: post.id,
          uuid: post.uuid,
          title: this.updatePostForm.value.title,
          subtitle: this.updatePostForm.value.subtitle,
          content: this.updatePostForm.value.content,
          created: post.created
        }
        
        this.blogService.updatePost(this.id, updatedPost).subscribe({
          next: () => this.saving = false,
          error: (err) => {
            this.saving = false;
            console.log(err);
          }
        });

        this.router.navigate(['/list']);
        this.blogService.triggerRefresh();
      }
    })
  }
  
  refreshUpdateBlogForm() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.blogService.getPosts().subscribe(posts => {
      const post = posts.find(p => p.id == this.id)

      if(post) {
        this.updatePostForm.patchValue({
          uuid: post.uuid,
          title: post.title,
          subtitle: post.subtitle,
          content: post.content,
          created: post.created,
        }) 
      }
    })
  }
}
