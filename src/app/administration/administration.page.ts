import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit
{

  list: any[] = [];

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
        this.list.push({ key: cle[i], values: donnees[i] });
      }
    });
  }

  increase(key: string){  }
  decrease(key: string){  }
}
