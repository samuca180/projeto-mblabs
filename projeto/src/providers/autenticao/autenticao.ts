import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

}