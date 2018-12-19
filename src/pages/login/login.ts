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
  user : string = "";
  pass : string = "";

  goToHome(params){
    //alert("This is my warning message" + params);

    if (!params) params = {};
    console.log(`Usuario `+ this.user +`\nSenha ` +this.pass)
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad(){  
    if(this.isLogged()){
      this.navCtrl.setRoot(HomePage);
    }//*/
  }
  //Temporary
  public isLogged (){
    return false;
  }
}
