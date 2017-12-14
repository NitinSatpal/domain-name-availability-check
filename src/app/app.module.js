"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routes_1 = require("./app.routes");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var footer_component_1 = require("./footer/footer.component");
var searchsection_component_1 = require("./searchsection/searchsection.component");
var homepage_component_1 = require("./homepage/homepage.component");
var searchresult_component_1 = require("./searchresult/searchresult.component");
var moreresult_component_1 = require("./moreresult/moreresult.component");
var mainsearch_component_1 = require("./mainsearch/mainsearch.component");
var settingmodal_component_1 = require("./settingmodal/settingmodal.component");
var data_service_1 = require("./data.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                footer_component_1.FooterComponent,
                searchsection_component_1.SearchsectionComponent,
                homepage_component_1.HomepageComponent,
                searchresult_component_1.SearchresultComponent,
                moreresult_component_1.MoreresultComponent,
                mainsearch_component_1.MainsearchComponent,
                settingmodal_component_1.SettingmodalComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routes_1.routing,
                animations_1.BrowserAnimationsModule,
                material_1.MdDialogModule,
                material_1.MdButtonModule,
                material_1.MdCheckboxModule,
                material_1.MdSelectModule
            ],
            exports: [
                settingmodal_component_1.SettingmodalComponent
            ],
            entryComponents: [
                settingmodal_component_1.SettingmodalComponent
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;