import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaPasos3PageRoutingModule } from './test-fuerza-pasos3-routing.module';

import { TestFuerzaPasos3Page } from './test-fuerza-pasos3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaPasos3PageRoutingModule
  ],
  declarations: [TestFuerzaPasos3Page]
})
export class TestFuerzaPasos3PageModule {}
