import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager.routing.module';
import { ManagerComponent } from './manager/manager.component';
import { AdditionsComponent } from './additions/additions.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';

@NgModule({
  declarations: [AdditionsComponent,ManagerComponent,UserComponent,ManageOrderComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule
  ]
})
export class ManagerModule { }
