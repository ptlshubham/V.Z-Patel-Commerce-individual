import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home/main',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'basic',
        loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
    },
    {
        path: 'infra',
        loadChildren: () => import('./infrastructure/infrastructure.module').then(m => m.InfrastructureModule)
    },
    {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    },
    {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
    },
    {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
    },
    {
        path: 'more',
        loadChildren: () => import('./more/more.module').then(m => m.MoreModule)
    },


];
