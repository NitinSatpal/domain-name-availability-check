import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WebsiteService } from '../website.service';
import { Observable } from 'rxjs/Observable';
declare var $:any;
@Component({
  selector: 'app-settingmodal',
  templateUrl: './settingmodal.component.html',
  styleUrls: ['./settingmodal.component.css'],
  providers: [DataService]
})
export class SettingmodalComponent implements OnInit {

  constructor(public data:DataService, public _websiteService:WebsiteService) {}
  prevHypens = false;
  hypens = false;
  newExt :string = "";
  newExtError = false;
  addmore_show = false;
  selectedValue: string = "GoDaddy";
  services = [];
  exts = [];
  prevExts = [];
  prevExtensions = true;
  extensions = true;
  keyword = "";
  public validate = "form-control more-input";
  dropdownList = [];
  selectedItems = [];
  prevSelectedItems = [];
  dropdownSettings = {};
  hideEmptyExtensionsError = true;
  showMaxLimitError = false;

  ngOnInit() {
    let temp = this.data.exts.map(x => Object.assign({}, x));
    this.exts = temp;
    this.services = this.data.services;
    this.hypens = this.data.hypens;
    if (localStorage.getItem('extensions') != null) {
      this.prevExts = JSON.parse(localStorage.getItem('extensions'));
      this.exts = JSON.parse(localStorage.getItem('extensions'));
    }
    if (localStorage.getItem('moreExtensions') != null) {
      this.prevSelectedItems = JSON.parse(localStorage.getItem('moreExtensions'));
      this.selectedItems = JSON.parse(localStorage.getItem('moreExtensions'));
    }
    if (localStorage.getItem('hypens') != null) {
      if (localStorage.getItem('hypens') == 'true') {
        this.prevHypens = true;
        this.hypens = true;
      } else {
        this.prevHypens = false;
        this.hypens = false;
      }
    }
    if (localStorage.getItem('domainProvider') != null)
      this.selectedValue = JSON.parse(localStorage.getItem('domainProvider'));

    if (localStorage.getItem('smartExtensions') != null) {
      if (localStorage.getItem('smartExtensions') == 'true') {
        this.prevExtensions = true;
        this.extensions = true;
      } else {
        this.prevExtensions = false;
        this.extensions = false;
      }
    }

    this.keyword = this._websiteService.keyword;

    this._websiteService.getMoreExtensions()
        .subscribe(
          resWebsiteData => {       
            this.dropdownList = resWebsiteData;
          },
          error => console.log(error),
        );

    this.dropdownSettings = { 
      singleSelection: false, 
      text:"Select extensions (maximum 5)",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      enableCheckAll:false,
      limitSelection:6
    };            
  }

  addmore(){
    this.addmore_show = !this.addmore_show;
    if (this.addmore_show) {
      if ($( window ).width() > 1000)
        $('.btn-section').addClass('dynamicPaddingToBtn');
      else
        $('.btn-section').addClass('dynamicMobilePaddingToBtn');
    } else {
      if ($( window ).width() > 1000)
        $('.btn-section').removeClass('dynamicPaddingToBtn');
      else
        $('.btn-section').removeClass('dynamicMobilePaddingToBtn');
    }
  }

  onItemDeSelect(item:any){
    this.showMaxLimitError = false;
  }
  onItemSelect(item:any) {   
    if (this.selectedItems.length == 6) {
      this.selectedItems.splice(5, 1);
      this.showMaxLimitError = true;
    }
    
  }
  onSelectAll(items: any){
  }
  onDeSelectAll(items: any){
  }
  Cancel(){
    let temp = this.data.exts.map(x => Object.assign({}, x));
    this.exts = temp;
  }
  ApplySuccess() {
    let temp = this.exts.map(x => Object.assign({}, x));
    this.hideEmptyExtensionsError = false;
    for (var index = 0; index < temp.length; index++) {
      if (temp[index].value) {
        this.hideEmptyExtensionsError = true;
        break;
      }
    }
    if (!this.hideEmptyExtensionsError)
      return;
    localStorage.setItem('extensions', JSON.stringify(temp));
    localStorage.setItem('moreExtensions', JSON.stringify(this.selectedItems));
    localStorage.setItem('hypens', JSON.stringify(this.hypens));
    localStorage.setItem('domainProvider', JSON.stringify(this.selectedValue));
    localStorage.setItem('smartExtensions', JSON.stringify(this.extensions));
    this._websiteService.paramDomainProvider = JSON.stringify(this.selectedValue);
    this.keyword = this._websiteService.keyword;
    if (this.keyword != "") {
      if (this.prevHypens != this.hypens || this.prevExtensions != this.extensions || !this.objectsAreSame(this.prevExts, this.exts) || this.prevSelectedItems.length != this.selectedItems.length ||  !this.objectsAreSame(this.prevSelectedItems, this.selectedItems)) {
        this.search();
      }
    }
    var el = document.getElementById('modalSettingsClose');
    $(el).click();
  }
  checkError(){
    if (this.newExtError == true){
      this.validate = "form-control more-input error"
    }else{
      this.validate = "form-control more-input"
    }
  }
  onEnter(){
    if (this.newExt!="" && this.newExt.substring(0,1)=="."){
      this.newExtError = false;
      var temp = {
        name:this.newExt,value:false
      };
      this.exts.push(temp);
      this.newExt = "";
    }else{
      this.newExtError = true;
    }
    this.checkError();
  }

  objectsAreSame(x, y) {
    var objectsAreSame = true;
    for(var index = 0; index < x.length; index++) {
      for(var propertyName in x[index]) {
        if(x[index][propertyName] !== y[index][propertyName]) {
           objectsAreSame = false;
           return objectsAreSame;
        }
      }
    }
    return objectsAreSame;
  }

  search(){    
    this._websiteService.getWebsiteDomainAvailabiliy(this.keyword)
        .subscribe(
          resWebsiteData => {       
            this._websiteService.setWebsiteResult(resWebsiteData);
            this._websiteService.noWebsiteDataPresent = false;
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
