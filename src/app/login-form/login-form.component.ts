import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  title:string = 'Login';
  button = {'login':'Login'};
  response = {'msg':'','type':'default'};
  loading:boolean;
  loginForm: FormGroup;
  email:FormControl;
  password:FormControl;

  constructor(private loginService:LoginService) {
    this.loading = false;
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  getCredentials({email,password}){
    console.log(email+'||||'+password);
  }

  /**
   * Validation logic of  the login form fields
   */
  createFormControls(){
    this.email= new FormControl('',[Validators.required,Validators.email]);
    this.password = new FormControl('',Validators.required);
  }

  /**
   * Integrate form controls into one form group
   */
  createForm(){
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      let credentials = new Login(this.loginForm.value.email,this.loginForm.value.password);
      this.loading = true;
      console.log(this.loginForm.value);
      console.log(new Login(this.loginForm.value.email,this.loginForm.value.password));
      this.loginService.login(credentials)
      .then(()=>{
        this.loading = false;
      },err=>{
        this.loading = false;
        this.loginService.results = err.json();
        console.log(err);
      })
      .catch(err=>{this.loading = false;console.log(err);});
    }
  }

}
