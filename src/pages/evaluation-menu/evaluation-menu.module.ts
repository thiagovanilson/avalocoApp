import { NgModule           } from '@angular/core';
import { IonicPageModule    } from 'ionic-angular';
import { EvaluationMenuPage } from './evaluation-menu';
import { SchedulePage       } from '../schedule/schedule';

@NgModule({
  declarations: [
    //Here needs to stay the page before this
    EvaluationMenuPage,
    
  ],
  imports: [
    IonicPageModule.forChild(EvaluationMenuPage),
  ],
})
export class EvaluationMenuPageModule {}
