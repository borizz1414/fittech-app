import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent
      }
    ])
  ],


})
export class LandingModule { }
