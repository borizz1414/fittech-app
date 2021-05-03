import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { NutricionGuard } from 'src/app/guards/nutricion.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)

      },
      {
        path: 'eye',
        loadChildren: () => import('../../tienda/tienda.module').then( m => m.TiendaPageModule)

      },
      {
        path: 'nutrition',
        loadChildren: () => import('../../bateria-alimento/bateria-alimento.module').then( m => m.BateriaAlimentoPageModule),
        canActivate:[NutricionGuard]
      },
      {
        path: 'about',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
