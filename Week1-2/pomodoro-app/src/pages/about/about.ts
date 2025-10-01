import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  messageUsForm! : FormGroup;

  constructor(private fb: FormBuilder) {
    this.messageUsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    });
  }
}
