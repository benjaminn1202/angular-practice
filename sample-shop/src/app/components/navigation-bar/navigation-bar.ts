import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})

export class NavigationBar {
  
}