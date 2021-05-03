import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriacalentamientofinalizarPageRoutingModule } from './bateriacalentamientofinalizar-routing.module';

import { BateriacalentamientofinalizarPage } from './bateriacalentamientofinalizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriacalentamientofinalizarPageRoutingModule
  ],
  declarations: [BateriacalentamientofinalizarPage]
})
export class BateriacalentamientofinalizarPageModule {}
