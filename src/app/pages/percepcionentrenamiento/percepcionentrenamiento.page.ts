import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';
import { ApiFitechService } from 'src/app/services/api-fitech.service';

@Component({
  selector: 'app-percepcionentrenamiento',
  templateUrl: './percepcionentrenamiento.page.html',
  styleUrls: ['./percepcionentrenamiento.page.scss'],
})
export class PercepcionentrenamientoPage implements OnInit {
  comentario
  puntaje
  evaluarColor:boolean 
  evaluarColor1:boolean 
  evaluarColor2:boolean
  evaluarColor3:boolean
  evaluarColor4:boolean

  constructor( private ruta:Router , private mensajeservice:MensajesService , private apiService:ApiFitechService,
    private notificacion:MensajesService) { }

  ngOnInit() {
  }


  puntuacion(valor) {
    console.log(this.comentario)
    console.log("valor de la puntuacion" , valor)
    this.puntaje = valor
    switch (valor) {
      case 0:
            {
              this.evaluarColor = false
              this.evaluarColor1 = true
              this.evaluarColor2 = true
              this.evaluarColor3 = true
              this.evaluarColor4 = true
            }
        break;

      case 1:
        {
          this.evaluarColor = true
          this.evaluarColor2 = true
          this.evaluarColor3 = true
          this.evaluarColor4 = true
          this.evaluarColor1 = false

        }
        break;

      case 2:
        {
          this.evaluarColor1 = true
          this.evaluarColor = true
          this.evaluarColor3 = true
          this.evaluarColor4 = true
          this.evaluarColor2 = false

        }
        break;

      case 3:
        {
          this.evaluarColor1 = true
          this.evaluarColor2 = true
          this.evaluarColor = true
          this.evaluarColor4 = true
          this.evaluarColor3 = false

        }
        break;

        case 4:
        {
          this.evaluarColor1 = true
          this.evaluarColor2 = true
          this.evaluarColor3 = true
          this.evaluarColor = true
          this.evaluarColor4 = false

        }
        break;

      default:
        break;
    }
  }


  async final(){
      if(this.puntaje == null){
        this.mensajeservice.alertaInformatica('Debes clasificar la rutina')
      }else{
        const validar = await this.apiService.finalizarRutinaHome(this.puntaje)
          if(validar){
            this.ruta.navigateByUrl("/tabs/dashboard")
          }else{
            this.notificacion.notificacionUsuario("Ocurrio un error, revise su conexión","primary")
          }
      }
  }

}
