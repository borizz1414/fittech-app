import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriacalentamientoesperahomePageRoutingModule } from './bateriacalentamientoesperahome-routing.module';

import { BateriacalentamientoesperahomePage } from './bateriacalentamientoesperahome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriacalentamientoesperahomePageRoutingModule
  ],
  declarations: [BateriacalentamientoesperahomePage]
})
export class BateriacalentamientoesperahomePageModule {}
