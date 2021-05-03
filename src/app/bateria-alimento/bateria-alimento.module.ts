import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriaAlimentoPageRoutingModule } from './bateria-alimento-routing.module';

import { BateriaAlimentoPage } from './bateria-alimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriaAlimentoPageRoutingModule
  ],
  declarations: [BateriaAlimentoPage]
})
export class BateriaAlimentoPageModule {}
