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

  user:   Object;
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
    this.getUserByKey("-LVryqyN3d7mwmVz1KvU");
  }

  getUserByKey(key: string)
  {
    this.userService.getUserByKey(key).subscribe(data => {
      this.user = data;
      
      /*
      *  Avec cette boucle j'essaie d'avoir la liste des commandes
      *  de la dernière à la première. (Mais il y a un coté Aléatoire dans mes tests.) 
      */
     let i = this.user['order'].length - 1;
      while (i != -1)
        this.getOrderByKey(this.user['order'][i--]);
    });
  }
  
  getOrderByKey(key: string)
  {
    this.orderService.getOrderByKey(key).subscribe(data => this.list.push(data));
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
