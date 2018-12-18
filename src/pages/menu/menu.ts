import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  
})

export class MenuPage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
}