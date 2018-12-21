import { NgModule           } from '@angular/core';
import { IonicPageModule    } from 'ionic-angular';
import { EvaluationMenuPage } from './evaluation-menu';
import { HomePage } from '../home/home';
import { ChecklistPage } from '../checklist/checklist';

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
