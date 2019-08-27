import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchHttpService } from '../../search-http.service';
import { type } from '../../student/results/data.model';


@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.css']
})
export class AdditionsComponent implements OnInit {
  formGroup:FormGroup=new FormGroup({
    name:new FormControl("",Validators.required)
  })
  @Input()
  routerPath:string=null;
  t:type=new type(); 
  add()
  {
    this.t.typeName=this.formGroup.value.name;
    this.t.typeId=3;
    this._httpService.addToTable(this.t,this.routerPath);
    // debugger;
    this.routerPath=null;
  }
  sendTableName(str:string){
    this.routerPath="api/"+str;
  }
  constructor(private _httpService:SearchHttpService) { }

  ngOnInit() {
    console.log(this.formGroup);
    console.log(this.formGroup[name]);
  }
}
