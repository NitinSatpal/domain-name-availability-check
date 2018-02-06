import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WebsiteService } from '../website.service';
@Component({
  selector: 'app-moreresult',
  templateUrl: './moreresult.component.html',
  styleUrls: ['./moreresult.component.css']
})
export class MoreresultComponent implements OnInit {
  constructor(public data:DataService, public websiteData: WebsiteService) { }
  currentIndex = -1;
  keywords = ["website","business","shop","software","app","eBook", "affiliate","community","training", "news","marketplace","video"];
  fetchIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  moreResultsOver = false;
  domainResult = [];
  iteratorKey = 30;
  ngOnInit() {
    this.populateResults(this.websiteData.showMoreResultsFor, true);
    setTimeout(function() {
      this.iteratorKey = 60;
    }, 10000);
  }
  previous(){
    if (this.currentIndex>0)
    this.currentIndex--;
    this.populateResults(this.keywords[this.currentIndex], false);
  }
  next(){
    if (this.currentIndex<this.keywords.length-1)
    this.currentIndex++;
    this.populateResults(this.keywords[this.currentIndex], false);
  }

  populateResults (key, changeCurrentIndex) {
    switch(key) {
      case 'website':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.websiteResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.websiteResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'business':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.businessResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.businessResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'shops':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.shopResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.shopResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'software':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor)
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.softwareResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.softwareResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'app':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor)
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.appResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.appResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'eBook':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor)
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.eBookResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.eBookResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'affiliate':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor)
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.affiliateResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.affiliateResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'community':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor)
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.communityResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.communityResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'training':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor)
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.trainingResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.trainingResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'news':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor)
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.newsResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.newsResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'marketplace':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor)
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.marketPlaceResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.marketPlaceResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      case 'video':
        if(changeCurrentIndex)
          this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor)
        var upperBound = this.fetchIndex[this.currentIndex] * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.videoResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.videoResult.length)
          this.moreResultsOver = true;
        else
          this.moreResultsOver = false;
        break;
      default:
        break;
    }
  }

  loadMore() {
    switch(this.keywords[this.currentIndex]) {
      case 'website':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.websiteResult.slice(0, upperBound);
        if (this.domainResult.length == this.websiteData.websiteResult.length)
          this.moreResultsOver = true;
        break;
      case 'business':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.businessResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.businessResult.length)
          this.moreResultsOver = true;
        break;
      case 'shops':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.shopResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.shopResult.length)
          this.moreResultsOver = true;
        break;
      case 'software':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.softwareResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.softwareResult.length)
          this.moreResultsOver = true;
        break;
      case 'app':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.appResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.appResult.length)
          this.moreResultsOver = true;
        break;
      case 'eBook':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.eBookResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.eBookResult.length)
          this.moreResultsOver = true;
        break;
      case 'affiliate':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.affiliateResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.affiliateResult.length)
          this.moreResultsOver = true;
        break;
      case 'community':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.communityResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.communityResult.length)
          this.moreResultsOver = true;
        break;
      case 'training':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.trainingResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.trainingResult.length)
          this.moreResultsOver = true;
        break;
      case 'news':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.newsResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.newsResult.length)
          this.moreResultsOver = true;
        break;
      case 'marketplace':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.marketPlaceResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.marketPlaceResult.length)
          this.moreResultsOver = true;
        break;
      case 'video':
        var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
        this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
        this.domainResult = this.websiteData.videoResult.slice(0,upperBound);
        if (this.domainResult.length == this.websiteData.videoResult.length)
          this.moreResultsOver = true;
        break;
      default:
        break;
    }
  }

  goToTopOfThePage() {
    window.scrollTo(0, 0)
  }

  redirecToProvider(event, domain) {
    event.preventDefault();
    event.stopPropagation();
    if (JSON.parse(this.websiteData.paramDomainProvider) == "Namecheap") {
      window.open("https://www.namecheap.com/domains/registration/results.aspx?domain=" + domain + "&affId=63790", "_blank");
      return false;
    } else {
      window.open("http://www.anrdoezrs.net/click-8506751-11774111?sid=12345&url=https://www.godaddy.com/domains/searchresults.aspx?domainToCheck=" + domain + "&checkAvail=1", "_blank");
      return false;
    }
  }

  checkAgain(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  stopReload(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}
