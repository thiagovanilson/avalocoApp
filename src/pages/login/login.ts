import { Component} from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
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
  ionViewDidLoad(){  
    if(this.isLogged()){
      this.navCtrl.setRoot(HomePage);
    }
  }
  //Temporary
  public isLogged (){
    return true;
  }
}
