import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { MdDialogModule, MdButtonModule ,MdCheckboxModule ,MdSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SearchsectionComponent } from './searchsection/searchsection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { MoreresultComponent } from './moreresult/moreresult.component';
import { MainsearchComponent } from './mainsearch/mainsearch.component';
import { SettingmodalComponent } from './settingmodal/settingmodal.component';
import { WebsiteService } from './website.service';
import { DataService } from './data.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchsectionComponent,
    HomepageComponent,
    SearchresultComponent,
    MoreresultComponent,
    MainsearchComponent,
    SettingmodalComponent,
    PrivacypolicyComponent,
    TermsofuseComponent,
    AffiliateComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MdDialogModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSelectModule,
    AngularMultiSelectModule
  ],
  exports: [
    SettingmodalComponent
  ],
  entryComponents: [
    SettingmodalComponent
  ],
  providers: [DataService, WebsiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
