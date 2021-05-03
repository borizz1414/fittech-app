import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaProductosPage } from './tienda-productos.page';

const routes: Routes = [
  {
    path: '',
    component: TiendaProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendaProductosPageRoutingModule {}
