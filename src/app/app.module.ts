import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { DynamicElementComponent } from './components/dynamic-element/dynamic-element.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [AppComponent, DynamicElementComponent],
  imports: [BrowserModule, BsDatepickerModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
