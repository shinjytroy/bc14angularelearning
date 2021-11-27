import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-grand-course',
  templateUrl: './list-grand-course.component.html',
  styleUrls: ['./list-grand-course.component.scss']
})
export class ListGrandCourseComponent implements OnInit {
  course: any;
  id: any;
  coursesOfGrand: any;
  subCoursesOfGrand = new Subscription();
  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
  ) {  }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getCoursesOfGrand();
  }
  

  getParamsFromUrl(){
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // console.log(this.id);
  }
  getCoursesOfGrand(){
    this.subCoursesOfGrand = this.data.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${this.id}&MaNhom=GP01`).subscribe((result: any) => {
      this.coursesOfGrand = result;
      // console.log(result);
    });

  }
  
}
