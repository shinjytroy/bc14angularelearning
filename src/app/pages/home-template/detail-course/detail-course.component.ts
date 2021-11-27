import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  course: any;
  id: any;
  testIsLogin: any;
  userInfo: any;
  authProfile: any;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private dataService: DataService) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getDetailCourse();

    this.testIsLogin = localStorage.getItem('UserClient')
    
    this.userInfo = localStorage.getItem('UserClient')
    this.authProfile = JSON.parse(this.userInfo);
  }
  getParamsFromUrl(){
    //Lấy 1 param từ URL
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // console.log(id);

    //Lấy nhiều param từ URL
    this.activatedRoute.queryParams.subscribe((params: any)=>{
    console.log(params);
    })
  }
  getDetailCourse(){
    // Gọi tới Service
    this.dataService.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${this.id}`).subscribe((result: any) => {
      // console.log(result);
      this.course = result;
    });
  }
  
  submitCourse(user: any){
    this.dataService.post(`QuanLyKhoaHoc/DangKyKhoaHoc?maKhoaHoc=${this.id}`, this.authProfile).subscribe((item: any) => {
      
      user.push(item);

    })
  }
  
}
