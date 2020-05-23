import { Component } from '@angular/core';
import { JwtService} from '../../jwt.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private service: JwtService){}

  Login()  {
      this.service.getUserLogin("Admin","XYZ").subscribe((res)=>{
      console.log(res); 
      alert(res)
      
     }); 
  }

 }
