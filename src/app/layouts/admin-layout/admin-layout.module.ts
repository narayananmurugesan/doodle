import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { InboxComponent } from '../../inbox/inbox.component';
import { SentComponent } from "../../sent/sent.component";
import { TooltipModule } from "ngx-bootstrap";
// import { MailComposeComponent } from '../../mail-compose/mail-compose.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminLayoutRoutes),    
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    InboxComponent,
    SentComponent
  ]
})

export class AdminLayoutModule {}
