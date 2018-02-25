import { Injectable } from '@angular/core';
import {Login} from '../models/login';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class LoginService {
  apiRoot:string;
  results:Object[];
  constructor(private http:Http) { 
    this.results = [];
    this.apiRoot = "http://localhost:8000/api/v1/auth/login";
  }

  login(credentials:Login){
    console.log(credentials);
    return new Promise((resolve,reject)=>{
      this.http.post(this.apiRoot,credentials)
      .toPromise()
      .then(res=>{
        //success
        this.results = res.json();
        resolve();
      },err=>{
        //failure
        reject(err);
      })
      .catch(err=>console.log(err));
    });
  }

}
