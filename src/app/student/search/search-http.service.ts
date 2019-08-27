import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { subject, type, course, content } from '../results/data.model';
import { order } from '../order/order.model';

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
  getSubjects():Observable<subject[]>{
    return this._http.get<subject[]>("/api/Subject");
  }
  getTypes():Observable<type[]>{
    return this._http.get<type[]>("/api/Type");
  }
  postOrd(ord:order){
    return this._http.post("/api/Order",ord);
  }
  getUser(id:string):Observable<string>{
    return this._http.get<string>("api/User/check/"+id);
  }
  constructor(private _http:HttpClient) {} 
} 
 