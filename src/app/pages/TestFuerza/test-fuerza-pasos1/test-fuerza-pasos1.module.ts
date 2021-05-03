import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaPasos1PageRoutingModule } from './test-fuerza-pasos1-routing.module';

import { TestFuerzaPasos1Page } from './test-fuerza-pasos1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaPasos1PageRoutingModule
  ],
  declarations: [TestFuerzaPasos1Page]
})
export class TestFuerzaPasos1PageModule {}
