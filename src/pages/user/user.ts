import { UserService } from './../../domain/user.service';
import { Component   } from '@angular/core';
import { HomePage    } from '../home/home';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public us: UserService, public navCtrl: NavController, public navParams: NavParams) {
  }
  getUser(){
    
    return "Vanilson";
  }
  public goToHome (){
    this.navCtrl.push(HomePage)
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad UserPage');
  }
}
