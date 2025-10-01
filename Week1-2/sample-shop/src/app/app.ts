import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavigationBar } from "./components/navigation-bar/navigation-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('');

  currentUrl = signal('');

  constructor(private router:Router) {
    this.router.events.subscribe(() => {
      this.currentUrl.set(this.router.url);
    });
  }
}