import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarInfoPageRoutingModule } from './registrar-info-routing.module';

import { RegistrarInfoPage } from './registrar-info.page';
import { ModalEmailPage } from '../modal-email/modal-email.page';
import { ModalEmailPageModule } from '../modal-email/modal-email.module';

@NgModule({
  entryComponents:[
    ModalEmailPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarInfoPageRoutingModule,
    ModalEmailPageModule
  ],
  declarations: [RegistrarInfoPage]
})
export class RegistrarInfoPageModule {}
