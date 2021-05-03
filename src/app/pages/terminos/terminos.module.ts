import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosPageRoutingModule } from './terminos-routing.module';

import { TerminosPage } from './terminos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    TerminosPageRoutingModule
  ],
  declarations: [TerminosPage]
})
export class TerminosPageModule {}
