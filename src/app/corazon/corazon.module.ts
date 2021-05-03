import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorazonPageRoutingModule } from './corazon-routing.module';

import { CorazonPage } from './corazon.page';
import { ModalCorazonInfoPage } from '../modal-corazon-info/modal-corazon-info.page';
import { ModalCorazonInfoPageModule } from '../modal-corazon-info/modal-corazon-info.module';

@NgModule({
  entryComponents:[
    ModalCorazonInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCorazonInfoPageModule,
    CorazonPageRoutingModule
  ],
  declarations: [CorazonPage]
})
export class CorazonPageModule {}
