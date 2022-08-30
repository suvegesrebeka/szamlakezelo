import { Injectable } from '@angular/core';
import { Subscription ,Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptdataService {

  constructor() { }



// sendData(name:string, date:string,date2:string,item:string,comment:string,price:number){
//   this.subject.next({})
// }
//yt vidi
receipts =[
  {cusName:"Barka",buyDate:"2019-01-23",realDate:"2020-12-21",product:"macska",cusComment:"NEm tetszik",prodPrice:233423}
]
addNewReceipt(name:string, date:string,date2:string,item:string,comment:string,price:number){
  this.receipts.push({cusName:name ,buyDate:date,realDate:date2,product:item,cusComment:comment,prodPrice:price});
}

private subject = new Subject<any>();

sendData2(name:string, date:string,date2:string,item:string,comment:string,price:number) {
    this.subject.next({ cusName:name ,buyDate:date,realDate:date2,product:item,cusComment:comment,prodPrice:price});
}

getData(): Observable<any> {
    return this.subject.asObservable();
}
}
