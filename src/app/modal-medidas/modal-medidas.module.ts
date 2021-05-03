import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMedidasPageRoutingModule } from './modal-medidas-routing.module';

import { ModalMedidasPage } from './modal-medidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMedidasPageRoutingModule
  ],
  declarations: [ModalMedidasPage]
})
export class ModalMedidasPageModule {}
