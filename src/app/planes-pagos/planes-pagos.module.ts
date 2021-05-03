import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanesPagosPageRoutingModule } from './planes-pagos-routing.module';

import { PlanesPagosPage } from './planes-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanesPagosPageRoutingModule
  ],
  declarations: [PlanesPagosPage]
})
export class PlanesPagosPageModule {}
