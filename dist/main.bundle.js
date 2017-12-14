webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/affiliate/affiliate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-page-title {\n\tfont-family: OpenSansExtraBold;\n    font-size: 30px;\n    line-height: 0.93;\n    text-align: center;\n    color: #fb3f0d;\n    margin: 20px 0 30px 0;\n    cursor: pointer;\n}\n.affiliate-disclaimer p, .affiliate-disclaimer li{\n\tfont-size: 16px;\n}\n.affiliate-disclaimer .main-heading {\n\tfont-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/affiliate/affiliate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\">\n\t<h1 routerLink=\"/\" class=\"footer-page-title search_title\">Domain<span>Author</span></h1>\n</div>\n<div class=\"container affiliate-disclaimer\">\n\t<h2 class=\"text-center main-heading\">Affiliate Disclaimer</h2>\n\t<p>\n\t\tWe participate in affiliate programs of the following companies:\n\t</p>\n\t<ul>\n\t\t<li>GoDaddy</li>\n\t\t<li>Namecheap</li>\n\t\t<li>Bluehost</li>\n\t</ul>\n\t<p>\n\t\tIf you decide to buy something (e.g. a domain) from these companies after having clicked on one of our affiliate links on DomainAuthor.com, we will receive a commission from these companies (no costs arising for you).\n\t</p>\n\t<p>\n\t\tPlease note that we are not getting paid or receive free products or services in exchange for mentioning these companies. Participating in these companies’ affiliate programs has been our decision as we trust them.\n\t</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/affiliate/affiliate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffiliateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AffiliateComponent = (function () {
    function AffiliateComponent() {
    }
    AffiliateComponent.prototype.ngOnInit = function () {
    };
    return AffiliateComponent;
}());
AffiliateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-affiliate',
        template: __webpack_require__("../../../../../src/app/affiliate/affiliate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/affiliate/affiliate.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AffiliateComponent);

//# sourceMappingURL=affiliate.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid{\n    padding:0\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, newTitle, meta) {
        this.router = router;
        this.newTitle = newTitle;
        this.meta = meta;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.newTitle.setTitle('Domain Name Generator – Quality available domains | DomainAuthor.com');
        this.meta.addTag({ name: 'description', content: 'Generate high-quality, pronounceable and SEO-friendly domain names. We make clever suggestions and check domain availability.' });
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["h" /* Title */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["h" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["h" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["i" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["i" /* Meta */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__searchsection_searchsection_component__ = __webpack_require__("../../../../../src/app/searchsection/searchsection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__searchresult_searchresult_component__ = __webpack_require__("../../../../../src/app/searchresult/searchresult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__moreresult_moreresult_component__ = __webpack_require__("../../../../../src/app/moreresult/moreresult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mainsearch_mainsearch_component__ = __webpack_require__("../../../../../src/app/mainsearch/mainsearch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settingmodal_settingmodal_component__ = __webpack_require__("../../../../../src/app/settingmodal/settingmodal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__website_service__ = __webpack_require__("../../../../../src/app/website.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__("../../../../angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__privacypolicy_privacypolicy_component__ = __webpack_require__("../../../../../src/app/privacypolicy/privacypolicy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__termsofuse_termsofuse_component__ = __webpack_require__("../../../../../src/app/termsofuse/termsofuse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__affiliate_affiliate_component__ = __webpack_require__("../../../../../src/app/affiliate/affiliate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/contactus/contactus.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__searchsection_searchsection_component__["a" /* SearchsectionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__searchresult_searchresult_component__["a" /* SearchresultComponent */],
            __WEBPACK_IMPORTED_MODULE_12__moreresult_moreresult_component__["a" /* MoreresultComponent */],
            __WEBPACK_IMPORTED_MODULE_13__mainsearch_mainsearch_component__["a" /* MainsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_14__settingmodal_settingmodal_component__["a" /* SettingmodalComponent */],
            __WEBPACK_IMPORTED_MODULE_18__privacypolicy_privacypolicy_component__["a" /* PrivacypolicyComponent */],
            __WEBPACK_IMPORTED_MODULE_19__termsofuse_termsofuse_component__["a" /* TermsofuseComponent */],
            __WEBPACK_IMPORTED_MODULE_20__affiliate_affiliate_component__["a" /* AffiliateComponent */],
            __WEBPACK_IMPORTED_MODULE_21__contactus_contactus_component__["a" /* ContactusComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_17_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_14__settingmodal_settingmodal_component__["a" /* SettingmodalComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__settingmodal_settingmodal_component__["a" /* SettingmodalComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_15__website_service__["a" /* WebsiteService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchresult_searchresult_component__ = __webpack_require__("../../../../../src/app/searchresult/searchresult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__moreresult_moreresult_component__ = __webpack_require__("../../../../../src/app/moreresult/moreresult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacypolicy_privacypolicy_component__ = __webpack_require__("../../../../../src/app/privacypolicy/privacypolicy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__termsofuse_termsofuse_component__ = __webpack_require__("../../../../../src/app/termsofuse/termsofuse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__affiliate_affiliate_component__ = __webpack_require__("../../../../../src/app/affiliate/affiliate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/contactus/contactus.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });








var appRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__homepage_homepage_component__["a" /* HomepageComponent */]
    },
    {
        path: 'result',
        component: __WEBPACK_IMPORTED_MODULE_2__searchresult_searchresult_component__["a" /* SearchresultComponent */]
    },
    {
        path: 'more',
        component: __WEBPACK_IMPORTED_MODULE_3__moreresult_moreresult_component__["a" /* MoreresultComponent */]
    },
    {
        path: 'privacy-policy',
        component: __WEBPACK_IMPORTED_MODULE_4__privacypolicy_privacypolicy_component__["a" /* PrivacypolicyComponent */]
    },
    {
        path: 'terms-of-use',
        component: __WEBPACK_IMPORTED_MODULE_5__termsofuse_termsofuse_component__["a" /* TermsofuseComponent */]
    },
    {
        path: 'affiliate',
        component: __WEBPACK_IMPORTED_MODULE_6__affiliate_affiliate_component__["a" /* AffiliateComponent */]
    },
    {
        path: 'contact-us',
        component: __WEBPACK_IMPORTED_MODULE_7__contactus_contactus_component__["a" /* ContactusComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-page-title {\n\tfont-family: OpenSansExtraBold;\n    font-size: 30px;\n    line-height: 0.93;\n    text-align: center;\n    color: #fb3f0d;\n    margin: 20px 0 30px 0;\n    cursor: pointer;\n}\n.contact-us .main-heading {\n\tfont-weight: bold;\n}\n.contact-us .row {\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n.contact-us textarea {\n\tresize: vertical;\n}\n.contact-us .sendButton {\n\tbackground-color: #fb3f0d !important;\n\tborder-color: #fb3f0d !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\">\n\t<h1 routerLink=\"/\" class=\"footer-page-title search_title\">Domain<span>Author</span></h1>\n</div>\n<div class=\"container contact-us\">\n\t<h2 class=\"main-heading\">Contact Us</h2>\n\t<p>Please submit your improvement suggestions or business inquiries below:</p>\n\t\n\t<form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" ngNativeValidate>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"panel\">\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\" class=\"control-label\">Name</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"\" [(ngModel)]=\"nameOFTheSubmitter\"/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\" class=\"control-label\">Email address</label>\n\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"\" required [(ngModel)]=\"mailOFTheSubmitter\"/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\" class=\"control-label\">Your message</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" name=\"message\" id=\"message\" placeholder=\"\" required=\"\" [(ngModel)]=\"msgBySubmitter\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t<div class=\"form-group\" show-errors>\n\t\t\t\t\t\t<button class=\"btn btn-primary sendButton\">Send</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\t<p>You can also reach us on Facebook: <a href=\"https://www.facebook.com/DomainAuthor/\" target=\"_blank\">https://www.facebook.com/DomainAuthor/</a></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__website_service__ = __webpack_require__("../../../../../src/app/website.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactusComponent = (function () {
    function ContactusComponent(_websiteService) {
        this._websiteService = _websiteService;
        this.nameOFTheSubmitter = "";
        this.mailOFTheSubmitter = "";
        this.msgBySubmitter = "";
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent.prototype.onSubmit = function () {
        var emailData = {
            from: this.nameOFTheSubmitter,
            fromEmail: this.mailOFTheSubmitter,
            message: this.msgBySubmitter
        };
        this._websiteService.sendEmailToAdmin(emailData)
            .subscribe(function (resWebsiteData) {
            console.log(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    return ContactusComponent;
}());
ContactusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-contactus',
        template: __webpack_require__("../../../../../src/app/contactus/contactus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contactus/contactus.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__website_service__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__website_service__["a" /* WebsiteService */]) === "function" && _a || Object])
], ContactusComponent);

var _a;
//# sourceMappingURL=contactus.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
        this.services = ["GoDaddy (recommended)", "Bluehost", "Namecheap"];
        this.prefix = ["My", "The", "Mr", "Ilove", "Smart", "Easy"];
        this.suffix = ["Head", "Hero", "King", "Queen", "Digital", "Facts", "Paradise"];
        this.exts = [
            { name: ".com", value: true },
            { name: ".net", value: true },
            { name: ".org", value: false },
            { name: ".info", value: false },
            { name: ".io", value: false },
            { name: ".co.uk", value: false }
        ];
        this.hypens = false;
        this.selectedValue = "GoDaddy (recommended)";
        this.keyword = "";
        this.domainKeyword = "";
        this.keyword = "";
    }
    DataService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min - 1)) + min;
    };
    DataService.prototype.getUppercase = function (value) {
        return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
    };
    DataService.prototype.setKeyword = function (value) {
        this.keyword = value;
        if (this.hypens == false) {
            this.domainKeyword = this.prefix[this.getRandomInt(0, this.prefix.length)] + this.getUppercase(value) + this.suffix[this.getRandomInt(0, this.suffix.length)];
        }
        else {
            this.domainKeyword = this.prefix[this.getRandomInt(0, this.prefix.length)] + "-" + this.getUppercase(value) + "-" + this.suffix[this.getRandomInt(0, this.suffix.length)];
        }
    };
    DataService.prototype.refreshKeyword = function () {
        if (this.hypens == false) {
            this.domainKeyword = this.prefix[this.getRandomInt(0, this.prefix.length)] + this.getUppercase(this.keyword) + this.suffix[this.getRandomInt(0, this.suffix.length)];
        }
        else {
            this.domainKeyword = this.prefix[this.getRandomInt(0, this.prefix.length)] + "-" + this.getUppercase(this.keyword) + "-" + this.suffix[this.getRandomInt(0, this.suffix.length)];
        }
    };
    DataService.prototype.getExts = function () {
        return this.exts;
    };
    DataService.prototype.setExts = function (value) {
        this.keyword = value;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n    height: 55px;\n    line-height: 55px;\n    background: #ff9137;\n}\n\n.footer a {\n    color: #fff;\n    text-decoration: underline;\n    padding: 0 35px;\n    font-family: OpenSansRegular;\n    font-size: 14px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer text-center\">\n    <!-- <a href=\"#\">Blog</a> -->\n    <a href=\"\" (click)=\"navigate($event, 'terms')\">Terms of Use</a>\n    <a href=\"\" (click)=\"navigate($event, 'privacy')\">Privacy Policy</a>\n    <a href=\"\" (click)=\"navigate($event, 'affiliate')\">Affiliate Disclaimer</a>\n    <a href=\"\" (click)=\"navigate($event, 'contact')\">Contact</a>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.navigate = function (event, where) {
        event.preventDefault();
        event.stopPropagation();
        switch (where) {
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
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n    background: #f5f5f5;\n    padding: 80px 0 40px 0;\n    margin-top: -5px;\n}\n\n.content_container {\n    width: 1000px;\n    margin: 0 auto;\n}\n\n@media screen and (max-width: 1000px) {\n    .content_container {\n        width: 100%;\n    }\n}\n\n.content_info img {\n    margin-bottom: 25px;\n}\n\n.content_info h4 {\n    margin: 0 0 25px 0;\n    font-family: OpenSansSemiBold;\n    color: #3c3c3c;\n    line-height: 1.25;\n    font-size: 20px;\n}\n\n.content_info h6 {\n    width: 260px;\n    margin: 0 auto;\n    font-family: OpenSansRegular;\n    color: #3c3c3c;\n    line-height: 1.79;\n    font-size: 14px;\n}\n\n.content_info {\n    padding-bottom: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-mainsearch></app-mainsearch>\n<div class=\"content\">\n    <div class=\"content_container row\">\n        <div class=\"col-sm-6 col-md-4 col-xs-12 text-center content_info\">\n            <img src=\"./assets/images/high-quality-icons.svg\" alt=\"\">\n            <h4>High-Quality Domains</h4>\n            <h6>Find a domain that suits your project. We make smart suggestions depending on what you need the domain for.</h6>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-xs-12 text-center content_info\">\n            <img src=\"./assets/images/easy-icon.svg\" alt=\"\">\n            <h4>Easy to Remember</h4>\n            <h6>Get a domain that is easy to pronounce and remember for your visitors. This ensures they will come back again.</h6>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-xs-12 text-center content_info\">\n            <img src=\"./assets/images/seo-icon.svg\" alt=\"\">\n            <h4>SEO-Friendly</h4>\n            <h6>The suggested domains contain your keywords in a natural way that is loved by both visitors and search engines.</h6>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-xs-12 text-center content_info\">\n            <img src=\"./assets/images/fee-icon.svg\" alt=\"\">\n            <h4>Regular Registration Fee</h4>\n            <h6>Some domains cost hundreds or thousands of dollars. We only show those that cost the regular price.</h6>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-xs-12 text-center content_info\">\n            <img src=\"./assets/images/safety-icon.svg\" alt=\"\">\n            <h4>Full Safety</h4>\n            <h6>We do not track what you type into our application nor which domain you decide for. Your ideas are safe.</h6>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-xs-12 text-center content_info\">\n            <img src=\"./assets/images/free-icon.svg\" alt=\"\">\n            <h4>100% Free to Use</h4>\n            <h6>We earn a commission from the domain registrar if you buy one of our suggested domains. No costs for you.</h6>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__website_service__ = __webpack_require__("../../../../../src/app/website.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = (function () {
    function HomepageComponent(_websiteService) {
        this._websiteService = _websiteService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('domainProvider'));
        if (localStorage.getItem('domainProvider') != null)
            this._websiteService.paramDomainProvider = localStorage.getItem('domainProvider');
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__website_service__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__website_service__["a" /* WebsiteService */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainsearch/mainsearch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".setting_modal:hover,\n.setting_modal:focus {\n    cursor: pointer;\n    display: inline-block;\n    box-shadow: 0px 0px 4px rgba(255, 0, 0, 1);\n}\n\n.setting_modal {\n    padding-left: 0;\n}\n.spinner.hideSpinner { visibility: hidden !important; }\n.spinner.showSpinner { visibility: block !important; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainsearch/mainsearch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <h1 class=\"title\">Domain<span>Author</span></h1>\n    <h3 class=\"sub_title\">Find the best domain for your next project</h3>\n    <div class=\"input-group search_form\" style=\"width: 830px;\">\n        <div class=\"form-group  has-feedback\">\n            <input (keyup.enter)=\"search()\" type=\"text\" class=\"form-control\" [(ngModel)]=\"keyword\" id=\"inputSuccess5\" placeholder=\"Enter a topic or keyword\">\n        </div>\n        <span class=\"input-group-btn\">\n            <button (click)=\"search()\" class=\"btn\" type=\"button\"><img src=\"./assets/images/search-icon.svg\" alt=\"\">Search</button>\n        </span>\n        <span class=\"input-group-btn spinner\" [ngClass]=\"{hideSpinner: hideSpinner, showSpinner: showSpinner}\">\n            <img src=\"./assets/images/Spinner.gif\" alt=\"\" style=\"height:50px;\">\n        </span>\n    </div>\n    <div class=\"header_setting\">\n        <span class=\"setting_modal\"><a (click)=\"openSettingDialog()\"><img src=\"./assets/images/settings-icon.svg\" alt=\"\"></a>\n            <a (click)=\"openSettingDialog()\" class=\"divider\">Settings</a></span>\n\n        <span>Please do not infringe any trademarks with this tool</span>\n    </div>\n    <div class=\"header_img\">\n        <img src=\"./assets/images/com_desk.png\" alt=\"\">\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/mainsearch/mainsearch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settingmodal_settingmodal_component__ = __webpack_require__("../../../../../src/app/settingmodal/settingmodal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__website_service__ = __webpack_require__("../../../../../src/app/website.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainsearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainsearchComponent = (function () {
    function MainsearchComponent(dialog, data, router, _websiteService) {
        this.dialog = dialog;
        this.data = data;
        this.router = router;
        this._websiteService = _websiteService;
        this.initialCategoryResult = {};
        this.keyword = "";
        this.hideSpinner = true;
        this.showSpinner = false;
    }
    MainsearchComponent.prototype.ngOnInit = function () {
    };
    MainsearchComponent.prototype.openSettingDialog = function () {
        var psDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__settingmodal_settingmodal_component__["a" /* SettingmodalComponent */], {
            disableClose: false,
            hasBackdrop: true,
            panelClass: 'overay-pan-background',
            backdropClass: 'custom-backdrop-class',
            width: '460px'
        });
    };
    MainsearchComponent.prototype.search = function () {
        var _this = this;
        this.hideSpinner = false;
        this.showSpinner = true;
        this._websiteService.getWebsiteDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setWebsiteResult(resWebsiteData);
            _this._websiteService.noWebsiteDataPresent = false;
            _this.hideSpinner = true;
            _this.showSpinner = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getBusinessDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setBusinessResult(resWebsiteData);
            _this._websiteService.noBusinessDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getShopDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setShopResult(resWebsiteData);
            _this._websiteService.noShopDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getSoftwareDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setSoftwareResult(resWebsiteData);
            _this._websiteService.noSoftwareDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getAppDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setAppResult(resWebsiteData);
            _this._websiteService.noAppDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getEBookDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setEBookResult(resWebsiteData);
            _this._websiteService.noEBookDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getAffiliateDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setAffiliateResult(resWebsiteData);
            _this._websiteService.noAffiliateDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getCommunityDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setCommunityResult(resWebsiteData);
            _this._websiteService.noCommunityDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getTrainingDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setTrainingResult(resWebsiteData);
            _this._websiteService.noTrainingDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getNewsDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setNewsResult(resWebsiteData);
            _this._websiteService.noNewsDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getMarketPlaceDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setMarketPlaceResult(resWebsiteData);
            _this._websiteService.noMarketPlaceDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getVideoDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setVideoResult(resWebsiteData);
            _this._websiteService.noVideoDataPresent = false;
        }, function (error) { return console.log(error); });
    };
    return MainsearchComponent;
}());
MainsearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-mainsearch',
        template: __webpack_require__("../../../../../src/app/mainsearch/mainsearch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainsearch/mainsearch.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__website_service__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__website_service__["a" /* WebsiteService */]) === "function" && _d || Object])
], MainsearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=mainsearch.component.js.map

/***/ }),

