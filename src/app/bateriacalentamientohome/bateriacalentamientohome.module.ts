import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriacalentamientohomePageRoutingModule } from './bateriacalentamientohome-routing.module';

import { BateriacalentamientohomePage } from './bateriacalentamientohome.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    BateriacalentamientohomePageRoutingModule
  ],
  declarations: [BateriacalentamientohomePage]
})
export class BateriacalentamientohomePageModule {}
