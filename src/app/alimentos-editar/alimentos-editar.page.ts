import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NutricionService } from "../services/nutricion.service";
import { MensajesService } from "../services/mensajes.service";
import { NavController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-alimentos-editar",
  templateUrl: "./alimentos-editar.page.html",
  styleUrls: ["./alimentos-editar.page.scss"],
})
export class AlimentosEditarPage implements OnInit {
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
  totalCarbo: any;
  totalgrease: any;
  totalprotein: any;
  measurement: string = "gr";
  activar: number = 0;
  today: any;
  id: any;
  comidaenviar: number;
  info2: boolean;

  nombre2: string;
  carbo2: any;
  proteinas2: any;
  grasas2: any;
  eq2: any;
  selectedFood: any = [];

  constructor(
    private capturar: ActivatedRoute,
    private service: NutricionService,
    private utilities: MensajesService,
    public alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    //  parametros del id
    this.dataRecibida = this.capturar.snapshot.paramMap.get("id");
    switch (this.dataRecibida) {
      case "Desayuno":
        this.getFoods(0);
        this.comidaenviar = 0;
        this.foods = "./assets/img/desayuno-grande.jpg";
        break;
      case "Almuerzo":
        this.getFoods(2);
        this.comidaenviar = 2;
        this.foods = "./assets/img/almuerzo-grande.jpg";
        break;
      case "Snack":
        this.getFoods(1);
        this.comidaenviar = 1;
        this.foods = "./assets/img/snack-grande.jpg";
        break;
      default:
        this.getFoods(3);
        this.comidaenviar = 3;
        this.foods = "./assets/img/cena-grande.jpg";
        break;
    }
  }

  async getFoods(comida: any) {
    this.today = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    console.log(this.today);
    const data = await this.service.ListadoComida(comida, this.today);
    if (data == false) {
      this.utilities.notificacionUsuario(
        "Disculpe, Ha ocurrido un error",
        "danger"
      );
    } else {
      this.alimentos2 = data["menu"].menu_food;
      this.id = data["menu"].id;
    }

    const valor = await this.service.menu(comida);
    if (valor == false) {
      this.utilities.notificacionUsuario(
        "Disculpe, Ha ocurrido un error",
        "danger"
      );
    } else {
      console.log(valor);
      this.alimentos = valor["Foods"];

      // Compara si existe el registro y crea un registro dentro del array para identificar
      // asigna de forma correcta si es casero o unidad
      this.alimentos2.forEach((element) => {
        this.alimentos.forEach((e) => {
          if (e.measure == null) {
            e["measurement"] = "casera";
          } else {
            e["measurement"] = "unidad";
          }

          if (e.id == element.food_id) {
            e.cantidad = parseInt(element.quantity);
            e["convertion"] = element.measure;
          }

          if (e.convertion == 1) {
            e.measurement = "casera";
          } else {
            e.measurement = "unidad";
          }
        });
      });

      console.log("this.alimenot", this.alimentos);
      console.log("this.alimenot2", this.alimentos2);

      this.datosUsuario = valor["Menu"];
      this.totalCarbo = this.datosUsuario.carbo;
      this.totalgrease = this.datosUsuario.grease;
      this.totalprotein = this.datosUsuario.protein;
    }
    this.calculateStats();
  }

  calculateStats() {
    this.carbo = 0;
    this.grasa = 0;
    this.protein = 0;
    console.log(this.alimentos,'b')
    this.alimentos.forEach((element) => {
      if (element.cantidad > 0) {
        if (element.measurement === "casera" && element.eq != null) {
          // console.log(element);
          // console.log('medida casera')

          /*               this.carbo += element.carbo*element.cantidad;
          this.grasa += element.greases*element.cantidad;
          this.protein += element.protein*element.cantidad; */
          this.carbo += this.convertion(
            element.cant,
            element.carbo,
            element.cantidad * element.eq
          );
          this.grasa += this.convertion(
            element.cant,
            element.greases,
            element.cantidad * element.eq
          );
          this.protein += this.convertion(
            element.cant,
            element.protein,
            element.cantidad * element.eq
          );
        } else {
          this.carbo += this.convertion(
            element.cant,
            element.carbo,
            element.cantidad
          );
          this.grasa += this.convertion(
            element.cant,
            element.greases,
            element.cantidad
          );
          this.protein += this.convertion(
            element.cant,
            element.protein,
            element.cantidad
          );
          console.log(element);
          console.log("Aplicar la regla de 3");
        }
      }
    });
  }