/***/ "../../../../../src/app/moreresult/moreresult.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active_item {\n    padding: 0 20px;\n    height: 60px;\n    line-height: 60px;\n    background-color: #fff;\n    border-left: 3px solid #2dcd73!important;\n    border: 1px solid #e6e6e6;\n    color: #3c3c3c;\n    font-family: OpenSansBold;\n    font-size: 14px;\n    margin-bottom: 10px;\n}\n\n.active_item a,\n.inactive_item a {\n    font-size: 11px;\n    color: #ff530a;\n    text-decoration: underline;\n}\n\n.inactive_item {\n    padding: 0 20px;\n    height: 60px;\n    line-height: 60px;\n    background-color: #fafafa;\n    border-left: 3px solid #f0aaa5!important;\n    border: 1px solid #ebebeb;\n    color: #3c3c3c;\n    font-family: OpenSansBold;\n    font-size: 14px;\n    margin-bottom: 10px;\n}\n\n.active_item:hover {\n    box-shadow: 0px 0px 4px #2dcd73;\n    cursor: pointer;\n}\n\n.links {\n    padding: 30px 10.83vw 10px 10.83vw;\n}\n\n.links a {\n    color: #ff530a;\n    text-decoration: underline;\n    font-size: 20px;\n    font-family: OpenSansBold;\n    line-height: 1.54;\n    cursor: pointer;\n    padding: 0 5px;\n}\n\n.links a:hover,\n.links a:focus {\n    box-shadow: 0px 0px 4px rgba(255, 0, 0, 1);\n}\n\n.more_results {\n    margin-top: 20px;\n    padding: 0 18.33vw 30px 18.33vw;\n}\n\n.more_results h1 {\n    font-family: OpenSansBold;\n    font-size: 25px;\n    line-height: 1.4;\n    color: #3c3c3c;\n    margin: 0 0 20px 10px;\n}\n\n@media screen and (max-width: 768px) {\n    .links {\n        padding: 30px 20px 10px 20px;\n    }\n    .links a {\n        font-size: 16px;\n    }\n}\n\n@media screen and (max-width: 460px) {\n    .more_results {\n        padding: 0 20px 30px 20px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/moreresult/moreresult.component.html":
/***/ (function(module, exports) {

module.exports = "<app-searchsection></app-searchsection>\n<div class=\"content_section\">\n    <div class=\"links\">\n        <a (click)=\"previous()\" style=\"text-transform: capitalize;\"><i *ngIf=\"currentIndex > 0\" class=\"fa fa-chevron-left\"></i> {{keywords[currentIndex-1]}}</a>\n        <a (click)=\"next()\" class=\"pull-right\" style=\"text-transform: capitalize;\">{{keywords[currentIndex+1]}} <i *ngIf=\"currentIndex < keywords.length-1\" class=\"fa fa-chevron-right\"></i></a>\n    </div>\n    <div class=\"more_results\" style=\"margin-bottom: 20px;\">\n        <h1 style=\"text-transform: capitalize;\">{{keywords[currentIndex]}}</h1>\n        <div *ngIf=\"websiteData.keyword!=''\">\n            <a *ngFor=\"let ext of domainResult;let i=index\" href=\"\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                <div [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                    {{ext.domain}}\n                    <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                    <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                </div>\n            </a>\n        </div>\n        <div class=\"text-center\" style=\"margin-top: 25px;\">\n            <button class=\"btn btn-primary text-center\" (click)=\"loadMore()\" style=\"font-size: 15px; color: #ff530a; background-color: transparent; border-color: #ff530a\" *ngIf=\"!moreResultsOver\"> Load More </button>\n            <span style=\"color: black; font-weight: bold; display: inline-block;\" *ngIf=\"moreResultsOver\" (click)=\"stopReload($event)\">No more results available.</span>&nbsp;&nbsp;\n            <button class=\"btn btn-primary text-center\" (click)=\"goToTopOfThePage()\" style=\"font-size: 15px; color: #ff530a; background-color: transparent; border-color: #ff530a; display: inline-block;\" *ngIf=\"moreResultsOver\"> Go to Top </button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/moreresult/moreresult.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__website_service__ = __webpack_require__("../../../../../src/app/website.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreresultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoreresultComponent = (function () {
    function MoreresultComponent(data, websiteData) {
        this.data = data;
        this.websiteData = websiteData;
        this.currentIndex = -1;
        this.keywords = ["website", "business", "shops", "software", "app", "eBook", "affiliate", "community", "training", "news", "marketplace", "video"];
        this.fetchIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.moreResultsOver = false;
        this.domainResult = [];
        this.iteratorKey = 30;
    }
    MoreresultComponent.prototype.ngOnInit = function () {
        this.populateResults(this.websiteData.showMoreResultsFor, true);
        setTimeout(function () {
            this.iteratorKey = 60;
        }, 10000);
    };
    MoreresultComponent.prototype.previous = function () {
        if (this.currentIndex > 0)
            this.currentIndex--;
        this.populateResults(this.keywords[this.currentIndex], false);
    };
    MoreresultComponent.prototype.next = function () {
        if (this.currentIndex < this.keywords.length - 1)
            this.currentIndex++;
        this.populateResults(this.keywords[this.currentIndex], false);
    };
    MoreresultComponent.prototype.populateResults = function (key, changeCurrentIndex) {
        switch (key) {
            case 'website':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.websiteResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.websiteResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'business':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.businessResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.businessResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'shops':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.shopResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.shopResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'software':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.softwareResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.softwareResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'app':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.appResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.appResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'eBook':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.eBookResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.eBookResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'affiliate':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.affiliateResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.affiliateResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'community':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.communityResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.communityResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'training':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.trainingResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.trainingResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'news':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.newsResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.newsResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'marketplace':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.marketPlaceResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.marketPlaceResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            case 'video':
                if (changeCurrentIndex)
                    this.currentIndex = this.keywords.indexOf(this.websiteData.showMoreResultsFor);
                var upperBound = this.fetchIndex[this.currentIndex] * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.videoResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.videoResult.length)
                    this.moreResultsOver = true;
                else
                    this.moreResultsOver = false;
                break;
            default:
                break;
        }
    };
    MoreresultComponent.prototype.loadMore = function () {
        switch (this.keywords[this.currentIndex]) {
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
                this.domainResult = this.websiteData.businessResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.businessResult.length)
                    this.moreResultsOver = true;
                break;
            case 'shops':
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.shopResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.shopResult.length)
                    this.moreResultsOver = true;
                break;
            case 'software':
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.softwareResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.softwareResult.length)
                    this.moreResultsOver = true;
                break;
            case 'app':
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.appResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.appResult.length)
                    this.moreResultsOver = true;
                break;
            case 'eBook':
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.eBookResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.eBookResult.length)
                    this.moreResultsOver = true;
                break;
            case 'affiliate':
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.affiliateResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.affiliateResult.length)
                    this.moreResultsOver = true;
                break;
            case 'community':
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.communityResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.communityResult.length)
                    this.moreResultsOver = true;
                break;
            case 'training':
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.trainingResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.trainingResult.length)
                    this.moreResultsOver = true;
                break;
            case 'news':
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.newsResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.newsResult.length)
                    this.moreResultsOver = true;
                break;
            case 'marketplace':
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.marketPlaceResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.marketPlaceResult.length)
                    this.moreResultsOver = true;
                break;
            case 'video':
                var upperBound = (this.fetchIndex[this.currentIndex] + 1) * 30;
                this.fetchIndex[this.currentIndex] = this.fetchIndex[this.currentIndex] + 1;
                this.domainResult = this.websiteData.videoResult.slice(0, upperBound);
                if (this.domainResult.length == this.websiteData.videoResult.length)
                    this.moreResultsOver = true;
                break;
            default:
                break;
        }
    };
    MoreresultComponent.prototype.goToTopOfThePage = function () {
        window.scrollTo(0, 0);
    };
    MoreresultComponent.prototype.redirecToProvider = function (event, domain) {
        event.preventDefault();
        event.stopPropagation();
        if (this.websiteData.paramDomainProvider == 'GoDaddy (recommended)') {
            alert('please try namecheap for now :)');
            return false;
        }
        else if (JSON.parse(this.websiteData.paramDomainProvider) == 'Namecheap') {
            window.open("https://www.namecheap.com/domains/registration/results.aspx?domain=" + domain + "&affId=63790", "_blank");
            return false;
        }
        else {
            alert('please try namecheap for now :)');
            return false;
        }
    };
    MoreresultComponent.prototype.checkAgain = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    MoreresultComponent.prototype.stopReload = function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    };
    return MoreresultComponent;
}());
MoreresultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-moreresult',
        template: __webpack_require__("../../../../../src/app/moreresult/moreresult.component.html"),
        styles: [__webpack_require__("../../../../../src/app/moreresult/moreresult.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__website_service__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__website_service__["a" /* WebsiteService */]) === "function" && _b || Object])
], MoreresultComponent);

