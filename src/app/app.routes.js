"use strict";
exports.__esModule = true;
var router_1 = require("@angular/router");
var homepage_component_1 = require("./homepage/homepage.component");
var searchresult_component_1 = require("./searchresult/searchresult.component");
var moreresult_component_1 = require("./moreresult/moreresult.component");
var appRoutes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: homepage_component_1.HomepageComponent
    },
    {
        path: 'result',
        component: searchresult_component_1.SearchresultComponent
    },
    {
        path: 'more',
        component: moreresult_component_1.MoreresultComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
