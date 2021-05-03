import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaInfoPageRoutingModule } from './test-fuerza-info-routing.module';

import { TestFuerzaInfoPage } from './test-fuerza-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaInfoPageRoutingModule
  ],
  declarations: [TestFuerzaInfoPage]
})
export class TestFuerzaInfoPageModule {}
