import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ruta:NavController , private usuarioservicio:UsuarioService){}

  genero(valor){
    console.log(valor)
    this.usuarioservicio.genero(valor)
    this.ruta.navigateForward(['/objetivo'])
  }

  

}
