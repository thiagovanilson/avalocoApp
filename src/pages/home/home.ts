import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  
  goToHome(params){
    
    this.navCtrl.push(LoginPage);
    //alert("This is my warning message " );

  }
  warnUser(params) {
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
