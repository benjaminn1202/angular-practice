import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})
export class NavigationBar {
  constructor(public router: Router) {}
}