import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriaPageRoutingModule } from './bateria-routing.module';

import { BateriaPage } from './bateria.page';
import { PipesModule } from '../pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriaPageRoutingModule,
    PipesModule
  ],
  declarations: [BateriaPage]
})
export class BateriaPageModule {}
