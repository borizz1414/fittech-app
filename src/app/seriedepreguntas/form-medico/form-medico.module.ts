import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMedicoPageRoutingModule } from './form-medico-routing.module';

import { FormMedicoPage } from './form-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormMedicoPageRoutingModule
  ],
  declarations: [FormMedicoPage]
})
export class FormMedicoPageModule {}
