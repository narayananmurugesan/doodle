import { Component, OnInit} from '@angular/core';
import { ShareDataService } from "../../share-data.service";

@Component({
  selector: "app-send-items",
  templateUrl: "./send-items.component.html",
  styleUrls: ["./send-items.component.css"]
})
export class SendItemsComponent implements OnInit {

  userList = [];

  constructor(private shareService: ShareDataService) { }

  ngOnInit() {
    this.userList = this.shareService.get();
    // let data = {
    //   id: Math.random(),
    //   name: this.shareService.get(),
    //   desc: Math.random() + "random"
    // };
    // this.userList.push(data);
  }


 
}
