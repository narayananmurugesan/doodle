import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MailComposeComponent } from "../mail-compose/mail-compose.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MailComposeComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MailComposeComponent
  ]
})
export class ComponentsModule { }
