import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
// import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'pages', 
    pathMatch: 'full' 
  },
  {
    path: 'login', 
    component: LoginComponent,
    
  },
  {
    path:'pages',
    loadChildren: 'app/pages/pages.module#PagesModule',
    // canActivate:[AuthenticationGuard], 
  },
 
  
  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },
 
  // { path: '**', redirectTo: 'pages' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
