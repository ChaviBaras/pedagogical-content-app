import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AdditionsComponent } from './additions/additions.component';
import { ManagerComponent } from './manager/manager.component';
import { MenuComponent } from '../student/menu/menu.component';
import { UserComponent } from './user/user.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';

const routes: Route[] = [
        {path:"",pathMatch:"full",redirectTo:"manager"},
        {path:"manager",component:ManagerComponent,
            children:[
            { path: "additions", component:AdditionsComponent},
            { path:"user",component:UserComponent},
            { path:"manageOrd",component:ManageOrderComponent}
        ]
    }
    // },
    // {path:"student",loadChildren:"./student/student.module#StudentModule"}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagerRoutingModule {

}