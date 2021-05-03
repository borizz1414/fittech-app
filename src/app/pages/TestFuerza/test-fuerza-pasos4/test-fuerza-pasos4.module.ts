import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaPasos4PageRoutingModule } from './test-fuerza-pasos4-routing.module';

import { TestFuerzaPasos4Page } from './test-fuerza-pasos4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaPasos4PageRoutingModule
  ],
  declarations: [TestFuerzaPasos4Page]
})
export class TestFuerzaPasos4PageModule {}
