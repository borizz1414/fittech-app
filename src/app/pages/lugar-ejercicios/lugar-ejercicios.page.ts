import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-lugar-ejercicios',
  templateUrl: './lugar-ejercicios.page.html',
  styleUrls: ['./lugar-ejercicios.page.scss'],
})
export class LugarEjerciciosPage implements OnInit {

  constructor(private usuarioservicio:UsuarioService,private ruta:NavController) { }

  ngOnInit() {
  }

  entrenar(valor){
    console.log(valor)
    this.usuarioservicio.entrenar(valor)
    this.ruta.navigateForward(['/pasoinicial'])
  }

  atras(){
    this.ruta.pop()
  }

}
