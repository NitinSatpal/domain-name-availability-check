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

  ngOnInit() {
  }
  onSubmit() {
    let emailData = {
      from: this.nameOFTheSubmitter,
      fromEmail: this.mailOFTheSubmitter,
      message: this.msgBySubmitter
    }
    this._websiteService.sendEmailToAdmin(emailData)
        .subscribe(
          resWebsiteData => {       
            console.log(resWebsiteData);
          },
          error => console.log(error),
        );
  }

}
