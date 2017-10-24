import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TShirtComponent } from './t-shirt/t-shirt.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TShirtComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
