import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { SettingmodalComponent } from '../settingmodal/settingmodal.component';
import { DataService } from '../data.service';
import { WebsiteService } from '../website.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css'],
  providers: []
})
export class SearchresultComponent implements OnInit {

  constructor(public dialog: MdDialog,private route: ActivatedRoute,private router: Router,public data:DataService, public websiteData: WebsiteService) { }
  exts = [];
  websiteResult = [];
  businessResult = [];
  shopResult = [];
  collapseClass = "accordion-body collapse in";
  accordionClass = "accordion-toggle";
  ngOnInit() {
    if (window.screen.width<768){
      this.collapseClass = "accordion-body collapse";
      this.accordionClass = "accordion-toggle collapsed";
    }

    this.websiteResult = this.websiteData.getWebsiteResult();   
    this.businessResult = this.websiteData.getBusinessResult();   
    this.shopResult = this.websiteData.getShopResult();
  }
  openSettingDialog() {
    let psDialogRef = this.dialog.open(SettingmodalComponent, {
      disableClose: false,
      hasBackdrop: true,
      panelClass: 'overay-pan-background',
      backdropClass: 'custom-backdrop-class',
      width: '460px'
    });
  }

  stopReload(event) {
    event.preventDefault();
    event.stopPropagation(); 
  }

  redirecToProvider(event, domain) {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.websiteData.paramDomainProvider); 
    if (this.websiteData.paramDomainProvider == 'GoDaddy (recommended)') {
      alert('please try namecheap for now :)');
      return false;
    } else if (JSON.parse(this.websiteData.paramDomainProvider) == 'Namecheap') {
      window.open("https://www.namecheap.com/domains/registration/results.aspx?domain=" + domain + "&affId=63790", "_blank");
      return false;
    } else {
      alert('please try namecheap for now :)');
      return false;
    }
  }

  checkAgain(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
