import { Component, OnInit } from '@angular/core';
import { user } from './user.model';
import { FormControl } from '@angular/forms';
import { SearchHttpService } from 'src/app/search-http.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _httpService:SearchHttpService) { }

users:user[];
  // form:FormControl=new FormControl();
  // user:user=new user();
    ngOnInit()
    {
         this._httpService.getUsers().subscribe(data=>{
       this.users=data;
     });
    }
    delUser(Id:string)
     {
       this._httpService.delUsers(Id).subscribe(res=>{
       });
     }

//   send()
//   {
//  this.user.courseId=3;
//  this._httpService.postUser(this.user).subscribe(res=>{});
//   }

}
