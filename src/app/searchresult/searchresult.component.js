"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var settingmodal_component_1 = require("../settingmodal/settingmodal.component");
require("rxjs/add/operator/switchMap");
var SearchresultComponent = /** @class */ (function () {
    function SearchresultComponent(dialog, route, router, data) {
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.data = data;
        this.exts = [];
        this.collapseClass = "accordion-body collapse in";
        this.accordionClass = "accordion-toggle";
    }
    SearchresultComponent.prototype.ngOnInit = function () {
        console.log(window.screen.width);
        if (window.screen.width < 768) {
            this.collapseClass = "accordion-body collapse";
            this.accordionClass = "accordion-toggle collapsed";
        }
    };
    SearchresultComponent.prototype.openSettingDialog = function () {
        console.log("open dialog");
        var psDialogRef = this.dialog.open(settingmodal_component_1.SettingmodalComponent, {
            disableClose: false,
            hasBackdrop: true,
            panelClass: 'overay-pan-background',
            backdropClass: 'custom-backdrop-class',
            width: '460px'
        });
    };
    SearchresultComponent = __decorate([
        core_1.Component({
            selector: 'app-searchresult',
            templateUrl: './searchresult.component.html',
            styleUrls: ['./searchresult.component.css']
        })
    ], SearchresultComponent);
    return SearchresultComponent;
}());
exports.SearchresultComponent = SearchresultComponent;
