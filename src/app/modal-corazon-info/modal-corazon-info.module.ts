import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCorazonInfoPageRoutingModule } from './modal-corazon-info-routing.module';

import { ModalCorazonInfoPage } from './modal-corazon-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCorazonInfoPageRoutingModule
  ],
  declarations: [ModalCorazonInfoPage]
})
export class ModalCorazonInfoPageModule {}
