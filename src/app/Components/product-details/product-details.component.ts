import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  prdId: any;
  amount: number = 1;
  cartProducts: any = [];
  isAdded: boolean = false;
  constructor(
    private toast: NgToastService,
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(JSON.parse(localStorage.getItem('cart')!));
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.prdId = params.get('id');
      this.productService.getPrdById(this.prdId).subscribe((data) => {
        this.product = data.data[0];
      });
    });
  }

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
