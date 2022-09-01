import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import {ProfiledataService } from 'src/app/profiledata.service';
import { RegistrationService } from 'src/app/registration.service';
import { Subscription, Observable, Subject,of } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router,private formBuilder: FormBuilder,
    private profiledataService:ProfiledataService,
    private registrationService:RegistrationService
    ) { }
  protected profileform!: FormGroup;
  siteKey:string="6Leux7ghAAAAANqgR3Ojh1k82lIPuUYHysL9oD9Q";
  try:number=0;

day=new Date().getDate()          // Get the day as a number (1-31)
year=new Date().getFullYear()      // Get the four digit year (yyyy)
hour:any=new Date().getHours()         // Get the hour (0-23)
minute:any=new Date().getMinutes()       // Get the minutes (0-59)
month=new Date().getMonth()         // Get the month (0-11)
month1=Number(this.month)+1

userPassword:string="";
userName:string="";
regVal:any;
registeredUsers:any[]=[];
loginObservable$: Observable<any[]> = of([]);
summ:number=-1;
onSubmit(login:any) {
  this.try++;
  this.route.navigate(['/home/subscription'])
  if(this.hour<10){
    this.hour="0" + this.hour
  }
  if(this.minute<10){
    this.minute="0" + this.minute
  }

  let currentDate= this.year + '/' + this.month1+ '/' + this.day +" "+ this.hour + ':' + this.minute;
  let value=[login,currentDate];
  this.profiledataService.showReceipt(value)
  console.log(value)

}
// subscription(){
  // this.registrationService.behaveSubject$.subscribe((res:any)=>{
  //   console.log(res+"ez a res")
  // this.summ++;
  // this.registeredUsers[this.summ]=res
//    for(let [key,val] of Object.entries(this.registeredUsers)){
//     console.log(`${key}:${val.name} neve ${key}:${val.password} jelszava`)
// }
// this.registrationService.regData.forEach(element=>{console.log(element+"service arrayom adatai")})
//     this.registeredUsers.forEach(element=>{console.log(element+"arrayom adatai")})
// //   })
// // }

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
    
    this.loginObservable$ = this.registrationService.behaveSubject$;
    // console.log(this.loginObservable$)
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


}
