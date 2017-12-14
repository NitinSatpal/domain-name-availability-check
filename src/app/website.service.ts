import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable()
export class WebsiteService {
  showMoreResultsFor = '';
  keyword = '';
  paramExtensions = [
      {name:".com",value:true},
      {name:".net",value:true},
      {name:".org",value:false},
      {name:".info",value:false},
      {name:".io",value:false},
      {name:".co.uk",value:false}
  ];
  paramMoreExtensions = [];
  paramHypens: string = 'no';
  paramDomainProvider: string = "GoDaddy (recommended)";
  smartExtensions: string = 'yes';
  websiteResult = [];
  remainingWebsiteResult = [];
  businessResult = [];
  remainingBusinessResult = [];
  shopResult = [];
  remainingShopResult = [];
  softwareResult = [];
  remainingSoftwareResult = [];
  appResult = [];
  remainingAppResult = [];
  eBookResult = [];
  remainingEBookResult = [];
  affiliateResult = [];
  remainingAffiliateResult = [];
  communityResult = [];
  remainingCommunityResult = [];
  trainingResult = [];
  remainingTrainingResult = [];
  newsResult = [];
  remainingNewsResult = [];
  marketPlaceResult = [];
  remainingMarketPlaceResult = [];
  videoResult = [];
  remainingVideoResult = [];
  noWebsiteDataPresent = false;
  noBusinessDataPresent = false;
  noShopDataPresent = false;
  noSoftwareDataPresent = false;
  noAppDataPresent = false;
  noEBookDataPresent = false;
  noAffiliateDataPresent = false;
  noCommunityDataPresent = false;
  noTrainingDataPresent = false;
  noNewsDataPresent = false;
  noMarketPlaceDataPresent = false;
  noVideoDataPresent = false;
  _websiteUrl = "/api/website/domain/check";
  _businessUrl = "/api/business/domain/check";
  _shopUrl = "/api/shop/domain/check";
  _softwareUrl = "/api/software/domain/check";
  _appUrl = "/api/app/domain/check";
  _eBookUrl = "/api/ebook/domain/check";
  _affiliateUrl = "/api/affiliate/domain/check";
  _communityUrl = "/api/community/domain/check";
  _trainingUrl = "/api/training/domain/check";
  _newsUrl = "/api/news/domain/check";
  _marketPlaceUrl = "/api/marketplace/domain/check";
  _videoUrl = "/api/video/domain/check";
  _remainingUrl = "/api/remaining/domain/check";
  _moreExtensionsUrl = "/api/moreextensions";
  _sendEmailUrl = "/api/send/email";

    constructor(private _http: Http, private router: Router) { }

    setOptions() {
      if (localStorage.getItem('extensions') != null)
        this.paramExtensions = JSON.parse(localStorage.getItem('extensions'));

      if (localStorage.getItem('moreExtensions') != null)
        this.paramMoreExtensions = JSON.parse(localStorage.getItem('moreExtensions'));

      if (localStorage.getItem('hypens') != null) {
        if (localStorage.getItem('hypens') == 'true')
          this.paramHypens = 'yes';
        else
          this.paramHypens = 'no';
      }
      if (localStorage.getItem('domainProvider') != null)
        this.paramDomainProvider = localStorage.getItem('domainProvider');

      if (localStorage.getItem('smartExtensions') != null) {
        if (localStorage.getItem('smartExtensions') == 'true')
          this.smartExtensions = 'yes';
        else
          this.smartExtensions = 'no';
      }
    }

    getMoreExtensions():  Observable<any> {       
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      return this._http.get(this._moreExtensionsUrl)
        .map((response: Response) => response.json());
    }

