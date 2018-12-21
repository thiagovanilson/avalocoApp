import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams) {
  }
  title: string = "Vanilson";
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
  }

  categorySelected:string = "Documentos"
  presentActionSheet() {
    
    const actionSheet = this.actionSheetCtrl.create({
      //title: 'Categoria',
      buttons: [
        {
          text: 'Ambientes',
          role: 'ambientes',
          handler: () => {
            this.categorySelected= "Ambientes";
          }
        },{
          text: 'Exemplo2',
          role: 'ambientes',
          handler: () => {
            this.categorySelected= "Exemplo2";
          }
        },{
          text: 'Exemplo3',
          role: 'ambientes',
          handler: () => {
            this.categorySelected= "Exemplo3";
          }
        }
      ]
    });
    actionSheet.present();
  }
}

