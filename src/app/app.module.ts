import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepieListComponent } from './recepie/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepie/recepie-list/recepie-item/recepie-item.component';
import { RecepieDescriptionComponent } from './recepie/recepie-description/recepie-description.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { ServerComponent } from './server/server.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepieComponent,
    RecepieListComponent,
    RecepieItemComponent,
    RecepieDescriptionComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    ServerComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
