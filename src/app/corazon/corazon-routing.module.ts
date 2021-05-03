import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorazonPage } from './corazon.page';

const routes: Routes = [
  {
    path: '',
    component: CorazonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorazonPageRoutingModule {}
