import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { CadastrarPage } from '../cadastrar/cadastrar';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  splash = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Sair()
  {
    this.navCtrl.push(WelcomePage);
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  cadastrar(){
    this.navCtrl.push(CadastrarPage);
  }
}
