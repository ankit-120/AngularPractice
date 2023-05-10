import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

    todos={title:"test1",content:"content1"};
    title:string="";
    childName = "";
    setName(name:string){
      this.childName=name;
    }

      onChange(){
        this.title = "title2";
      }

}
