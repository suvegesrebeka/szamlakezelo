import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { ReceiptdataService } from 'src/app/receiptdata.service';
import { Subscription, Observable, Subject,of } from 'rxjs';
import { UniquedataService} from 'src/app/uniquedata.service';


@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent {


  receiptObservable$: Observable<any[]> = of([]);

  constructor(
    private router: Router,
    private receiptdataService: ReceiptdataService,
    private uniquedataService : UniquedataService
  ) {}

  ngOnInit(): void {
    this.receiptObservable$ = this.receiptdataService.behaveiorSubject$;
  }
onClick(...value:any){
 console.log(value)
 var receiptVal={
  cusName:value[0],
  buyDate: value[1],
  realDate: value[2],
  product: value[3],
  cusComment: value[4],
  prodPrice: value[5],
 }
 
 this.uniquedataService.addDetails(receiptVal)
}

}
