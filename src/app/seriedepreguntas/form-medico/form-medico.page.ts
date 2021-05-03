import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-medico',
  templateUrl: './form-medico.page.html',
  styleUrls: ['./form-medico.page.scss'],
})
export class FormMedicoPage implements OnInit {
  slideOpts= {
    slidesPerView: 1,
    spaceBetween: 0.2,
    
  }
  habilitar=false;
  constructor() { }

  ngOnInit() {
  }
  avanzar(){

  }
  atras(){
    
  }
}
