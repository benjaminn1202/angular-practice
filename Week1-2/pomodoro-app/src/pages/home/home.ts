import { Component, OnInit, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from "@angular/router";
import { filter } from 'rxjs';
import { Howl } from 'howler';

@Component({
  selector: 'app-home',
  imports: [NavigationBar, RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  timerTex = document.querySelector('#timerText');

  isTimerRunning = false;
  timerMode = 'pomodoro'
  remaining = 0;
  private interval: any;

  ngOnInit(): void {
    if (this.router.url === '/home/pomodoro') {
      this.setRemainingTime(25*60);
    } else if(this.router.url === '/home/short-break') {
      this.setRemainingTime(5*60);
    } else if(this.router.url === '/home/long-break') {
      this.setRemainingTime(15*60);
    }
  }

  private router = inject(Router);
  currentUrl = signal('');

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl.set(event.urlAfterRedirects);
      });
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    return `${m}:${s.toString().padStart(2, '0')}`;
  }
  
  startCountdown = (seconds: number) => {
    this.isTimerRunning = true;
    let remainingSeconds = seconds;
    this.remaining = remainingSeconds;

    this.interval = setInterval( () => {
      remainingSeconds--;
      this.remaining = remainingSeconds;

      if (this.remaining <= 0) {
        clearInterval(this.interval);
        this.isTimerRunning = false;

        this.playSound();

        if (this.router.url === '/home/pomodoro') {
          this.setRemainingTime(25*60);
          this.router.navigate(['/home/short-break']);
        } else if(this.router.url === '/home/short-break') {
          this.setRemainingTime(5*60);
          this.router.navigate(['/home/long-break']);
        } else if(this.router.url === '/home/long-break') {
          this.setRemainingTime(15*60);
          this.router.navigate(['/home/pomodoro']);
        }
      }
    }, 1000);
  }

  stopTimer = () => {
    this.remaining = 0;
    clearInterval(this.interval);
    this.isTimerRunning = false;

    if (this.router.url === '/home/pomodoro') {
      this.setRemainingTime(25*60);
    } else if(this.router.url === '/home/short-break') {
      this.setRemainingTime(5*60);
    } else if(this.router.url === '/home/long-break') {
      this.setRemainingTime(15*60);
    }
  }

  setRemainingTime = (seconds : number) => {
    this.remaining = seconds;
  }

  playSound() {


    const sound = new Howl({
      src: ['vine-boom.mp3'],
      autoplay: true,
      volume: 1.0,
    });

    alert("⏰ Time's up! Take a break.");

    sound.stop();
  }
}
