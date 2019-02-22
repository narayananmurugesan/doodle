import { Routes } from '@angular/router';

import { InboxComponent } from '../../inbox/inbox.component';
import { SentComponent } from "../../sent/sent.component";

export const AdminLayoutRoutes: Routes = [ 
    { path: 'inbox',          component: InboxComponent },  
    { path: 'sent',           component: SentComponent },
];
