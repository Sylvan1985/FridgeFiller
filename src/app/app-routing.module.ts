import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pantry',
    loadChildren: () => import('./pantry/pantry.module').then( m => m.PantryPageModule)
  },
  {
    path: 'viewpantry',
    loadChildren: () => import('./viewpantry/viewpantry.module').then( m => m.ViewpantryPageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  {
    path: 'add-to-pantry',
    loadChildren: () => import('./add-to-pantry/add-to-pantry.module').then( m => m.AddToPantryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
