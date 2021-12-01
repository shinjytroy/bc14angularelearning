import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {
  isLogin: boolean = true;
  userInfo: any;
  authProfile: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.SetisLogin();
    this.userInfo = localStorage.getItem('UserAdmin')
    this.authProfile = JSON.parse(this.userInfo);
  }
  SetisLogin(){
    if(localStorage.getItem('UserClient')){
      this.isLogin = false;
    }
    else {
      this.isLogin = true;
    }
  }
  logout(){
    this.isLogin = true;
    localStorage.removeItem("UserAdmin");
    this.router.navigate(['/auth']);
  }
}