  calcularunidaIndividual(
    unidad,
    nombre,
    cant1,
    carbo1,
    grasa1,
    proteina1,
    cantidad1,
    eq1,
    alimento
  ) {
    this.carbo2 = 0;
    this.grasas2 = 0;
    this.proteinas2 = 0;
    this.selectedFood = alimento;
    if (eq1 == null) {
      return;
    } else {
      this.nombre2 = nombre;
      this.eq2 = eq1;
      this.info2 = !this.info2;
    }

    // if(unidad !== 'unidad'){
    //   console.log('medida casera')
    //   this.nombre2 = nombre
    //   this.carbo2 += this.convertion(cant1, carbo1, cantidad1*eq1)
    //   this.grasas2 += this.convertion(cant1, grasa1, cantidad1*eq1)
    //   this.proteinas2 += this.convertion(cant1, proteina1, cantidad1*eq1)
    //   console.log("total casera", this.carbo2, this.grasas2 , this.proteinas2)
    //   this.info2 = !this.info2;
    // }else{
    //   this.nombre2 = nombre
    //   this.carbo2  += this.convertion(cant1, carbo1, cantidad1)
    //   this.grasas2  += this.convertion(cant1, grasa1, cantidad1)
    //   this.proteinas2 += this.convertion(cant1, proteina1, cantidad1)
    //   console.log("total unidad", this.carbo2, this.grasas2 , this.proteinas2)
    //   this.info2 = !this.info2;
    // }
  }

  convertion(a, b, c) {
    //A es el valor unitario
    //B es el equivalente en grasa/proteina/carbo de ese valor unitario
    //C es la incognita a encontrar
    let x;
    x = (b * c) / a;
    console.log("vaalor de la regla de 3", x);
    return x;
  }

  progressBar(data, total) {
    if ((data * 100) / total / 100 >= 1) {
      return 1;
    } else {
      return (data * 100) / total / 100;
    }
  }

  async guardarMenu() {
    let menu = {
      menu_id: this.id,
      type_food: this.comidaenviar,
      total_proteins: this.protein,
      total_greases: this.grasa,
      total_carbos: this.carbo,
      total_calories: 0,
      foods: [],
    };

    this.alimentos.forEach((element) => {
      if (element.cantidad > 0) {
        menu.total_calories += element.calories;
        if (element.measurement == "unidad") {
          //Unidad en gramos, ml, kg etc.
          let food = [element.id, element.cantidad, 0];
          menu.foods.push(food);
        } else {
          //Valor unitario casero.
          if (element.measure) {
            let food = [element.id, element.cantidad, 1];
            menu.foods.push(food);
          } else {
            let food = [element.id, element.cantidad, 1];
            menu.foods.push(food);
          }
        }
      }
    });

    if (
      this.carbo > this.datosUsuario.carbo ||
      this.grasa > this.datosUsuario.grease ||
      this.protein > this.datosUsuario.protein
    ) {
        
            // si excen los alimentos
            const alert = await this.alertController.create({
              message:
                "<h2>Los valores seleccionados exceden los requerimientos según tus objetivos, estar muy por encima puede alejarte de ellos<br><br>¿Deseas continuar?</h2>",
              cssClass: "customMensaje1",
              buttons: [
                {
                  text: "Volver",
                  role: "cancel",
                  cssClass: "cancelButton",
                  handler: (blah) => {
                    return;
                  },
                },
                {
                  text: "Siguiente",
                  cssClass: "confirmButton",
                  handler: () => {
                    if (!menu.foods.length) {
                      this.utilities.alertaInformatica(
                        "Debe seleccionar un alimento"
                      );
                    } else {
                      this.service
                        .ActualizarComida(menu)
                        .then((res) => {
                          console.log(res);
                          this.utilities.notificacionUsuario(
                            this.dataRecibida + " guardado",
                            "dark"
                          );
                          this.navCtrl.navigateRoot("/bateria-alimento");
                        })
                        .catch((err) => {
                          this.utilities.alertaInformatica(
                            "Error al guardar " + this.dataRecibida
                          );
                        });
                    }
                  },
                },
              ],
            });
      
            await alert.present();







    } else {
      // evitar guardar vacio
      console.log(menu);
      if (!menu.foods.length) {
        this.utilities.alertaInformatica("Debe seleccionar un alimento");
      } else {
        this.service
          .ActualizarComida(menu)
          .then((res) => {
            console.log(res);
            this.utilities.notificacionUsuario(
              this.dataRecibida + " actualizado",
              "dark"
            );
            this.navCtrl.navigateRoot("/bateria-alimento");
          })
          .catch((err) => {
            this.utilities.notificacionUsuario(
              "Error al actualizar " + this.dataRecibida,
              "danger"
            );
          });
      }
    }
  }

