import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
