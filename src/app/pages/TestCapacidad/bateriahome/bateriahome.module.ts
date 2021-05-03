import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriahomePageRoutingModule } from './bateriahome-routing.module';

import { BateriahomePage } from './bateriahome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriahomePageRoutingModule
  ],
  declarations: [BateriahomePage]
})
export class BateriahomePageModule {}
