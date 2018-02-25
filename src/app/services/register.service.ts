import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Register} from '../models/register';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class RegisterService {
  apiRoot:string;
  results: Object[];
  
  constructor(private http:Http) {
    this.apiRoot = "http://127.0.0.1:8000/api/v1/auth/register";
    this.results = [];
    
  }

  register(registerData:Register){
    return new Promise((resolve,reject)=>{
      this.http.post(this.apiRoot,registerData)
      .toPromise()
      .then(res=>{
        //the user is successfully registered
        this.results = res.json();
        resolve();
      },
      msg=>{
        //failure occurred
        reject(msg);
      })
      .catch((err)=>{
        console.log(err);
      });
    });
  }

}
