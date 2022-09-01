import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniquedataService} from 'src/app/uniquedata.service';

@Component({
  selector: 'app-unique',
  templateUrl: './unique.component.html',
  styleUrls: ['./unique.component.css']
})
export class UniqueComponent implements OnInit {
  cusName: string = '';
  buyDate: string = '';
  realDate: string = '';
  product: string = '';
  cusComment: string = '';
  prodPrice: number = NaN;

  constructor(private router:Router,private uniquedataService:UniquedataService) { }

  ngOnInit(): void {
    this.subscription();
  }
  subscription(){
    this.uniquedataService.behaveSubject$.subscribe((res:any)=>{
      for(let [key,val] of Object.entries(res)){
        console.log(`${key}:${val}`)
    }

     this.cusName=res.cusName;
     this.buyDate=res.buyDate;
     this.realDate=res.realDate;
     this.product=res.product;
     this.cusComment=res.cusComment;
     this.prodPrice=res.prodPrice;
    })
  }
}
