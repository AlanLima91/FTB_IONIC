import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { OrderService } from '../service/order.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit
{

  data:   any = null;
  user:   any= null;
  list:   any[] = [];

  constructor(private userService: UserService, private orderService: OrderService, private alertController: AlertController) { }

  /*
   *  First you load an user by his key.
   *  Then with the user load, you can now load his order.
   *  And then print them.
   */
  ngOnInit()
  {
    this.list = [];
    this.getUserByKey('5c6821c12318114dfc140e82');
  }

  getUserByKey(key: string)
  {
    this.userService.getUserByKey(key).subscribe(data => {
      this.user = data.user;
      if (this.user.orderKeys[0])
      {
        let i = this.user.orderKeys.length;
        while (i > 0)
          this.getOrderByKey(this.user.orderKeys[i--]);
      }
    });
  }
    
  getOrderByKey(key: string)
  {
    this.orderService.getOrderByKey(key).subscribe(data => {
      console.log(data);
      this.list.push(data)}
      );
  }

  async onClick()
  {
    const alrt = await this.alertController.create({
      header: 'Besoin d\'aide ?',
      message: 'Si vous souhaitez changer d\'adresse mail ou de mot de passe, vous devez simplement cliquer sur votre adresse mail ou le "mot de passe" et saisir les nouvelles valeurs.',
      buttons: [
        {
          text: 'OK',
          handler: () => { }
        }
      ]
    });
    await alrt.present();
  }
}
