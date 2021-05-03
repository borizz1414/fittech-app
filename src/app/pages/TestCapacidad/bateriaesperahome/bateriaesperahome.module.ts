import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriaesperahomePageRoutingModule } from './bateriaesperahome-routing.module';

import { BateriaesperahomePage } from './bateriaesperahome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriaesperahomePageRoutingModule
  ],
  declarations: [BateriaesperahomePage]
})
export class BateriaesperahomePageModule {}
