import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { ReceiptdataService } from 'src/app/receiptdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router,private formBuilder: FormBuilder,private receiptdata: ReceiptdataService) { }
  protected profileform!: FormGroup;
  siteKey:string="6Leux7ghAAAAANqgR3Ojh1k82lIPuUYHysL9oD9Q";
  try:number=0;

  //formvalidation
  ngOnInit(): void {
    this.profileform = this.formBuilder.group({
      password: new FormControl("",
       [Validators.required,
       ]),
      user: new FormControl("", [
        Validators.required,
      ]),
      recaptcha: ['', Validators.required]
    });
  }
toRegisteration(){
  this.route.navigate(['register']);
}

get user() {
  return this.profileform.get('user')
}
get password() {
  return this.profileform.get('password')
}
get recaptcha() {
  return this.profileform.get('recaptcha')
}
onSubmit(login:any) {
  this.try++;
}
goLogin(login:any) {
  this.route.navigate(['/home/subscription'])
}
}
