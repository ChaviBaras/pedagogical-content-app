import { Component, OnInit } from '@angular/core';
import { forum } from './forum.model';
import { SearchHttpService } from 'src/app/search-http.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  dataForum:forum[];
  f:forum= new forum();
  constructor(private _httpServise:SearchHttpService) {}
  ngOnInit() {
    this.getForum();
  }
  getForum()
  {
    this._httpServise.getForum().subscribe(data=>{
      this.dataForum=data;
    });
  }
  enter()
  {
      this.f.userCode=2;
      this._httpServise.postForum(this.f).subscribe(res=>{console.log(res);});
      this.getForum();
  }
}