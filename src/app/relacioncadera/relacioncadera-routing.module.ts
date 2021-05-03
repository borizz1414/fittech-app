import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelacioncaderaPage } from './relacioncadera.page';

const routes: Routes = [
  {
    path: '',
    component: RelacioncaderaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelacioncaderaPageRoutingModule {}
