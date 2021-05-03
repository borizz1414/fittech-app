import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangodeedadPageRoutingModule } from './rangodeedad-routing.module';

import { RangodeedadPage } from './rangodeedad.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangodeedadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RangodeedadPage]
})
export class RangodeedadPageModule {}
