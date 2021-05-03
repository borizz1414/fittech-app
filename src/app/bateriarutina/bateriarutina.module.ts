import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriarutinaPageRoutingModule } from './bateriarutina-routing.module';

import { BateriarutinaPage } from './bateriarutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriarutinaPageRoutingModule
  ],
  declarations: [BateriarutinaPage]
})
export class BateriarutinaPageModule {}
