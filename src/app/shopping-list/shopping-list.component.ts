import { Component } from '@angular/core';
import { Ingredients } from '../recepie/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients:Ingredients[] =[new Ingredients("Apple",6),new Ingredients("Orange",5)];

}
