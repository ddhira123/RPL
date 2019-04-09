import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'setting', 
    loadChildren: './setting/setting.module#SettingPageModule' 
  },
  { 
    path: 'newdoc', 
    loadChildren: './newdoc/newdoc.module#NewdocPageModule' 
  },
  { 
    path: 'qrcode', 
    loadChildren: './qrcode/qrcode.module#QrcodePageModule' 
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path:  'register', loadChildren:  './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}