import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule,FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  title:string = 'Login';
  button = {'login':'Login'};
  response = {'msg':'','type':'default'};

  loginForm: FormGroup;
  email:FormControl;
  password:FormControl;

  constructor() {
    
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
      console.log(this.loginForm.value);
    }
  }

}
