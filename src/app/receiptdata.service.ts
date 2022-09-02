import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Subscription, Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReceiptdataService {
  
  //számla adatok továbbítása a táblába
  private sourceBehav = new BehaviorSubject<any>([]);
  public behaveiorSubject$ = this.sourceBehav.asObservable();
  constructor() { }

  receipts: any = [];

  showReceipt(value: any) {
    this.sourceBehav.next(value);
  }

  addNew(data: any) {
    const value = this.sourceBehav.getValue();
    value.push(data);
    this.sourceBehav.next(value);
  }

  getData() {
    return this.behaveiorSubject$;
  }
}