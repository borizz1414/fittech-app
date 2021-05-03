import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiFitechService } from "src/app/services/api-fitech.service";
import {
  PopoverController,
  NavController,
  AlertController,
} from "@ionic/angular";
import { PopinfoComponent } from "../components/popinfo/popinfo.component";
import { MensajesService } from "../services/mensajes.service";

@Component({
  selector: "app-entrenamientos",
  templateUrl: "./entrenamientos.page.html",
  styleUrls: ["./entrenamientos.page.scss"],
})
export class EntrenamientosPage implements OnInit {
  serie: any = {};
  stage1: any = [];
  stage2: any = [];
  stage3: any = [];

  a: number;
  b: number;
  c: number;
  resultado: number;
  resultado2: number;
  minutos: number;

  ocultar = false;
  constructor(
    private ruta: NavController,
    public alertController: AlertController,
    private ApiService: ApiFitechService,
    public popoverController: PopoverController,
    private notificacion: MensajesService
  ) {}

  // logica

  calculateRepetitions(stage: number) {
    return this.serie.filter((value) => {
      return value.stage === stage;
    }).length;
  }
  ionViewDidEnter() {
    //ratio es la duracion de cada ejercicio ratio w
    this.a = this.ApiService.ratio;
    console.log(this.a);
    //  obtener longitud de un objecto
    this.b = Object.keys(this.ApiService.rutina).length;
    console.log(this.b);
    //  obtener el tiempo de descanso
    this.c = this.ApiService.rest;
    console.log(this.c);
    //  total de duracion
    this.resultado = this.a * this.b;
    this.resultado2 = this.c * this.b;
    // conversio de segundo a minutos
    this.minutos = Math.round((this.resultado + this.resultado2) / 60);

    this.serie = this.ApiService.rutina;

    this.stage1 = this.serie.filter(function (value) {
      return value.stage === 1;
    });
    this.stage2 = this.serie.filter(function (value) {
      return value.stage === 2;
    });
    this.stage3 = this.serie.filter(function (value) {
      return value.stage === 3;
    });

    //comprobar si el stage 3 es vacia
    console.log(this.stage3);

    if (Object.keys(this.serie).length === 0) {
      this.ocultar = false;
    } else {
      this.ocultar = true;
    }
    let filteredExcersice = [];
    this.stage1.forEach((category) => {
      if (!filteredExcersice.find((cat) => cat.name == category.name)) {
        var excersice = {
          name: category.name,
          url: category.url,
          cod: category.cod,
          id: category.id,
          repeat: 0,
        };
        filteredExcersice.push(excersice);
      } else {
        let index = filteredExcersice.findIndex(
          (rutine) => rutine.name === category.name
        );
        filteredExcersice[index].repeat++;
      }
    });
    this.stage1 = filteredExcersice;
    filteredExcersice = [];

    this.stage2.forEach((category) => {
      if (!filteredExcersice.find((cat) => cat.name == category.name)) {
        var excersice = {
          name: category.name,
          url: category.url,
          cod: category.cod,
          id: category.id,
          repeat: 0,
        };
        filteredExcersice.push(excersice);
      } else {
        let index = filteredExcersice.findIndex(
          (rutine) => rutine.name === category.name
        );
        filteredExcersice[index].repeat++;
      }
    });
    this.stage2 = filteredExcersice;
    filteredExcersice = [];
    this.stage3.forEach((category) => {
      if (!filteredExcersice.find((cat) => cat.name == category.name)) {
        var excersice = {
          name: category.name,
          url: category.url,
          cod: category.cod,
          id: category.id,
          repeat: 0,
          repetitions: category.repetitions,
        };
        filteredExcersice.push(excersice);
      } else {
        let index = filteredExcersice.findIndex(
          (rutine) => rutine.name === category.name
        );
        filteredExcersice[index].repeat++;
      }
    });
    this.stage3 = filteredExcersice;

    let result = 0;
    for (let i in this.stage1) {
      result = result + this.stage1[i].repeat;
    }
    console.log(result);
    this.stage1.totalRepeat = result;
    result = 0;

    for (let i in this.stage2) {
      result = result + this.stage2[i].repeat;
    }
    this.stage2.totalRepeat = result;
    result = 0;

    for (let i in this.stage3) {
      result = result + this.stage3[i].repeat;
    }
    this.stage3.totalRepeat = result;
    result = 0;
    filteredExcersice = [];
    console.log(this.stage1);
  }

  // actualizar
  ngOnInit() {
    this.stage1 = [];
    this.stage2 = [];
    this.stage3 = [];
    console.log(this.stage1);
    this.presentAlert();
  }

  ucFirst(str) {
    /*   str = str.replace(/ /g, "."); */
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }

  comenzar() {
    // this.ruta.navigateForward("calentamientodos")
    this.ruta.navigateForward("calentamiento-info");
  }

  async mostrarpop(evento, excersice) {
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      showBackdrop: false,
      event: evento,
      componentProps: {
        excersice: excersice,
      },
    });

    this.ApiService.ejerciciodemostrado(
      excersice.name,
      excersice.repetition,
      excersice.id
    );

    await popover.present();
  }

  customTB(item) {
    return item.id;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Fittech",
      cssClass: "customMensaje",
      message:
        "Recuerda verificar los ejercicios para saber si cuentas con el implemento requerido, sino, puedes reemplazarlo por otro tocando los °°°",
      buttons: [
        {
          text: "Continuar",
          cssClass: "confirmButton",
        },
      ],
    });

    await alert.present();
  }
}
