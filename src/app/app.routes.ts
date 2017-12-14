import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { MoreresultComponent } from './moreresult/moreresult.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { ContactusComponent } from './contactus/contactus.component';
const appRoutes: Routes = [{
        path: '',
        component: HomepageComponent
    },
    {
        path: 'result',
        component: SearchresultComponent
    },
    {
        path: 'more',
        component: MoreresultComponent
    },
    {
        path: 'privacy-policy',
        component: PrivacypolicyComponent
    },
    {
        path: 'terms-of-use',
        component: TermsofuseComponent
    },
    {
        path: 'affiliate',
        component: AffiliateComponent
    },
    {
        path: 'contact-us',
        component: ContactusComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);