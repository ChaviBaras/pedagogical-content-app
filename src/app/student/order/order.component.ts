import { Component, OnInit } from '@angular/core';
import { subject, type } from '../results/data.model';
import { SearchHttpService } from '../../search-http.service';
import { order } from './order.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  form:FormControl=new FormControl();
  ord:order=new order();
  subjects:subject[];
  types:type[];
  constructor(private service:SearchHttpService) { }

  send()
  {
    this.ord.userCode=1002;
    this.service.postOrd(this.ord).subscribe(res=>{console.log(res);});
    
  }
  ngOnInit() {
    this.service.getSubjects().subscribe(data=>{
      this.subjects=data;
    });
    this.service.getTypes().subscribe(data=>{
      this.types=data;
    });
  }

}
