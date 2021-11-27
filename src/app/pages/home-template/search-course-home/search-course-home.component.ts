import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { ShareDataService } from '@services/share-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-course-home',
  templateUrl: './search-course-home.component.html',
  styleUrls: ['./search-course-home.component.scss']
})
export class SearchCourseHomeComponent implements OnInit {
  listCourse: any;
  subListCourse = new Subscription();
  tuKhoa: any = "";
  searchListCourse: any = "";
  subSearchListCourse: any;
  testIsLogin: any;
  constructor(
    private data: DataService,
    private shareData: ShareDataService,
    ) { }
  
  ngOnInit(): void {
    this.shareData.shareCourse.subscribe((item: any)=>{
    this.tuKhoa = item;
    this.testIsLogin = localStorage.getItem('UserClient')
    // console.log(this.tuKhoa)
    this.SearchCourseHome();
    });
  }
  SearchCourseHome() {
    this.subSearchListCourse = this.data.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${this.tuKhoa}&MaNhom=GP01`).subscribe((result: any) => {
      this.searchListCourse = result;
      console.log(result);
    });
  }
}
