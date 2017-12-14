import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { SettingmodalComponent } from '../settingmodal/settingmodal.component';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-mainsearch',
  templateUrl: './mainsearch.component.html',
  styleUrls: ['./mainsearch.component.css'],
  providers: [DataService]
})
export class MainsearchComponent implements OnInit {
  initialCategoryResult = {};
  constructor(public dialog: MdDialog,public data:DataService,private router: Router, private _websiteService:WebsiteService) { }
  keyword = "";
  hideSpinner = true;
  showSpinner = false;
  ngOnInit() {
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
  search(){
    this.hideSpinner = false;
    this.showSpinner = true;
    this._websiteService.getWebsiteDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setWebsiteResult(resWebsiteData);
            this._websiteService.noWebsiteDataPresent = false;
            this.hideSpinner = true;
            this.showSpinner = false;
          },
          error => console.log(error),
        );

    this._websiteService.getBusinessDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setBusinessResult(resWebsiteData);
            this._websiteService.noBusinessDataPresent = false;
          },
          error => console.log(error),
        );

    this._websiteService.getShopDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setShopResult(resWebsiteData);
            this._websiteService.noShopDataPresent = false;
          },
          error => console.log(error),
        );

    this._websiteService.getSoftwareDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setSoftwareResult(resWebsiteData);
            this._websiteService.noSoftwareDataPresent = false;
          },
          error => console.log(error),
        );


    this._websiteService.getAppDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setAppResult(resWebsiteData);
            this._websiteService.noAppDataPresent = false;
          },
          error => console.log(error),
        );

    this._websiteService.getEBookDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setEBookResult(resWebsiteData);
            this._websiteService.noEBookDataPresent = false;
          },
          error => console.log(error),
        );

    this._websiteService.getAffiliateDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setAffiliateResult(resWebsiteData);
            this._websiteService.noAffiliateDataPresent = false;
          },
          error => console.log(error),
        );

    this._websiteService.getCommunityDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setCommunityResult(resWebsiteData); 
            this._websiteService.noCommunityDataPresent = false;           
          },
          error => console.log(error),
        );

    this._websiteService.getTrainingDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setTrainingResult(resWebsiteData);
            this._websiteService.noTrainingDataPresent = false;
          },
          error => console.log(error),
        );

    this._websiteService.getNewsDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setNewsResult(resWebsiteData);
            this._websiteService.noNewsDataPresent = false;
          },
          error => console.log(error),
        );

    this._websiteService.getMarketPlaceDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setMarketPlaceResult(resWebsiteData); 
            this._websiteService.noMarketPlaceDataPresent = false;
          },
          error => console.log(error),
        );

    this._websiteService.getVideoDomainAvailabiliy(this.keyword)
      .subscribe(
        resWebsiteData => {       
          this._websiteService.setVideoResult(resWebsiteData);
          this._websiteService.noVideoDataPresent = false;
        },
        error => console.log(error),
      );
  }
}
