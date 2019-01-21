import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Menu',
      url: '/menu',
      icon: 'home'
    },
    {
      title: 'Profil',
      url: '/profil',
      icon: 'contact'
    },
    {
      title: 'Panier',
      url: '/basket',
      icon: 'basket'
    },
    {
      title:  'Administration',
      url:    '/administration',
      icon:   'paper'
    },
    {
      title:  'Connexion',
      url:    '/signin',
      icon:   'log-in'
    },
    {
      title: 'Deconnexion',
      url: '/signin',
      icon: 'log-out'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
