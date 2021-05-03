import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaejercicioremplazarPageRoutingModule } from './listaejercicioremplazar-routing.module';

import { ListaejercicioremplazarPage } from './listaejercicioremplazar.page';
import { ComponentsModule } from '../components/components.module';
import { PopremplazarComponent } from '../components/popremplazar/popremplazar.component';

@NgModule({
  entryComponents:[
    PopremplazarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListaejercicioremplazarPageRoutingModule
  ],
  declarations: [ListaejercicioremplazarPage]
})
export class ListaejercicioremplazarPageModule {}
