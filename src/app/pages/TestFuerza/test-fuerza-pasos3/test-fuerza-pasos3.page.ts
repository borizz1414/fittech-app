import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-test-fuerza-pasos3',
  templateUrl: './test-fuerza-pasos3.page.html',
  styleUrls: ['./test-fuerza-pasos3.page.scss'],
})
export class TestFuerzaPasos3Page implements OnInit {
  nombre:any
  constructor(private ruta:NavController,private usuarioservicio:UsuarioService) { }

  ngOnInit() {

    if(this.usuarioservicio.selecionTestEjercicio.pressbanca){
      this.nombre = 'Press banca'
   }
    if(this.usuarioservicio.selecionTestEjercicio.squat){
      this.nombre = 'Squat'
   }
   if(this.usuarioservicio.selecionTestEjercicio.legcurl){
    this.nombre = 'Leg curl'
   }
   if(this.usuarioservicio.selecionTestEjercicio.legextension){
    this.nombre = 'Leg extension'
   }


  }

  siguiente(){
    this.ruta.navigateForward('test-fuerza-pasos4')
  }

}
