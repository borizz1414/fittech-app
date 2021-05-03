import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiFitechService } from './api-fitech.service';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


const URL  = environment.url

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  datosPersonales = {
    nombre:null,
    correo:null,
    genero:null,
    objetivo:null,
    nivelActividad:null,
    experiencia:null,
    lugarEntrenar:null,
    edad:null,
    estatura:null,
    peso:null,
    patologiaCardiaca:null,
    enfermedadPulmonar:null,
    hipertension:0,
    hipotension:0,
    desvanecimiento:0,
    diabete:0,
    dolorPecho:0,
    fatiga:0,
    noEnfermedad:0,
    insuficiencia_renal:0,
    password:null
  }

  condicionPersona = {
    latidos:null,
    arritmia_corazon:null,
    ataque_corazon:null,
    operacion_corazon:null,
    enfermedad_corazon:null,
    presion_corazon:null,
    diabete_corazon:null,
    muerte_prematura:null,
    insuficiencia_renal:null,
    ninguna:null
  }

  selecionTestEjercicio ={
    squat:false,
    pressbanca:false,
    legcurl:false,
    legextension:false
  }

  constructor(private service: ApiFitechService, private http: HttpClient) { }

  genero(valor){
    this.datosPersonales.genero = valor
  }

  objetivo(valor){
    this.datosPersonales.objetivo = valor
  }

  edad(valor){
    this.datosPersonales.edad = valor
  }

  estatura(valor){
    this.datosPersonales.estatura = valor
  }

  peso(valor){
    this.datosPersonales.peso = valor
  }

  experiencia(valor){
    this.datosPersonales.experiencia = valor
  }

  entrenar(valor){
   this.datosPersonales.lugarEntrenar = valor
  }

  nivel(valor){
    this.datosPersonales.nivelActividad = valor
  }

  enfermedades(valor){
    this.datosPersonales.patologiaCardiaca = valor.patologiaCardiaca
      if(valor.enfermedadPulmonar==null){
        this.datosPersonales.enfermedadPulmonar = 0
      }else{
        this.datosPersonales.enfermedadPulmonar = valor.enfermedadPulmonar
      }
    this.datosPersonales.hipertension = valor.hipertension
    this.datosPersonales.hipotension = valor.hipotension
    this.datosPersonales.desvanecimiento = valor.desvanecimiento
    this.datosPersonales.diabete = valor.diabete
    this.datosPersonales.dolorPecho = valor.dolorPecho
    this.datosPersonales.insuficiencia_renal = valor.insuficiencia_renal
    if(valor.noEnfermedad){
      this.datosPersonales.noEnfermedad = 1 
    }else{
      this.datosPersonales.noEnfermedad = 0
    }

  }

  redesSociales(valor){
    this.datosPersonales.nombre = valor.first_name
    this.datosPersonales.correo = valor.email
  }

  registrarEmail(valor){
    this.datosPersonales.nombre = valor.nombre
    this.datosPersonales.password = valor.contra
    this.datosPersonales.correo = valor.email
  }

  latidos(valor){
    this.condicionPersona.latidos = valor
  }

  condicionCorazon(valor){
    if(valor.arritmia_corazon){
      this.condicionPersona.arritmia_corazon = 1
    }else{
      this.condicionPersona.arritmia_corazon = 0
    }

    if(valor.ataque_corazon){
      this.condicionPersona.ataque_corazon = 1
    }else{
      this.condicionPersona.ataque_corazon = 0
    }

    if(valor.operacion_corazon){
      this.condicionPersona.operacion_corazon = 1
    }else{
      this.condicionPersona.operacion_corazon = 0
    }

    if(valor.enfermedad_corazon){
      this.condicionPersona.enfermedad_corazon = 1
    }else{
      this.condicionPersona.enfermedad_corazon = 0
    }

    if(valor.presion_corazon){
      this.condicionPersona.presion_corazon = 1
    }else{
      this.condicionPersona.presion_corazon = 0
    }

    if(valor.diabete_corazon){
      this.condicionPersona.diabete_corazon = 1
    }else{
      this.condicionPersona.diabete_corazon = 0
    }

    if(valor.muerte_prematura){
      this.condicionPersona.muerte_prematura = 1
    }else{
      this.condicionPersona.muerte_prematura = 0
    }

    if(valor.insuficiencia_renal){
      this.condicionPersona.insuficiencia_renal = 1
    }else{
      this.condicionPersona.insuficiencia_renal = 0
    }

    if(valor.ninguna){
      this.condicionPersona.ninguna = 1
    }else{
      this.condicionPersona.ninguna = 0
    }
    
  }

  TestSelecion(valor){
    if(valor === 1){
      this.selecionTestEjercicio.pressbanca = true
      this.selecionTestEjercicio.legcurl = false
      this.selecionTestEjercicio.legextension = false
      this.selecionTestEjercicio.squat = false
    }
    if(valor === 2){
      this.selecionTestEjercicio.pressbanca = false
      this.selecionTestEjercicio.legcurl = false
      this.selecionTestEjercicio.legextension = false
      this.selecionTestEjercicio.squat = true
    }
    if(valor === 3){
      this.selecionTestEjercicio.legcurl = true
      this.selecionTestEjercicio.pressbanca = false
      this.selecionTestEjercicio.legextension = false
      this.selecionTestEjercicio.squat = false
    }
    if(valor === 5){
      this.selecionTestEjercicio.legextension = true
    }
  }

  measurement_record(record){
    console.log("que datos se esta enviando ala ruta",record)
      return new Promise( async (resolve, reject)  => {
        const headers = new HttpHeaders({
          'Authorization': 'Bearer ' + await this.service.cargarToken(),
          'Content-Type':'application/json',
        }) 

        
        this.http.post(`${URL}/auth/measurement_record`,record, {headers})
        .subscribe(resp=>{
          console.log(resp)
          resolve(true)
        },err=>{
          console.log(err)
          reject(false)
          })
        }).catch(res=>{
          console.log("ERROR")
        })
  
  }
  

}
