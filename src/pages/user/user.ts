import { UserService } from './../../domain/user.service';
import { Component   } from '@angular/core';
import { HomePage    } from '../home/home';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public alertCtrl: AlertController, public us: UserService, public navCtrl: NavController, public navParams: NavParams) {
  }
  getUser(){
    
    return "Vanilson";
  }
  

  public logout(){
    this.navCtrl.push(LoginPage);
  }
  public goToHome (){
    const alert = this.alertCtrl.create({
      title: 'Salvo com sucesso!',
      subTitle: 'Todas as alterações foram salvas',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.push(HomePage)
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad UserPage');
  }
}
