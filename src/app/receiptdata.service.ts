import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptdataService {


  private sourceBehav = new BehaviorSubject<any>(null);
  public behaveiorSubject$ = this.sourceBehav.asObservable();
  
  showReceipt(value: any) {
    this.sourceBehav.next(value)
  }

  constructor() {
  }

 
  



}
