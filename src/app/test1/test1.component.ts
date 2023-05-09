import { Component } from "@angular/core";

@Component({
    selector : "app-test1",
    templateUrl : "./test1.component.html"
})
export class Test1Component{

    username:string="";
    enableBtn:boolean = false;

    onclick(event:string){
        if(this.username.length!=0){
            this.enableBtn=true;
        }
        else{
            this.enableBtn=false;
        }
    }

    reset(){
        this.username="";
        this.onclick(this.username)
    }

}