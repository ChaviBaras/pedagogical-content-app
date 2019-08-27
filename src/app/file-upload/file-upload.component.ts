import { Component, EventEmitter, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import { FileHttpService } from '../file-upload/file-upload.service';

const URL = 'http://localhost:3000/fileupload/';

@Component({
  selector: 'my-app',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent {
    constructor(private fileUploadService:FileHttpService, private sanitizer: DomSanitizer) { }
  fileToDisplay: string | ArrayBuffer = "";

 public uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']
    });

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file);
  }

  fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        //this.service.postOrd(formData).subscribe(res=>{console.log(res);});
        // let headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        // this._http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
}
fileToUpload: File = null;
handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe((data: any) => {
      // do something, if upload success
      }, (error: any) => {
        console.log(error);
      });
  }
  readFiles(event: any) {
    let file = event.target.files[0];
    let text: any;

    if(file){
      // Make sure `file.name` matches our extensions criteria
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        var reader = new FileReader();

        // reader.addEventListener("load", function () {
        //   var image = new HTMLImageElement();
        //   image.height = 100;
        //   image.title = file.name;
        //   //image.src = this.result;
        //   //preview.appendChild( image );
        // }, false);

        reader.readAsDataURL(file);

        reader.onload = (e) => {
          text=reader.result;
      }
      }
    }
  }

  uploadDocument(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      
      console.log(fileReader.result);
      // this.sanitizer.bypassSecurityTrustHtml(fileReader.result.toString());
      this.fileToDisplay = fileReader.result;
      console.log(this.fileToDisplay);
    }
    fileReader.readAsDataURL(file);
}
}