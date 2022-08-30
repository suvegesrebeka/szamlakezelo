import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { ReceiptdataService } from 'src/app/receiptdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route: Router,private receiptdata: ReceiptdataService) { }

  ngOnInit(): void {
  }
  toLogin(){
    this.route.navigate(['/']);
  }
  registerform = new FormGroup({
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8)
     ]),
     fullname: new FormControl("", [
      Validators.required,
      // Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')//pattern nem mukodott
    ]),
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z0-9]+$')//pattern nem mukodott
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
  
  onSubmit(login:any) {}
  getValue(login:any) {}
}
