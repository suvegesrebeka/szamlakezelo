import { Injectable } from '@angular/core';
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniquedataService {
  private receiptData = new BehaviorSubject<any>([]);
  public behaveSubject$ = this.receiptData.asObservable();

  constructor() { }
  addDetails(value:any){
    for(let [key,val] of Object.entries(value)){
        console.log(`${key}:${val}`)
    }
    this.receiptData.next(value)
  }
}
