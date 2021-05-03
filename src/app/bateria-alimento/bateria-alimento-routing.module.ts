import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriaAlimentoPage } from './bateria-alimento.page';

const routes: Routes = [
  {
    path: '',
    component: BateriaAlimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateriaAlimentoPageRoutingModule {}
