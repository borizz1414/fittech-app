import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesoyestaturaPage } from './pesoyestatura.page';

const routes: Routes = [
  {
    path: '',
    component: PesoyestaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesoyestaturaPageRoutingModule {}
