import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(event, where) {
  	event.preventDefault();
    event.stopPropagation();
  	switch(where) {
  		case 'terms':
  			this.router.navigate(["/terms-of-use"]);
  			break;
  		case 'privacy':
  			this.router.navigate(["/privacy-policy"]);
  			break;
  		case 'affiliate':
  			this.router.navigate(["/affiliate"]);
  			break;
  		case 'contact':
  			this.router.navigate(["/contact-us"]);
  			break;
  		default:
  			break;
  	}
  }

}
