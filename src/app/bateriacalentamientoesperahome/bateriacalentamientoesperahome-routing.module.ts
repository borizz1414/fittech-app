import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriacalentamientoesperahomePage } from './bateriacalentamientoesperahome.page';

const routes: Routes = [
  {
    path: '',
    component: BateriacalentamientoesperahomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateriacalentamientoesperahomePageRoutingModule {}
