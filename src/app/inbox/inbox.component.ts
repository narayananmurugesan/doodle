import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sentList = [
    {checkbox: true,subject: 'asdasd',desc: 'asdasdasd'},
    {checkbox: false,subject: 'asdasd',desc: 'asdasdasd'},
    {checkbox: true,subject: 'asdasd',desc: 'asdasdasd'},
  ];

  rowRemove(index){
    this.sentList.splice(index, 1);
  }
}
