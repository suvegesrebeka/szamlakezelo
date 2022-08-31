import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptdataService {


  private sourceBehav = new BehaviorSubject<any>(null);
  public behaveiorSubject$ = this.sourceBehav.asObservable();


  constructor() {
  }

  receipts: any = []

  showReceipt(value: any) {
    for (const [key, val] of Object.entries(value)) {
      console.log(`${key}: ${val}`);
    }
    this.sourceBehav.next(value)

  }



}