var _a, _b;
//# sourceMappingURL=moreresult.component.js.map

/***/ }),

/***/ "../../../../../src/app/privacypolicy/privacypolicy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-page-title {\n\tfont-family: OpenSansExtraBold;\n    font-size: 30px;\n    line-height: 0.93;\n    text-align: center;\n    color: #fb3f0d;\n    margin: 20px 0 30px 0;\n    cursor: pointer;\n}\n.privacy-policy p {\n\tfont-size: 16px;\n}\n.privacy-policy b {\n\tfont-size: 18px;\n}\n.privacy-policy .main-heading {\n\tfont-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacypolicy/privacypolicy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\">\n\t<h1 routerLink=\"/\" class=\"footer-page-title search_title\">Domain<span>Author</span></h1>\n</div>\n<div class=\"container privacy-policy\">\n\t<h2 class=\"text-center main-heading\">Privacy Policy</h2>\n\t<p>\n\t\tIt is DomainAuthor.com’s policy to respect your privacy regarding any information we may collect while operating our website.\n\t</p>\n\t<b>Google Analytics</b>\n\t<p>\n\t\tGoogle Analytics is a web analysis service provided by Google. Google utilizes the data collected to track and examine the use of DomainAuthor.com., to prepare reports on its activities and share them with other Google services. Google may use the data collected to contextualize and personalize the ads of its own advertising network.\n\t</p>\n\t<p>\n\t\tPersonal data collected: Cookie and Usage Data. Place of processing: USA. Find Google’s privacy policy <a href=\"https://www.google.com/intl/en/policies/privacy/\" target=\"_blank\">here.</a>\n\t</p>\n\t<p>\n\t\tWe use Google Analytics to collect information about the use of this site. Google Analytics collects information such as how often users visit this site, what pages they visit when they do so, and what other sites they were visiting prior to coming to this site. We use the information we get from Google Analytics only to improve our site. Google Analytics collects only the IP address assigned to you on the date you visit this site, rather than your name or other identifying information. We do not combine the information collected through the use of Google Analytics with personally identifiable information. Although Google Analytics plants a permanent cookie on your web browser to identify you as a unique user the next time you visit this site, the cookie cannot be used by anyone but Google. You can prevent Google Analytics from recognizing you on return visits to this site by disabling cookies in your browser.\n\t</p>\n\t<p>\n\t\tGoogle Analytics employs cookies to define user sessions, which allows for the collection of data about how visitors are using the websites. Google Analytics uses only first-party cookies for data analysis. This means that the cookies are linked to a specific website domain, and Google Analytics will only use that cookie data for statistical analysis related to your browsing behavior on that specific website. According to Google, the data collected cannot be altered or retrieved by services from other domains.\n\t</p>\n\t<p>\n\t\tIf you want, you can opt out by turning off cookies in the preferences settings in your web browser.\n\t</p>\n\n\t<b>Gathering of Personally-Identifying Information</b>\n\t<p>\n\t\tCertain visitors to DomainAuthor.com’s websites choose to interact with DomainAuthor.com in ways that require DomainAuthor.com to gather personally-identifying information. The amount and type of information that DomainAuthor.com gathers depends on the nature of the interaction. For example, we ask visitors who want to contact us using our contact form for their name and email address. DomainAuthor.com collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with DomainAuthor.com. DomainAuthor.com does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.\n\t</p>\n\t<b>Protection of Certain Personally-Identifying Information</b>\n\t<p>\n\t\tDomainAuthor.com discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on DomainAuthor.com’s behalf or to provide services available at DomainAuthor.com’s websites, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using DomainAuthor.com’s websites, you consent to the transfer of such information to them. DomainAuthor.com will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, DomainAuthor.com discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when DomainAuthor.com believes in good faith that disclosure is reasonably necessary to protect the property or rights of DomainAuthor.com, third parties or the public at large. If you have supplied your email address to DomainAuthor.com, DomainAuthor.com may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with DomainAuthor.com. We primarily use our blog and social media accounts to communicate this type of information, so we expect to keep this type of email to a minimum. DomainAuthor.com takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.\n\t</p>\n\t<b>Cookies</b>\n\t<p>\n\t\tA cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. DomainAuthor.com uses cookies to help identify and track visitors, their usage of DomainAuthor.com website, and their website access preferences. DomainAuthor.com visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using DomainAuthor.com’s websites, with the drawback that certain features of DomainAuthor.com’s websites may not function properly without the aid of cookies.\n\t</p>\n\n\t<b>Business Transfers</b>\n\t<p>\n\t\tIf DomainAuthor.com, or substantially all of its assets, were acquired, or in the unlikely event that DomainAuthor.com goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of DomainAuthor.com may continue to use your personal information as set forth in this policy.\n\t</p>\n\t<b>Ads</b>\n\t<p>\n\t\tAds appearing on any of our websites may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by DomainAuthor.com and does not cover the use of cookies by any advertisers.\n\t</p>\n\t<b>Privacy Policy Changes</b>\n\t<p>\n\t\tAlthough most changes are likely to be minor, DomainAuthor.com may change its Privacy Policy from time to time, and in DomainAuthor.com’s sole discretion. DomainAuthor.com encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.\n\t</p>\n\t<p>\n\t\t<i>\n\t\t\tThis Privacy Policy is a modified version of the Privacy Policy of <a href=\"https://automattic.com/\" target=\"_blank\"> Automattic Inc.</a> that has been made available under the <a href=\"https://creativecommons.org/licenses/by-sa/4.0/\" target=\"_blank\">Attribution-ShareAlike 4.0 International license.</a>\n\t\t</i>\n\t</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/privacypolicy/privacypolicy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypolicyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacypolicyComponent = (function () {
    function PrivacypolicyComponent() {
    }
    PrivacypolicyComponent.prototype.ngOnInit = function () {
    };
    return PrivacypolicyComponent;
}());
PrivacypolicyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-privacypolicy',
        template: __webpack_require__("../../../../../src/app/privacypolicy/privacypolicy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/privacypolicy/privacypolicy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrivacypolicyComponent);

//# sourceMappingURL=privacypolicy.component.js.map

/***/ }),

