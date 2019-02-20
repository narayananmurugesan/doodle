import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { ShareDataService } from "../../share-data.service";


@Component({
  selector: "app-mail-compose",
  templateUrl: "./mail-compose.component.html",
  styleUrls: ["./mail-compose.component.css"]
})
export class MailComposeComponent implements OnInit {
  @Input() composeShowOption: Boolean;

  userInfo: any;
  @Output() valueChange = new EventEmitter<any>();

  constructor(private shareService: ShareDataService) {}

  ngOnInit() {}

  close() {
    this.composeShowOption = false;
  }

  sendValue(user: any) {
    let data = {
      id: Math.random(),
      name: user,
      desc: Math.random()
    };
    this.shareService.set(data);
    this.userInfo = '';
  }
}
