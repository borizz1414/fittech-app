import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiFitechService } from 'src/app/services/api-fitech.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mensajecapacidad',
  templateUrl: './mensajecapacidad.page.html',
  styleUrls: ['./mensajecapacidad.page.scss'],
})
export class MensajecapacidadPage implements OnInit {
  dataRecibida:any
  contador:number
  mensaje:string
  nivel: string;

  constructor(private capturar:ActivatedRoute, private ruta:NavController, private apiService:ApiFitechService, private notificacion:MensajesService) { }

  ngOnInit() {
    this.dataRecibida = this.capturar.snapshot.paramMap.get('id')
    this.contador = parseInt(this.dataRecibida)

    console.log("LO QUE HIZO EL USUARIO",this.contador)

    if(this.contador <= 3){
      this.nivel = 'Básico';
      this.mensaje ="Felicidades por empezar un nuevo estilo de vida con hábitos saludables, mucho esfuerzo para alcanzar el siguiente nivel."
    }

    // else if(this.contador >= 4 && this.contador <= 7){
    //   this.nivel = 'Principiante';
    //   this.mensaje ="Sigue esforzándote y continua esta carrera con mucha disciplina en tu plan, estás a un nivel de tener grandes cambios."
    // }

    else if(this.contador >= 4 && this.contador <= 7){
      this.nivel = 'Intermedio';
      this.mensaje ="Excelente estás a mitad de la carrera, un poco más de esfuerzo y dedicación para llegar a un nivel envidiable."
    }
    else if(this.contador >= 8 && this.contador <= 11){
     this.nivel = 'Avanzado';
     this.mensaje ="No estás aquí por casualidad, muchas sesiones de entreno duro has pasado, ahora enfocate en dar tu máximo, solo así llegarás al siguiente nivel."
    }
    else if(this.contador >= 12){
      this.nivel = 'Pro';
      this.mensaje ="Estás en una minoría privilegiada, que llevan el fitness cómo estilo de vida, admiración, aplausos y solo yendo al límite podrás alcanzar un nivel insuperable."
    }


  }

  async finalizar(){
    const validar = await this.apiService.TestHome(this.contador)
    if(validar){
      // no es la forma pero no se me actualizaba el ngIf por la parte del tab / tuve que remover desde aca
      // igual cuando el usuario se desconecta y regresa el ngif oculta la ventana
      // document.getElementById("ocultar").remove()
      this.ruta.navigateRoot(["/tabs/dashboard"])
      this.notificacion.notificacionUsuario("Gracias por realizar el test","dark")
    }else{
      this.notificacion.notificacionUsuarioFinalizar("Ocurrio un error, revise su conexión","primary")
    }

  }

}
