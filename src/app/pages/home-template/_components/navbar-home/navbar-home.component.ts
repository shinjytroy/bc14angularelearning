import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';
import { ShareDataService } from '@services/share-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent implements OnInit {
  tuKhoa: any = "";
  grandCourse: any;
  subGrandCourse = new Subscription();
  isLogin: boolean = false;
  userInfo: any
  authProfile: any
  constructor(
    private data: DataService,
    private shareData: ShareDataService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.getGrandCourse(); 
    this.SetisLogin();
    
    this.userInfo = localStorage.getItem('UserClient')
    this.authProfile = JSON.parse(this.userInfo);
  }

  getGrandCourse(){
    this.subGrandCourse = this.data.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc").subscribe((result: any) => {
      // console.log(result);
      this.grandCourse = result;
    });
  }
  searchHome(value: any){
    this.tuKhoa = value;
    this.shareData.sharingData(this.tuKhoa);
  }
  SetisLogin(){
    if(localStorage.getItem('UserClient')){
      this.isLogin = false;
    }
    else {
      this.shareData.shareCourse.subscribe((result: any) =>{
        this.isLogin = result;
      })
    }
  }
  logout() {
    this.isLogin = !this.isLogin;
    localStorage.removeItem("UserClient");
  }
}
