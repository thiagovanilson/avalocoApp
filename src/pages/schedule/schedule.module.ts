import { MenuPage } from './../menu/menu';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedulePage } from './schedule';

@NgModule({
  declarations: [
    SchedulePage,
    //MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(SchedulePage),
  ],
})
export class SchedulePageModule {}  