import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoseFinalStagePage } from './lose-final-stage.page';

const routes: Routes = [
  {
    path: '',
    component: LoseFinalStagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoseFinalStagePage]
})
export class LoseFinalStagePageModule {}
