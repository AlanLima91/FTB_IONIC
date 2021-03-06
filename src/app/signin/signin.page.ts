import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../class/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit
{
  headers : any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit()
  { 
  }

  onSubmit(form)
  {
    let user = new User(
      form.form.value.email,
      form.form.value.firstname,
      form.form.value.name,
      null, // Order
      form.form.value.password,
      0,     //solde
      false
    );

    this.userService.loginUser(user).subscribe(resp => {
      console.log(resp.headers.has('x-auth'));
    },
    err => {
      console.log(err);
    });
  }
}
