import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajecapacidadPageRoutingModule } from './mensajecapacidad-routing.module';

import { MensajecapacidadPage } from './mensajecapacidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajecapacidadPageRoutingModule
  ],
  declarations: [MensajecapacidadPage]
})
export class MensajecapacidadPageModule {}
