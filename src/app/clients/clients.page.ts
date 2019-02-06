import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../class/user';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit
{
  listUsers:  User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit()
  {
    this.getUsers();
  }

  getUsers()
  {
    this.userService.getUsers().subscribe(data => {
      this.listUsers = data.users;
    });
  }

  increase(key: string){  }
  decrease(key: string){  }
}
