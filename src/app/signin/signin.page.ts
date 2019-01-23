import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit
{

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit()
  {  }

  onSubmit(form)
  {
    console.log("You pushed the connection button, Well Done !");
    
  }
}
