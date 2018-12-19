import { AvalicaoService } from './../domain/avaliacao.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }     from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage }  from '../pages/home/home';
import { MenuPage }  from '../pages/menu/menu';
import {HttpClientModule} from '@angular/common/http'



import { StatusBar }    from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService  } from '../domain/user.service';

//Ever page will need to be declarated here. by Vanilson
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    MenuPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AvalicaoService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}