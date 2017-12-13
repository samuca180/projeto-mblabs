import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { CaixaPage } from '../caixa/caixa';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {

  }

  volta(){
    const root = this.app.getRootNav();
    root.popToRoot();
 }

  Logout()
  {
    localStorage.clear();
    setTimeout(() => this.volta(), 1000);
  }

  caixa(){
    this.navCtrl.push(CaixaPage);
  }

}
