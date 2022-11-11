import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  isPassMatch: boolean = true;
  isRegister: boolean = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitSignUp() {
    this.authService
      .getOne('/users', this.signupForm.get('email')?.value)
      .subscribe((res) => {
        console.log(res);
        if (res.length != 0) {
          this.isRegister = true;
          console.log(this.isRegister);
        } else {
          if (
            this.signupForm.get('password')?.value ===
            this.signupForm.get('confirmPassword')?.value
          ) {
            this.authService
              .post('/users/register', this.signupForm.value)
              .subscribe((res) => {
                console.log(res);
                this.router.navigateByUrl('/Login');
              });
            console.log(this.signupForm.value);
            this.isPassMatch = true;
          } else {
            this.isPassMatch = false;
          }
        }
      });
  }

  get userName() {
    return this.signupForm.get('userName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
}
