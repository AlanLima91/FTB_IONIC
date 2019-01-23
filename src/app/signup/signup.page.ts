import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

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
   * Le mot de passe n'est pas crypté tout est en clair !
   */
  onSubmit(form)
  {
    console.log(form.form.value);
    this.userService.addUser(form.form.value).subscribe(user => {
      this.router.navigate(['./signin']);
    })
  }
}
