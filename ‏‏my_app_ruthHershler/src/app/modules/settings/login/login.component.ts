import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
login(){
this._service.change();
this.router.navigate(['/account'])
}
constructor(private _service: LoginService,private router:Router){

}
}
