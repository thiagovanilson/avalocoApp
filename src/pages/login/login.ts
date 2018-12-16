import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
  
})

export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  
  goToHome(params){
    //alert("This is my warning message" + params);

    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }
}
