import { MenuPage } from './../menu/menu';
import { NgModule } from '@angular/core';
import { IonicPageModule, Menu } from 'ionic-angular';
import { ChecklistPage } from './checklist';
@NgModule({
  declarations: [
    ChecklistPage,
    //MenuPage,
    
  ],
  imports: [
    IonicPageModule.forChild(ChecklistPage),
  ],
  entryComponents: [
    //MenuPage,
  ],
})
export class ChecklistPageModule {}
