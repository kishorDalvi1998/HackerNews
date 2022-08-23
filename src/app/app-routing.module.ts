import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MasterComponent } from './components/master/master.component';

const routes: Routes = [
  { path: "", component: LoginComponent },

  {
    path: "", component: HeaderComponent,
    children: [{ path: "master", component: MasterComponent }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
