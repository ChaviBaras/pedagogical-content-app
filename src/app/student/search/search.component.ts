import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { SearchHttpService } from '../../search-http.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  word:string;
  constructor(private _searchServise:SearchHttpService,private _router:Router) { }

  ngOnInit() {
  }
  search(){
    debugger;
    this._router.navigate(["menu/results",this.word]);
  }
  // searchBYEnter(input:any){
  //   if(input.keyCode==13){
  //     this._router.navigate(["menu/results", input.target.value]);
  //   }
  // }
}