import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../website.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _websiteService:WebsiteService) { }

  ngOnInit() {
  	console.log(localStorage.getItem('domainProvider'));
  	if (localStorage.getItem('domainProvider') != null)
        this._websiteService.paramDomainProvider = localStorage.getItem('domainProvider');
  }

}