    getWebsiteDomainAvailabiliy (keyword): Observable<any> { 
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', keyword);  
      return this._http.post(this._websiteUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getBusinessDomainAvailabiliy (keyword): Observable<any> { 
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', keyword);  
      return this._http.post(this._businessUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getShopDomainAvailabiliy (keyword): Observable<any> { 
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', keyword);  
      return this._http.post(this._shopUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getSoftwareDomainAvailabiliy (keyword): Observable<any> { 
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": this.keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', this.keyword);  
      return this._http.post(this._softwareUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getAppDomainAvailabiliy (keyword): Observable<any> { 
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": this.keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', this.keyword);  
      return this._http.post(this._appUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getEBookDomainAvailabiliy (keyword): Observable<any> {
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": this.keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', this.keyword);  
      return this._http.post(this._eBookUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getAffiliateDomainAvailabiliy (keyword): Observable<any> {
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": this.keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', this.keyword);  
      return this._http.post(this._affiliateUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getCommunityDomainAvailabiliy (keyword): Observable<any> {
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": this.keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', this.keyword);  
      return this._http.post(this._communityUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getTrainingDomainAvailabiliy (keyword): Observable<any> {
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": this.keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', this.keyword);  
      return this._http.post(this._trainingUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getNewsDomainAvailabiliy (keyword): Observable<any> {
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": this.keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', this.keyword);  
      return this._http.post(this._newsUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getMarketPlaceDomainAvailabiliy (keyword): Observable<any> {
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": this.keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', this.keyword);  
      return this._http.post(this._marketPlaceUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getVideoDomainAvailabiliy (keyword): Observable<any> {
      this.keyword = keyword;
      this.setOptions();     
      let requestBody = {
        "extensions" : this.paramExtensions,
        "hypens": this.paramHypens,
        "domainProvider": this.paramDomainProvider,
        "smartExtensions": this.smartExtensions,
        "moreExtensions": this.paramMoreExtensions,
        "keyword": this.keyword
      };
      
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let params = new URLSearchParams();
      params.append('keyword', this.keyword);  
      return this._http.post(this._videoUrl, requestBody, options)
        .map((response: Response) => response.json());
    }


    setWebsiteResult(value){
      this.websiteResult = value.website;
      this.remainingWebsiteResult = value.websiteTotal;
      this.router.navigate(["/result"]);
      this.getRemainingWebsiteDomains()
        .subscribe(
          resWebsiteData => {   
            this.appendWebsiteResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getWebsiteResult() {
      return this.websiteResult;
    }

    setBusinessResult(value){
      this.businessResult = value.business;
      this.remainingBusinessResult = value.businessTotal;
      this.getRemainingBusinessDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendBusinessResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getBusinessResult() {
      return this.businessResult;
    }

    setShopResult(value){
      this.shopResult = value.shop;
      this.remainingShopResult = value.shopTotal;
      this.getRemainingShopDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendShopResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getShopResult() {
      return this.shopResult;
    }

    setSoftwareResult(value){
      this.softwareResult = value.software;
      this.remainingSoftwareResult = value.softwareTotal;
      this.getRemainingSoftwareDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendSoftwareResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getSoftwareResult() {
      return this.softwareResult;
    }

    setAppResult(value){
      this.appResult = value.app;
      this.remainingAppResult = value.appTotal;
      this.getRemainingAppDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendAppResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getAppResult() {
      return this.appResult;
    }

    setEBookResult(value){
      this.eBookResult = value.eBook;
      this.remainingEBookResult = value.eBookTotal;
      this.getRemainingEBookDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendEBookResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getEBookResult() {
      return this.eBookResult;
    }

    setAffiliateResult(value){
      this.affiliateResult = value.affiliate;
      this.remainingAffiliateResult = value.affiliateTotal;
      this.getRemainingAffiliateDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendAffiliateResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getAffiliateResult() {
      return this.affiliateResult;
    }

    setCommunityResult(value){
      this.communityResult = value.community;
      this.remainingCommunityResult = value.communityTotal;
      this.getRemainingCommunityDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendCommunityResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getCommunityResult() {
      return this.communityResult;
    }

    setTrainingResult(value){
      this.trainingResult = value.training;
      this.remainingTrainingResult = value.trainingTotal;
      this.getRemainingTrainingDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendTrainingResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getTrainingResult() {
      return this.trainingResult;
    }

    setNewsResult(value){
      this.newsResult = value.news;
      this.remainingNewsResult = value.newsTotal;
      this.getRemainingNewsDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendNewsResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getNewsResult() {
      return this.newsResult;
    }

    setMarketPlaceResult(value){
      this.marketPlaceResult = value.marketplace;
      this.remainingMarketPlaceResult = value.marketplaceTotal;
      this.getRemainingMarketPlaceDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendMarketplaceResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getMarketPlaceResult() {
      return this.marketPlaceResult;
    }

    setVideoResult(value){
      this.videoResult = value.video;
      this.remainingVideoResult = value.videoTotal;
      this.getRemainingVideoDomains()
        .subscribe(
          resWebsiteData => {       
            this.appendVideoResult(resWebsiteData);
          },
          error => console.log(error),
        );
    }

    getVideoResult() {
      return this.videoResult;
    }

    getRemainingWebsiteDomains(): Observable<any> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'website', remainingList: this.remainingWebsiteResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getRemainingBusinessDomains(): Observable<any> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'software', remainingList: this.remainingBusinessResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getRemainingShopDomains(): Observable<any> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'software', remainingList: this.remainingShopResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getRemainingSoftwareDomains(): Observable<any> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'software', remainingList: this.remainingSoftwareResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());
    }

    getRemainingAppDomains() {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'app', remainingList: this.remainingAppResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());

    }
    getRemainingEBookDomains() {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'eBook', remainingList: this.remainingEBookResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());

    }
    getRemainingAffiliateDomains() {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'affiliate', remainingList: this.remainingAffiliateResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());

    }
    getRemainingCommunityDomains() {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'community', remainingList: this.remainingCommunityResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());

    }
    getRemainingTrainingDomains() {
     let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'training', remainingList: this.remainingTrainingResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());

    }
    getRemainingNewsDomains() {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'news', remainingList: this.remainingNewsResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());

    }
    getRemainingMarketPlaceDomains() {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'marketplace', remainingList: this.remainingMarketPlaceResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());

    }
    getRemainingVideoDomains() {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      var requestBody = {category: 'video', remainingList: this.remainingVideoResult};
      return this._http.post(this._remainingUrl, requestBody, options)
        .map((response: Response) => response.json());

    }

    appendWebsiteResult(value) {
      this.websiteResult = this.websiteResult.concat(value);
      this.websiteResult.sort(this.compare);
      if(!this.websiteResult[9].available && !this.websiteResult[0].available)
        this.noWebsiteDataPresent = true;
    }

    appendBusinessResult(value) {
      this.businessResult = this.businessResult.concat(value);
      this.businessResult.sort(this.compare)
      if(!this.businessResult[9].available && !this.businessResult[0].available)
        this.noBusinessDataPresent = true;
    }

    appendShopResult(value) {
      this.shopResult = this.shopResult.concat(value);
      this.shopResult.sort(this.compare)
      if(!this.shopResult[9].available && !this.shopResult[0].available)
        this.noShopDataPresent = true;
    }

    appendSoftwareResult(value) {
      this.softwareResult = this.softwareResult.concat(value);
      this.softwareResult.sort(this.compare)
      if(!this.softwareResult[9].available && !this.softwareResult[0].available)
        this.noSoftwareDataPresent = true;
    }

    appendAppResult(value) {
      this.appResult = this.appResult.concat(value);
      this.appResult.sort(this.compare)
      if(!this.appResult[9].available && !this.appResult[0].available)
        this.noAppDataPresent = true;
    }

    appendEBookResult(value) {
      this.eBookResult = this.eBookResult.concat(value);
      this.eBookResult.sort(this.compare)
      if(!this.eBookResult[9].available && !this.eBookResult[0].available)
        this.noEBookDataPresent = true;
    }

    appendAffiliateResult(value) {
      this.affiliateResult = this.affiliateResult.concat(value);
      this.affiliateResult.sort(this.compare)
      if(!this.affiliateResult[9].available && !this.affiliateResult[0].available)
        this.noAffiliateDataPresent = true;
    }

    appendCommunityResult(value) {
      this.communityResult = this.communityResult.concat(value);
      this.communityResult.sort(this.compare)
      if(!this.communityResult[9].available && !this.communityResult[0].available)
        this.noCommunityDataPresent = true;
    }

    appendTrainingResult(value) {
      this.trainingResult = this.trainingResult.concat(value);
      this.trainingResult.sort(this.compare)
      if(!this.trainingResult[9].available && !this.trainingResult[0].available)
        this.noTrainingDataPresent = true;
    }

    appendNewsResult(value) {
      this.newsResult = this.newsResult.concat(value);
      this.newsResult.sort(this.compare)
      if(!this.newsResult[9].available && !this.newsResult[0].available)
        this.noNewsDataPresent = true;
    }

    appendMarketplaceResult(value) {
      this.marketPlaceResult = this.marketPlaceResult.concat(value);
      this.marketPlaceResult.sort(this.compare)
      if(!this.marketPlaceResult[9].available && !this.marketPlaceResult[0].available)
        this.noMarketPlaceDataPresent = true;
    }

    appendVideoResult(value) {
      this.videoResult = this.videoResult.concat(value);
      this.videoResult.sort(this.compare);
      if(!this.videoResult[9].available && !this.videoResult[0].available)
        this.noVideoDataPresent = true;
    }

    compare(a,b) {
      if(a.available===b.available)
        return 0;
      else if(a.available)
        return -1;
      else
        return 1;
    }

    sendEmailToAdmin(emailData) {
      console.log(JSON.stringify(emailData));
      return this._http.post(this._sendEmailUrl, emailData)
        .map((response: Response) => response.json());
    }
}
