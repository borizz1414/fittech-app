import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialPlanesPageRoutingModule } from './tutorial-planes-routing.module';

import { TutorialPlanesPage } from './tutorial-planes.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPlanesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TutorialPlanesPage]
})
export class TutorialPlanesPageModule {}
