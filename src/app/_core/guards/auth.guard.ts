import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(){
    if(localStorage.getItem("UserAdmin")){
      //Đã login
      return true;
    
    }
    //Chưa login - chuyển hướng về /auth
    this.router.navigate(['/auth']);
    return false;
  }
  
}
