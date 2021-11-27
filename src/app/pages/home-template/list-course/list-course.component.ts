import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss'],
})
export class ListCourseComponent implements OnInit {
  maDanhMuc: any
  listCourse: any;
  subListCourse = new Subscription();
  grandCourse: any;
  subGrandCourse = new Subscription();

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.getCourse();
    this.getParamsFromUrl();
    this.getCoursesOfGrand();
  }

  getParamsFromUrl(){
    //Lấy 1 param từ URL
    this.maDanhMuc = this.activatedRoute.snapshot.paramMap.get("maDanhMuc");
    console.log(this.maDanhMuc);
  }

  getCourse() {
    this.subListCourse = this.data.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01").subscribe((result: any) => {
      // console.log(result);
      this.listCourse = result;
    });
  }
  
  getCoursesOfGrand(){
    this.subGrandCourse = this.data.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${this.maDanhMuc}&MaNhom=GP01`).subscribe((result: any) => {
      // console.log(result);
      this.grandCourse = result;
    });
  }
 
  //Tiết kiệm tài nguyên bằng cách hủy đăng ký khi mình đã gọi tới API
  ngOnDestroy(){
    this.subListCourse.unsubscribe();
    this.subGrandCourse.unsubscribe();
  }
}
