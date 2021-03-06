import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  { path: 'menu', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'basket', loadChildren: './basket/basket.module#BasketPageModule' },
  { path: 'administration', loadChildren: './administration/administration.module#AdministrationPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'reset-pwd', loadChildren: './reset-pwd/reset-pwd.module#ResetPwdPageModule' },
  { path: 'logout', loadChildren: './signin/signin.module#SigninPageModule'},
  { path: 'clients', loadChildren: './clients/clients.module#ClientsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
