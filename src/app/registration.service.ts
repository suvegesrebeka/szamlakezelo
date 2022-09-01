import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private loginData = new BehaviorSubject<any>([]);
  public behaveSubject$ = this.loginData.asObservable();
  public regData:any[]=[];
  constructor() { }
  getData(login:object){
    for(let [key,val] of Object.entries(login)){
      console.log(`${key}:${val}`)
      
  }
    this.regData.push(login)
    this.loginData.next(login)
  }
}
