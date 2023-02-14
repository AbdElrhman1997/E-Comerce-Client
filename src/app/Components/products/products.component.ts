import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { CartComponent } from '../cart/cart.component';
import { ProductsService } from 'src/app/Services/products.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  subcribtions: Subscription[];
  Products: Product[];
  btnDropVal: string;
  page = 1;
  loading: boolean = false;
  constructor(private productService: ProductsService) {
    this.subcribtions = [];
    this.Products = [];
    this.btnDropVal = 'All';
  }

  ngOnInit(): void {
    this.loading = true;
    // const subs1 = this.productService.getAll().subscribe((data: any) => {
    //   this.Products = [...data.data];
    //   this.loading = false;
    // });
    // this.subcribtions.push(subs1);
  }

  getAll(dropDown?: any) {
    this.loading = true;
    const subs2 = this.productService.getAll().subscribe((data: any) => {
      this.Products = [...data.data];
      this.loading = false;
    });
    this.subcribtions.push(subs2);
    dropDown.classList.toggle('hidden');
    this.btnDropVal = 'All';
  }

  getPrdByCat(catName: string, dropDown?: any) {
    this.loading = true;
    this.page = 1;
    const subs3 = this.productService
      .getPrdByCat(catName)
      .subscribe((data: any) => {
        this.Products = [...data.data];
        this.loading = false;
      });
    this.subcribtions.push(subs3);
    dropDown.classList.toggle('hidden');
    this.btnDropVal = catName;
  }

  openDropMobile(dropDown: HTMLDivElement) {
    dropDown.classList.toggle('hidden');
  }

  ngOnDestroy(): void {
    this.subcribtions.forEach((observer) => {
      observer.unsubscribe();
    });
  }
}
