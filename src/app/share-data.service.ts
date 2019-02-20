import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  public shareData = [];

  set(message: any){
    this.shareData.push(message);
  }
  
  get(){
    return this.shareData;
  }
 
}
