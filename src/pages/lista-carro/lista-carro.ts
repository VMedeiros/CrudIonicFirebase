import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class Carro {
  id: string;
  dono: string;
  modelo: string;
  multa: boolean
}

@IonicPage()
@Component({
  selector: 'page-lista-carro',
  templateUrl: 'lista-carro.html',
})
export class ListaCarroPage {
  lista: FirebaseListObservable<any>;
  carro: Carro;

  constructor(public db: AngularFireDatabase) {
    this.lista = this.db.list('/carros');
    this.carro = new Carro();
  }

  cadastrar() {
    this.lista.push(this.carro).then(() => {
      this.carro = new Carro();
    });
  }

  editar(id) {

  }

}
