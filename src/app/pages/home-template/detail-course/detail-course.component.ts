import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareDataService } from '@services/share-data.service';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  
  course: any;
  id: any;

  userInfo: any;
  authProfile: any;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private dataService: DataService,
    private shareData: ShareDataService,    
    ) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
    this.getDetailCourse();
    this.shareData.shareCourse.subscribe((result: any)=>{
      this.course = result;
      // console.log(result)
     });
    
  
    this.userInfo = localStorage.getItem('UserClient')
    this.authProfile = JSON.parse(this.userInfo);
    this.getSubmitCourse()
  }
  

  getParamsFromUrl(){
    //Lấy 1 param từ URL
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // console.log(id);

    //Lấy nhiều param từ URL
    this.activatedRoute.queryParams.subscribe((params: any)=>{
    // console.log(params);
    })
  }
  getDetailCourse(){
    // Gọi tới Service
    this.dataService.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${this.id}`).subscribe((result: any) => {
      // console.log(result);
      this.course = result;
    });
  }
  getSubmitCourse(){
    this.dataService.post('QuanLyKhoaHoc/DangKyKhoaHoc', this.authProfile).subscribe((item: any) => {
      
      this.course.push(item);

    })
  }
}
