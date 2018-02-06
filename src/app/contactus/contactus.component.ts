import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../website.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  nameOFTheSubmitter = "";
  mailOFTheSubmitter = "";
  msgBySubmitter = "";
  constructor(private _websiteService:WebsiteService) { }
  hideSpinner = true;
  showSpinner = false;
  errorInMailSending = false;
  successInMailSending = false;
  ngOnInit() {
  }
  onSubmit() {
    this.hideSpinner = false;
    this.showSpinner = true;
    let emailData = {
      from: this.nameOFTheSubmitter,
      fromEmail: this.mailOFTheSubmitter,
      message: this.msgBySubmitter
    }
    this._websiteService.sendEmailToAdmin(emailData)
        .subscribe(
          resWebsiteData => { 
            this.hideSpinner = true;
            this.showSpinner = false;
            this.nameOFTheSubmitter = "";
            this.mailOFTheSubmitter = "";
            this.msgBySubmitter= "";
            this.successInMailSending = true;
          },
          error => {
            this.hideSpinner = true;
            this.showSpinner = false;
            this.errorInMailSending = true;
          }
        );
  }

}
