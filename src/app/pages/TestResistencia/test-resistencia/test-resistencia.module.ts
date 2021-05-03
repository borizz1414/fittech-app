import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestResistenciaPageRoutingModule } from './test-resistencia-routing.module';

import { TestResistenciaPage } from './test-resistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestResistenciaPageRoutingModule
  ],
  declarations: [TestResistenciaPage]
})
export class TestResistenciaPageModule {}
