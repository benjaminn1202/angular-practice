import { Routes } from '@angular/router';

const home_page = {
    path: 'home',
    loadComponent: () =>
    import('../pages/home/home').then(m => m.Home),

    children: [
        {
            path: 'pomodoro',
            loadComponent: () =>
            import('../pages/home/home').then(m => m.Home), // child
        }, {
            path: 'short-break',
            loadComponent: () =>
            import('../pages/home/home').then(m => m.Home), // child
        },
        {
            path: 'long-break',
            loadComponent: () =>
            import('../pages/home/home').then(m => m.Home), // child
        }
    ]
}
const about_page = {
    path: 'about',
    loadComponent: () =>
    import('../pages/about/about').then(m => m.About),
}

export const routes: Routes = [
    { path: 'home', redirectTo: 'home/pomodoro' },
    home_page,
    about_page 
];
