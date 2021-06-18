import { Component, OnInit } from "@angular/core";
import {
  ActionSheetController,
  LoadingController,
  NavController,
  ModalController,
} from "@ionic/angular";
import { MensajesService } from "../services/mensajes.service";
import { NutricionService } from "../services/nutricion.service";
import es from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { PaypalPage } from "../paypal/paypal.page";

interface configPrice {
  usd: number;
  cop: number;
  description: string;
  payu_link: string;
}
@Component({
  selector: "app-planes-pagos",
  templateUrl: "./planes-pagos.page.html",
  styleUrls: ["./planes-pagos.page.scss"],
})
export class PlanesPagosPage implements OnInit {
  dato: any;
  slideOpts: any;
  configPrice: configPrice = {
    usd: 0,
    cop: 0,
    description:'',
    payu_link:''
  };
  constructor(
    private service: NutricionService,
    private utilities: MensajesService,
    public actionSheetController: ActionSheetController,
    private ruta: NavController,
    private iab: InAppBrowser,
    public loadingController: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    registerLocaleData(es);
    this.getPremium();
  }

  async getPremium() {
    this.presentLoading();
    const valor = await this.service.GetPrice();
    this.loadingController.dismiss();
    if (valor == false) {
      this.utilities.notificacionUsuario(
        "Ocurrio un error, revise su conexión",
        "danger"
      );
    } else {
      this.dato = valor;
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Por favor espere...",
      cssClass: "my-loading",
    });
    await loading.present();
  }

  pago(id) {
    switch (id) {
      case 1:
        this.ruta.navigateRoot(["/"]);
        break;

      case 2:
        console.log("pagar2");
        this.configPrice = {
          usd: 8.99,
          cop: 32000,
          description:'Plan Mensual',
          payu_link: 'https://biz.payulatam.com/L0dd07cB2F9B836'
        };
        this.planespagos();
        break;

      case 3:
        console.log("pagar3");
        this.configPrice = {
          usd: 20.99,
          cop: 75000,
          description:'Plan Trimestral',
          payu_link: 'https://biz.payulatam.com/L0dd07cEB873EDA'
        };
        this.planespagos();
        break;

      case 4:
        console.log("pagar4");
        this.configPrice = {
          usd: 36.99,
          cop: 132000,
          description:'Plan Semestral',
          payu_link: 'https://biz.payulatam.com/L0dd07cEF3E69E8'
        };
        this.planespagos();
        break;

      case 5:
        console.log("pagar5");
        this.configPrice = {
          usd: 63.99,
          cop: 228000,
          description:'Plan Anual',
          payu_link: 'https://biz.payulatam.com/L0dd07cD1161D13'
        };
        this.planespagos();
        break;

      default:
        break;
    }
  }

  async planespagos() {
    const actionSheet = await this.actionSheetController.create({
      header: "Método de pagos",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Paypal - USD",
          icon: "card-outline",
          handler: () => {
            // this.ruta.navigateForward('/paypal');
            this.modalPaypal(this.configPrice.usd);
          },
        },
        {
          text: "PayU - COP",
          icon: "card-outline",
          handler: () => {
            const page = this.configPrice.payu_link;
            this.iab.create(page, "_blank");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
  async modalPaypal(price: number) {
    console.log("modal paypal");
    const modal = await this.modalCtrl.create({
      component: PaypalPage,
      cssClass: "my-custom-class",
      componentProps:{
        price: price,
        description:this.configPrice.description
      }
    });
    return await modal.present();
  }
}
