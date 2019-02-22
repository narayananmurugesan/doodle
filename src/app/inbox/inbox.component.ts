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
    {checkbox: true,subject: 'testing',desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
    {checkbox: false,subject: 'Peter',desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
    {checkbox: true,subject: 'Kevin Peterson',desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
  ];

  rowRemove(index){
    this.sentList.splice(index, 1);
  }
}
