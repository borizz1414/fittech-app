import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialAlimentacionPageRoutingModule } from './tutorial-alimentacion-routing.module';

import { TutorialAlimentacionPage } from './tutorial-alimentacion.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialAlimentacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TutorialAlimentacionPage]
})
export class TutorialAlimentacionPageModule {}
