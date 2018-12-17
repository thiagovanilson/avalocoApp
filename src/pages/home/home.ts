import { AvaliacaoDTO    } from './../../model/avaliacao.dto';
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

  private _avaliacoesAbertas:   AvaliacaoDTO[];
  private _avaliacoesAgendadas: AvaliacaoDTO[];

  public get avaliacoesAbertas(): AvaliacaoDTO[] {
    return this._avaliacoesAbertas;
  }
  
  public get avaliacoesAgendadas(): AvaliacaoDTO[] {
    return this._avaliacoesAbertas;
  }

  //Only for count the numbers of tests on open status
  public get qtdAvOpned(): number {
    if(this._avaliacoesAbertas == null)
      return 0;
    return this._avaliacoesAbertas.length;
  }
  
  //Only for count the numbers of tests on schedule status
  public get qtdAvSchedule(): number {
    if(this._avaliacoesAgendadas == null)
      return 0;
    return this._avaliacoesAgendadas.length;
  }
  public set avaliacoesAbertas(value: AvaliacaoDTO[]) {
    this.avaliacoesAbertas = value;
  }
  ionViewDidLoad(){  
 
    this.avaliacaoService.findOpened().subscribe(
      response => {this._avaliacoesAbertas = response}
      );
  }
  public goTo (addres){
    this.navCtrl.push(addres)
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