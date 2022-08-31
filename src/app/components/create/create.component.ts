import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { ReceiptdataService } from 'src/app/receiptdata.service';
import { Subscription, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  //service datapass
  ngOnInit(): void {

  }

  cusName: string = "";
  buyDate: string = "";
  realDate: string = "";
  product: string = "";
  cusComment: string = "";
  prodPrice: number = 0;


  @Output() sendObject = new EventEmitter();

  recieptall!: { cusName: string, buyDate: string, realDate: string, product: string, cusComment: string, prodPrice: number };


  sendData(value: any): void {
    // for (const [key, val] of Object.entries(value)) {
    //   console.log(`${key}: ${val}`);
    // }
    this.receiptdataService.showReceipt(value);
  }


  constructor(private router: Router, private receiptdataService: ReceiptdataService) { }



  today = new Date();
  maxDate: Date = new Date(2030, 12, 30);
  receiptform = new FormGroup({
    name: new FormControl("", [Validators.required,
    Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')]),
    date: new FormControl("", [Validators.required,]),
    date2: new FormControl("", [Validators.required,]),
    item: new FormControl("", [Validators.required,]),
    comment: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
  });

  get name() {
    return this.receiptform.get('name')
  }

  get date() {
    return this.receiptform.get('date')
  }
  get date2() {
    return this.receiptform.get('date2')
  }
  get item() {
    return this.receiptform.get('item')
  }
  get comment() {
    return this.receiptform.get('comment')
  }
  get price() {
    return this.receiptform.get('price')
  }
  onSubmit(value: any) { }

  //service


}
