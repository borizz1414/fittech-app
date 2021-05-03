import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicadoresPageRoutingModule } from './indicadores-routing.module';

import { IndicadoresPage } from './indicadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicadoresPageRoutingModule
  ],
  declarations: [IndicadoresPage]
})
export class IndicadoresPageModule {}
