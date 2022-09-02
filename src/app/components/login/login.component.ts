import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfiledataService } from 'src/app/profiledata.service';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private formBuilder: FormBuilder,
    private profiledataService: ProfiledataService,
    private registrationService: RegistrationService
  ) { }
  protected profileform!: FormGroup;
  //captcha apikey
  siteKey: string = "6Leux7ghAAAAANqgR3Ojh1k82lIPuUYHysL9oD9Q";
  try: number = 0;

  day = new Date().getDate()
  year = new Date().getFullYear()
  hour: any = new Date().getHours()
  minute: any = new Date().getMinutes()
  month = Number(new Date().getMonth()) + 1

  //a felhasználó már létezik hibaüzenet
  userNameExistError: boolean = false;

  //nem regisztrált hibaüzenet
  notRegisteredError: boolean = false;

  //form validáció
  ngOnInit(): void {
    this.userNameExistError = false;
    this.notRegisteredError = false;
    this.profileform = this.formBuilder.group({
      password: new FormControl("",
        [Validators.required,
        ]),
      user: new FormControl("", [
        Validators.required,
      ]),
      recaptcha: ['', Validators.required]
    });

    this.subscription()
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
  //form küldésekor
  onSubmit(login: any) {
    this.try++
    //idő beállítása a profile componentre
    if (this.hour < 10) {
      this.hour = "0" + this.hour
    }
    if (this.minute < 10) {
      this.minute = "0" + this.minute
    }
    let currentDate = this.year + '/' + this.month + '/' + this.day + " " + this.hour + ':' + this.minute;
    let value = [login, currentDate];
    this.profiledataService.showReceipt(value);
    this.notRegisteredError = false;
    this.userNameExistError = false;
    //belépési adatok küldése
    this.loginValidation(login)
  }
  //Meglévő profil megviszgálása
  loginValidation(login: any): any {
    if (this.registrationService.regData.length == 0) this.notRegisteredError = true;

    this.registrationService.regData.find(e => {
      if (e.username === login.user && e.password === login.password) {
        this.route.navigate(['/home/subscription'])
      }
      else if (e.username === login.user && e.password !== login.password) {
        this.userNameExistError = true;
      } else {
        this.notRegisteredError = true;
      }
    })

  }

  //regisztrációból kapott értékek
  subscription() {
    this.registrationService.behaveSubject$.subscribe((res: any) => {
    })
  }
  //átirányítás a regisztrációra
  toRegisteration() {
    this.route.navigate(['register']);
  }
}
