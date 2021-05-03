import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriarutinaPage } from './bateriarutina.page';

const routes: Routes = [
  {
    path: '',
    component: BateriarutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateriarutinaPageRoutingModule {}
