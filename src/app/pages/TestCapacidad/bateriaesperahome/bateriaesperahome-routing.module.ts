import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriaesperahomePage } from './bateriaesperahome.page';

const routes: Routes = [
  {
    path: '',
    component: BateriaesperahomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateriaesperahomePageRoutingModule {}
