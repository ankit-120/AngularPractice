import { Component } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent {

  recepies:Recepie[] = [new Recepie("A Test Recepie","This is simply a test","/assets/recepie1.png"),new Recepie("A Test Recepie","This is simply a test","/assets/recepie1.png")];

}
