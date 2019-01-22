import { Component, OnInit } from '@angular/core';

import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit
{

  listOrders: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit()
  {
    this.getOrders();
  }

  getOrders()
  {
    this.orderService.getOrders().subscribe(data => {
      let cle = Object.keys(data);
      let donnees = Object.values(data);
      for (let i = 0; i < cle.length; i++)
      {
        this.listOrders.push({ key: cle[i], values: donnees[i] });
      }
      console.log(this.listOrders)
    })
  }
}
