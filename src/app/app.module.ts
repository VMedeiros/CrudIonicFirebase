import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaCarroPage } from '../pages/lista-carro/lista-carro';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EditaCarroPage } from '../pages/edita-carro/edita-carro';

var FirebaseConfig = {
  apiKey: "AIzaSyBL0I2bKcYR9oNRaMGgkTLolS-YFPCvYbQ",
  authDomain: "sysea-7ee01.firebaseapp.com",
  databaseURL: "https://sysea-7ee01.firebaseio.com",
  projectId: "sysea-7ee01",
  storageBucket: "sysea-7ee01.appspot.com",
  messagingSenderId: "756869824746"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaCarroPage,
    EditaCarroPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaCarroPage,
    EditaCarroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
