import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-estatura2',
  templateUrl: './estatura2.component.html',
  styleUrls: ['./estatura2.component.scss'],
})
export class Estatura2Component implements OnInit {
  numero:any  
  numero2:any
  habilitar = true
  habilitar2 = true
  pasar = true
  mensaje = ""
  mensaje2 = ""
  edad:any;
  estatura:number = 0;
  peso_:number = 0;
  height = 'Cm';
  weight = 'Kg';
  constructor(private usuarioservicio:UsuarioService) { }

  @Output() progressbar = new EventEmitter();
  @Output() back = new EventEmitter();
  @Output() estatura_ = new EventEmitter();
  @Output() peso2 = new EventEmitter();

  ngOnInit() {

  }
    limpiar(){
     this.estatura = null
    }
    limpiar2(){
      this.peso_ = null
     }
     
    valor(numero){
      this.estatura_.emit(null);
      console.log("valor",numero.target.value)
      if(this.height == 'Cm'){
        if(!isNaN(numero.target.value) && numero.target.value.length > 2){
          console.log(numero.target.value);
          
           if( numero.target.value > 250 ){
             this.habilitar = true
             this.mensaje = "El valor maximo es 250 Cm"
           }else{
             this.numero = numero.target.value
             this.habilitar = false
             this.mensaje = ""
             this.habilitarboton();
             this.estatura_.emit(numero.target.value);
           }
        }else{
          this.habilitar = true
          this.mensaje = "introduzca un valor correcto"
        }
      }else{
        if(!isNaN(numero.target.value) && numero.target.value > 22){
          console.log(numero.target.value*2.54);
          
          if( numero.target.value*2.54 > 250 ){
            this.habilitar = true
            this.mensaje = "El valor maximo es 98 Pulgadas"
          }else{
            this.numero = numero.target.value
            this.habilitar = false
            this.mensaje = "";
            this.estatura_.emit(numero.target.value*2.54);
            this.habilitarboton()
          }
       }else{
         this.habilitar = true;
         this.estatura_.emit(null);
         this.mensaje = "introduzca un valor correcto"
       }
      }


    }

    valor2(numero){
      this.peso2.emit(null);
      if(this.weight == 'Kg'){    
        if(!isNaN(numero.target.value) && numero.target.value.length > 1){
          console.log(numero.target.value);
          
          if( numero.target.value > 200 ){
            this.habilitar2 = true
            this.mensaje2 = "El valor maximo es 200 kg"
          }else {
            this.numero2 = numero.target.value
            this.mensaje2 = ""
            this.habilitar2 = false    
            this.habilitarboton()
            this.peso2.emit(numero.target.value);
          }  
    
       }else{
         this.habilitar2 = true
         this.mensaje2 = "introduzca un valor correcto"    
       }
      }else{
        if(!isNaN(numero.target.value) && numero.target.value.length > 1){
          console.log(numero.target.value/2.205);
          
          if( numero.target.value/2.205 > 200 ){
            this.habilitar2 = true
            this.mensaje2 = "El valor maximo es 440 Libras";
            
          }else {
            this.numero2 = numero.target.value
            this.mensaje2 = ""
            this.habilitar2 = false    
            this.peso2.emit(numero.target.value/2.205);
            this.habilitarboton()
          }  
    
       }else{
         this.habilitar2 = true
         this.mensaje2 = "introduzca un valor correcto";    
       }
      }

    }

    habilitarboton(){
      if(this.habilitar === false && this.habilitar2 === false){
        this.pasar = false  
      }
    }
 
  
  avanzar(){
  
    if(this.weight != 'Kg'){
      this.usuarioservicio.peso(this.numero2/2.205)
    }else{
      this.usuarioservicio.peso(this.numero2)
    }
    if(this.height != 'Cm'){
      this.usuarioservicio.estatura(this.numero*2.54)
    }else{
      this.usuarioservicio.estatura(this.numero)
    }
   
  }

  atras(){
    
    this.progressbar.emit(0.5);
    this.back.emit('')
  }

  imc(valor){
    console.log(valor.target.value)
    if(valor.target.value == null){
      return
    }
    this.usuarioservicio.edad(valor.target.value)
      this.habilitar = false
  }

  checkEdad(valor){
    this.edad = valor;
  }
  altura(event:any){
    this.height = event.detail.value;
   this.estatura = 0;
  }
  peso(event){
    this.weight = event.detail.value;
    this.peso_ = 0;
  }
}