/***/ "../../../../../src/app/searchresult/searchresult.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search_result_container {\n    padding: 60px 11.66vw 0 11.66vw;\n    background-color: #f5f5f5;\n}\n\n.accordion-heading {\n    padding-bottom: 20px;\n    margin-bottom: 60px;\n    border-bottom: 1px solid #d8d8d8;\n    display: block;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.accordion-heading:hover,\n.accordion-heading:focus {\n    padding-bottom: 18px;\n    border-bottom: 3px solid red;\n}\n\n.accordion-toggle {\n    font-family: OpenSansBold;\n    font-size: 25px;\n    line-height: 1.4;\n    color: #3c3c3c!important;\n    text-decoration: none!important;\n}\n\n.accordion-toggle:after {\n    font-family: 'FontAwesome';\n    content: \"\\F078\";\n    font-size: 18px!important;\n    margin-top: 10px;\n    float: right;\n    color: #979797!important;\n}\n\n.accordion-toggle.collapsed:after {\n    font-family: 'FontAwesome';\n    content: \"\\F054\";\n    font-size: 18px!important;\n    margin-top: 10px;\n    color: #979797!important;\n}\n\n.active_item:hover {\n    box-shadow: 0px 0px 4px #2dcd73;\n\n}\n\n.active_item {\n    padding: 0 20px;\n    height: 60px;\n    line-height: 60px;\n    background-color: #fff;\n    border-left: 3px solid #2dcd73!important;\n    border: 1px solid #e6e6e6;\n    color: #3c3c3c;\n    font-family: OpenSansBold;\n    font-size: 14px;\n    margin-bottom: 10px;\n}\n\n.active_item a,\n.inactive_item a {\n    font-size: 11px;\n    color: #ff530a;\n    text-decoration: underline;\n}\n\n.inactive_item {\n    padding: 0 20px;\n    height: 60px;\n    line-height: 60px;\n    background-color: #fafafa;\n    border-left: 3px solid #f0aaa5!important;\n    border: 1px solid #ebebeb;\n    color: #3c3c3c;\n    font-family: OpenSansBold;\n    font-size: 14px;\n    margin-bottom: 10px;\n}\n\n@media screen and (max-width: 600px) {\n    .active_item,\n    .inactive_item {\n        padding: 0 5px;\n        font-size: 12px;\n    }\n}\n\n.no_result {\n    height: 690px;\n    background-color: #fff;\n    border: 1px solid #ebebeb;\n    padding-top: 30px;\n    margin-bottom: 60px;\n}\n\n.no_result_txt {\n    width: 180px;\n    height: 80px;\n    line-height: 80px;\n    margin: 0 auto 20px auto;\n    border-bottom: 1px solid #dcdcdc;\n    font-size: 30px;\n    font-family: OpenSansRegular;\n}\n\n.no_result_help {\n    width: 180px;\n    margin: 0 auto;\n    color: #3c3c3c;\n    font-family: OpenSansBold;\n}\n\n.no_result_help a {\n    color: #fc3b0d;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.search_result_container.row {\n    margin: 0;\n}\n\n.search_result_container .col-sm-4 {\n    padding: 0 20px;\n}\n\n.content_section {\n    background: #f5f5f5;\n    min-height: 66.6vh;\n    padding-bottom: 60px;\n}\n\n.more_results {\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.more_results a {\n    color: #ff530a;\n    text-decoration: underline;\n    font-size: 13px;\n    font-family: OpenSansBold;\n}\n\n@media screen and (max-width: 1200px) {\n    .search_result_container {\n        padding: 60px 40px;\n    }\n}\n\n@media screen and (max-width: 400px) {\n    .search_result_container {\n        padding: 30px 0px;\n    }\n}\n\n.category_row.row {\n    margin: 0!important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/searchresult/searchresult.component.html":
/***/ (function(module, exports) {

module.exports = "<app-searchsection></app-searchsection>\n<div class=\"content_section\">\n    <div class=\"search_result_container row\">\n        <div class=\"category_row row\">\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noWebsiteDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseOne\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseOne\">Website</a>\n                        </a>\n                        <div id=\"collapseOne\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.websiteResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.websiteResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'website'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                            <!--10 Accordion inner end-->\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noWebsiteDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseOne\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseOne\">Website</a>\n                        </a>\n                        <div id=\"collapseOne\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noBusinessDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTwo\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTwo\">Business</a>\n                        </a>\n                        <div id=\"collapseTwo\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.businessResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.businessResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'business'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noBusinessDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTwo\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTwo\">Business</a>\n                        </a>\n                        <div id=\"collapseTwo\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noShopDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseThree\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseThree\">Shops</a>\n                        </a>\n                        <div id=\"collapseThree\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.shopResult;let i=index\" href=\"#\" (click)=\"redirecToProvider($event,ext.domain)\" class=\"domain-item\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.shopResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'shops'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noShopDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseThree\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseThree\">Shops</a>\n                        </a>\n                        <div id=\"collapseThree\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"category_row row\">\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noSoftwareDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseFour\">\n                            <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseFour\">Software</a>\n                        </a>\n                        <div id=\"collapseFour\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.softwareResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.softwareResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'software'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noSoftwareDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseFour\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseFour\">Software</a>\n                        </a>\n                        <div id=\"collapseFour\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noAppDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseFive\">\n                            <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseFive\">App</a>\n                        </a>\n                        <div id=\"collapseFive\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.appResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.appResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'app'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noAppDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseFive\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseFive\">App</a>\n                        </a>\n                        <div id=\"collapseFive\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noEBookDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseSix\">\n                            <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseSix\">eBook</a>\n                        </a>\n                        <div id=\"collapseSix\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.eBookResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.eBookResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'eBook'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noEBookDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseSix\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseSix\">eBook</a>\n                        </a>\n                        <div id=\"collapseSix\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"category_row row\">\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noAffiliateDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseSeven\">\n                            <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseSeven\">Affiliate</a>\n                        </a>\n                        <div id=\"collapseSeven\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.affiliateResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.affiliateResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'affiliate'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noAffiliateDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseSeven\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseSeven\">Affiliate</a>\n                        </a>\n                        <div id=\"collapseSeven\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noCommunityDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseEight\">\n                            <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseEight\">Community</a>\n                        </a>\n                        <div id=\"collapseEight\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.communityResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.communityResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'community'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noCommunityDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseEight\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseEight\">Community</a>\n                        </a>\n                        <div id=\"collapseEight\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noTrainingDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseNine\">\n                            <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseNine\">Training</a>\n                        </a>\n                        <div id=\"collapseNine\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.trainingResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.trainingResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'training'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noTrainingDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseNine\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseNine\">Training</a>\n                        </a>\n                        <div id=\"collapseNine\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"category_row row\">\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noNewsDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTen\">\n                            <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTen\">News</a>\n                        </a>\n                        <div id=\"collapseTen\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.newsResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.newsResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'news'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noNewsDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTen\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTen\">News</a>\n                        </a>\n                        <div id=\"collapseTen\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noMarketPlaceDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseEleven\">\n                            <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseEleven\">Marketplace</a>\n                        </a>\n                        <div id=\"collapseEleven\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.marketPlaceResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.marketPlaceResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'marketplace'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noMarketPlaceDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseEleven\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseEleven\">Marketplace</a>\n                        </a>\n                        <div id=\"collapseEleven\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                <div class=\"accordion\" id=\"accordion2\">\n                    <div class=\"accordion-group\" *ngIf=\"!websiteData.noVideoDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTwelve\">\n                            <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTwelve\">Video</a>\n                        </a>\n                        <div id=\"collapseTwelve\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                <a *ngFor=\"let ext of websiteData.videoResult;let i=index\" href=\"#\" class=\"domain-item\" (click)=\"redirecToProvider($event,ext.domain)\">\n                                    <div *ngIf=\"i<10\" [ngClass]=\"{'active_item':ext.available,'inactive_item':!ext.available}\">\n                                        {{ext.domain}}\n                                        <a *ngIf=\"ext.available\" href=\"#\" class=\"pull-right\" (click)=\"redirecToProvider($event,ext.domain)\">BUY NOW</a>\n                                        <a *ngIf=\"!ext.available\" href=\"#\" class=\"pull-right\" (click)=\"checkAgain($event)\">CHECK AGAIN</a>\n                                    </div>\n                                </a>\n                                <!--More result-->\n                                <div *ngIf=\"websiteData.videoResult.length>10\" class=\"more_results text-center\">\n                                    <a routerLink=\"/more\" (click)=\"websiteData.showMoreResultsFor = 'video'\">MORE RESULTS <i class=\"fa fa-chevron-right\"></i></a>\n                                </div>\n                                <!--More result-->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"accordion-group\" *ngIf=\"websiteData.noVideoDataPresent\">\n                        <a class=\"accordion-heading\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTwelve\">\n                            <a [ngClass]=\"accordionClass\" data-toggle=\"collapse\" data-parent=\"#accordion2\" href=\"#collapseTwelve\">Video</a>\n                        </a>\n                        <div id=\"collapseTwelve\" [ngClass]=\"collapseClass\">\n                            <div class=\"accordion-inner\">\n                                <div class=\"no_result text-center\">\n                                    <p class=\"no_result_txt\">No results</p>\n                                    <p class=\"no_result_help\"> Please try a new keyword or change the <a (click)=\"openSettingDialog()\">Settings</a></p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/searchresult/searchresult.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settingmodal_settingmodal_component__ = __webpack_require__("../../../../../src/app/settingmodal/settingmodal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__website_service__ = __webpack_require__("../../../../../src/app/website.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchresultComponent = (function () {
    function SearchresultComponent(dialog, route, router, data, websiteData) {
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.data = data;
        this.websiteData = websiteData;
        this.exts = [];
        this.websiteResult = [];
        this.businessResult = [];
        this.shopResult = [];
        this.collapseClass = "accordion-body collapse in";
        this.accordionClass = "accordion-toggle";
    }
    SearchresultComponent.prototype.ngOnInit = function () {
        if (window.screen.width < 768) {
            this.collapseClass = "accordion-body collapse";
            this.accordionClass = "accordion-toggle collapsed";
        }
        this.websiteResult = this.websiteData.getWebsiteResult();
        this.businessResult = this.websiteData.getBusinessResult();
        this.shopResult = this.websiteData.getShopResult();
    };
    SearchresultComponent.prototype.openSettingDialog = function () {
        var psDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__settingmodal_settingmodal_component__["a" /* SettingmodalComponent */], {
            disableClose: false,
            hasBackdrop: true,
            panelClass: 'overay-pan-background',
            backdropClass: 'custom-backdrop-class',
            width: '460px'
        });
    };
    SearchresultComponent.prototype.stopReload = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    SearchresultComponent.prototype.redirecToProvider = function (event, domain) {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.websiteData.paramDomainProvider);
        if (this.websiteData.paramDomainProvider == 'GoDaddy (recommended)') {
            alert('please try namecheap for now :)');
            return false;
        }
        else if (JSON.parse(this.websiteData.paramDomainProvider) == 'Namecheap') {
            window.open("https://www.namecheap.com/domains/registration/results.aspx?domain=" + domain + "&affId=63790", "_blank");
            return false;
        }
        else {
            alert('please try namecheap for now :)');
            return false;
        }
    };
    SearchresultComponent.prototype.checkAgain = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    return SearchresultComponent;
}());
SearchresultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-searchresult',
        template: __webpack_require__("../../../../../src/app/searchresult/searchresult.component.html"),
        styles: [__webpack_require__("../../../../../src/app/searchresult/searchresult.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__website_service__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__website_service__["a" /* WebsiteService */]) === "function" && _e || Object])
], SearchresultComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=searchresult.component.js.map

/***/ }),

