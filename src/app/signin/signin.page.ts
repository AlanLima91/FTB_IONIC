import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form)
  {
    /* this.beerService.editBeer(form.form.value, this.key).subscribe(beer => {
      this.editForm();
      this.router.navigateByUrl('');
    }); */
    console.log("You pushed the connection button, Well Done !");
  }
}
