import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

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
  
  //átnavigál a bejelentkezése
  toLogin() {
    this.route.navigate(['/']);
  }
  //form validáció
  registerform = new FormGroup({
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,32})$')
    ]),
    fullname: new FormControl("", [
      Validators.required,
      Validators.pattern('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,\.\'-]+ [a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,\.\'-]+$')
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
  // form küldésekor megvizsgálja a servicében, hogy létezik-e már a felhasználó
  onSubmit(login: any) {

    if (this.registrationService.getData(login)) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'A felhasználó már létezik!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Sikeres Regisztráció',
        showConfirmButton: false,
        timer: 1500
      })
      console.log('name: ' + login.name + ' username: ' + login.username + ' pw: ' + login.password);
      this.toLogin();
      this.registrationService.takeUserToLoginPage(login);
    }
  }
}


