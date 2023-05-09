import { Component } from "@angular/core";

@Component({
    selector : "app-directives",
    templateUrl : "./directives.component.html",
    styleUrls : ['./directives.component.css']
})
export class DirectivesComponent{
    toggleDisplay:boolean = false;
    arr:Array<number>=[];

    onClick(){
        this.toggleDisplay=!this.toggleDisplay;
        this.arr.push(this.arr.length+1);
    }

    color(item:number){
        if(item>5){
            return 'red';
        }else{
            return 'white';
        }
    }
}