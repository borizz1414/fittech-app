import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarejercicioPageRoutingModule } from './cambiarejercicio-routing.module';

import { CambiarejercicioPage } from './cambiarejercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarejercicioPageRoutingModule
  ],
  declarations: [CambiarejercicioPage]
})
export class CambiarejercicioPageModule {}
