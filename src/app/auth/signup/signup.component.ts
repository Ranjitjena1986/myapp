import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading:false;
  form:FormGroup;
  fullname:FormControl;
  email:FormControl;
  password:FormControl;

  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({
      fullname: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])     
    });

    //this.createFormControls();
  }

  /*createFormControls() {
    this.fullname = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      fullname: this.fullname,
      email: this.email,
      password: this.password   
    });
  }*/

  onSignup(){
    console.log(this.form);
  }

}
