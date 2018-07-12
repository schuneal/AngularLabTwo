import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './myFile/counter.component';
import { MyVisibility } from './Visibility/my-visibility.directive';
import { MynewcolorDirective } from './Color/my-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MyVisibility,
    MynewcolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
