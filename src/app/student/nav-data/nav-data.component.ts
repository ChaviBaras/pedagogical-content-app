import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { categoty, subject, type, content } from '../results/data.model';
import { SearchHttpService } from '../../search-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-data',
  templateUrl: './nav-data.component.html',
  styleUrls: ['./nav-data.component.css']
})
export class NavDataComponent implements OnInit {
  categories:categoty[];
  subjects:subject[];
  types:type[];
  contents:content[];
  cID:number;
  sID:number;
  tID:number;
  constructor(private _httpService:SearchHttpService, private _router:Router) { }

  ingect(tableName:number, caegoryId:number=null,subjectId:number=null,typeId:number=null)
  { 
    
 this.cID=caegoryId;
 this.sID=subjectId;
 this.tID=typeId;
      switch(tableName)
      {
          case 2: {
            this.contents=null;
            this.types=null;
            this.categories=null;
            this._httpService.getNavSubjects(this.cID,this.tID).subscribe(data=>{
            this.subjects=data;}); 
           
            break;
          }
          case 1:{
            this.contents=null;
            this.subjects=null;
            this.types=null;
            this._httpService.getCategories().subscribe(data=>{
            this.categories=data;}); 
        
            break;
          }
          case 3:{
            this.contents=null;
            this.subjects=null;
            this.categories=null;
            this._httpService.getNavTypes(this.cID,this.sID).subscribe(data=>{
            this.types=data;});
            
             break;
            }
            case 4:{
              this.contents=null;
              this.types=null;
              this.subjects=null;
              this.categories=null;
              this._httpService.getNavContent(this.cID,this.tID,this.sID).subscribe(data=>{
              this.contents = data;});
              
               break;
              }
      }
  }
  ngOnInit() {
    
  }

}
