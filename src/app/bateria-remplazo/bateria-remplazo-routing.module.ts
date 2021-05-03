import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriaRemplazoPage } from './bateria-remplazo.page';

const routes: Routes = [
  {
    path: '',
    component: BateriaRemplazoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateriaRemplazoPageRoutingModule {}
