import { Component, OnInit } from '@angular/core';
import { ApiFitechService } from '../services/api-fitech.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bateriarutina',
  templateUrl: './bateriarutina.page.html',
  styleUrls: ['./bateriarutina.page.scss'],
})
export class BateriarutinaPage implements OnInit {
  serie:any = {}
  contador:number = 1
  nombre
  repeticion
  peso
  mostrar = false
  evaluar
  
  constructor(private ApiService:ApiFitechService,private ruta:Router) { }

  ngOnInit() {
    this.evaluar = this.ApiService.verificarEntrenamiento

    this.serie =  this.ApiService.rutina
    this.nombre = this.serie[0]['name']
    this.repeticion = this.serie[0]['repetitions']
    this.peso = this.serie[0]['weight']

    console.log(this.peso)

    console.log(this.serie)
  }

  siguiente(){
    const longitud = this.serie.length
    if(this.contador >= longitud){
      this.mostrar = true
      return
    }
    this.nombre = this.serie[this.contador]['name']
    this.repeticion = this.serie[this.contador]['repetitions']
    this.peso = this.serie[this.contador]['weight']

    this.contador = this.contador + 1
  }

  atras(){
    const longitud = 0
    if(this.contador <= longitud){
      return
    }
    this.contador = this.contador - 1
    this.nombre = this.serie[this.contador]['name']
    this.repeticion = this.serie[this.contador]['repetitions']
    this.peso = this.serie[this.contador]['weight']
  }

  finalizar(){
    this.ruta.navigateByUrl("/estiramientos")
  }



}
