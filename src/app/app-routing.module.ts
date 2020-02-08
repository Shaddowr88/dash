import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { IndexComponent } from './index/index.component';
import { ListeComponent } from './components/liste/liste.component';



const routes: Routes = [
  { path: '', component:SigninComponent},
  { path: 'index', component:IndexComponent},
  {path: 'list', component:ListeComponent},

];

@NgModule(
  {
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

