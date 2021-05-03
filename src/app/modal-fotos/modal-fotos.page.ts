import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-fotos',
  templateUrl: './modal-fotos.page.html',
  styleUrls: ['./modal-fotos.page.scss'],
})
export class ModalFotosPage implements OnInit {
  @Input() imagen;
  image: string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.image = this.imagen
  }

  salir(){
    this.modalController.dismiss()
  }

}
