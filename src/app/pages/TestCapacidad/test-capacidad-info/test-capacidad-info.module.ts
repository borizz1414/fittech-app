import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestCapacidadInfoPageRoutingModule } from './test-capacidad-info-routing.module';

import { TestCapacidadInfoPage } from './test-capacidad-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestCapacidadInfoPageRoutingModule
  ],
  declarations: [TestCapacidadInfoPage]
})
export class TestCapacidadInfoPageModule {}
