import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaCategoriaPageRoutingModule } from './test-fuerza-categoria-routing.module';

import { TestFuerzaCategoriaPage } from './test-fuerza-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaCategoriaPageRoutingModule
  ],
  declarations: [TestFuerzaCategoriaPage]
})
export class TestFuerzaCategoriaPageModule {}
