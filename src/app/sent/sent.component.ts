import { Component, OnInit } from '@angular/core';
import { SentService } from "../service/sent.service";

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {

  public sentList = [];
  constructor(public sentService: SentService) { }

  ngOnInit() {
    this.sentList = this.sentService.getSentItem();
  }

  rowRemove(index){
    this.sentList.splice(index, 1);
    // this.sentService.sentList.splice(index, 1);
  }
}
