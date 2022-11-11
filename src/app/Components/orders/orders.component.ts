import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: any = [];
  FactOrders: any = [];

  constructor(private ordersServices: OrdersService) {
    this.ordersServices
      .getAll(localStorage.getItem('accessToken'))
      .subscribe((res) => {
        this.orders = [...res[0].Invoices];
      });
  }

  ngOnInit(): void {}
}

// {date:order.date,name:order.invoice[index].item.name,price:order.invoice[index].item.price}
