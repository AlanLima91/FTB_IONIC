import { Component } from '@angular/core';
import { MenusService } from '../service/menus.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  list: any[] = null;

  constructor(private menusService: MenusService) {}

  ngOnInit()
  {
    this.getMenus();
  }

  getMenus()
  {
    this.menusService.getMenus().subscribe(data => {
      this.list = data.menus
    });
  }

  onClick()
  {
    console.log("à finir");
  }

}
