import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }
  addUser(user: any){
    user.maNhom = "GP01";
    this.dataService.post("QuanLyNguoiDung/ThemNguoiDung", user).subscribe((result)=>{
      alert("Đăng ký thành công")
    })
  }
  updateUser(user: any){
    user.maNhom = "GP01";
    this.dataService.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user).subscribe((result) => {
      alert('Cập nhật thành công')
    })
  }
}
