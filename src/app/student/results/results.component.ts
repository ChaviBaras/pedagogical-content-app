import { Component, OnInit, Output, Input } from '@angular/core';
import { SearchHttpService } from '../../search-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { subject,type,course,content} from './data.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  subjects:subject[];
  types:type[];
  courses:course[];
  contents:content[];
  subcription:Subscription;
  subjectsId:number=null;
  typeId:number=null;
  courseId:number=null;
  wordSearch:string;
  constructor(private _searchServise:SearchHttpService,private _activatedRoute:ActivatedRoute,private _router :Router) { }

  ngOnInit() {
    this.wordSearch=this._activatedRoute.params['word'];
    this.search();    
  }

  sr()
  {
    this.search();
  }
  // cont()
  // {
  //   this._router.navigate(["menu/content"]);
  // }
  search()
  {
    this.subcription=this._activatedRoute.params.subscribe((param:any)=>{
      this._searchServise.getSubjectsByWord(param['word'],this.subjectsId,this.typeId,this.courseId).subscribe(data=>{
          this.subjects = data;
      })
      this._searchServise.getTypesByWord(param['word'],this.subjectsId,this.typeId,this.courseId).subscribe(data=>{
        this.types=data;
      })
      this._searchServise.getCoursesByWord(param['word'],this.subjectsId,this.typeId,this.courseId).subscribe(data=>{
        this.courses=data;
      })
      this._searchServise.getContentsByWord(param['word'],this.subjectsId,this.typeId,this.courseId).subscribe(data=>{
        this.contents=data;
      })
    })
  }
}
