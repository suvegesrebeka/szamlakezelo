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
export class CheckComponent implements OnInit {

  subscription: Subscription;
  receipt: any[] = [];

  constructor(private router: Router, private receiptdataService: ReceiptdataService) {

    // subscribe to create component data
    this.subscription = this.receiptdataService.getData().subscribe(res => {
      if (res) {
        console.log(res)
        this.receipt.push(res);
      }
    });
  }


  ngOnInit(): void {
  }
  // ember: any[] = [1, 'Sós Barka', '1999-12-30', '2000-12-30', 'tétel', 'no komment', 213212]
}
