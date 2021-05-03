import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { ApiFitechService } from "src/app/services/api-fitech.service";

@Component({
  selector: "app-mensajecorazon",
  templateUrl: "./mensajecorazon.page.html",
  styleUrls: ["./mensajecorazon.page.scss"],
})
export class MensajecorazonPage implements OnInit {
  titulo: any;
  mensaje: any;

  constructor(
    private ruta: NavController,
    private ApiService: ApiFitechService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    console.log("mensaje latido", this.ApiService.latidocorazon);
    console.log("mensaje riesgo", this.ApiService.risk);

    if (this.ApiService.latidocorazon === 3) {
      (this.titulo = "Excelente!"),
        (this.mensaje =
          "Felicidades, tú frecuencia cardíaca está excelente según tu edad y tú género");
      // ¡Felicitaciones!
    }

    if (this.ApiService.latidocorazon === 2) {
      (this.titulo = "Buena"),
        (this.mensaje =
          "Felicidades, tú frecuencia cardíaca en reposo es buena según tu edad y tú género.");
      // ¡Estupendo!
    }

    if (this.ApiService.latidocorazon === 1) {
      (this.titulo = "Normal"),
        (this.mensaje =
          "Tú frecuencia cardíaca es promedio según tu edad y tú género.");
      // ¡Muy bien!,
    }

    if (this.ApiService.latidocorazon === 0) {
      (this.titulo = "Mala"),
        (this.mensaje =
          "Tú frecuencia cardíaca está mal según tu edad y tú género.");
      // Con esfuerzo todo se puede, ¡A trabajar!,
    }
  }

  siguiente() {
    if (this.ApiService.latidocorazon === 3) {
      this.ruta.navigateRoot(["/planes-pagos"]);
    }

    if (this.ApiService.latidocorazon === 2) {
      this.ruta.navigateRoot(["/planes-pagos"]);
    }

    if (this.ApiService.latidocorazon === 1) {
      this.ruta.navigateRoot(["/planes-pagos"]);
    }

    if (this.ApiService.latidocorazon === 0) {
      //this.ApiService.desconectarUsuario();
      // this.presentAlert();
      //this.ruta.navigateRoot(["/"]);
      this.ruta.navigateRoot(["/planes-pagos"]);
      // return;
    }

    if (this.ApiService.risk > 1) {
      this.ApiService.desconectarUsuario();
      this.presentAlert2();
      this.ruta.navigateRoot(["/"]);
      return;
    }
  }

  // mensaje del corazon

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Fittech",
      cssClass: "customMensaje",
      message:
        "Lo sentimos, lo más que queremos es ayudarte, pero no estás apto para continuar según la información de salud que nos diste, te recomendamos ir al médico, y te esperamos de vuelta pronto.",
      buttons: [
        {
          text: "Ok",
          cssClass: "confirmButton",
        },
      ],
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: "Fittech",
      cssClass: "customMensaje",
      message:
        "Lo sentimos, aunque tú frecuencia cardíaca este bien tienes un riesgo alto y no estás apto para continuar según la información de salud que nos diste, te recomendamos ir al médico, y te esperamos de vuelta pronto.",
      buttons: [
        {
          text: "Ok",
          cssClass: "confirmButton",
        },
      ],
    });

    await alert.present();
  }
}
