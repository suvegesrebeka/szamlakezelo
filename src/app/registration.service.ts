import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  //regisztrációs értékek küldése és kezelése
  private loginData = new BehaviorSubject<any>([]);
  public behaveSubject$ = this.loginData.asObservable();
  public regData: any[] = [];
  constructor() { }
  getData(login: object): boolean {
    return this.existUser(login);
  }
  existUser(login: any): boolean {
    var retVal = false;
    this.regData.find(e => {
      if (e.username === login.username) {
        retVal = true;
      }
    })
    return retVal;
  }

  takeUserToLoginPage(login: any) {
    this.regData.push(login)
    this.loginData.next(login)
  }
}
