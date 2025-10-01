import { Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list-component/blog-list-component';
import { BlogUpdateComponent } from './components/blog-update-component/blog-update-component';
import { BlogCreationComponent } from './components/blog-creation-component/blog-creation-component';

const blogUpdateComponent = { path: 'update/:id', component: BlogUpdateComponent }
const blogListComponent = { path: 'list', component: BlogListComponent }
const blogCreationComponent = { path: 'create', component: BlogCreationComponent }

export const routes: Routes = [
    blogUpdateComponent,
    blogListComponent,
    blogCreationComponent,
];