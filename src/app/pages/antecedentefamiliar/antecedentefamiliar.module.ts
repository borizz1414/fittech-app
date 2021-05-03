import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntecedentefamiliarPageRoutingModule } from './antecedentefamiliar-routing.module';

import { AntecedentefamiliarPage } from './antecedentefamiliar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntecedentefamiliarPageRoutingModule
  ],
  declarations: [AntecedentefamiliarPage]
})
export class AntecedentefamiliarPageModule {}
