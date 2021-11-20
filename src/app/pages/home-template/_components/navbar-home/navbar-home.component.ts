import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit {
  grandCourse: any;
  subGrandCourse = new Subscription();

  constructor(
    private data: DataService,
    ) { }

  ngOnInit(): void {
    this.getGrandCourse(); 
  }

  getGrandCourse(){
    this.subGrandCourse = this.data.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc").subscribe((result: any) => {
      // console.log(result);
      this.grandCourse = result;
    });
  }

  
  
}
