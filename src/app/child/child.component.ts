import { Component,EventEmitter,Output,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

    @Output() btnClicked = new EventEmitter<string>();
    inputName:string="";

    @Input() todo:{title:string,content:string}={title:"",content:""};
    @Input() title:string="";


    
    onClick(data:string){
      // console.log(data)
      this.inputName=data;
      this.btnClicked.emit(data);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
  }
