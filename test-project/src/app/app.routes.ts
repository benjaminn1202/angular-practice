import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test';

export const routes: Routes = [
    { path: '', redirectTo: 'test', pathMatch: 'full' },
    { path: 'test', component: TestComponent }
];