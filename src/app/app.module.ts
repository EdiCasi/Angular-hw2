import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeworkComponent } from './homework/homework.component';
import { AddHyphenPipe } from './add-hyphen.pipe';
import { HightlightDirective } from './hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeworkComponent,
    AddHyphenPipe,
    HightlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
