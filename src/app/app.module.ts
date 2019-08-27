import { NgModule, EmbeddedViewRef, SystemJsNgModuleLoader } from "@angular/core"
import { BrowserModule} from "@angular/platform-browser"
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchHttpService } from './search-http.service';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app/app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import { StudentModule } from './student/student.module';
import { ManagerModule } from './manager/manager.module';
import { FilesModule } from './file-upload/file-upload.module';
import { UpLodeFileComponent } from './up-lode-file/up-lode-file.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
    declarations: [LoginComponent,AppComponent,UpLodeFileComponent],
    imports:[
        NgxExtendedPdfViewerModule,
        ReactiveFormsModule,BrowserModule,
        FormsModule,RouterModule,AppRoutingModule,
        HttpClientModule,StudentModule,
        ManagerModule, FilesModule, FileUploadModule
    ],
    bootstrap: [AppComponent],
    providers:[SearchHttpService,HttpClient]
})
export class AppModule {
}