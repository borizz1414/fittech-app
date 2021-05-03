import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalComparacionPageRoutingModule } from './modal-comparacion-routing.module';

import { ModalComparacionPage } from './modal-comparacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalComparacionPageRoutingModule
  ],
  declarations: [ModalComparacionPage]
})
export class ModalComparacionPageModule {}
