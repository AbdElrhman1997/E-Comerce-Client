import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { NgToastService } from 'ng-angular-popup';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartProducts: any[];
  amount: number = 1;
  totalPrice: number;
  Price: number = 0;
  Shipping: number = 600;
  Tax: number = 700;
  constructor(
    private toast: NgToastService,
    private cartService: CartServiceService
  ) {
    this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    this.totalPrice = this.Price + this.Shipping + this.Tax;
  }

  ngOnInit(): void {
    this.cartProducts.forEach((product: any) => {
      this.Price += Number(product.item.price) * product.quantity;
    });
    this.totalPrice = this.Price + this.Shipping + this.Tax;
  }

  removeProduct(product: any) {
    this.Price = 0;
    let newCartProducts = this.cartProducts.filter((item: any) => {
      return item.item._id != product.item._id;
    });
    this.cartProducts = [...newCartProducts];
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.cartProducts.forEach((product) => {
      this.Price += Number(product.item.price) * product.quantity;
    });
    this.totalPrice = this.Price + this.Shipping + this.Tax;
    this.toast.success({
      summary: 'product Removed Successfully',
      duration: 3000,
    });
  }

  finalProcces() {
    let newCartProducts = this.cartProducts.map((cartProduct) => {
      return {
        date: new Date(),
        invoice: cartProduct,
        totalPrice:
          cartProduct.item.price * cartProduct.quantity +
          this.Shipping +
          this.Tax,
      };
    });
    console.log(newCartProducts);

    this.cartService
      .addProducts(localStorage.getItem('accessToken'), newCartProducts)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: () => {
          this.toast.error({
            summary: 'There Probleb please try again',
            duration: 3000,
          });
        },
      });
    this.toast.success({
      summary: 'Order Complete Successfully',
      duration: 3000,
    });
    localStorage.removeItem('cart');
    this.cartProducts = [];
    this.Price = 0;
    this.Tax = 0;
    this.Shipping = 0;
    this.totalPrice = 0;
  }
}
