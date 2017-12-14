import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Title]
})
export class AppComponent implements OnInit {
	title = 'app';
    constructor(private router: Router, private newTitle: Title, private meta: Meta) { }

    ngOnInit() {
      this.newTitle.setTitle('Domain Name Generator – Quality available domains | DomainAuthor.com');
      this.meta.addTag({ name: 'description', content: 'Generate high-quality, pronounceable and SEO-friendly domain names. We make clever suggestions and check domain availability.' });
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
    }
}
