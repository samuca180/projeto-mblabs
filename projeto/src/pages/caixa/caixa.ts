import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-caixa',
  templateUrl: 'caixa.html',
})
export class CaixaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaixaPage');
  }

}
