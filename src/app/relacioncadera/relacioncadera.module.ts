import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelacioncaderaPageRoutingModule } from './relacioncadera-routing.module';

import { RelacioncaderaPage } from './relacioncadera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelacioncaderaPageRoutingModule
  ],
  declarations: [RelacioncaderaPage]
})
export class RelacioncaderaPageModule {}
