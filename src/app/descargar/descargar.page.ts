import { Component, OnInit } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { ApiFitechService } from '../services/api-fitech.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.page.html',
  styleUrls: ['./descargar.page.scss'],
})
export class DescargarPage implements OnInit {
  items = [ 
  {'url': 'http://Fittech247.com/videos/home/prueba/1.mp4' , 'name':'videobajadoIonic1'}, 
  {'url': 'http://Fittech247.com/videos/home/prueba/2.mp4' , 'name':'videobajadoIonic2'}, 
  {'url': 'http://Fittech247.com/videos/home/prueba/3.mp4' , 'name':'videobajadoIonic3'}, 
  {'url': 'http://Fittech247.com/videos/home/prueba/4.mp4' , 'name':'videobajadoIonic4'}, 
  {'url': 'http://Fittech247.com/videos/home/prueba/5.mp4' , 'name':'videobajadoIonic5'}, 
  {'url': 'http://Fittech247.com/videos/home/prueba/6.mp4' , 'name':'videobajadoIonic6'}, 
  {'url': 'http://Fittech247.com/videos/home/prueba/7.mp4' , 'name':'videobajadoIonic7'}, 
  {'url': 'http://Fittech247.com/videos/home/prueba/8.mp4' , 'name':'videobajadoIonic8'}, 
  {'url': 'http://Fittech247.com/videos/home/prueba/9.mp4' , 'name':'videobajadoIonic9'}, 
 ];

  // items:any = {}
  maximo
  contador = 0
  video
  comprobarDescarga = []

  constructor(private Filetransfer:FileTransfer , private file:File,private ApiService:ApiFitechService,private ruta:Router) { }

  ngOnInit() {

      // this.items = this.ApiService.rutinaDescarga
      // console.log(this.items[0].name)

      this.maximo = this.items.length

      this.descarga()
  }  


  descarga(){

    //Si la carpeta existe
    this.file.checkDir(this.file.externalRootDirectory, 'fittech_downloads').then(response =>{
  
        //Aca debera estar el Loop  
        for(let i =0; i < this.items.length ; i++ ){

          //Aca comprubea el nombre del archivo dentro del directorio
          this.file.checkFile(this.file.externalRootDirectory, 'fittech_downloads/' + this.items[i]['name'] + '.mp4').then((resp=>{
            console.log('el archivo ya existe dentro de la carpeta no hagas nada.',resp);
            //sumar al array
            this.comprobarDescarga.push(true)
            //sumar descargas
            this.contador++
            //si todo estan descargados entonce mandalo directamente
            if(this.comprobarDescarga.length === this.items.length){
              this.ruta.navigateByUrl('/calentamiento')
            }

          })).catch(err=>{
              //aqui guarda el documento
              const fileTransfer: FileTransferObject = this.Filetransfer.create();
              fileTransfer.download(this.items[i]['url'], this.file.externalRootDirectory + '/fittech_downloads/' + this.items[i]['name'] + '.mp4').then((entry) => {
                console.log('file download response',entry);
                //sumar descargas
                this.contador++
                //sumar al array
                this.comprobarDescarga.push(true)
                //comprobar si todo va bien y mandar
                if(this.comprobarDescarga.length === this.items.length){
                  this.ruta.navigateByUrl('/calentamiento')
                }

              })
              .catch((err) =>{
                console.log('error in file download',err);
              });
          })



        }//fin del loop
  
      console.log("LA CARPETA EXISTIA , Y no SOBREESCRIBIO la carpeta")

       //Si la carpeta no existe
    }).catch(response => {
       //aqui crea la carpeta
      this.file.createDir(this.file.externalRootDirectory, 'fittech_downloads', false).then(response => {
      console.log('Directory created',response);
      
      //Aca debera estar el Loop  
      for(let i =0; i < this.items.length ; i++ ){

       //aqui guarda el documento
      const fileTransfer: FileTransferObject = this.Filetransfer.create();
        fileTransfer.download(this.items[i]['url'], this.file.externalRootDirectory + '/fittech_downloads/' + this.items[i]['name'] + '.mp4').then((entry) => {
          console.log('file download response',entry);
          //sumar descargas
          this.contador++
          //sumar array
          this.comprobarDescarga.push(true)
          //comprobar si se han bajado todo
          console.log(this.comprobarDescarga.length)
          //Probar si esto sirve
          if(this.comprobarDescarga.length === this.items.length){
            this.ruta.navigateByUrl('/calentamiento')
          }
        })
        .catch((err) =>{
          console.log('error in file download',err);
        });
      
      }//fin del loop
      //aqi atrapa el error

      }).catch(err => {
        console.log('Could not create directory "fittech_downloads" ',err);
      }); 
    })

    //Finaliza todo el ciclo
    // recurda que al ser asincronico pueda que cuando se active este a un no haya descargado
    //comprobar que todo sea true y mandarlo ala ventana singuiente

   }


}