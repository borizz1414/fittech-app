import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetivoPageRoutingModule } from './objetivo-routing.module';

import { ObjetivoPage } from './objetivo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetivoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ObjetivoPage]
})
export class ObjetivoPageModule {}
