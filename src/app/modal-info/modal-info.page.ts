import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
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
