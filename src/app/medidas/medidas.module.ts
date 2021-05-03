import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedidasPageRoutingModule } from './medidas-routing.module';

import { MedidasPage } from './medidas.page';
import { ComponentsModule } from '../components/components.module';
import { ModalMedidasPage } from '../modal-medidas/modal-medidas.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';
import { ModalMedidasPageModule } from '../modal-medidas/modal-medidas.module';
import { TwoDigitDecimaNumberDirective } from '../decimals.directive';

@NgModule({
  entryComponents:[
    ModalMedidasPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedidasPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    ModalMedidasPageModule
  ],
  declarations: [MedidasPage]
})
export class MedidasPageModule {}
