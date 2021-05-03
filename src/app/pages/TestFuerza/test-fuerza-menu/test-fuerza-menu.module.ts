import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFuerzaMenuPageRoutingModule } from './test-fuerza-menu-routing.module';

import { TestFuerzaMenuPage } from './test-fuerza-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestFuerzaMenuPageRoutingModule
  ],
  declarations: [TestFuerzaMenuPage]
})
export class TestFuerzaMenuPageModule {}
