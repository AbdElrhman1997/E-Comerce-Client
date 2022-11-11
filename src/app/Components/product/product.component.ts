import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  amount: number = 1;
  cartProducts: any = [];
  isAdded: boolean = false;
  constructor(private toast: NgToastService) {
    console.log(JSON.parse(localStorage.getItem('cart')!));
  }

  ngOnInit(): void {}

  addToCart(product: any) {
    if ('accessToken' in localStorage) {
      if ('cart' in localStorage) {
        this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
        let exist = this.cartProducts.find((item: any) => {
          return item.item._id == product._id;
        });
        if (exist) {
          this.toast.error({
            summary: 'This product already Added',
            duration: 3000,
          });
        } else {
          this.cartProducts.push({
            item: product,
            status: 'Pending',
            quantity: this.amount > 0 ? this.amount : 1,
          });
          localStorage.setItem('cart', JSON.stringify(this.cartProducts));
          this.toast.success({
            summary: 'product Added Successfully',
            duration: 3000,
          });
        }
      } else {
        this.cartProducts.push({
          item: product,
          status: 'Pending',
          quantity: this.amount > 0 ? this.amount : 1,
        });
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        this.toast.success({
          summary: 'product Added Successfully',
          duration: 3000,
        });
      }
      this.isAdded = false;
    } else {
      this.toast.error({
        summary: 'You must be loggin to buy',
        duration: 3000,
      });
      this.isAdded = false;
    }
  }
}

// {
//   date: new Date(),
//   invoice: this.cartProducts[0],
//   totalPrice: this.totalPrice,
// }
