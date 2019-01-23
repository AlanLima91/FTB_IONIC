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
   * @param user 
   * 
   * Prend un User en parametre.
   * Le but ici est de comparé que l'email saisie dans l'inscription n'est pas deja en base
   * s'il est en base la fonction renvoie un false
   * s'il n'est pas en base 
   */
  checkBeforeSignUp(user)
  {
    this.userService.getUsers().subscribe(data => {
      let users: User[] = Object.values(data);
      users.filter(user => {
        for (let i = 0; i < users.length; i++)
        {
          if (user.email === users[i].email)
            return true;
        }
        return false;
      })
    })
  }

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
    let user = new User(
      form.form.value.email,
      form.form.value.firstname,
      form.form.value.name,
      null, // Order
      form.form.value.password,
      0     //solde
    );
 
    if (!this.checkBeforeSignUp(user))
    {
      this.userService.addUser(user).subscribe(user => {
        this.router.navigate(['./signin']);
      })
    }
  }
}
