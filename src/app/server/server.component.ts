import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
    enableButton:boolean = false;
    clickStatus:string = "Not Clicked";
    serverName:string="";
    
    constructor(){
        setTimeout(()=>{
            this.enableButton = true;
        },2000);
    }

    updateClickStatus(){
        this.clickStatus = "Server is created "+this.serverName;
    }

    onUpdateInput(event:string){
        console.log(event)
        this.serverName = event;
    }

}