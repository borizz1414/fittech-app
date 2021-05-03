import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanesPagosPage } from './planes-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: PlanesPagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanesPagosPageRoutingModule {}
