import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../service/login-service.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public Username;
  public Password;

  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit() {
  }

  LoginSubmit(){
    this.loginService.setUserLoging(this.Username);
    this.router.navigate(['inbox']);
  }

}