/***/ "../../../../../src/app/searchsection/searchsection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title.search_title {\n    font-size: 35px;\n    margin: 40px 0;\n}\n\n.title.search_title:hover,\n.title.search_title:focus {\n    cursor: pointer;\n    outline: none;\n}\n\n.social_link {\n    position: absolute;\n    top: 75px;\n    z-index: 1000;\n}\n\n.social_link a {\n    display: block;\n    margin-bottom: 15px;\n    color: #fff;\n    width: 80px;\n    height: 30px;\n    line-height: 30px;\n    padding-left: 12px;\n    font-size: 11px;\n    font-family: OpenSansBold;\n}\n\n@media screen and (max-width: 992px) {\n    /*.social_link a {\n        margin-left: -65px;\n    }\n    .social_link a:hover {\n        margin-left: 0;\n    }*/\n    .social_link {\n        position: relative;\n        top: -5px;\n        text-align: center;\n    }\n    .social_link a {\n        display: inline-block;\n        margin: 0 5px;\n        padding-left: 0;\n    }\n}\n\n.social_link a i {\n    padding-right: 14px;\n    font-size: 14px;\n}\n\n.social_link a .fa-twitter {\n    padding-right: 10px!important;\n}\n\n.social_link .like_link {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/share-btn.png") + ");\n}\n\n.social_link .tweet_link {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/tweet-btn.png") + ");\n}\n\n.search_setting.search_setting {\n    margin-bottom: 38px;\n}\n\n.setting_modal:hover,\n.setting_modal:focus {\n    cursor: pointer;\n    display: inline-block;\n    box-shadow: 0px 0px 4px rgba(255, 0, 0, 1);\n}\n\n.setting_modal {\n    padding-left: 0;\n}\n\n.spinner.hideSpinner { visibility: hidden !important; }\n.spinner.showSpinner { visibility: block !important; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/searchsection/searchsection.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fb-root\"></div>\n<script>(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';\n  fjs.parentNode.insertBefore(js, fjs);\n}(document, 'script', 'facebook-jssdk'));</script>\n\n<div class=\"header\">\n    <h1 routerLink=\"/\" class=\"title search_title\">Domain<span>Author</span></h1>\n    <div class=\"input-group search_form\"  style=\"width: 830px;\">\n        <div class=\"form-group  has-feedback\">\n            <input type=\"text\" class=\"form-control\" id=\"inputSuccess5\" [(ngModel)]=\"keyword\" placeholder=\"Enter a topic or keyword\">\n        </div>\n        <span class=\"input-group-btn\">\n            <button (click)=\"search()\" class=\"btn\" type=\"button\"><img src=\"./assets/images/search-icon.svg\" alt=\"\">Search</button>\n        </span>\n        <span class=\"input-group-btn spinner\" [ngClass]=\"{hideSpinner: hideSpinner, showSpinner: showSpinner}\">\n            <img src=\"./assets/images/Spinner.gif\" alt=\"\" style=\"height:50px;\">\n        </span>\n    </div>\n    <div class=\"header_setting search_setting\">\n        <span class=\"setting_modal\"><a (click)=\"openSettingDialog()\"><img src=\"./assets/images/settings-icon.svg\" alt=\"\"></a>\n            <a (click)=\"openSettingDialog()\" class=\"divider\">Settings</a></span>\n        <span>Please do not infringe any trademarks with this tool</span>\n    </div>\n    <div class=\"social_link\">\n        <div class=\"fb-like\" data-href=\"https://www.facebook.com/DomainAuthor/\" data-width=\"80\" data-layout=\"button\" data-action=\"like\" data-size=\"small\" data-show-faces=\"true\" data-share=\"false\">\n            <a href=\"\" class=\"fb-xfbml-parse-ignore like_link\" target=\"_blank\"><i class=\"fa fa-facebook\"></i>Like</a>\n        </div>\n        <div class=\"fb-share-button\" data-href=\"https://domainauthor.com\" data-layout=\"button\" data-size=\"small\" data-mobile-iframe=\"true\"><a class=\"fb-xfbml-parse-ignore like_link\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdomainauthor.com%2F&amp;src=sdkpreparse\"><i class=\"fa fa-facebook\"></i>Share</a></div>\n        <a href=\"\" class=\"tweet_link\" href=\"https://twitter.com/intent/tweet?text=https://domainauthor.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i>Tweet</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/searchsection/searchsection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settingmodal_settingmodal_component__ = __webpack_require__("../../../../../src/app/settingmodal/settingmodal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__website_service__ = __webpack_require__("../../../../../src/app/website.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchsectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchsectionComponent = (function () {
    function SearchsectionComponent(dialog, data, _websiteService) {
        this.dialog = dialog;
        this.data = data;
        this._websiteService = _websiteService;
        this.websiteData = [];
        this.keyword = "";
        this.hideSpinner = true;
        this.showSpinner = false;
    }
    SearchsectionComponent.prototype.ngOnInit = function () {
        this.keyword = this._websiteService.keyword;
    };
    SearchsectionComponent.prototype.openSettingDialog = function () {
        console.log("open dialog");
        var psDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__settingmodal_settingmodal_component__["a" /* SettingmodalComponent */], {
            disableClose: false,
            hasBackdrop: true,
            panelClass: 'overay-pan-background',
            backdropClass: 'custom-backdrop-class',
            width: '460px'
        });
    };
    SearchsectionComponent.prototype.search = function () {
        var _this = this;
        this.hideSpinner = false;
        this.showSpinner = true;
        this._websiteService.getWebsiteDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setWebsiteResult(resWebsiteData);
            _this._websiteService.noWebsiteDataPresent = false;
            _this.hideSpinner = true;
            _this.showSpinner = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getBusinessDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setBusinessResult(resWebsiteData);
            _this._websiteService.noBusinessDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getShopDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setShopResult(resWebsiteData);
            _this._websiteService.noShopDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getSoftwareDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setSoftwareResult(resWebsiteData);
            _this._websiteService.noSoftwareDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getAppDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setAppResult(resWebsiteData);
            _this._websiteService.noAppDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getEBookDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setEBookResult(resWebsiteData);
            _this._websiteService.noEBookDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getAffiliateDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setAffiliateResult(resWebsiteData);
            _this._websiteService.noAffiliateDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getCommunityDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setCommunityResult(resWebsiteData);
            _this._websiteService.noCommunityDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getTrainingDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setTrainingResult(resWebsiteData);
            _this._websiteService.noTrainingDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getNewsDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setNewsResult(resWebsiteData);
            _this._websiteService.noNewsDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getMarketPlaceDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setMarketPlaceResult(resWebsiteData);
            _this._websiteService.noMarketPlaceDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getVideoDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setVideoResult(resWebsiteData);
            _this._websiteService.noVideoDataPresent = false;
        }, function (error) { return console.log(error); });
    };
    return SearchsectionComponent;
}());
SearchsectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-searchsection',
        template: __webpack_require__("../../../../../src/app/searchsection/searchsection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/searchsection/searchsection.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__website_service__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__website_service__["a" /* WebsiteService */]) === "function" && _c || Object])
], SearchsectionComponent);

var _a, _b, _c;
//# sourceMappingURL=searchsection.component.js.map

/***/ }),

