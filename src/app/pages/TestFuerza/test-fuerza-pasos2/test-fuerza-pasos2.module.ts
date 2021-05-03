import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaPasos2PageRoutingModule } from './test-fuerza-pasos2-routing.module';

import { TestFuerzaPasos2Page } from './test-fuerza-pasos2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaPasos2PageRoutingModule
  ],
  declarations: [TestFuerzaPasos2Page]
})
export class TestFuerzaPasos2PageModule {}
