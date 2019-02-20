import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { IndexComponent } from './main/index/index.component';
import { NavComponent } from './core/nav/nav.component';
import { MailComposeComponent } from './main/mail-compose/mail-compose.component';
import { SendItemsComponent } from './main/send-items/send-items.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainComponent,
    IndexComponent,
    NavComponent,
    MailComposeComponent,
    SendItemsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
