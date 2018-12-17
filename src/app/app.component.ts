import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { LoginPage } from '../pages/login/login';
import { AvaliacaoDTO } from '../model/avaliacao.dto';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  private _avaliacoesAbertas: AvaliacaoDTO[];
  private _avaliacoesAgendadas: AvaliacaoDTO[];
  
  public set avaliacoesAbertas(value: AvaliacaoDTO[]) {
    this._avaliacoesAbertas = value;
  }
  public set avaliacoesAgendadas(value: AvaliacaoDTO[]) {
    this._avaliacoesAgendadas = value;
  }

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
}
