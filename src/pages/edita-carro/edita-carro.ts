import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Carro } from '../lista-carro/lista-carro';

@IonicPage()
@Component({
  selector: 'page-edita-carro',
  templateUrl: 'edita-carro.html',
})
export class EditaCarroPage {
  ref: FirebaseObjectObservable<any>;
  id: string;
  carro: Carro;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public db: AngularFireDatabase) {

    this.id = this.navParams.get('id');
    this.ref = this.db.object('/Carros/' + this.id);
  }

  salvar() {
    this.ref.update(this.carro).then(() => {
      this.viewCtrl.dismiss();
    });
  }
  fechar() {
    this.viewCtrl.dismiss();
  }

  excluir(id) {
    this.ref.remove();
    this.viewCtrl.dismiss();
  }
}