  selecionartarjeta(tipo) {
    switch (tipo) {
      case 0:
        this.activar = 1;
        this.typefoods = 0;
        break;

      case 1:
        this.activar = 0;
        this.typefoods = 1;
        break;

      case 2:
        this.activar = 2;
        this.typefoods = 2;
        break;

      default:
        break;
    }
  }

  calculador() {}

  change(index) {
    this.alimentos[index].cantidad = 0;
  }

  async comprobarMenu(comida: any) {
    let yesterday = new Date(Date.now() - 86400000)
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");
    console.log("fecha de ayer", yesterday);
    const data = await this.service.ListadoComida(comida, yesterday);
    if (data == false || data["menu"] == null) {
      return;
    }
    this.alimentosAyer = data;
    this.alerta(comida);
  }

  // mensaje de reanudar
  async alerta(mensaje: any) {
    const alert = await this.alertController.create({
      header: `Deseas cargar el menú anterior`,
      cssClass: "customMensaje1",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "cancelButton",
          handler: (blah) => {
            return;
          },
        },
        {
          text: "Confirmar",
          cssClass: "confirmButton",
          handler: () => {
            // mensaje confirmacion
            this.MenuAnterior();
          },
        },
      ],
    });

    await alert.present();
  }

  // cargar menu anterior
  MenuAnterior() {
    let menu = {
      day: this.today,
      type_food: this.alimentosAyer.menu.type_food,
      total_proteins: this.alimentosAyer.menu.total_proteins,
      total_greases: this.alimentosAyer.menu.total_greases,
      total_carbos: this.alimentosAyer.menu.total_carbos,
      total_calories: this.alimentosAyer.menu.total_calories,
      foods: [],
    };

    this.alimentosAyer.menu.menu_food.forEach((element) => {
      let food = [element.food_id, parseInt(element.quantity), "gr"];
      menu.foods.push(food);
    });

    this.service
      .storeMenu(menu)
      .then((res) => {
        console.log(res);
        this.utilities.alertaInformatica(this.dataRecibida + " Guardado");
        this.navCtrl.navigateRoot("/bateria-alimento");
      })
      .catch((err) => {
        this.utilities.alertaInformatica(
          "Error al guardar " + this.dataRecibida
        );
      });
  }

  info(unidad, nombre, cant, carbo, grasa, proteina, cantidad, eq, alimento) {
    if (unidad == "gr") {
      unidad = "unidad";
    }
    console.log(unidad, nombre, cant, carbo, grasa, proteina, cantidad, eq);

    this.calcularunidaIndividual(
      unidad,
      nombre,
      cant,
      carbo,
      grasa,
      proteina,
      cantidad,
      eq,
      alimento
    );
  }

  cerrar() {
    this.info2 = false;
  }
}
