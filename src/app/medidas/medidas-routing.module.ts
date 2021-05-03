import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedidasPage } from './medidas.page';

const routes: Routes = [
  {
    path: '',
    component: MedidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedidasPageRoutingModule {}
