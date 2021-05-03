import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiFitechService } from '../services/api-fitech.service';

@Component({
  selector: 'app-modal-medidas',
  templateUrl: './modal-medidas.page.html',
  styleUrls: ['./modal-medidas.page.scss'],
})
export class ModalMedidasPage implements OnInit {
  @Input() nombre;
  image: string;

  constructor(public modalController: ModalController,private apiService:ApiFitechService) { }

  async ngOnInit() {
    const {gender} = await this.apiService.cargarNombreUsuario()
      console.log(gender)
  
    if(gender === 1){
      switch (this.nombre) {
        case 'Cintura minima':
          this.nombre = 'Cintura mínima'
          this.image = './assets/img/cintura_minima.jpg'
          break
        case 'Cintura maxima':
          this.nombre = 'Cintura máxima'
          this.image = './assets/img/cintura_maxima.jpg'
          break
        case  'Cadera':
          this.image = './assets/img/cadera.jpg'
          break
        case  'Cuello':
          this.image = './assets/img/cuello.jpg'
          break
        case  'Muslo derecho':
          this.image = './assets/img/muslo_derecho.jpg'
          break
        case  'Muslo izquierdo':
          this.image = './assets/img/muslo_izquierdo.jpg'
          break
        case  'Brazo relajado derecho':
          this.image = './assets/img/brazo_relajado_derecho.jpg'
          break
        case  'Brazo relajado izquierdo':
          this.image = './assets/img/brazo_relajado_izquierdo.jpg'
          break
        case  'Brazo flexionado derecho':
          this.image = './assets/img/brazo_flexionado_derecho.jpg'
          break
        case  'Brazo flexionado izquierdo':
          this.image = './assets/img/brazo_flexionado_izquierdo.jpg'
          break
  
        case  'Pantorrilla derecho':
          this.image = './assets/img/pantorrilla_derecha.jpg'
          break
        case  'Pantorrilla izquierda':
          this.image = './assets/img/pantorrilla_izquierda.jpg'
          break
  
        case  'Torax':
          this.nombre = 'Tórax'
          this.image = './assets/img/pecho.jpg'
          break
  
        default:
          break
      }
    }else{
      switch (this.nombre) {
        case 'Cintura minima':
          this.nombre = 'Cintura mínima'
          this.image = './assets/img/cintura_minima_mujer.jpg'
          break
        case 'Cintura maxima':
          this.nombre = 'Cintura máxima'
          this.image = './assets/img/cintura_maxima_mujer.jpg'
          break
        case  'Cadera':
          this.image = './assets/img/cadera_mujer.jpg'
          break
        case  'Cuello':
          this.image = './assets/img/cuello_mujer.jpg'
          break
        case  'Muslo derecho':
          this.image = './assets/img/muslo_derecho_mujer.jpg'
          break
        case  'Muslo izquierdo':
          this.image = './assets/img/muslo_izquierdo_mujer.jpg'
          break
        case  'Brazo relajado derecho':
          this.image = './assets/img/brazo_relajado_derecho_mujer.jpg'
          break
        case  'Brazo relajado izquierdo':
          this.image = './assets/img/brazo_relajado_izquierdo_mujer.jpg'
          break
        case  'Brazo flexionado derecho':
          this.image = './assets/img/brazo_flexionado_derecho.jpg'
          break
        case  'Brazo flexionado izquierdo':
          this.image = './assets/img/brazo_flexionado_izquierdo.jpg'
          break
  
        case  'Pantorrilla derecho':
          this.image = './assets/img/pantorrilla_derecha_mujer.jpg'
          break
        case  'Pantorrilla izquierda':
          this.image = './assets/img/pantorrilla_izquierda_mujer.jpg'
          break
  
        case  'Torax':
          this.nombre = 'Tórax'
          this.image = './assets/img/pecho_mujer.jpg'
          break
  
        default:
          break
      }
    }
    console.log(this.nombre)
  }

  salir(){
    this.modalController.dismiss()
  }

}
