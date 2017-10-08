import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCarroPage } from './lista-carro';

@NgModule({
  declarations: [
    ListaCarroPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCarroPage),
  ],
})
export class ListaCarroPageModule {}
