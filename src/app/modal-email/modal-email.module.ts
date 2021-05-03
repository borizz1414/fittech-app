import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEmailPageRoutingModule } from './modal-email-routing.module';

import { ModalEmailPage } from './modal-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEmailPageRoutingModule
  ],
  declarations: [ModalEmailPage]
})
export class ModalEmailPageModule {}
