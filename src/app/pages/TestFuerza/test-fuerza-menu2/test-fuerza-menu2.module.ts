import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaMenu2PageRoutingModule } from './test-fuerza-menu2-routing.module';

import { TestFuerzaMenu2Page } from './test-fuerza-menu2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaMenu2PageRoutingModule
  ],
  declarations: [TestFuerzaMenu2Page]
})
export class TestFuerzaMenu2PageModule {}