/***/ "../../../../../src/app/settingmodal/settingmodal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n    height: 85px;\n}\n\n.exts-check-section {\n    margin-top: 10px;\n}\n\n.mat-select{\n  padding-top:5px !important;\n}\n.apply-btn {\n    width: 140px;\n    height: 50px;\n    text-align: center;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    border-radius: 3px;\n    font-size: 14px;\n    font-family: OpenSansBold;\n    background-color: #ff9137;\n}\n\n.btn-section {\n    height: 110px;\n    padding-top: 30px;\n    text-align: center;\n}\n\nhr {\n    width: 460px;\n    margin-left: -30px;\n    border-top: 1px solid #e6e6e6;\n}\n\n.add-more {\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n\n.add-more a {\n    color: #ff530a;\n    font-size: 13px;\n    font-family: OpenSansBold;\n    text-decoration: underline;\n}\n\n.chevron-arrow {\n    margin-left: 10px;\n}\n\n.more-input {\n    height: 50px;\n    margin-top: 15px;\n    border: 2px solid #bebebe;\n    font-size: 14px;\n    font-family: OpenSansBold;\n    color: #3c3c3c;\n}\n\n.error {\n    border: 1px solid #e80c4d!important;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(255, 175, 233, .6)!important;\n}\n:host >>> .dropdown-list {\n    position: fixed !important;\n    width: 31% !important;\n    z-index: 9999 !important;\n    bottom: 223px !important;\n    padding-top: 0 !important;\n}\n:host >>> .cuppa-dropdown {\n    margin-top: 10px !important;\n}\n:host >>> .pure-checkbox input[type=\"checkbox\"] + label[_ngcontent-c8]:before {\n        border: 1px solid grey !important;\n        border-radius: 3px !important;\n}\n:host >>> .pure-checkbox input[type=\"checkbox\"]:checked + label:before {\n    background: #ff9137 !important;\n    border: 1px solid #ff9137 !important;\n}\n:host >>> .selected-list .c-list[_ngcontent-c8] .c-token {\n    background: #ff9137 !important;\n}\n:host >>> .pure-checkbox input[type=\"checkbox\"] + label:after {\n    background: #ff9137 !important;\n    top: 43% !important;\n    left: 3px !important;\n}\n:host >>> .arrow-up {\n    display: none !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settingmodal/settingmodal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <button class=\"close-btn\" (click)=\"Cancel()\" [md-dialog-close]=\"true\">&times;</button>\n    <h1 md-dialog-title>Settings</h1>\n</div>\n\n<md-dialog-content>\n  <br>\n  <span>Choose a domain registrar:</span>\n    <md-select [(ngModel)]=\"selectedValue\" name=\"services\">\n        <md-option *ngFor=\"let service of services\" [value]=\"service\">\n            {{service}}\n        </md-option>\n    </md-select>\n    <section class=\"exts-check-section\">\n        <md-checkbox style=\"padding-right:1px\" *ngFor=\"let ext of exts\" [(ngModel)]=\"ext.value\">{{ext.name}}</md-checkbox>\n    </section>\n    <br>\n    <section style=\"padding-left:20px\">\n        <md-checkbox [(ngModel)]=\"extensions\">Smart Extensions (e.g. .shop and .store for a shop)</md-checkbox>\n    </section>\n    <div class=\"add-more\">\n        <a (click)=\"addmore()\" style=\"margin-bottom: 20px; cursor: pointer;\">ADD MORE EXTENSIONS<i *ngIf=\"!addmore_show\" class=\"chevron-arrow fa fa-chevron-right\" aria-hidden=\"true\"></i><i *ngIf=\"addmore_show\" class=\"chevron-arrow fa fa-chevron-down\" aria-hidden=\"true\"></i></a>\n        <span *ngIf=\"addmore_show\">\n            <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" \n            [settings]=\"dropdownSettings\"\n            (onSelect)=\"onItemSelect($event)\" \n            (onDeSelect)=\"onItemDeSelect($event)\"\n            (onSelectAll)=\"onSelectAll($event)\"\n            (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\n        </span>\n    </div>\n    <hr>\n    <section class=\"hypens\">\n        <md-checkbox [(ngModel)]=\"hypens\">Allow hyphens (-), e.g. domain-author.com</md-checkbox>\n    </section>\n</md-dialog-content>\n<div class=\"btn-section\">\n    <button class=\"btn btn-warning apply-btn\" [md-dialog-close]=\"true\" (click)=\"ApplySuccess()\">Apply</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settingmodal/settingmodal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__website_service__ = __webpack_require__("../../../../../src/app/website.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingmodalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingmodalComponent = (function () {
    function SettingmodalComponent(data, _websiteService) {
        this.data = data;
        this._websiteService = _websiteService;
        this.prevHypens = false;
        this.hypens = false;
        this.newExt = "";
        this.newExtError = false;
        this.addmore_show = false;
        this.selectedValue = "GoDaddy (recommended)";
        this.services = [];
        this.exts = [];
        this.prevExts = [];
        this.prevExtensions = true;
        this.extensions = true;
        this.keyword = "";
        this.validate = "form-control more-input";
        this.dropdownList = [];
        this.selectedItems = [];
        this.prevSelectedItems = [];
        this.dropdownSettings = {};
    }
    SettingmodalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var temp = this.data.exts.map(function (x) { return Object.assign({}, x); });
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
            }
            else {
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
            }
            else {
                this.prevExtensions = false;
                this.extensions = false;
            }
        }
        this.keyword = this._websiteService.keyword;
        this._websiteService.getMoreExtensions()
            .subscribe(function (resWebsiteData) {
            _this.dropdownList = resWebsiteData;
        }, function (error) { return console.log(error); });
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select extensions (maximum 5)",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            enableCheckAll: false,
            limitSelection: 5
        };
    };
    SettingmodalComponent.prototype.addmore = function () {
        this.addmore_show = !this.addmore_show;
    };
    SettingmodalComponent.prototype.onItemDeSelect = function (item) {
    };
    SettingmodalComponent.prototype.onItemSelect = function (item) {
    };
    SettingmodalComponent.prototype.onSelectAll = function (items) {
    };
    SettingmodalComponent.prototype.onDeSelectAll = function (items) {
    };
    SettingmodalComponent.prototype.Cancel = function () {
        var temp = this.data.exts.map(function (x) { return Object.assign({}, x); });
        this.exts = temp;
    };
    SettingmodalComponent.prototype.ApplySuccess = function () {
        var temp = this.exts.map(function (x) { return Object.assign({}, x); });
        localStorage.setItem('extensions', JSON.stringify(temp));
        localStorage.setItem('moreExtensions', JSON.stringify(this.selectedItems));
        localStorage.setItem('hypens', JSON.stringify(this.hypens));
        localStorage.setItem('domainProvider', JSON.stringify(this.selectedValue));
        localStorage.setItem('smartExtensions', JSON.stringify(this.extensions));
        this._websiteService.paramDomainProvider = JSON.stringify(this.selectedValue);
        this.keyword = this._websiteService.keyword;
        if (this.keyword != "") {
            if (this.prevHypens != this.hypens || this.prevExtensions != this.extensions || !this.objectsAreSame(this.prevExts, this.exts) || this.prevSelectedItems.length != this.selectedItems.length || !this.objectsAreSame(this.prevSelectedItems, this.selectedItems)) {
                this.search();
            }
        }
    };
    SettingmodalComponent.prototype.checkError = function () {
        if (this.newExtError == true) {
            this.validate = "form-control more-input error";
        }
        else {
            this.validate = "form-control more-input";
        }
    };
    SettingmodalComponent.prototype.onEnter = function () {
        if (this.newExt != "" && this.newExt.substring(0, 1) == ".") {
            this.newExtError = false;
            var temp = {
                name: this.newExt, value: false
            };
            this.exts.push(temp);
            this.newExt = "";
        }
        else {
            this.newExtError = true;
        }
        this.checkError();
    };
    SettingmodalComponent.prototype.objectsAreSame = function (x, y) {
        var objectsAreSame = true;
        for (var index = 0; index < x.length; index++) {
            for (var propertyName in x[index]) {
                if (x[index][propertyName] !== y[index][propertyName]) {
                    objectsAreSame = false;
                    return objectsAreSame;
                }
            }
        }
        return objectsAreSame;
    };
    SettingmodalComponent.prototype.search = function () {
        var _this = this;
        this._websiteService.getWebsiteDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setWebsiteResult(resWebsiteData);
            _this._websiteService.noWebsiteDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getBusinessDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setBusinessResult(resWebsiteData);
            _this._websiteService.noBusinessDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getShopDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setShopResult(resWebsiteData);
            _this._websiteService.noShopDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getSoftwareDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setSoftwareResult(resWebsiteData);
            _this._websiteService.noSoftwareDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getAppDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setAppResult(resWebsiteData);
            _this._websiteService.noAppDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getEBookDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setEBookResult(resWebsiteData);
            _this._websiteService.noEBookDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getAffiliateDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setAffiliateResult(resWebsiteData);
            _this._websiteService.noAffiliateDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getCommunityDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setCommunityResult(resWebsiteData);
            _this._websiteService.noCommunityDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getTrainingDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setTrainingResult(resWebsiteData);
            _this._websiteService.noTrainingDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getNewsDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setNewsResult(resWebsiteData);
            _this._websiteService.noNewsDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getMarketPlaceDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setMarketPlaceResult(resWebsiteData);
            _this._websiteService.noMarketPlaceDataPresent = false;
        }, function (error) { return console.log(error); });
        this._websiteService.getVideoDomainAvailabiliy(this.keyword)
            .subscribe(function (resWebsiteData) {
            _this._websiteService.setVideoResult(resWebsiteData);
            _this._websiteService.noVideoDataPresent = false;
        }, function (error) { return console.log(error); });
    };
    return SettingmodalComponent;
}());
SettingmodalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-settingmodal',
        template: __webpack_require__("../../../../../src/app/settingmodal/settingmodal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settingmodal/settingmodal.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__website_service__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__website_service__["a" /* WebsiteService */]) === "function" && _b || Object])
], SettingmodalComponent);

var _a, _b;
//# sourceMappingURL=settingmodal.component.js.map

/***/ }),

