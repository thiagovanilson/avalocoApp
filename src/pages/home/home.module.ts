import { IonicPageModule } from 'ionic-angular/module';
import { NgModule        } from '@angular/core';
import { HomePage        } from './home'; 
import { MenuPage        } from '../menu/menu';

@NgModule({
    declarations: [
        //MenuPage,
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage)
    ],
    entryComponents: [
      //MenuPage,
    ],
    
})/*
declarations: [
    ChecklistPage,

  ],
  imports: [
    IonicPageModule.forChild(ChecklistPage),
  ],
  entryComponents: [
    MenuPage,
  ],*/
export class HomeModule {
}