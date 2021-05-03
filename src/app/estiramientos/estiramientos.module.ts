import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstiramientosPageRoutingModule } from './estiramientos-routing.module';

import { EstiramientosPage } from './estiramientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstiramientosPageRoutingModule
  ],
  declarations: [EstiramientosPage]
})
export class EstiramientosPageModule {}
