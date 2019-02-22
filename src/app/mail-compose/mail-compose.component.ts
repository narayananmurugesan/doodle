import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginServiceService } from "../service/login-service.service";
import { SentService } from "../service/sent.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss']
})
export class MailComposeComponent implements OnInit {
obj = {
  mail: '',
  subject: '',
  desc: ''
}
 

  constructor(public loginService: LoginServiceService, public sendService: SentService, private toastr: ToastrService) { }

  ngOnInit() {
  } 
    
  removeMail(){
    return this.loginService.mailShow = false;
  }

  reset(){
    this.obj.mail = '';
    this.obj.subject = '';
    this.obj.desc = '';
  }

  sentMail(currentObj: any){
    var copy = Object.assign({}, currentObj);
    copy.checkbox = false;
    this.sendService.setSentItem(copy);
    this.reset();
    this.removeMail();
  }

  
  showNotification(from, align){
    this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Mail Sent.', '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      positionClass: 'toast-' + from + '-' +  align
    });     
  }
   
}
