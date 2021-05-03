import { Component, OnInit } from "@angular/core";
import { NutricionService } from "../services/nutricion.service";
import { MensajesService } from "../services/mensajes.service";
import { NavController, LoadingController } from "@ionic/angular";
import { ApiFitechService } from "../services/api-fitech.service";

@Component({
  selector: "app-bateria-alimento",
  templateUrl: "./bateria-alimento.page.html",
  styleUrls: ["./bateria-alimento.page.scss"],
})
export class BateriaAlimentoPage implements OnInit {
  alimentos: any;
  menu: any = [];
  carbo: any = 0;
  grasa: any = 0;
  protein: any = 0;
  totalFoods: any = [];
  nombre: any;
  constructor(
    private service: NutricionService,
    private ruta: NavController,
    private serviceUser: ApiFitechService,
    public loadingController: LoadingController,
    private utilities: MensajesService
  ) {}

  ngOnInit() {
    this.getResume();
    this.getUser();
  }

  public async getUser() {
    const valor = await this.serviceUser.obtenerUsuario();
    this.nombre = valor["user"].name;
  }

  ionViewDidEnter() {
    this.getResume();
    this.getUser();
  }

  async getResume() {
    /*  this.presentLoading() */
    const valor = await this.service.getResumes();
    if (valor == false) {
      /*  this.loadingController.dismiss() */
      this.utilities.notificacionUsuario(
        "Disculpe, Ha ocurrido un error",
        "danger"
      );
    } else {
      this.alimentos = null;
      this.totalFoods = null;
      this.menu = [];
      this.carbo = 0;
      this.grasa = 0;
      this.protein = 0;

      this.alimentos = valor;
      this.totalFoods = valor["Calories que dederia consumir al dia"];
      this.menu = valor["calorias que ha consumido en el dia"];

      this.menu.forEach((element) => {
        console.log("sumatoria foreach", element.total_carbos);
        this.carbo += element.total_carbos;
        this.grasa += element.total_greases;
        this.protein += element.total_proteins;
      });

      /*  this.loadingController.dismiss() */
      console.log("que recibo", valor);
    }
  }

  validateFood(typeFood) {
    return this.menu.find((data) => data.type_food === typeFood);
  }

  seleccion(url: string) {
    this.ruta.navigateForward([`/alimentos-seleccion/${url}`]);
  }

  progressBar(data, total) {
    if ((data * 100) / total / 100 >= 1) {
      return 1;
    } else {
      return (data * 100) / total / 100;
    }
  }

  devolver() {
    this.ruta.navigateForward([`/tabs/dashboard`]);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Por favor espere...",
    });
    await loading.present();
  }

  listado(url: string) {
    this.ruta.navigateForward([`/listadoalimento/${url}`]);
  }

  tutorial() {
    this.serviceUser.guardartutorial(false);
    this.ruta.navigateForward("tutorial-alimentacion");
  }
}
