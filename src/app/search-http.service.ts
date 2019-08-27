import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { subject,type,course, content, categoty, } from './student/results/data.model';
import { promise } from 'protractor';
import { order } from './student/order/order.model';
import { Type } from '@angular/compiler';
import { forum } from './student/forum/forum.model';
import { user } from './manager/user/user.model';


@Injectable({
  providedIn: 'root'
}) 
export class SearchHttpService {
  getSubjectsByWord(word:string,subjectId:number,typeId:number,courseId:number):Observable<subject[]>{
      return this._http.get<subject[]>("/api/Subject/search/"+word+"/"+subjectId+"/"+typeId+"/"+courseId);
  }
  getTypesByWord(word:string,subjectId:number,typeId:number,courseId:number):Observable<type[]>{
      return this._http.get<type[]>("api/Type/search/"+word+"/"+subjectId+"/"+typeId+"/"+courseId);
  }
  getCoursesByWord(word:string,subjectId:number,typeId:number,courseId:number):Observable<course[]>{
    return this._http.get<course[]>("api/Course/search/"+word+"/"+subjectId+"/"+typeId+"/"+courseId);
  }
  getContentsByWord(word:string,subjectId:number,typeId:number,courseId:number):Observable<content[]>{
    return this._http.get<content[]>("api/Content/search/"+word+"/"+subjectId+"/"+typeId+"/"+courseId);
  }
  getNavSubjects(categoryId:number, typeId:number):Observable<subject[]>{
    return this._http.get<subject[]>("api/Subject/nav/"+categoryId+"/"+typeId);
  }
  getSubjects():Observable<subject[]>{
    return this._http.get<subject[]>("api/Subject");
  }
  getNavTypes(categoryId:number,subjectId:number):Observable<type[]>{
    return this._http.get<type[]>("api/Type/nav/"+categoryId+"/"+subjectId);
  }
  getNavContent(categoryId:number, typeId:number,subjectId:number):Observable<content[]>{
    return this._http.get<content[]>("api/content/nav/"+categoryId+"/"+typeId+"/"+subjectId);
  }
  getTypes():Observable<type[]>{
    return this._http.get<type[]>("api/Type");
  }
  getCategories():Observable<categoty[]>{
    return this._http.get<categoty[]>("api/Category");
  }
  // postOrd(ord:order):Observable<boolean>{
  //    return this._http.post<boolean>("api/Order",ord);
  // }
  postOrd(ord:order){
    return this._http.post("api/Order",ord);
 }
 getOrd():Observable<order[]>{
   return this._http.get<order[]>("api/Order");
 }
 delOrd(id:number){
  alert(id);
   return this._http.delete("api/Order/"+id);
 }
 postForum(f:forum){
  return this._http.post("api/Forum",f);
}
  getUser(id:string):Observable<user>{
    return this._http.get<user>("api/User/check/"+id);
  }
getForum():Observable<forum[]>{
  return this._http.get<forum[]>("api/Forum");
}
postUser(u:user){
return this._http.post("api/User",u);
}
getUsers():Observable<user[]>{
    return this._http.get<user[]>("api/User");
}
delUsers(id:string){
  return this._http.delete("api/User/"+id);
}
  addToTable(data:type,path:string){
    console.log("הגעתי!");
    // debugger;
   return this._http.post("api/Type","hhh");
    // debugger;
    console.log("הגעתי!");
  }
//   postFile(fileToUpload: File): Observable<boolean> {
//     const endpoint = 'your-destination-url';
//     const formData: FormData = new FormData();
//     formData.append('fileKey', fileToUpload, fileToUpload.name);
//     return this._http
//       .post(endpoint, formData, { headers: yourHeadersConfig })
//       .map(() => { return true; })
//       .catch((e) => this.handleError(e));
// }
  constructor(private _http:HttpClient) {} 
} 
 