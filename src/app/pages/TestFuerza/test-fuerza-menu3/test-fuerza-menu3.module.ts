import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaMenu3PageRoutingModule } from './test-fuerza-menu3-routing.module';

import { TestFuerzaMenu3Page } from './test-fuerza-menu3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaMenu3PageRoutingModule
  ],
  declarations: [TestFuerzaMenu3Page]
})
export class TestFuerzaMenu3PageModule {}
