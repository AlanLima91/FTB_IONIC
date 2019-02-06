import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { OrderService } from '../service/order.service';
import { AlertController } from '@ionic/angular';
import { User } from '../class/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit
{

  user:   User;
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
    this.getUserByKey("5c53066969883538717ca42d");
  }

  getUserByKey(key: string)
  {
    this.userService.getUserByKey(key).subscribe(data => {
      this.user = data;
      console.log(this.user)
      if (this.user.order)
      {
        /*
        *  Avec cette boucle j'essaie d'avoir la liste des commandes
        *  de la dernière à la première. (Mais il y a un coté Aléatoire dans mes tests.) 
        */
       let i = 0;
       while (this.user.order[i])
        this.getOrderByKey(this.user.order[i++]);
      }
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
