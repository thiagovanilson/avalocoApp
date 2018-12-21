import { HomePage } from './../home/home';
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MenuPage } from "./menu";



@NgModule({
    declarations: [//MenuPage, 
        //HomePage
    ],
    imports: [IonicPageModule.forChild(MenuPage)],
    providers: [
        //MenuPage,
      ],
})
/*
declarations: [
    ChecklistPage,
    MenuPage,

  ],
  imports: [
    IonicPageModule.forChild(ChecklistPage),
  ],
  entryComponents: [
    MenuPage,
  ],
*/
export class MenuModule {}