/***/ "../../../../../src/app/termsofuse/termsofuse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-page-title {\n\tfont-family: OpenSansExtraBold;\n    font-size: 30px;\n    line-height: 0.93;\n    text-align: center;\n    color: #fb3f0d;\n    margin: 20px 0 30px 0;\n    cursor: pointer;\n}\n.terms-of-use p {\n\tfont-size: 16px;\n}\n.terms-of-use li b {\n\tfont-size: 18px;\n}\n.terms-of-use .main-heading {\n\tfont-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/termsofuse/termsofuse.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header container\">\n\t<h1 routerLink=\"/\" class=\"footer-page-title search_title\">Domain<span>Author</span></h1>\n</div>\n<div class=\"container terms-of-use\">\n\t<h2 class=\"text-center main-heading\">Terms of Use</h2>\n\t<p>\n\t\tThe following terms and conditions (“Terms”) govern all use of DomainAuthor.com (the “Site” or “Website”) and all content, services, and products available at or through the Website. Our services are offered subject to your acceptance without modification of all of the terms and conditions contained herein and all other operating rules, policies (including, without limitation, DomainAuthor.com’s Privacy Policy) and procedures that may be published from time to time by DomainAuthor.com (collectively, the “Agreement”). \n\t</p>\n\n\t<p>\n\t\tPlease read this Agreement carefully before accessing or using our Website. By accessing or using any part of our Website, you agree to become bound by the Terms of this Agreement. If you do not agree to all the Terms of this Agreement, then you may not access or use any our Website. If these Terms are considered an offer by DomainAuthor.com, acceptance is expressly limited to these Terms.\n\t</p>\n\t<p>\n\t\tDomainAuthor.com is not directed to children younger than 13. If you are under 13 years old, please do not use our Website.\n\t</p>\n\t<ol>\n\t\t<li><b>Prohibited Uses</b></li>\n\t\t<p>\n\t\t\tYou may not use DomainAuthor.com for any unlawful purposes, including but not limited to infringing or misappropriating the intellectual property rights of any third party. We may terminate your access to DomainAuthor.com if we determine (in our sole discretion) that your use is in any way harmful or objectionable.\n\t\t</p>\n\t\t<li><b> Responsibility of Visitors</b></li>\n\t\t<p>\n\t\t\tDomainAuthor.com has not reviewed, and cannot review, all of the material, including search results, computer software and comments, posted to our Website, and cannot therefore be responsible for that material’s content, use or effects. By operating the Website, DomainAuthor.com does not represent or imply that it endorses the material there posted, or that it believes such material to be accurate, useful, or non-harmful. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. Our Website may contain content that contains technical inaccuracies, typographical mistakes, and other errors. DomainAuthor.com disclaims any responsibility for any harm resulting from the use by visitors of our Website, or from any downloading by those visitors of content there posted.\n\t\t</p>\n\t\t<li><b>Content Posted on Other Websites</b></li>\n\t\t<p>\n\t\t\tWe have not reviewed, and cannot review, all of the material, including computer software, made available through the websites and webpages to which DomainAuthor.com links, and that link to DomainAuthor.com. DomainAuthor.com does not have any control over those non-DomainAuthor.com.com websites, and is not responsible for their contents or their use. By linking to a non-DomainAuthor.com website, DomainAuthor.com does not represent or imply that it endorses such website. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. DomainAuthor.com disclaims any responsibility for any harm resulting from your use of non-DomainAuthor.com websites and webpages.\n\t\t</p>\n\t\t<li><b>Copyright Infringement</b></li>\n\t\t<p>\n\t\t\tIf you believe that material located on or linked to by DomainAuthor.com violates your copyright, you are encouraged to notify DomainAuthor. DomainAuthor.com will respond to all such notices, including as required or appropriate by removing the infringing material or disabling all links to the infringing material. DomainAuthor.com will terminate a visitor’s access to and use of the Website if, under appropriate circumstances, the visitor is determined to be a repeat infringer of the copyrights or other intellectual property rights of DomainAuthor.com or others.\n\t\t</p>\n\t\t<li><b>Intellectual Property</b></li>\n\t\t<p>\n\t\t\tThis Agreement does not transfer from DomainAuthor.com to you any DomainAuthor.com or third party intellectual property, and all right, title, and interest in and to such property will remain (as between the parties) solely with DomainAuthor.com. Other trademarks, service marks, graphics and logos used in connection with our Website may be the trademarks of other third parties. Your use of our Website grants you no right or license to reproduce or otherwise use any DomainAuthor.com or third-party trademarks.\n\t\t</p>\n\t\t<li><b>Domain Names</b></li>\n\t\t<p>\n\t\t\tWe do not act as a domain registrar. We work with third party registrars in order to provide our users with domain names, web hosting and other related services. When you register a domain name, you become bound by the relevant registrar’s terms and conditions. Which registrar terms apply depends on the domain you choose, and in some cases, the date you register your domain, so please determine which agreement(s) apply to you. These registrar terms are incorporated by reference into these Terms.\n\t\t</p>\n\t\t<p>\n\t\t\tFurther, your use of the domain name is also subject to the policies of the Internet Corporation for Assigned Names and Numbers (“ICANN”). You can read about <a href=\"https://www.icann.org/resources/pages/benefits-2013-09-16-en\" target=\"_blank\">your rights and responsibilities as a domain name registrant</a> under ICANN’s Registrar Accreditation Agreement and about <a href=\"https://www.icann.org/resources/pages/educational-2012-02-25-en\" target=\"_blank\">domain name registration generally.</a>\n\t\t</p>\n\t\t<li><b>Changes</b></li>\n\t\t<p>\n\t\t\tWe are constantly updating our Website, and that means sometimes we have to change the legal terms under which our Website is offered. If we make changes that are material, we will let you know by posting to our blog, or by sending you an email or other communication before the changes take effect. The notice will designate a reasonable period of time after which the new terms will take effect. If you disagree with our changes, then you should stop using our Website within the designated notice period. Your continued use of our Website will be subject to the new terms. \n\t\t</p>\n\t\t<li><b>Termination</b></li>\n\t\t<p>\n\t\t\tDomainAuthor.com may terminate your access to all or any part of our Website at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate this Agreement, you may simply discontinue using our Website. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, warranty disclaimers, indemnity and limitations of liability.\n\t\t</p>\n\t\t<li><b>Disclaimer of Warranties</b></li>\n\t\t<p>\n\t\t\tOur Website is provided “as is.” DomainAuthor.com and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither DomainAuthor.com nor its suppliers and licensors, makes any warranty that our Website will be error free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, our Website at your own discretion and risk.\n\t\t</p>\n\t\t<li><b>Jurisdiction and Applicable Law</b></li>\n\t\t<p>\n\t\t\tThis Agreement is governed by and shall be construed in accordance with the laws of Germany. The courts of Regensburg, Germany shall have exclusive jurisdiction for all disputes arising under or in connection with this Agreement.\n\t\t</p>\n\t\t<li><b>Limitation of Liability</b></li>\n\t\t<p>\n\t\t\tIn no event will DomainAuthor.com, or its suppliers or licensors, be liable with respect to any subject matter of this Agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; or (iii) for interruption of use or loss or corruption of data. DomainAuthor.com shall have no liability for any failure or delay due to matters beyond their reasonable control. The foregoing shall not apply to the extent prohibited by applicable law.\n\t\t</p>\n\t\t<li><b>General Representation and Warranty</b></li>\n\t\t<p>\n\t\t\tYou represent and warrant that (i) your use of our Website will be in strict accordance with the DomainAuthor.com Privacy Policy, with this Agreement, and with all applicable laws and regulations (including without limitation any local laws or regulations in your country, state, city, or other governmental area, regarding online conduct and acceptable content, and including all applicable laws regarding the transmission of technical data exported from the country in which you reside) and (ii) your use of our Website will not infringe or misappropriate the intellectual property rights of any third party.\n\t\t</p>\n\t\t<li><b>Indemnification</b></li>\n\t\t<p>\n\t\t\tYou agree to indemnify and hold harmless DomainAuthor.com, its contractors, and its licensors, and their respective directors, officers, employees, and agents from and against any and all claims and expenses, including attorneys’ fees, arising out of your use of our Website, including but not limited to your violation of this Agreement or violation of any third party right.\n\t\t</p>\n\t\t<li><b>Miscellaneous</b></li>\n\t\t<p>\n\t\t\tThis Agreement constitutes the entire agreement between DomainAuthor.com and you concerning the subject matter hereof, and they may only be modified by a written amendment signed by an authorized executive of DomainAuthor.com, or by the posting by DomainAuthor.com of a revised version.\n\t\t</p>\n\t\t<p>\n\t\t\tIf any part of this Agreement is held invalid or unenforceable, that part will be construed to reflect the parties’ original intent, and the remaining portions will remain in full force and effect. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof.\n\t\t</p>\n\t\t<p>\n\t\t\tYou may assign your rights under this Agreement to any party that consents to, and agrees to be bound by, its terms and conditions; DomainAuthor.com may assign its rights under this Agreement without condition. This Agreement will be binding upon and will inure to the benefit of the parties, their successors and permitted assigns.\n\t\t</p>\n\t\t<p><i>\n\t\t\tThese Terms of Use are a modified version of the Terms of Service of <a href=\"https://wordpress.com/\" target=\"_blank\">WordPress.com</a> that have been made available under the <a href=\"https://creativecommons.org/licenses/by-sa/4.0/\" target=\"_blank\">Attribution-ShareAlike 4.0 International license.</a>\n\t\t</i></p>\n\t</ol>\n</div>"

/***/ }),

/***/ "../../../../../src/app/termsofuse/termsofuse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsofuseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsofuseComponent = (function () {
    function TermsofuseComponent() {
    }
    TermsofuseComponent.prototype.ngOnInit = function () {
    };
    return TermsofuseComponent;
}());
TermsofuseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-termsofuse',
        template: __webpack_require__("../../../../../src/app/termsofuse/termsofuse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/termsofuse/termsofuse.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TermsofuseComponent);

//# sourceMappingURL=termsofuse.component.js.map

/***/ }),

