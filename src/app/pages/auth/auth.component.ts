import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

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
    else {
      alert('Tài khoản không có quyền truy cập')
    }
  });
  }

}
