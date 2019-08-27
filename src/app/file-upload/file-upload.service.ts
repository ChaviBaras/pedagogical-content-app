import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}) 
export class FileHttpService {
    constructor(private _http:HttpClient) {} 

postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    let yourHeadersConfig = new HttpHeaders();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        yourHeadersConfig.append('Content-Type', 'multipart/form-data');
        yourHeadersConfig.append('Accept', 'application/json');
    return this._http
      .post(endpoint, formData, { headers: yourHeadersConfig })
      .pipe(map((res: any) => { return res; }));
}
    handleError(e: any) {
        throw new Error("Method not implemented.");
    }


} 