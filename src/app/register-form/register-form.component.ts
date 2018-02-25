import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, FormBuilder, ReactiveFormsModule, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  title:string = 'Register';
  button = {'register':'Register'};
  response = {'msg':'','type':'default'};
  
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  getData({name,email,password,password_confirmation}){
    console.log(name+'||'+email+'||'+password+'||'+password_confirmation);
  }

  /**
   * All the validation logic of register form will come here
   */
  createFormControls(){
    //first name validator
    this.firstName = new FormControl('',Validators.required);
    //last name validator
    this.lastName = new FormControl('',Validators.required);
    //email address validator
    this.email = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    //password and its password_confirmation validators come here
    this.password = new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  /**
   * Integrate all other form controls into one form
   */
  createForm(){
    this.registerForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password
    });
  }

  /**
   * Submitting the form
   */
  onSubmit(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
    }
  }

}
