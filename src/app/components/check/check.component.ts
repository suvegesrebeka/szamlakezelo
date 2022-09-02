import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ReceiptdataService } from 'src/app/receiptdata.service';
import { Subscription, Observable, Subject, of } from 'rxjs';
import { UniquedataService } from 'src/app/uniquedata.service';


@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent {


  receiptObservable$: Observable<any[]> = of([]); //tábla adatok tárolására

  constructor(
    private router: Router,
    private receiptdataService: ReceiptdataService,
    private uniquedataService: UniquedataService
  ) { }

  ngOnInit(): void {
    this.receiptObservable$ = this.receiptdataService.behaveiorSubject$; //átadja a táblaadatokat
  }

  //adott sorra kattintva, számla részletes megtekintés
  onClick(...value: any) {
    console.log(value)
    var receiptVal = {
      cusName: value[0],
      buyDate: value[1],
      realDate: value[2],
      product: value[3],
      cusComment: value[4],
      prodPrice: value[5],
    }

    this.uniquedataService.addDetails(receiptVal)
  }

}
