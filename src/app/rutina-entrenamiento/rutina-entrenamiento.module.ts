import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaEntrenamientoPageRoutingModule } from './rutina-entrenamiento-routing.module';

import { RutinaEntrenamientoPage } from './rutina-entrenamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaEntrenamientoPageRoutingModule
  ],
  declarations: [RutinaEntrenamientoPage]
})
export class RutinaEntrenamientoPageModule {}
