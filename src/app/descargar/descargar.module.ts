import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescargarPageRoutingModule } from './descargar-routing.module';

import { DescargarPage } from './descargar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescargarPageRoutingModule
  ],
  declarations: [DescargarPage]
})
export class DescargarPageModule {}
