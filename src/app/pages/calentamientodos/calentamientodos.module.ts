import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalentamientodosPageRoutingModule } from './calentamientodos-routing.module';

import { CalentamientodosPage } from './calentamientodos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalentamientodosPageRoutingModule
  ],
  declarations: [CalentamientodosPage]
})
export class CalentamientodosPageModule {}