/***/ "../../../../../src/app/website.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteService = (function () {
    function WebsiteService(_http, router) {
        this._http = _http;
        this.router = router;
        this.showMoreResultsFor = '';
        this.keyword = '';
        this.paramExtensions = [
            { name: ".com", value: true },
            { name: ".net", value: true },
            { name: ".org", value: false },
            { name: ".info", value: false },
            { name: ".io", value: false },
            { name: ".co.uk", value: false }
        ];
        this.paramMoreExtensions = [];
        this.paramHypens = 'no';
        this.paramDomainProvider = "GoDaddy (recommended)";
        this.smartExtensions = 'yes';
        this.websiteResult = [];
        this.remainingWebsiteResult = [];
        this.businessResult = [];
        this.remainingBusinessResult = [];
        this.shopResult = [];
        this.remainingShopResult = [];
        this.softwareResult = [];
        this.remainingSoftwareResult = [];
        this.appResult = [];
        this.remainingAppResult = [];
        this.eBookResult = [];
        this.remainingEBookResult = [];
        this.affiliateResult = [];
        this.remainingAffiliateResult = [];
        this.communityResult = [];
        this.remainingCommunityResult = [];
        this.trainingResult = [];
        this.remainingTrainingResult = [];
        this.newsResult = [];
        this.remainingNewsResult = [];
        this.marketPlaceResult = [];
        this.remainingMarketPlaceResult = [];
        this.videoResult = [];
        this.remainingVideoResult = [];
        this.noWebsiteDataPresent = false;
        this.noBusinessDataPresent = false;
        this.noShopDataPresent = false;
        this.noSoftwareDataPresent = false;
        this.noAppDataPresent = false;
        this.noEBookDataPresent = false;
        this.noAffiliateDataPresent = false;
        this.noCommunityDataPresent = false;
        this.noTrainingDataPresent = false;
        this.noNewsDataPresent = false;
        this.noMarketPlaceDataPresent = false;
        this.noVideoDataPresent = false;
        this._websiteUrl = "/api/website/domain/check";
        this._businessUrl = "/api/business/domain/check";
        this._shopUrl = "/api/shop/domain/check";
        this._softwareUrl = "/api/software/domain/check";
        this._appUrl = "/api/app/domain/check";
        this._eBookUrl = "/api/ebook/domain/check";
        this._affiliateUrl = "/api/affiliate/domain/check";
        this._communityUrl = "/api/community/domain/check";
        this._trainingUrl = "/api/training/domain/check";
        this._newsUrl = "/api/news/domain/check";
        this._marketPlaceUrl = "/api/marketplace/domain/check";
        this._videoUrl = "/api/video/domain/check";
        this._remainingUrl = "/api/remaining/domain/check";
        this._moreExtensionsUrl = "/api/moreextensions";
        this._sendEmailUrl = "/api/send/email";
    }
    WebsiteService.prototype.setOptions = function () {
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
    };
    WebsiteService.prototype.getMoreExtensions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.get(this._moreExtensionsUrl)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getWebsiteDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', keyword);
        return this._http.post(this._websiteUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getBusinessDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', keyword);
        return this._http.post(this._businessUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getShopDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', keyword);
        return this._http.post(this._shopUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getSoftwareDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": this.keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', this.keyword);
        return this._http.post(this._softwareUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getAppDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": this.keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', this.keyword);
        return this._http.post(this._appUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getEBookDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": this.keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', this.keyword);
        return this._http.post(this._eBookUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getAffiliateDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": this.keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', this.keyword);
        return this._http.post(this._affiliateUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getCommunityDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": this.keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', this.keyword);
        return this._http.post(this._communityUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getTrainingDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": this.keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', this.keyword);
        return this._http.post(this._trainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getNewsDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": this.keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', this.keyword);
        return this._http.post(this._newsUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getMarketPlaceDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": this.keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', this.keyword);
        return this._http.post(this._marketPlaceUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getVideoDomainAvailabiliy = function (keyword) {
        this.keyword = keyword;
        this.setOptions();
        var requestBody = {
            "extensions": this.paramExtensions,
            "hypens": this.paramHypens,
            "domainProvider": this.paramDomainProvider,
            "smartExtensions": this.smartExtensions,
            "moreExtensions": this.paramMoreExtensions,
            "keyword": this.keyword
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append('keyword', this.keyword);
        return this._http.post(this._videoUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.setWebsiteResult = function (value) {
        var _this = this;
        this.websiteResult = value.website;
        this.remainingWebsiteResult = value.websiteTotal;
        this.router.navigate(["/result"]);
        this.getRemainingWebsiteDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendWebsiteResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getWebsiteResult = function () {
        return this.websiteResult;
    };
    WebsiteService.prototype.setBusinessResult = function (value) {
        var _this = this;
        this.businessResult = value.business;
        this.remainingBusinessResult = value.businessTotal;
        this.getRemainingBusinessDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendBusinessResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getBusinessResult = function () {
        return this.businessResult;
    };
    WebsiteService.prototype.setShopResult = function (value) {
        var _this = this;
        this.shopResult = value.shop;
        this.remainingShopResult = value.shopTotal;
        this.getRemainingShopDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendShopResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getShopResult = function () {
        return this.shopResult;
    };
    WebsiteService.prototype.setSoftwareResult = function (value) {
        var _this = this;
        this.softwareResult = value.software;
        this.remainingSoftwareResult = value.softwareTotal;
        this.getRemainingSoftwareDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendSoftwareResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getSoftwareResult = function () {
        return this.softwareResult;
    };
    WebsiteService.prototype.setAppResult = function (value) {
        var _this = this;
        this.appResult = value.app;
        this.remainingAppResult = value.appTotal;
        this.getRemainingAppDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendAppResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getAppResult = function () {
        return this.appResult;
    };
    WebsiteService.prototype.setEBookResult = function (value) {
        var _this = this;
        this.eBookResult = value.eBook;
        this.remainingEBookResult = value.eBookTotal;
        this.getRemainingEBookDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendEBookResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getEBookResult = function () {
        return this.eBookResult;
    };
    WebsiteService.prototype.setAffiliateResult = function (value) {
        var _this = this;
        this.affiliateResult = value.affiliate;
        this.remainingAffiliateResult = value.affiliateTotal;
        this.getRemainingAffiliateDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendAffiliateResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getAffiliateResult = function () {
        return this.affiliateResult;
    };
    WebsiteService.prototype.setCommunityResult = function (value) {
        var _this = this;
        this.communityResult = value.community;
        this.remainingCommunityResult = value.communityTotal;
        this.getRemainingCommunityDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendCommunityResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getCommunityResult = function () {
        return this.communityResult;
    };
    WebsiteService.prototype.setTrainingResult = function (value) {
        var _this = this;
        this.trainingResult = value.training;
        this.remainingTrainingResult = value.trainingTotal;
        this.getRemainingTrainingDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendTrainingResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getTrainingResult = function () {
        return this.trainingResult;
    };
    WebsiteService.prototype.setNewsResult = function (value) {
        var _this = this;
        this.newsResult = value.news;
        this.remainingNewsResult = value.newsTotal;
        this.getRemainingNewsDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendNewsResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getNewsResult = function () {
        return this.newsResult;
    };
    WebsiteService.prototype.setMarketPlaceResult = function (value) {
        var _this = this;
        this.marketPlaceResult = value.marketplace;
        this.remainingMarketPlaceResult = value.marketplaceTotal;
        this.getRemainingMarketPlaceDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendMarketplaceResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getMarketPlaceResult = function () {
        return this.marketPlaceResult;
    };
    WebsiteService.prototype.setVideoResult = function (value) {
        var _this = this;
        this.videoResult = value.video;
        this.remainingVideoResult = value.videoTotal;
        this.getRemainingVideoDomains()
            .subscribe(function (resWebsiteData) {
            _this.appendVideoResult(resWebsiteData);
        }, function (error) { return console.log(error); });
    };
    WebsiteService.prototype.getVideoResult = function () {
        return this.videoResult;
    };
    WebsiteService.prototype.getRemainingWebsiteDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'website', remainingList: this.remainingWebsiteResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingBusinessDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'software', remainingList: this.remainingBusinessResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingShopDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'software', remainingList: this.remainingShopResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingSoftwareDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'software', remainingList: this.remainingSoftwareResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingAppDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'app', remainingList: this.remainingAppResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingEBookDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'eBook', remainingList: this.remainingEBookResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingAffiliateDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'affiliate', remainingList: this.remainingAffiliateResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingCommunityDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'community', remainingList: this.remainingCommunityResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingTrainingDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'training', remainingList: this.remainingTrainingResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingNewsDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'news', remainingList: this.remainingNewsResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingMarketPlaceDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'marketplace', remainingList: this.remainingMarketPlaceResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.getRemainingVideoDomains = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var requestBody = { category: 'video', remainingList: this.remainingVideoResult };
        return this._http.post(this._remainingUrl, requestBody, options)
            .map(function (response) { return response.json(); });
    };
    WebsiteService.prototype.appendWebsiteResult = function (value) {
        this.websiteResult = this.websiteResult.concat(value);
        this.websiteResult.sort(this.compare);
        if (!this.websiteResult[9].available && !this.websiteResult[0].available)
            this.noWebsiteDataPresent = true;
    };
    WebsiteService.prototype.appendBusinessResult = function (value) {
        this.businessResult = this.businessResult.concat(value);
        this.businessResult.sort(this.compare);
        if (!this.businessResult[9].available && !this.businessResult[0].available)
            this.noBusinessDataPresent = true;
    };
    WebsiteService.prototype.appendShopResult = function (value) {
        this.shopResult = this.shopResult.concat(value);
        this.shopResult.sort(this.compare);
        if (!this.shopResult[9].available && !this.shopResult[0].available)
            this.noShopDataPresent = true;
    };
    WebsiteService.prototype.appendSoftwareResult = function (value) {
        this.softwareResult = this.softwareResult.concat(value);
        this.softwareResult.sort(this.compare);
        if (!this.softwareResult[9].available && !this.softwareResult[0].available)
            this.noSoftwareDataPresent = true;
    };
    WebsiteService.prototype.appendAppResult = function (value) {
        this.appResult = this.appResult.concat(value);
        this.appResult.sort(this.compare);
        if (!this.appResult[9].available && !this.appResult[0].available)
            this.noAppDataPresent = true;
    };
    WebsiteService.prototype.appendEBookResult = function (value) {
        this.eBookResult = this.eBookResult.concat(value);
        this.eBookResult.sort(this.compare);
        if (!this.eBookResult[9].available && !this.eBookResult[0].available)
            this.noEBookDataPresent = true;
    };
    WebsiteService.prototype.appendAffiliateResult = function (value) {
        this.affiliateResult = this.affiliateResult.concat(value);
        this.affiliateResult.sort(this.compare);
        if (!this.affiliateResult[9].available && !this.affiliateResult[0].available)
            this.noAffiliateDataPresent = true;
    };
    WebsiteService.prototype.appendCommunityResult = function (value) {
        this.communityResult = this.communityResult.concat(value);
        this.communityResult.sort(this.compare);
        if (!this.communityResult[9].available && !this.communityResult[0].available)
            this.noCommunityDataPresent = true;
    };
    WebsiteService.prototype.appendTrainingResult = function (value) {
        this.trainingResult = this.trainingResult.concat(value);
        this.trainingResult.sort(this.compare);
        if (!this.trainingResult[9].available && !this.trainingResult[0].available)
            this.noTrainingDataPresent = true;
    };
    WebsiteService.prototype.appendNewsResult = function (value) {
        this.newsResult = this.newsResult.concat(value);
        this.newsResult.sort(this.compare);
        if (!this.newsResult[9].available && !this.newsResult[0].available)
            this.noNewsDataPresent = true;
    };
    WebsiteService.prototype.appendMarketplaceResult = function (value) {
        this.marketPlaceResult = this.marketPlaceResult.concat(value);
        this.marketPlaceResult.sort(this.compare);
        if (!this.marketPlaceResult[9].available && !this.marketPlaceResult[0].available)
            this.noMarketPlaceDataPresent = true;
    };
    WebsiteService.prototype.appendVideoResult = function (value) {
        this.videoResult = this.videoResult.concat(value);
        this.videoResult.sort(this.compare);
        if (!this.videoResult[9].available && !this.videoResult[0].available)
            this.noVideoDataPresent = true;
    };
    WebsiteService.prototype.compare = function (a, b) {
        if (a.available === b.available)
            return 0;
        else if (a.available)
            return -1;
        else
            return 1;
    };
    WebsiteService.prototype.sendEmailToAdmin = function (emailData) {
        console.log(JSON.stringify(emailData));
        return this._http.post(this._sendEmailUrl, emailData)
            .map(function (response) { return response.json(); });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], WebsiteService);

var _a, _b;
//# sourceMappingURL=website.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/share-btn.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAeCAYAAAC7Q5mxAAAABGdBTUEAALGPC/xhBQAAAPFJREFUaAXt1rEJwkAAhWEjimBj4xBuYGMRB3ABN3EC13AHBzCtG7iBjY0IgqSICBbH5d7dS/+nusv/qg8CqTb7Uzfi6Qm0r3tzPR+2vRC9GEd3rn+B9vOs17vjpQQCYEbIQQQwA/hLJUQAC4AlRAANwBwigCagQgRwAGAKEcCBgDFixY90WvD9uKVD8HY6WzST4M4xEJgvV8FNHms+YWnjBQA9J7kCUNJ4AUDPSa4AlDReANBzkisAJY0XAPSc5ApASeMFAD0nuQJQ0ngBQM9JrgCUNF4A0HOSKwAljRcA9JzkCkBJ4wUAPSe5AlDSeOELcMc2BVJXSrsAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/assets/images/tweet-btn.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAeCAYAAAC7Q5mxAAAABGdBTUEAALGPC/xhBQAAAOBJREFUaAXt0rERwWAAhmGcEdSGMEEMoHc2MYHGIOkNQGkMC9A4hYpzp3AJ3/8mpXvT/Xm/v8hzGa62x8fApyVwPZ8Ou81y3gqNF6PG2eNb4H67VIt1vS+BCBiECKKAAfCVSogCFgBLiAICwIQoIAT8hShgB8BviAJ2BGwiCtgD8BNx3PP+31+bTGfkGyv/QMIUNgIGHJIEJEphI2DAIUlAohQ2AgYckgQkSmEjYMAhSUCiFDYCBhySBCRKYSNgwCFJQKIUNgIGHJIEJEphI2DAIUlAohQ2AgYckgQkSmHzBNHXOHPClwcuAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map