import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasoinicialPageRoutingModule } from './pasoinicial-routing.module';

import { PasoinicialPage } from './pasoinicial.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    PasoinicialPageRoutingModule
  ],
  declarations: [PasoinicialPage]
})
export class PasoinicialPageModule {}
