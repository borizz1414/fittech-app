import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.page.html',
  styleUrls: ['./objetivo.page.scss'],
})
export class ObjetivoPage implements OnInit {

  constructor(private ruta:NavController , private usuarioservicio:UsuarioService) { }
  info: boolean;

  ngOnInit() {
  }

  objetivo(valor){
    this.usuarioservicio.objetivo(valor)
    this.ruta.navigateForward(['/lugar-ejercicios'])
  }

  login(){
    this.ruta.navigateForward(['/login'])
  }

  mostrar(valor){
    this.info = !valor;
}
 
cerrar(){
  this.info = false;
}

}
