import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestOptions } from 'http';
import { SearchHttpService } from 'src/app/search-http.service';
import { user } from './../student/results/data.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId:string;
  user:user;
  name:string;
  constructor(private _httpServise:SearchHttpService,private _route:Router) { }
  ngOnInit() {} 

enter(){
    this._httpServise.getUser(this.userId).subscribe(data=>{
      if(data!=null)
      {
          this.user= data;
          alert("ברוכים הבאים ל"+this.user.userName);
          
          if(this.user.permission == 2)
              this._route.navigate(["/manager"]);
          else
            this._route.navigate(["/student"]);    
             
      }
     else
        alert("אין כניסה");
    });
  }
}
