import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresoPageRoutingModule } from './progreso-routing.module';

import { ProgresoPage } from './progreso.page';
import { ComponentsModule } from '../components/components.module';
import { ModalComparacionPage } from '../modal-comparacion/modal-comparacion.page';
import { ModalComparacionPageModule } from '../modal-comparacion/modal-comparacion.module';


@NgModule({
  entryComponents:[
    ModalComparacionPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresoPageRoutingModule,
    ComponentsModule,
    ModalComparacionPageModule
  ],
  declarations: [ProgresoPage]
})
export class ProgresoPageModule {}
