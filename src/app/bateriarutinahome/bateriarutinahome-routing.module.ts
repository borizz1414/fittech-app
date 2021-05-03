import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriarutinahomePage } from './bateriarutinahome.page';

const routes: Routes = [
  {
    path: '',
    component: BateriarutinahomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateriarutinahomePageRoutingModule {}
