import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { IntroGuard } from "./guards/intro.guard";
import { LoginGuard } from "./guards/login.guard";
import { NutricionGuard } from "./guards/nutricion.guard";
import { TutorialGuard } from "./guards/tutorial.guard";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "objetivo",
    loadChildren: () =>
      import("./pages/objetivo/objetivo.module").then(
        (m) => m.ObjetivoPageModule
      ),
  },
  {
    path: "pasoinicial",
    loadChildren: () =>
      import("./pages/pasoinicial/pasoinicial.module").then(
        (m) => m.PasoinicialPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
    canActivate: [LoginGuard],
  },
  {
    path: "terminos",
    loadChildren: () =>
      import("./pages/terminos/terminos.module").then(
        (m) => m.TerminosPageModule
      ),
  },
  {
    path: "registrar-info",
    loadChildren: () =>
      import("./registrar-info/registrar-info.module").then(
        (m) => m.RegistrarInfoPageModule
      ),
  },
  {
    path: "experiencia",
    loadChildren: () =>
      import("./pages/experiencia/experiencia.module").then(
        (m) => m.ExperienciaPageModule
      ),
  },
  {
    path: "lugar-ejercicios",
    loadChildren: () =>
      import("./pages/lugar-ejercicios/lugar-ejercicios.module").then(
        (m) => m.LugarEjerciciosPageModule
      ),
  },
  {
    path: "actividad",
    loadChildren: () =>
      import("./pages/actividad/actividad.module").then(
        (m) => m.ActividadPageModule
      ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./pages/dashboard/dashboard.module").then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: "corazon",
    loadChildren: () =>
      import("./corazon/corazon.module").then((m) => m.CorazonPageModule),
  },
  {
    path: "antecedentefamiliar",
    loadChildren: () =>
      import("./pages/antecedentefamiliar/antecedentefamiliar.module").then(
        (m) => m.AntecedentefamiliarPageModule
      ),
  },
  {
    path: "test-fuerza-info",
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-info/test-fuerza-info.module"
      ).then((m) => m.TestFuerzaInfoPageModule),
  },
  {
    path: "test-fuerza-manual",
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-manual/test-fuerza-manual.module"
      ).then((m) => m.TestFuerzaManualPageModule),
  },
  {
    path: "test-fuerza-pasos1",
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-pasos1/test-fuerza-pasos1.module"
      ).then((m) => m.TestFuerzaPasos1PageModule),
  },
  {
    path: "test-fuerza-pasos2",
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-pasos2/test-fuerza-pasos2.module"
      ).then((m) => m.TestFuerzaPasos2PageModule),
  },
  {
    path: "test-fuerza-pasos3",
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-pasos3/test-fuerza-pasos3.module"
      ).then((m) => m.TestFuerzaPasos3PageModule),
  },
  {
    path: "test-fuerza-pasos4", ///:id
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-pasos4/test-fuerza-pasos4.module"
      ).then((m) => m.TestFuerzaPasos4PageModule),
  },
  {
    path: "test-fuerza-menu",
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-menu/test-fuerza-menu.module"
      ).then((m) => m.TestFuerzaMenuPageModule),
  },
  {
    path: "calendario",
    loadChildren: () =>
      import("./pages/calendario/calendario.module").then(
        (m) => m.CalendarioPageModule
      ),
  },
  {
    path: "rutina",
    loadChildren: () =>
      import("./pages/rutina/rutina.module").then((m) => m.RutinaPageModule),
  },
  {
    path: "comida",
    loadChildren: () =>
      import("./pages/comida/comida.module").then((m) => m.ComidaPageModule),
  },
  {
    path: "perfil",
    loadChildren: () =>
      import("./pages/perfil/perfil.module").then((m) => m.PerfilPageModule),
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "test-resistencia",
    loadChildren: () =>
      import(
        "./pages/TestResistencia/test-resistencia/test-resistencia.module"
      ).then((m) => m.TestResistenciaPageModule),
  },
  {
    path: "test-fuerza-categoria",
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-categoria/test-fuerza-categoria.module"
      ).then((m) => m.TestFuerzaCategoriaPageModule),
  },
  {
    path: "test-fuerza-menu2",
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-menu2/test-fuerza-menu2.module"
      ).then((m) => m.TestFuerzaMenu2PageModule),
  },
  {
    path: "test-fuerza-menu3",
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-menu3/test-fuerza-menu3.module"
      ).then((m) => m.TestFuerzaMenu3PageModule),
  },
  {
    path: "mensajecorazon",
    loadChildren: () =>
      import("./pages/mensajecorazon/mensajecorazon.module").then(
        (m) => m.MensajecorazonPageModule
      ),
  },
  {
    path: "entrenamientos",
    loadChildren: () =>
      import("./entrenamientos/entrenamientos.module").then(
        (m) => m.EntrenamientosPageModule
      ),
  },
  {
    path: "bateria/:id",
    loadChildren: () =>
      import("./bateria/bateria.module").then((m) => m.BateriaPageModule),
  },
  {
    path: "test-fuerza-manual-pasos/:id",
    loadChildren: () =>
      import(
        "./pages/TestFuerza/test-fuerza-manual-pasos/test-fuerza-manual-pasos.module"
      ).then((m) => m.TestFuerzaManualPasosPageModule),
  },
  {
    path: "calentamiento",
    loadChildren: () =>
      import("./pages/calentamiento/calentamiento.module").then(
        (m) => m.CalentamientoPageModule
      ),
  },
  {
    path: "cambiarejercicio",
    loadChildren: () =>
      import("./cambiarejercicio/cambiarejercicio.module").then(
        (m) => m.CambiarejercicioPageModule
      ),
  },
  {
    path: "listaejercicioremplazar",
    loadChildren: () =>
      import("./listaejercicioremplazar/listaejercicioremplazar.module").then(
        (m) => m.ListaejercicioremplazarPageModule
      ),
  },
  {
    path: "calentamientodos",
    loadChildren: () =>
      import("./pages/calentamientodos/calentamientodos.module").then(
        (m) => m.CalentamientodosPageModule
      ),
  },
  {
    path: "bateriarutina",
    loadChildren: () =>
      import("./bateriarutina/bateriarutina.module").then(
        (m) => m.BateriarutinaPageModule
      ),
  },
  {
    path: "relacioncadera",
    loadChildren: () =>
      import("./relacioncadera/relacioncadera.module").then(
        (m) => m.RelacioncaderaPageModule
      ),
  },
  {
    path: "test-capacidad-info",
    loadChildren: () =>
      import(
        "./pages/TestCapacidad/test-capacidad-info/test-capacidad-info.module"
      ).then((m) => m.TestCapacidadInfoPageModule),
  },
  {
    path: "bateriahome/:id",
    loadChildren: () =>
      import("./pages/TestCapacidad/bateriahome/bateriahome.module").then(
        (m) => m.BateriahomePageModule
      ),
  },
  {
    path: "bateriaesperahome/:id",
    loadChildren: () =>
      import(
        "./pages/TestCapacidad/bateriaesperahome/bateriaesperahome.module"
      ).then((m) => m.BateriaesperahomePageModule),
  },
  {
    path: "mensajecapacidad/:id",
    loadChildren: () =>
      import(
        "./pages/TestCapacidad/mensajecapacidad/mensajecapacidad.module"
      ).then((m) => m.MensajecapacidadPageModule),
  },
  {
    path: "percepcionentrenamiento",
    loadChildren: () =>
      import(
        "./pages/percepcionentrenamiento/percepcionentrenamiento.module"
      ).then((m) => m.PercepcionentrenamientoPageModule),
  },
  {
    path: "bateriarutinahome/:id",
    loadChildren: () =>
      import("./bateriarutinahome/bateriarutinahome.module").then(
        (m) => m.BateriarutinahomePageModule
      ),
  },
  {
    path: "bateriarutinaesperahome/:id",
    loadChildren: () =>
      import("./bateriarutinaesperahome/bateriarutinaesperahome.module").then(
        (m) => m.BateriarutinaesperahomePageModule
      ),
  },
  {
    path: "descargar",
    loadChildren: () =>
      import("./descargar/descargar.module").then((m) => m.DescargarPageModule),
  },
  {
    path: "rangodeedad",
    loadChildren: () =>
      import("./seriedepreguntas/rangodeedad/rangodeedad.module").then(
        (m) => m.RangodeedadPageModule
      ),
  },
  {
    path: "pesoyestatura",
    loadChildren: () =>
      import("./seriedepreguntas/pesoyestatura/pesoyestatura.module").then(
        (m) => m.PesoyestaturaPageModule
      ),
  },
  {
    path: "form-medico",
    loadChildren: () =>
      import("./seriedepreguntas/form-medico/form-medico.module").then(
        (m) => m.FormMedicoPageModule
      ),
  },
  {
    path: "test-capacidad-manual",
    loadChildren: () =>
      import("./test-capacidad-manual/test-capacidad-manual.module").then(
        (m) => m.TestCapacidadManualPageModule
      ),
  },
  {
    path: "calentamiento-info",
    loadChildren: () =>
      import("./calentamiento-info/calentamiento-info.module").then(
        (m) => m.CalentamientoInfoPageModule
      ),
  },
  {
    path: "bateriacalentamientohome/:id",
    loadChildren: () =>
      import("./bateriacalentamientohome/bateriacalentamientohome.module").then(
        (m) => m.BateriacalentamientohomePageModule
      ),
  },
  {
    path: "bateriacalentamientoesperahome/:id",
    loadChildren: () =>
      import(
        "./bateriacalentamientoesperahome/bateriacalentamientoesperahome.module"
      ).then((m) => m.BateriacalentamientoesperahomePageModule),
  },
  {
    path: "bateriacalentamientofinalizar",
    loadChildren: () =>
      import(
        "./bateriacalentamientofinalizar/bateriacalentamientofinalizar.module"
      ).then((m) => m.BateriacalentamientofinalizarPageModule),
  },
  {
    path: "estiramientos",
    loadChildren: () =>
      import("./estiramientos/estiramientos.module").then(
        (m) => m.EstiramientosPageModule
      ),
  },
  {
    path: "rutina-entrenamiento",
    loadChildren: () =>
      import("./rutina-entrenamiento/rutina-entrenamiento.module").then(
        (m) => m.RutinaEntrenamientoPageModule
      ),
  },
  {
    path: "porcentajegrasa",
    loadChildren: () =>
      import("./porcentajegrasa/porcentajegrasa.module").then(
        (m) => m.PorcentajegrasaPageModule
      ),
  },
  {
    path: "medidas",
    loadChildren: () =>
      import("./medidas/medidas.module").then((m) => m.MedidasPageModule),
  },
  {
    path: "indicadores",
    loadChildren: () =>
      import("./indicadores/indicadores.module").then(
        (m) => m.IndicadoresPageModule
      ),
  },
  {
    path: "lineanutricional",
    loadChildren: () =>
      import("./lineanutricional/lineanutricional.module").then(
        (m) => m.LineanutricionalPageModule
      ),
  },
  {
    path: "alimentos-no-like",
    loadChildren: () =>
      import("./alimentos-no-like/alimentos-no-like.module").then(
        (m) => m.AlimentosNoLikePageModule
      ),
  },
  {
    path: "bateria-alimento",
    loadChildren: () =>
      import("./bateria-alimento/bateria-alimento.module").then(
        (m) => m.BateriaAlimentoPageModule
      ),
  },
  {
    path: "alimentos-seleccion/:id",
    loadChildren: () =>
      import("./alimentos-seleccion/alimentos-seleccion.module").then(
        (m) => m.AlimentosSeleccionPageModule
      ),
  },
  {
    path: "listadoalimento/:id",
    loadChildren: () =>
      import("./listadoalimento/listadoalimento.module").then(
        (m) => m.ListadoalimentoPageModule
      ),
  },
  {
    path: "alimentos-editar/:id",
    loadChildren: () =>
      import("./alimentos-editar/alimentos-editar.module").then(
        (m) => m.AlimentosEditarPageModule
      ),
  },
  {
    path: "modal-medidas",
    loadChildren: () =>
      import("./modal-medidas/modal-medidas.module").then(
        (m) => m.ModalMedidasPageModule
      ),
  },
  {
    path: "progreso",
    loadChildren: () =>
      import("./progreso/progreso.module").then((m) => m.ProgresoPageModule),
  },
  {
    path: "bateria-estiramientos",
    loadChildren: () =>
      import("./bateria-estiramientos/bateria-estiramientos.module").then(
        (m) => m.BateriaEstiramientosPageModule
      ),
  },
  {
    path: "tutorial-alimentacion",
    loadChildren: () =>
      import("./tutorial-alimentacion/tutorial-alimentacion.module").then(
        (m) => m.TutorialAlimentacionPageModule
      ),
      canActivate: [TutorialGuard],
  },
  {
    path: "bateria-remplazo/:id",
    loadChildren: () =>
      import("./bateria-remplazo/bateria-remplazo.module").then(
        (m) => m.BateriaRemplazoPageModule
      ),
  },
  {
    path: 'tienda',
    loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaPageModule)
  },
  {
    path: 'tienda-productos',
    loadChildren: () => import('./tienda-productos/tienda-productos.module').then( m => m.TiendaProductosPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tutorial-planes/tutorial-planes.module').then( m => m.TutorialPlanesPageModule),
    // canActivate: [IntroGuard]
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingModule),
  // },
  {
    path: 'planes-pagos',
    loadChildren: () => import('./planes-pagos/planes-pagos.module').then( m => m.PlanesPagosPageModule)
  },
  {
    path: 'modal-fotos',
    loadChildren: () => import('./modal-fotos/modal-fotos.module').then( m => m.ModalFotosPageModule)
  },
  {
    path: 'modal-comparacion',
    loadChildren: () => import('./modal-comparacion/modal-comparacion.module').then( m => m.ModalComparacionPageModule)
  },
  {
    path: 'paypal',
    loadChildren: () => import('./paypal/paypal.module').then( m => m.PaypalPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
