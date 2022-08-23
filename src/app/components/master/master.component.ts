import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HtmlconverPipe } from 'src/app/htmlconver.pipe';
import { CommServiceService } from 'src/app/service/comm-service.service';
import {kids}  from'../../comm/comm';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  providers:[HtmlconverPipe],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ 
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.9s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})
export class MasterComponent implements OnInit {
  hackerNewsData: any;
  bytext: any;
  kidsId :any=[]
  gatHacker: any=[];
  statusLink;
  constructor(private _service:CommServiceService) { }

  ngOnInit(): void {
    this.kidsId =kids 
    console.log('kids id',this.kidsId)
    this.gatHackerNewsData();
  }

  gatHackerNewsData(){
  
   
      this.kidsId.forEach(element=> {
       
        this._service.getData(element).subscribe(
          res=>{
            this.hackerNewsData = res
            this.gatHacker.push({news:this.hackerNewsData.text,
            by:this.hackerNewsData.by})
            this.bytext = res.by
          })
     
       
      }); 
      console.log('push Data',this.gatHacker)
      }

}
