import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalentamientoPageRoutingModule } from './calentamiento-routing.module';

import { CalentamientoPage } from './calentamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalentamientoPageRoutingModule
  ],
  declarations: [CalentamientoPage]
})
export class CalentamientoPageModule {}
