import { Routes } from '@angular/router';

const login_page = {
    path: 'login-page',
    
    loadComponent: () =>
    import('../pages/login-page/login-page').then(m => m.LoginPage)
};

const students_page = {
    path: 'home-page',

    loadComponent: () =>
        import('../pages/home-page/home-page').then(m => m.HomePage),

    children: [{
        path: 'students-page',
        
        loadComponent: () =>
            import('../pages/students-page/students-page').then(m => m.StudentsPage)
    }]
}



export const routes: Routes = [
    login_page,
    students_page
];