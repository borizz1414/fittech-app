import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorcentajegrasaPageRoutingModule } from './porcentajegrasa-routing.module';

import { PorcentajegrasaPage } from './porcentajegrasa.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorcentajegrasaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PorcentajegrasaPage]
})
export class PorcentajegrasaPageModule {}
