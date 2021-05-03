import { ExperienciaPageRoutingModule } from "./../../pages/experiencia/experiencia-routing.module";
import { Component, Input, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { PopoverController, NavController, NavParams } from "@ionic/angular";
import { ApiFitechService } from "src/app/services/api-fitech.service";

@Component({
  selector: "app-popinfo",
  templateUrl: "./popinfo.component.html",
  styleUrls: ["./popinfo.component.scss"],
})
export class PopinfoComponent implements OnInit {
  evaluar;
  @Input() excersice: any;
  constructor(
    private ruta: NavController,
    public popoverController: PopoverController,
    private ApiService: ApiFitechService,
    public navParams: NavParams
  ) {}

  async ngOnInit() {
    // Lo que ocurrio aqui es que la referencia de IDUSUARIO se perdia y por eso no mostraba la ruta
    const usuario = await this.ApiService.cargarNombreUsuario();
    this.ApiService.IDusuario = usuario["id"];

    this.evaluar = this.ApiService.verificarEntrenamiento;
  }

  bateria() {
    this.popoverController.dismiss();
    console.log(this.excersice);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.excersice),
      },
    };
    this.ruta.navigateForward("bateria-remplazo/1", navigationExtras);
  }

  async remplazar() {
    this.popoverController.dismiss();

    const valor = await this.ApiService.listadoEjercicioRemplazarHome();
    if (valor) {
      this.ruta.navigateForward("listaejercicioremplazar");
    } else {
      console.log("error de conexion");
    }
  }
}
