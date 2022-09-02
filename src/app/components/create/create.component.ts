import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder,} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, Observable, Subject } from 'rxjs';
import { ReceiptdataService } from '../../receiptdata.service';
import Swal from 'sweetalert2'




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [],
})
export class CreateComponent implements OnInit {

  //számla adatai
  cusName: string = '';
  buyDate: string = '';
  realDate: string = '';
  product: string = '';
  cusComment: string = '';
  prodPrice: number = NaN;

  today = new Date();
  maxDate: Date = this.today


  constructor(
    private router: Router,
    private receiptdataService: ReceiptdataService
  ) { }

  ngOnInit(): void {}
  
  //form validáció
  receiptform = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-ZöüóőúűáéíÖÜÓŐÚŰÉÁÍ]+ [a-zA-ZöüóőúűáéíÖÜÓŐÚŰÉÁÍ]+$'),
    ]),
    date: new FormControl('', [Validators.required]),
    date2: new FormControl('', [Validators.required]),
    item: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required,]),
    price: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.receiptform.get('name');
  }

  get date() {
    return this.receiptform.get('date');
  }
  get date2() {
    return this.receiptform.get('date2');
  }
  get item() {
    return this.receiptform.get('item');
  }
  get comment() {
    return this.receiptform.get('comment');
  }
  get price() {
    return this.receiptform.get('price');
  }

  onSubmit(value: any) {
    this.receiptdataService.addNew({
      cusName: this.cusName,
      buyDate: this.buyDate,
      realDate: this.realDate,
      product: this.product,
      cusComment: this.cusComment,
      prodPrice: this.prodPrice,
    });

    // reset
    this.cusName = '';
    this.buyDate = '';
    this.realDate = '';
    this.product = '';
    this.cusComment = '';
    this.prodPrice = NaN;
    //üzenet
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'A számla elmentve!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}