import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin.component';
console.log("admin Module loaded");

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'admin',
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
