import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
}