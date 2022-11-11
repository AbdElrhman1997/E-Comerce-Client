import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { MyAccountComponent } from './Components/my-account/my-account.component';
import { MainLayOutComponent } from './Components/main-lay-out/main-lay-out.component';
import { FooterComponent } from './Components/footer/footer.component';
// import { ProductsComponent } from './Components/products/products.component';
// import { ProductDetailsComponent } from './Components/product-details/product-details.component';
// import { LoginComponent } from './Components/login/login.component';
// import { RegisterComponent } from './Components/register/register.component';
// import { CartComponent } from './Components/cart/cart.component';
// import { ProductComponent } from './Components/product/product.component';
// import { OrdersComponent } from './Components/orders/orders.component';
// import { NotFoundComponent } from './Components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    MyAccountComponent,
    MainLayOutComponent,
    FooterComponent,
    // ProductsComponent,
    // ProductDetailsComponent,
    // LoginComponent,
    // RegisterComponent,
    // CartComponent,
    // ProductComponent,
    // OrdersComponent,
    // NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
