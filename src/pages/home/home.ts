import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MenuPage } from '../menu/menu';

import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
})

export class HomePage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  
  goToHome(params){
    
    this.navCtrl.push(LoginPage);
    //alert("This is my warning message " );

  }
  warnUser(params) {
    this.navCtrl.push(MenuPage)
    const alert = this.alertCtrl.create({
      title: 'Titulo',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
    /*
     for (var i = 0; i < 3; i++){
     };
     */
    
  }
}
