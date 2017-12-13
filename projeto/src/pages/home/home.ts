import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login'
import { CadastrarPage } from '../cadastrar/cadastrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  IonViewDidLoad(){
    console.log('ionViewDidLoad Home');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  cadastrar(){
    this.navCtrl.push(CadastrarPage);
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
