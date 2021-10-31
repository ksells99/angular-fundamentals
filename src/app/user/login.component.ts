import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(formValues: any) {
    this.authService
      .loginUser(formValues.userName, formValues.password)
      .subscribe((response) => {
        // If false returned from loginUser observable
        if (!response) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
    // this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
