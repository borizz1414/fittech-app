import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popmensaje',
  templateUrl: './popmensaje.component.html',
  styleUrls: ['./popmensaje.component.scss'],
})
export class PopmensajeComponent implements OnInit {
  @Input("value") value;
  mensaje

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    if(this.value == "sedentario"){
      this.mensaje = "No hago ejercicios"
    }
    if(this.value == "ligero"){
      this.mensaje = "Hago paseos frecuentemente"
    }
    if(this.value == "moderado"){
      this.mensaje = "Hago ejercicios sin mucha intensidad"
    }
    if(this.value == "activo"){
      this.mensaje = "Hago ejercicios de 3 a 5 veces por semanas"
    }
    if(this.value == "muyactivo"){
      this.mensaje = "Hago ejercicios 5 veces ala semana."
    }
  }

  Cerrar(){
    this.popoverController.dismiss()
  }

}
