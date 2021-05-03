import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineanutricionalPageRoutingModule } from './lineanutricional-routing.module';

import { LineanutricionalPage } from './lineanutricional.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineanutricionalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LineanutricionalPage]
})
export class LineanutricionalPageModule {}
