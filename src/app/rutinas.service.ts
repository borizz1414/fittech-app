import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RutinasService {
 URL  = environment.url
  constructor(private storage: Storage, private http: HttpClient) { }

  getRutina(){
    return new Promise( async resolve => {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + await this.storage.get('token'),
        'Content-Type':'application/json',
      })
      this.http.get(`${this.URL}/auth/routine-home`,{headers})
          .subscribe(res=>{
            console.log(res);
            resolve(res)
          },err=>{
            resolve(err)
          })
      })
  }
  getEstiramientos(){
    return new Promise( async resolve => {
     const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + await this.storage.get('token'),
        'Content-Type':'application/json',
      })
      this.http.post(`${this.URL}/auth/stretching`, null,{headers})
          .subscribe(res=>{
            console.log(res);
            resolve(res)
          },err=>{
            resolve(err)
          })
      })
  }

  getCalentamiento(){
    return new Promise( async resolve => {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + await this.storage.get('token'),
        'Content-Type':'application/json',
      })
      this.http.get(`${this.URL}/auth/exercise-heating`,{headers})
          .subscribe(res=>{
            console.log(res);
            resolve(res)
          },err=>{
            resolve(err)
          })
      })
  }







}
