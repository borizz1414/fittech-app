import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaPasos4Page } from './test-fuerza-pasos4.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaPasos4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaPasos4PageRoutingModule {}
