import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyownuppercasePipe } from './pipes/myownuppercase.pipe';
import { GradefilterPipe } from './pipes/gradefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyownuppercasePipe,
    GradefilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
