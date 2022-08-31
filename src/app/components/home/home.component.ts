import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { ReceiptdataService } from 'src/app/receiptdata.service';
import { Subscription ,Observable,Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input()receiptall:any[]=[];
  recieveMessage(...value:any){
    this.receiptall=value;
  }
  constructor(private router: Router,private receiptdata: ReceiptdataService) { }

  ngOnInit(): void {
    this.receiptall.forEach((e:any)=>console.log(e+"parent"))
  }

}
