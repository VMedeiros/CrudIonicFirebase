import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaCarroPage } from '../lista-carro/lista-carro';
import { EditaCarroPage } from '../edita-carro/edita-carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  criarCarro() {
    this.navCtrl.push(ListaCarroPage)
  }
  editarCarro() {
    this.navCtrl.push(EditaCarroPage)
  }
}
