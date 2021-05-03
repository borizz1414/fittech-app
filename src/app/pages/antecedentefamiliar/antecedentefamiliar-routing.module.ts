import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntecedentefamiliarPage } from './antecedentefamiliar.page';

const routes: Routes = [
  {
    path: '',
    component: AntecedentefamiliarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntecedentefamiliarPageRoutingModule {}
