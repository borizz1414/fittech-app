import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaManualPageRoutingModule } from './test-fuerza-manual-routing.module';

import { TestFuerzaManualPage } from './test-fuerza-manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaManualPageRoutingModule
  ],
  declarations: [TestFuerzaManualPage]
})
export class TestFuerzaManualPageModule {}
