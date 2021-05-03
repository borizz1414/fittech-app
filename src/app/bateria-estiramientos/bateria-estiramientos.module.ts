import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriaEstiramientosPageRoutingModule } from './bateria-estiramientos-routing.module';

import { BateriaEstiramientosPage } from './bateria-estiramientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriaEstiramientosPageRoutingModule
  ],
  declarations: [BateriaEstiramientosPage]
})
export class BateriaEstiramientosPageModule {}
