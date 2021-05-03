import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NutricionService } from "../services/nutricion.service";
import { MensajesService } from "../services/mensajes.service";
import { NavController, AlertController } from "@ionic/angular";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-listadoalimento",
  templateUrl: "./listadoalimento.page.html",
  styleUrls: ["./listadoalimento.page.scss"],
})
export class ListadoalimentoPage implements OnInit {
  dataRecibida: any;
  alimentos: any = [];
  alimentosAyer: any = [];
  datosUsuario: any = [];
  alimentos2: any = [];
  foods: string;
  carbo: any = 0;
  protein: any = 0;
  grasa: any = 0;
  typefoods: number = 1;
  comidaenviar: number;
  totalCarbo: any;
  totalgrease: any;
  totalprotein: any;
  measurement: string = "gr";
  today: any;
  id: any;
  activar: boolean = true;
  typefood: any;
  form: FormGroup;

  constructor(
    private capturar: ActivatedRoute,
    private service: NutricionService,
    private utilities: MensajesService,
    private fb: FormBuilder,
    public alertController: AlertController,
    private ruta: NavController
  ) {
    this.form = this.fb.group({
      borrar: [null, Validators.required],
    });
  }

  ngOnInit() {
    //  parametros del id
  }

  async getFoods(comida: any) {
    this.today = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    const data: any = await this.service.ListadoComida(comida, this.today);
    if (data == false) {
      this.utilities.notificacionUsuario(
        "Disculpe, Ha ocurrido un error",
        "danger"
      );
    } else {
      // peticion 1
      this.alimentos2 = data["menu"].menu_food;
      this.id = data["menu"].id;
    }

    //peticion 2
    const valor = await this.service.menu(comida);
    if (valor == false) {
      this.utilities.notificacionUsuario(
        "Disculpe, Ha ocurrido un error",
        "danger"
      );
    } else {
      // console.log(valor)
      this.alimentos = valor["Foods"];

      this.alimentos2.forEach((element) => {
        this.alimentos.forEach((e) => {
          // aca estas inyectando los valores al array
          // aqui en donde deberias aplicar  la regla de 3 y luego meterlo
          if (e.measure == null) {
            e["measurement"] = "unidad";
          } else {
            e["measurement"] = "gr";
          }

          if (e.id == element.food_id) {
            e.cantidad = parseInt(element.quantity);
          }

          if (e.id == element.food_id) {
            e["convertion"] = element.measure;
          }
        });
      });

      console.log("LISTA DE MENU", this.alimentos);
      console.log("MENU DE HOY", this.alimentos2);
      this.datosUsuario = valor["Menu"];
      this.totalCarbo = this.datosUsuario.carbo;
      this.totalgrease = this.datosUsuario.grease;
      this.totalprotein = this.datosUsuario.protein;
    }
    this.calculateStats();
  }

  ucFirst(str) {
    /*   str = str.replace(/ /g, "."); */
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }
  ionViewWillEnter() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get("id");
    switch (this.dataRecibida) {
      case "Desayuno":
        this.typefood = 0;
        this.getFoods(0);
        this.foods = "./assets/img/desayuno-grande.jpg";
        break;
      case "Almuerzo":
        this.typefood = 2;
        this.getFoods(2);
        this.foods = "./assets/img/almuerzo-grande.jpg";
        break;
      case "Snack":
        this.getFoods(1);
        this.typefood = 1;
        this.foods = "./assets/img/snack-grande.jpg";
        break;
      default:
        this.getFoods(3);
        this.typefood = 3;
        this.foods = "./assets/img/cena-grande.jpg";
        break;
    }
  }

  calculateStats() {
    this.carbo = 0;
    this.grasa = 0;
    this.protein = 0;

    this.alimentos.forEach((element) => {
      console.log(element.cantidad);

      if (element.cantidad > 0) {
        console.log(element);

        if (element.convertion === 1 && element.eq != null) {
          console.log(element);
          console.log("cantidad",element.cantidad);
          console.log("eq",element.eq);
          console.log('medida casera')
          console.log("Convirtiendo con regla de 3");

          this.carbo += this.convertion( element.cant, element.carbo, element.cantidad * element.eq);
          this.grasa += this.convertion(element.cant,element.greases,element.cantidad * element.eq);
          this.protein += this.convertion(element.cant,element.protein,element.cantidad * element.eq);
        } else {
          console.log("Convirtiendo con regla de 3 en el else");
          this.carbo += this.convertion(element.cant, element.carbo,element.cantidad);
          this.grasa += this.convertion(element.cant,element.greases,element.cantidad);
          this.protein += this.convertion(element.cant,element.protein,element.cantidad);
          console.log(element)
          console.log('Aplicar la regla de 3')
        }
      }
      //console.log("No convirtio nada");
    });
  }

  convertion(a, b, c) {
    //A es el valor unitario
    //B es el equivalente en grasa/proteina/carbo de ese valor unitario
    //C es la incognita a encontrar
    let x;
    x = (b * c) / a;
    // console.log(x)
    return x;
  }

  progressBar(data, total) {
    if ((data * 100) / total / 100 >= 1) {
      return 1;
    } else {
      return (data * 100) / total / 100;
    }
  }

  guardarMenu() {
    // borrar todo
    this.service
      .BorrarMenu(this.id)
      .then((res) => {
        // console.log(res);
        this.utilities.notificacionUsuario(
          this.dataRecibida + " actualizado",
          "dark"
        );
        this.ruta.navigateRoot("/bateria-alimento");
      })
      .catch((err) => {
        this.utilities.notificacionUsuario(
          "Error al guardar " + this.dataRecibida,
          "danger"
        );
      });
  }

  change(index) {
    this.alimentos[index].cantidad = 0;
  }

  B_todo() {
    this.alimentos2 = [];
    this.form.controls.borrar.setValue("borra");
  }

  agregar() {
    this.ruta.navigateForward([`/alimentos-editar/${this.dataRecibida}`]);
  }
}
