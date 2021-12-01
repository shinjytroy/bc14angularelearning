import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile : any
  userInfo: any
  authProfile: any
  subProfileDetail: any
  profileDetail: any
  disabled: any = true;
  isUpdate: boolean = true;
  isChoice1: any = true;
  listCourseChoise: any;
  id: any
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.userInfo = localStorage.getItem('UserClient')
    // console.log(this.userInfo)
    this.authProfile = JSON.parse(this.userInfo);
    // console.log(this.authProfile)
    
  }
  
  updateProfile(data: any){
    this.subProfileDetail = this.dataService.post('QuanLyNguoiDung/ThongTinTaiKhoan', this.authProfile).subscribe((result)=>{
      data.hoTen = result.hoTen;
      data.email = result.email;
      data.soDT = result.soDT;
      data.taiKhoan = result.taiKhoan;
      data.hoTen = result.hoTen;
      // this.profileDetail = result;
      // console.log(this.profileDetail)
    })
    this.isUpdate = !this.isUpdate;
    this.disabled = !this.disabled;
  }
  closeUpdate(){
    this.disabled = !this.disabled;
    this.isUpdate = !this.isUpdate;
  }
  // getProfile(){
  //   this.subProfileDetail = this.dataService.post('QuanLyNguoiDung/ThongTinTaiKhoan', this.authProfile).subscribe((result)=>{
  //     this.profileDetail = result;
      
  //     // console.log(this.profileDetail)
  //   })
  // }
  capNhatTK(data: any) {
      data.maLoaiNguoiDung = "HV";
      data.maNhom = "GP01";
    this.dataService.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', data).subscribe((result) => {
      console.log(result)
    })
    alert('Cập nhật thành công')
  }
  changeChoice(){
    this.isChoice1 = ! this.isChoice1;
  }
  getCourseChoice(){
    this.dataService.post("QuanLyNguoiDung/ThongTinNguoiDung", this.authProfile).subscribe((result) => {
      this.listCourseChoise = result;
    })
  }
}
