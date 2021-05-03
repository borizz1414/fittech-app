import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriarutinaesperahomePageRoutingModule } from './bateriarutinaesperahome-routing.module';

import { BateriarutinaesperahomePage } from './bateriarutinaesperahome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriarutinaesperahomePageRoutingModule
  ],
  declarations: [BateriarutinaesperahomePage]
})
export class BateriarutinaesperahomePageModule {}
