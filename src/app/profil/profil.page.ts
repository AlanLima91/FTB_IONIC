import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  user:   Object;
  list:   any[] = [];

  constructor(private userService: UserService, private orderService: OrderService) { }

  ngOnInit()
  {
    // Allow us to by default charge an example user. 
    /* let order: string = "-LVrvkYRyzGfNBylx0Yt";
    let user: User = new User("OrderKey attach to User", " ", " ", " ", 94, null);
    user.order = [];
    user.order[0] = order;
    this.userService.addUser(user).subscribe(data => {
      console.log(Object);
    });
    console.log("after call function addUser"); */
    this.list = [];

    this.getUserByKey("-LVryqyN3d7mwmVz1KvU");
  }

  getUserByKey(key: string)
  {
    this.userService.getUserByKey(key).subscribe(data => {
      this.user = data;
      this.user['order'].forEach(element => {
        this.getOrderByKey(element);
      });
    });
  }
  
  getOrderByKey(key: string)
  {
    this.orderService.getOrderByKey(key).subscribe(data => {
      this.list.push(data);
    });
  }
}
