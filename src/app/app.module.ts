import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxListModule, IgxAvatarModule, IgxIconModule, IgxInputGroupModule, IgxFilterModule, IgxGridModule } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestReportComponent } from './testreport/testreport.component';

@NgModule({
  declarations: [
    AppComponent,
    TestReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxFilterModule,
    CommonModule,
    FormsModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
