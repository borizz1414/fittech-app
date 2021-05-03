import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFitechService } from './api-fitech.service';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http: HttpClient, private service: ApiFitechService) { }

    // listado de productos
    getProducts(){
      return new Promise( async (resolve, reject)  => {
        const headers = new HttpHeaders({
          'Authorization': 'Bearer ' + await this.service.cargarToken(),
          'Content-Type':'application/json',
        })
          // si no se envia un dato no  funciona la ruta
        const data = {
          valor : "ignorar"
        } 

        this.http.post(`http://fittech247.com/fittech/api/auth/products`,data,{headers})
            .subscribe(resp=>{
              resolve(resp['Productos'])
            },err=>{
              reject(false)
            })
        })
    }

  // listado de productos
    sendProducts(id){
      return new Promise( async (resolve, reject)  => {
        const headers = new HttpHeaders({
          'Authorization': 'Bearer ' + await this.service.cargarToken(),
          'Content-Type':'application/json',
        })
          // si no se envia un dato no  funciona la ruta
        const data = {
          product_id : id
        } 
  
        this.http.post(`http://fittech247.com/fittech/api/auth/pay-products`,data,{headers})
            .subscribe(resp=>{
              resolve(resp)
            },err=>{
              reject(false)
            })
        })
    }

}
