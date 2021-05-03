import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineanutricionalPage } from './lineanutricional.page';

const routes: Routes = [
  {
    path: '',
    component: LineanutricionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineanutricionalPageRoutingModule {}
