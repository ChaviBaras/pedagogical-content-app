import { Component, OnInit } from '@angular/core';
import { SearchHttpService } from 'src/app/search-http.service';
import { order } from 'src/app/student/order/order.model';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
 orders:order[];
  constructor(private _httpService:SearchHttpService ) { }

  ngOnInit() {
    this._httpService.getOrd().subscribe(data=>{
      this.orders=data;
    });
  }
  delOrder(Id:number)
  {alert(Id);
    this._httpService.delOrd(Id).subscribe(res=>{
      console.log(res);    });
  }

}
