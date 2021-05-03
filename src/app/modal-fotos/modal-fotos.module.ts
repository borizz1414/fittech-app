import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFotosPageRoutingModule } from './modal-fotos-routing.module';

import { ModalFotosPage } from './modal-fotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFotosPageRoutingModule
  ],
  declarations: [ModalFotosPage]
})
export class ModalFotosPageModule {}
