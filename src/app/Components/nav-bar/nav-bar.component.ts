import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  Links: { name: string; link: string }[];
  constructor(private authService: AuthService) {
    if (this.authService.isLogged) {
      this.Links = [
        { name: 'Home', link: 'Home' },
        { name: 'About', link: '/About' },
        { name: 'Orders', link: 'Orders' },
        { name: 'MyCart', link: 'Cart' },
        { name: 'My Account', link: 'Account' },
      ];
    } else {
      this.Links = [
        { name: 'Home', link: 'Home' },
        { name: 'About', link: 'About' },
        { name: 'Login', link: 'Login' },
      ];
    }
  }
  ngOnInit(): void {}
  openNavMobile(nav: any) {
    if (nav.classList.contains('hidden')) {
      nav.classList.remove('hidden');
    } else {
      nav.classList.add('hidden');
    }
  }
}
