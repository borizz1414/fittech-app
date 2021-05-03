import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangodeedadPage } from './rangodeedad.page';

const routes: Routes = [
  {
    path: '',
    component: RangodeedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangodeedadPageRoutingModule {}
