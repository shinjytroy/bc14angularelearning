import { Component, HostListener, OnInit } from '@angular/core';
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
    this.authProfile = JSON.parse(this.userInfo);
    this.getProfile()
  }
  
  updateButton(){
    this.isUpdate = !this.isUpdate;
    this.disabled = !this.disabled;
  }
  getProfile(){
    this.subProfileDetail = this.dataService.post('QuanLyNguoiDung/ThongTinNguoiDung', this.authProfile).subscribe((result)=>{
      this.profileDetail = result;
      console.log(this.profileDetail)
    })
  }
  capNhatTK(user: any) {
    this.dataService.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', this.authProfile).subscribe((item) => {
      user.push(item)
      
    })
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
