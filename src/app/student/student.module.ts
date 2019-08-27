import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { StudentRoutingModule } from './student.routing.module';
import { SearchComponent } from './search/search.component';
import { NavDataComponent } from './nav-data/nav-data.component';
import { ResultsComponent } from './results/results.component';
import { OrderComponent } from './order/order.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchHttpService } from '../search-http.service';
import { ForumComponent } from './forum/forum.component';
import { AboutComponent } from './about/about.component';
import { MoodComponent } from './mood/mood.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [MenuComponent,SearchComponent,NavDataComponent,ResultsComponent,OrderComponent,ForumComponent,AboutComponent,MoodComponent,ContentComponent,HomeComponent],
  imports:[NgxExtendedPdfViewerModule,ReactiveFormsModule,CommonModule,FormsModule,StudentRoutingModule,HttpClientModule],
  providers:[SearchHttpService,HttpClient]
})
export class StudentModule { }
