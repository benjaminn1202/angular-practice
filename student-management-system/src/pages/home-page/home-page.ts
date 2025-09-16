import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet, Router, RouterLink } from '@angular/router';
import { NavigationBar } from '../navigation-bar/navigation-bar';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, RouterOutlet, NavigationBar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})

export class HomePage {
  currentUrl = signal('');

  constructor(private router:Router) {
    this.router.events.subscribe(() => {
      this.currentUrl.set(this.router.url);
    });
  }
}
