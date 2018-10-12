import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  private authStatusSub: Subscription;  
  form:FormGroup;
  fullname:FormControl;
  email:FormControl;
  password:FormControl;

  constructor(private authService:AuthService) { }

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

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  } 

  onSignup(){
    this.isLoading = true;
    this.authService.createUser(this.form.value.fullname, this.form.value.email, this.form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
