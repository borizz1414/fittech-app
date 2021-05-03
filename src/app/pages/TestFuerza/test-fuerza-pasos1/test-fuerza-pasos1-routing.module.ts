import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFuerzaPasos1Page } from './test-fuerza-pasos1.page';

const routes: Routes = [
  {
    path: '',
    component: TestFuerzaPasos1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFuerzaPasos1PageRoutingModule {}
