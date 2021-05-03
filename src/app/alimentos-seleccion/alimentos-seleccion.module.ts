import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentosSeleccionPageRoutingModule } from './alimentos-seleccion-routing.module';

import { AlimentosSeleccionPage } from './alimentos-seleccion.page';
import { PipesModule } from '../pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentosSeleccionPageRoutingModule,
    PipesModule
  ],
  declarations: [AlimentosSeleccionPage]
})
export class AlimentosSeleccionPageModule {}
