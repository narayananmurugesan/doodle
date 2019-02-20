import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./core/login/login.component";
import { PageNotFoundComponent } from "./core/page-not-found/page-not-found.component";
import { MainComponent } from "./main/main.component";
import { IndexComponent } from "./main/index/index.component";
import { SendItemsComponent } from "./main/send-items/send-items.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "app",
    component: MainComponent,
    children: [
      { path: "index", component: IndexComponent },
      { path: "send", component: SendItemsComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
