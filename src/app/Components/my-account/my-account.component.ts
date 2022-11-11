import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  user!: any;
  letterImg: any = '';
  constructor(
    private userService: UsersService,
    private authService: AuthService
  ) {
    this.authService
      .getOne('/users/profile', localStorage.getItem('accessToken'))
      .subscribe((user) => {
        this.user = user[0];
        console.log(user);
        this.letterImg = this.user.userName.split('')[0];
      });
  }

  ngOnInit(): void {}

  LogOut() {
    localStorage.clear();
    this.authService.isLogged = true;
    location.reload();
  }
}
