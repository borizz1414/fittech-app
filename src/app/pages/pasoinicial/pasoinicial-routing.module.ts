import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasoinicialPage } from './pasoinicial.page';

const routes: Routes = [
  {
    path: '',
    component: PasoinicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasoinicialPageRoutingModule {}
