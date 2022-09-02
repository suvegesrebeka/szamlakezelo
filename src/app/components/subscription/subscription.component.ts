import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { ReceiptdataService } from 'src/app/receiptdata.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private router: Router, private receiptdata: ReceiptdataService) { }

  ngOnInit(): void {
  }

}
