import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { Test1Component } from './test1/test1.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Test1Component,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
