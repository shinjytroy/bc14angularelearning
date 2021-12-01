import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, SimpleChange } from '@angular/core';
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
  isLogin: boolean = true;
  userInfo: any
  authProfile: any
  constructor(
    private data: DataService,
    private shareData: ShareDataService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.getGrandCourse(); 
    this.userInfo = localStorage.getItem('UserClient')
    this.authProfile = JSON.parse(this.userInfo);
    // console.log(this.authProfile)
    this.SetisLogin();
  }
  ngOnChange(): void {
    
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
    this.router.navigate(['']);
  }
}
