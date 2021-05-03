import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriarutinahomePageRoutingModule } from './bateriarutinahome-routing.module';

import { BateriarutinahomePage } from './bateriarutinahome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriarutinahomePageRoutingModule
  ],
  declarations: [BateriarutinahomePage]
})
export class BateriarutinahomePageModule {}
