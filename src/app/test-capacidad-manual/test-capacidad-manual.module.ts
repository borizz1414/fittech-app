import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCapacidadManualPageRoutingModule } from './test-capacidad-manual-routing.module';

import { TestCapacidadManualPage } from './test-capacidad-manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCapacidadManualPageRoutingModule
  ],
  declarations: [TestCapacidadManualPage]
})
export class TestCapacidadManualPageModule {}
