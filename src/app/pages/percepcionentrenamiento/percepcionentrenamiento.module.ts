import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PercepcionentrenamientoPageRoutingModule } from './percepcionentrenamiento-routing.module';

import { PercepcionentrenamientoPage } from './percepcionentrenamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PercepcionentrenamientoPageRoutingModule
  ],
  declarations: [PercepcionentrenamientoPage]
})
export class PercepcionentrenamientoPageModule {}
