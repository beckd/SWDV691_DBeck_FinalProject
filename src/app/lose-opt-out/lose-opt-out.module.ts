import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoseOptOutPage } from './lose-opt-out.page';

const routes: Routes = [
  {
    path: '',
    component: LoseOptOutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoseOptOutPage]
})
export class LoseOptOutPageModule {}
