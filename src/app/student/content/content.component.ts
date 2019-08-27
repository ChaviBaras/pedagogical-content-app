import { Component, OnInit } from '@angular/core';
import { forum } from '../forum/forum.model';
import { SearchHttpService } from 'src/app/search-http.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  dataForum:forum[];
  f:forum= new forum();
  constructor(private _httpServise:SearchHttpService) { }
  enter()
  {
  
   this.f.userCode=2;
this._httpServise.postForum(this.f).subscribe(res=>{console.log(res);});
  }

  ngOnInit() {
    
  }

}
