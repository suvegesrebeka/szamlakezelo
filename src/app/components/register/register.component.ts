import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';

import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router,
    private registrationService: RegistrationService
    ) { }

  ngOnInit(): void {
  }
  toLogin(){
    this.route.navigate(['/']);
  }
  registerform = new FormGroup({
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')//min 8 char 1 betu szam specchar
     ]),
     fullname: new FormControl("", [
      Validators.required,
      // Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')
    ]),
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z0-9]+$')
    ]),
  });
  
  get fullname() {
    return this.registerform.get('fullname')
  }
  get username() {
    return this.registerform.get('username')
  }
  get password() {
    return this.registerform.get('password')
  }
  
  onSubmit(login:any) {
    this.registrationService.getData(login)
  }
}
