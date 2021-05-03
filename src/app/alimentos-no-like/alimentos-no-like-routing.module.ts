import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosNoLikePage } from './alimentos-no-like.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosNoLikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosNoLikePageRoutingModule {}
