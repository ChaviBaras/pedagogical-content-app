import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { NavDataComponent } from './nav-data/nav-data.component';
import { OrderComponent } from './order/order.component';
import { ForumComponent } from './forum/forum.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
        {path:"",pathMatch:"full",redirectTo:"menu"},
        {path:"menu",component:MenuComponent,
            children:[
            { path:"",component:HomeComponent},
            { path:"home", component:HomeComponent  },
            { path:"order", component:OrderComponent  },
            { path:"content/:path",component:ContentComponent},
            { path:"results/:word", component: ResultsComponent},   
            { path:"navData",component:NavDataComponent},
            { path:"about",component:AboutComponent},
            { path:"forum",component:ForumComponent}
        ]}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule {

}