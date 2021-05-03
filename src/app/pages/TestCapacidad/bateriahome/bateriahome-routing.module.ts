import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriahomePage } from './bateriahome.page';

const routes: Routes = [
  {
    path: '',
    component: BateriahomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateriahomePageRoutingModule {}
