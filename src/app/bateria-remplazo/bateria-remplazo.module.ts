import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateriaRemplazoPageRoutingModule } from './bateria-remplazo-routing.module';

import { BateriaRemplazoPage } from './bateria-remplazo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateriaRemplazoPageRoutingModule
  ],
  declarations: [BateriaRemplazoPage]
})
export class BateriaRemplazoPageModule {}
