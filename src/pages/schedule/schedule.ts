import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector   : 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  constructor( public navCtrl: NavController, public navParams: NavParams) {
  }
  public goToEvaluation(){
    this.navCtrl.push('EvaluationMenuPage');
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad SchedulePage');
  }
}
