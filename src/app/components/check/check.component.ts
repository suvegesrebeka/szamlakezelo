import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { ReceiptdataService } from 'src/app/receiptdata.service';
import { Subscription, Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
})
export class CheckComponent {

 
  constructor(private router: Router, private receiptdataService: ReceiptdataService) {
    this.subscription();
   }
  ngOnInit(): void {
    console.log("check oninit");

   
  }

  receipts:any[]=[];
  subscription(){
    this.receiptdataService.behaveiorSubject$.subscribe((res:any)=>{
      for (const [key, val] of Object.entries(res)) {
        console.log(`${key}: ${val} + 2. respo`);
      }
      this.receipts.push(res)
      console.log(this.receipts +" thats the array")
    })
  }
}
