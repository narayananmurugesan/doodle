import { Injectable } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public UserLogin = [];
  public Username: any;
  public Password: any;

  public mailShow = false;

  constructor() { }

  /**
   * setUserLoging
   */
  public setUserLoging(username: any) {
      this.UserLogin.push({username: username});
  }

  /**
   * getUserLoging
   */
  public getUserLoging() {
    return this.UserLogin;
  }

}
