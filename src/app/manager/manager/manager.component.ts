import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
//   fileChange(event) {
//     debugger;
//     let fileList: FileList = event.target.files;
//     if(fileList.length > 0) {
//        let file: File = fileList[0];
//        let formData:FormData = new FormData();
//        formData.append('uploadFile', file, file.name);
//        let headers = new Headers();    
// //         /** In Angular 5, including the header Content-Type can invalidate your request */
//        headers.append('enctype', 'multipart/form-data');
//        headers.append('Content-Type', 'multipart/form-data');
//        headers.append('Accept', 'application/json');
//        debugger;
//       //   let options = new RequestOptions({ headers: headers });
// //         this.http.post(`${this.apiEndPoint}`, formData, options)
// //             .map(res => res.json())
// //             .catch(error => Observable.throw(error))
// //             .subscribe(
// //                 data => console.log('success'),
// //                 error => console.log(error)
// //             )
//     }
// }
  constructor(  ) { }

  ngOnInit() {
    // this._httpService.post
  }

}
