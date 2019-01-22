import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit
{
  listUsers:  any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit()
  {
    this.getUsers();
  }

  getUsers()
  {
    this.userService.getUsers().subscribe(data => {
      let cle = Object.keys(data);
      let donnees = Object.values(data);
      for (let i = 0; i < cle.length; i++)
      {
        this.listUsers.push({ key: cle[i], values: donnees[i] });
      }
      console.log(this.listUsers);
    });
  }

  increase(key: string){  }
  decrease(key: string){  }
}
