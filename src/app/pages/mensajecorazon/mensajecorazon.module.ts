import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajecorazonPageRoutingModule } from './mensajecorazon-routing.module';

import { MensajecorazonPage } from './mensajecorazon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajecorazonPageRoutingModule
  ],
  declarations: [MensajecorazonPage]
})
export class MensajecorazonPageModule {}
