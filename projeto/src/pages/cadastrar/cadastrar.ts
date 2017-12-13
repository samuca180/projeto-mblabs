import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cadastrar(){
    this.navCtrl.push(WelcomePage);
}
}
