import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayOutComponent } from './Components/main-lay-out/main-lay-out.component';
import { MyAccountComponent } from './Components/my-account/my-account.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RegisterComponent } from './Components/register/register.component';
import { IsAuthGuard } from './guards/is-auth.guard';
import { ProfileGuard } from './guards/profile.guard';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {
    path: '',
    component: MainLayOutComponent,
    children: [
      { path: 'Home', component: HomeComponent },
      { path: 'About', component: AboutComponent },
      {
        path: 'Account',
        component: MyAccountComponent,
        canActivate: [ProfileGuard],
      },
      {
        path: 'Orders',
        component: OrdersComponent,
        canActivate: [ProfileGuard],
      },
      { path: 'Cart', component: CartComponent, canActivate: [ProfileGuard] },
    ],
  },
  { path: 'products/product/:id', component: ProductDetailsComponent },
  { path: 'Login', component: LoginComponent, canActivate: [IsAuthGuard] },
  {
    path: 'Login/Register',
    component: RegisterComponent,
    canActivate: [IsAuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
