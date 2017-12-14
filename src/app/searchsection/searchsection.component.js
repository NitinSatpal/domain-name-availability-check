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
var SearchsectionComponent = /** @class */ (function () {
    function SearchsectionComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.keyword = "";
    }
    SearchsectionComponent.prototype.ngOnInit = function () {
        this.keyword = this.data.keyword;
    };
    SearchsectionComponent.prototype.openSettingDialog = function () {
        console.log("open dialog");
        var psDialogRef = this.dialog.open(settingmodal_component_1.SettingmodalComponent, {
            disableClose: false,
            hasBackdrop: true,
            panelClass: 'overay-pan-background',
            backdropClass: 'custom-backdrop-class',
            width: '460px'
        });
    };
    SearchsectionComponent.prototype.search = function () {
        this.data.setKeyword(this.keyword);
    };
    SearchsectionComponent = __decorate([
        core_1.Component({
            selector: 'app-searchsection',
            templateUrl: './searchsection.component.html',
            styleUrls: ['./searchsection.component.css']
        })
    ], SearchsectionComponent);
    return SearchsectionComponent;
}());
exports.SearchsectionComponent = SearchsectionComponent;
