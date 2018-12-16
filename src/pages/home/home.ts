import { AvaliacaoDTO } from './../../model/avaliacao.dto';
import { AvalicaoService } from './../../domain/avaliacao.service';
import { Component       } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { LoginPage       } from '../login/login';

@IonicPage()
@Component({
  selector   : 'page-home',
  templateUrl: 'home.html',
 
})

export class HomePage {
  
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public avaliacaoService : AvalicaoService) {
  }
  goToHome(params){
    
    this.navCtrl.push(LoginPage);
    //alert("This is my warning message " );

  }

  avaliacoes : AvaliacaoDTO[];

  warnUser(params) {
    //this.navCtrl.push('MenuPage')
    this.avaliacaoService.findOpened().subscribe(
      response => {this.avaliacoes = response}, 
      error    => {console.log(Response)}
      );
      /*
    */
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