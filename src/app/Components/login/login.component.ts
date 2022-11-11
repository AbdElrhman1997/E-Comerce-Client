import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isPassMatch: boolean = false;
  isRegister: boolean = false;
  errMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.authService.isLogged = this.authService.isLogged;
  }
  ngOnInit(): void {}

  submitForm() {
    let user: any = [];
    this.authService.post('/users/login', this.loginForm.value).subscribe(
      (res) => {
        if (res) {
          if (res) {
            localStorage.setItem('accessToken', res.user[0].token);
            this.router.navigateByUrl('/');
            this.authService.isLogged = true;
            this.isRegister = true;
          } else {
            this.isRegister = false;
          }
        }
      },
      (err) => {
        console.log(err.error);
        this.isRegister = true;
        this.isPassMatch = true;
        this.errMessage = err.error;
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
