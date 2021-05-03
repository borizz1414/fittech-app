import { Component, OnInit } from "@angular/core";
import { ModalController, LoadingController } from "@ionic/angular";
import { ModalCorazonInfoPage } from "../modal-corazon-info/modal-corazon-info.page";
import { NavController } from "@ionic/angular";
//servicios
import { ApiFitechService } from "src/app/services/api-fitech.service";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-corazon",
  templateUrl: "./corazon.page.html",
  styleUrls: ["./corazon.page.scss"],
})
export class CorazonPage implements OnInit {
  constructor(
    public modalController: ModalController,
    private ruta: NavController,
    private ApiService: ApiFitechService,
    private UsuarioService: UsuarioService,
    public loadingController: LoadingController
  ) {}
  habilitar = true;

  ngOnInit() {}

  async abrirmodal(valor) {
    if (valor == 0) {
      const modal = await this.modalController.create({
        component: ModalCorazonInfoPage,
        componentProps: {
          dato: "cuello",
        },
      });
      await modal.present();
      const { data } = await modal.onDidDismiss();

      if (data.salir) {
        // LLAMAR ESPERA
        this.presentLoading();
        // Registro
        const validoRegistro = await this.ApiService.Registrar(
          this.UsuarioService.datosPersonales
        );
        if (validoRegistro) {
          // Antecedente
          const validoAntecedente = await this.ApiService.Antecedentefamiliar(
            this.UsuarioService.condicionPersona
          );
          if (validoAntecedente) {
            // Corazon ULTIMO PASO
            const valido = await this.ApiService.Latidos(
              this.UsuarioService.condicionPersona.latidos
            );
            if (valido) {
              // Termina espera
              this.loadingController.dismiss();
              this.ruta.navigateRoot(["/mensajecorazon"]);
            }
          }
        } else {
          console.log(validoRegistro);
          this.loadingController.dismiss();
        }
      } else {
        return;
      }
    }

    if (valor == 1) {
      const modal = await this.modalController.create({
        component: ModalCorazonInfoPage,
        componentProps: {
          dato: "pulso",
        },
      });
      await modal.present();
      const { data } = await modal.onDidDismiss();
      if (data.salir) {
        // LLAMAR ESPERA
        this.presentLoading();
        // Registro
        const validoRegistro = await this.ApiService.Registrar(
          this.UsuarioService.datosPersonales
        );
        if (validoRegistro) {
          // Antecedente
          const validoAntecedente = await this.ApiService.Antecedentefamiliar(
            this.UsuarioService.condicionPersona
          );
          if (validoAntecedente) {
            // Corazon ULTIMO PASO
            const valido = await this.ApiService.Latidos(
              this.UsuarioService.condicionPersona.latidos
            );
            if (valido) {
              // Termina espera
              console.log(valido);
              this.loadingController.dismiss();
              this.ruta.navigateRoot(["/mensajecorazon"]);
            }
          }
        }
      } else {
        this.loadingController.dismiss();
        return;
      }
    }
  }

  async avanzar() {
    // this.ruta.navigateRoot(['/antecedentefamiliar'])
    /* 
    const valido = await this.ApiService.Latidos(this.UsuarioService.condicionPersona.latidos)
    if(valido){
     this.ruta.navigateRoot(['/antecedentefamiliar'])
    }else{
      return
    }*/
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Por favor espere...",
      cssClass: "my-loading",
    });
    await loading.present();
  }
}
