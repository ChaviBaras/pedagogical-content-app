import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { FileUploadComponent } from './file-upload.component';

const routes: Route[] = [
        {path:"",pathMatch:"full",redirectTo:"files"},
        {path:"files",component:FileUploadComponent,
            children:[]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilesRoutingModule {

}