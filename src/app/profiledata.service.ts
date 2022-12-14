import { Injectable } from '@angular/core';
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfiledataService {

  //belépési adatok továbbítása a profile-nak
  private loggingData = new BehaviorSubject<any>(null);
  public behaveiorSubject$ = this.loggingData.asObservable();


  showReceipt(value: any) {
    this.loggingData.next(value)
  }
  constructor() { }
}
