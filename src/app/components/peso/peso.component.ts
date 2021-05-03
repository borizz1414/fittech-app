import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.scss'],
})
export class PesoComponent implements OnInit {
  numero:any 
  habilitar = true
  mensaje = "Kg"


  constructor(private usuarioservicio:UsuarioService) { }
  @Output() cambiarPantalla = new EventEmitter();

  ngOnInit() {}

  valor(numero){
    if(!isNaN(numero.target.value) && numero.target.value.length > 1){
      if( numero.target.value > 200 ){
        this.habilitar = true
        this.mensaje = "El valor maximo es 200 kg"
      }else{
        this.numero = numero.target.value
        this.habilitar = false
        this.mensaje = "Kg"
      }
   }else{
     this.habilitar = true
     this.mensaje = "introduzca un valor correcto"
   }
  }
 
   avanzar(){
     this.usuarioservicio.peso(this.numero)
     this.cambiarPantalla.emit(3)
   }

   atras(){
    this.cambiarPantalla.emit(1)
  }

}
