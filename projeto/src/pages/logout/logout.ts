import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CaixaPage } from '../caixa/caixa';


@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, app: App) {
  }

  Sair()
  {
    this.navCtrl.push(HomePage);
  }

  caixa(){
    this.navCtrl.push(CaixaPage);
  }

}
