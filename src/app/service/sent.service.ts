import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentService {

  public sentList = [
    {checkbox: true,subject: 'asdasd',desc: 'asdasdasd'},
    {checkbox: false,subject: 'asdasd',desc: 'asdasdasd'},
    {checkbox: true,subject: 'asdasd',desc: 'asdasdasd'},
  ];

  constructor() { }

  /**
   * setSentItem
   */
  public setSentItem(sent: any) {
   return this.sentList.push(sent);
  }

  /**
   * getSentItem
   */
  public getSentItem() {
    return this.sentList;
  }
}
