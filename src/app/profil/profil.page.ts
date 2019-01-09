import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { OrderService } from '../service/order.service';
import { User } from "../class/user";
import { Order } from "../class/order";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  user:   User;
  list:   any[] = [];
  order:  Order[];

  constructor(private userService: UserService, private orderService: OrderService) { }

  ngOnInit() {
    // Allow us to by default charge an example user. 
    // let order: Order = new Order(null,null, 5, new Date());
    // let user: User = new User("NameTest", "FirstNameTest", "EmailTest", "PasswordTest", 24, null);
    // user.order = [];
    // user.order[0] = order;
    // this.userService.addUser(user).subscribe(data => {
    //   console.log(Object);
    // });
    // console.log("after call function addUser");
    this.user = this.userService.getUserByKey("-LVoG7cVVNrswqyHgM1q")[0];
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(data => {
      let cle = Object.keys(data);
      let donnees = Object.values(data);
      for (let i = 0; i < cle.length; i++) {
        this.list.push({ key: cle[i], values: donnees[i] });
      }
    });
  }
}
