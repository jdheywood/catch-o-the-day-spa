import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DailyCatchComponent } from './daily-catch/daily-catch.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { DataService } from './data.service';
import { LandedComponent } from './landed/landed.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    DailyCatchComponent,
    MyFooterComponent,
    LandedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
