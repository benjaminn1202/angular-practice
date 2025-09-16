import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink, RouterOutlet, NavigationBar],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})
export class NavigationBar {

}