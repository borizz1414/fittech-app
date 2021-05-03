import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesoyestaturaPageRoutingModule } from './pesoyestatura-routing.module';

import { PesoyestaturaPage } from './pesoyestatura.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    PesoyestaturaPageRoutingModule
  ],
  declarations: [PesoyestaturaPage]
})
export class PesoyestaturaPageModule {}
