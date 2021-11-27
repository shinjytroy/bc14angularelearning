import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';
import { ShareDataService } from '@services/share-data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLogin: boolean = true;
  constructor(
    private data: DataService,
    private router: Router,
    private shareData: ShareDataService,

     )
     { }

  ngOnInit(): void {
   
  }

  login(user: any){
  this.data.post('QuanLyNguoiDung/DangNhap', user).subscribe((result)=> {
    if(result.maLoaiNguoiDung === "GV"){
      //Lưu trạng thái xuống Local Storage
      localStorage.setItem("UserAdmin",JSON.stringify(result));
      //Chuyển hướng tới trang dashBoard (redirect)
      this.router.navigate(['admin/dashboard']);
    }
    else if(result.maLoaiNguoiDung === "HV"){
      //Lưu trạng thái xuống Local Storage
      localStorage.setItem("UserClient",JSON.stringify(result));
      //Chuyển hướng tới trang Home (redirect)
      this.router.navigate(['profile']);
      
    }
    else {
      alert('Tài khoản không tồn tại')
    }
  });
  }
  clickLogin(){
    this.isLogin = !this.isLogin;
    this.shareData.sharingData(this.isLogin);
    console.log(this.isLogin)
  }
}
