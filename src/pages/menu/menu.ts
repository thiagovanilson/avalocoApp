import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { AvalicaoService } from '../../domain/avaliacao.service';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  
})

export class MenuPage {
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public avaliacaoService : AvalicaoService) {
    
  }
  
  public goTo (addres){
    if(addres == 'HomePage'){
      this.navCtrl.push(HomePage);

    }
    else{
      this.navCtrl.push(addres);

    }

  }//*/

  public buttonColor(){
    return API_CONFIG.buttonColor;
  }
  warnUser(params) {
    //this.navCtrl.push('MenuPage')
    this.avaliacaoService.findOpened().subscribe(
      response => {console.log(response)}
    );
    
    const alert = this.alertCtrl.create({
      title: 'Titulo',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
    
  }
}