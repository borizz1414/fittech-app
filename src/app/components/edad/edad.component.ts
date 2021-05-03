import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-edad',
  templateUrl: './edad.component.html',
  styleUrls: ['./edad.component.scss'],
})
export class EdadComponent implements OnInit {
  habilitar = true
  valor: any;
  constructor( private usuarioservicio:UsuarioService) { }
  @Output() cambiarPantalla = new EventEmitter();

  ngOnInit() {}

  imc(valor){
    console.log(valor.target.value)
  /*   if(valor.target.value == null){
      return
    } */
    this.valor = valor.target.value;
    if(valor.target.value){
      this.usuarioservicio.edad(valor.target.value)
      this.cambiarPantalla.emit(valor.target.value  )
        this.habilitar = false
    }
  }
  
  avanzar(){
   this.cambiarPantalla.emit(1)
  }

}
