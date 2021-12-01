import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@services/data.service';
import { ShareDataService } from '@services/share-data.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})
export class LoginHomeComponent implements OnInit {
  isLogin: boolean = true;
  constructor(
    private data: DataService,
    private router: Router,
    private shareData: ShareDataService,
  ) { }

  ngOnInit(): void {
    
  }
  

  login(user: any){
    this.data.post('QuanLyNguoiDung/DangNhap', user).subscribe((result)=>{
      if(result.maLoaiNguoiDung === "HV"){
        //Lưu trạng thái xuống Local Storage
        localStorage.setItem("UserClient",JSON.stringify(result));
        //Chuyển hướng tới trang Profile (redirect)
        this.router.navigate(['/profile']);
      }
      else {
        alert('Tài khoản không tồn tại')
      }
    })
  }

  clickLogin(){
    this.isLogin = !this.isLogin;
    this.shareData.sharingData(this.isLogin);
  }
}
