import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaManualPasosPageRoutingModule } from './test-fuerza-manual-pasos-routing.module';

import { TestFuerzaManualPasosPage } from './test-fuerza-manual-pasos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaManualPasosPageRoutingModule
  ],
  declarations: [TestFuerzaManualPasosPage]
})
export class TestFuerzaManualPasosPageModule {}
