import { Component, OnInit } from '@angular/core';
import { ReceiptdataService } from 'src/app/receiptdata.service';

@Component({
  selector: 'app-unique',
  templateUrl: './unique.component.html',
  styleUrls: ['./unique.component.css']
})
export class UniqueComponent implements OnInit {

  constructor(private receiptdata: ReceiptdataService) { }

  ngOnInit(): void {
  }

}
