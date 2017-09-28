import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-service/login-service'
import { Injector } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private inj: Injector) { }

  loginSuccessful: boolean;
  loginFailed: boolean;
  username: string;
  password: string;

  ngOnInit() {
  }

  private verifyLogin() {
    this.loginService.getUser(this.username).then(d => {
      if(d.length === 1 && d[0]['password'] === this.password) {
        this.loginSuccessful = true;
      } else {
        this.loginFailed = true;
      }
      if(this.loginSuccessful) {
        this.inj.get(AppComponent).loggedin = true;
      }
    });
  }

}
