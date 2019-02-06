import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../class/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit
{

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit()
  {  }

  /**
   * 
   * @param form 
   * 
   * Prend un formulaire en paramètre, l'ajoute à la table User
   * et redirige vers la page de connexion.
   */
  onSubmit(form)
  {
    let user = new User(
      form.form.value.email,
      form.form.value.firstname,
      form.form.value.name,
      null, // Order
      form.form.value.password,
      0     //solde
    );

    this.userService.addUser(user).subscribe(user => {
      this.router.navigate(['./signin']);
    });
  }
}
