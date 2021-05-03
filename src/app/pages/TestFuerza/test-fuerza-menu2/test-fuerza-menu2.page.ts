import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-test-fuerza-menu2',
  templateUrl: './test-fuerza-menu2.page.html',
  styleUrls: ['./test-fuerza-menu2.page.scss'],
})
export class TestFuerzaMenu2Page implements OnInit {

  constructor(private ruta:Router,private usuarioservicio:UsuarioService) { }

  ngOnInit() {
  }

  pressbanca(){
    console.log("pres banca")
    //this.ruta.navigateByUrl('/test-fuerza-pasos4/banca');
    this.ruta.navigateByUrl('/test-fuerza-pasos1');
    this.usuarioservicio.TestSelecion(1)
  }
  
  squat(){
    console.log("squat")
    //this.ruta.navigateByUrl('/test-fuerza-pasos4/squat');
    this.ruta.navigateByUrl('/test-fuerza-pasos1');
    this.usuarioservicio.TestSelecion(2)
  }
  legcurl(){
    console.log("leg curl")
    //this.ruta.navigateByUrl('/test-fuerza-pasos4/curl');
    this.ruta.navigateByUrl('/test-fuerza-pasos1');
    this.usuarioservicio.TestSelecion(3)
  }
  legextension(){
    console.log("leg extension")
    //this.ruta.navigateByUrl('/test-fuerza-pasos4/extension');
    this.ruta.navigateByUrl('/test-fuerza-pasos1');
    this.usuarioservicio.TestSelecion(4)
  }

  termina(){
    this.ruta.navigateByUrl('/test-fuerza-categoria');
  }

}
