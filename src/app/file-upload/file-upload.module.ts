import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesRoutingModule } from './file-upload.routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    FormsModule
  ]
})
export class FilesModule { }
