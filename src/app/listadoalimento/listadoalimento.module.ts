import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoalimentoPageRoutingModule } from './listadoalimento-routing.module';

import { ListadoalimentoPage } from './listadoalimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoalimentoPageRoutingModule
  ],
  declarations: [ListadoalimentoPage]
})
export class ListadoalimentoPageModule {}
