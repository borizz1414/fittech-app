import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MensajesService } from '../services/mensajes.service';
import { TiendaService } from '../services/tienda.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-tienda-productos',
  templateUrl: './tienda-productos.page.html',
  styleUrls: ['./tienda-productos.page.scss'],
})
export class TiendaProductosPage implements OnInit {
  productos:any = []
  buscador:any = []
  name:any
  searchTerm: any;

  constructor( private service: TiendaService,
              private route: ActivatedRoute,
              public loadingController: LoadingController,
              private iab: InAppBrowser,
              private utilities: MensajesService,) {
                this.route.queryParams.subscribe(params => {
                  this.productos = JSON.parse(params["shop"]);
                  this.name = this.productos.name
                  this.productos = this.productos.product
                  this.buscador = this.productos
                  });
               }

  ngOnInit() {
  }

  search(){
     if(!this.searchTerm){
        this.productos = this.buscador
     }else{
       this.productos = this.filterItems()
     }
  }

  filterItems(){
    return this.productos.filter((item) => {
      console.log(item);
      return (
        item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 
      );
    });
  }

  async sendProduct(id){
    this.presentLoading()
    const valor = await this.service.sendProducts(id)
      if(valor == false ){
        this.loadingController.dismiss()
      this.utilities.notificacionUsuario('Disculpe, Ha ocurrido un error', 'danger')
      }else{
        this.loadingController.dismiss()
        const page = "https://smartpronutrition.com/supplements-shop/"
        this.iab.create(page,'_blank')
      }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Por favor espere...',
      cssClass: 'my-loading',
    });
    await loading.present();
  }



}
