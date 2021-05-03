import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiendaProductosPageRoutingModule } from './tienda-productos-routing.module';

import { TiendaProductosPage } from './tienda-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiendaProductosPageRoutingModule
  ],
  declarations: [TiendaProductosPage]
})
export class TiendaProductosPageModule {}
