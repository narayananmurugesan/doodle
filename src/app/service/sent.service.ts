import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentService {

  public sentList = [
    {checkbox: true,subject: 'testing',desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
    {checkbox: false,subject: 'Peter',desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
    {checkbox: true,subject: 'Kevin Peterson',desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
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
