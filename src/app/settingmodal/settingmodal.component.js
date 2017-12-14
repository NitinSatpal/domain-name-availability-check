"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SettingmodalComponent = /** @class */ (function () {
    function SettingmodalComponent(data) {
        this.data = data;
        this.hypens = false;
        this.newExt = "";
        this.newExtError = false;
        this.addmore_show = false;
        this.selectedValue = "GoDaddy";
        this.services = [];
        this.exts = [];
        this.extensions = true;
        this.validate = "form-control more-input";
    }
    SettingmodalComponent.prototype.ngOnInit = function () {
        var temp = this.data.exts.map(function (x) { return Object.assign({}, x); });
        this.exts = temp;
        this.services = this.data.services;
        this.hypens = this.data.hypens;
        this.extensions = true;
    };
    SettingmodalComponent.prototype.addmore = function () {
        this.addmore_show = !this.addmore_show;
    };
    SettingmodalComponent.prototype.Cancel = function () {
        var temp = this.data.exts.map(function (x) { return Object.assign({}, x); });
        this.exts = temp;
    };
    SettingmodalComponent.prototype.ApplySuccess = function () {
        console.log(this.exts);
        var temp = this.exts.map(function (x) { return Object.assign({}, x); });
        this.data.exts = temp;
        this.data.hypens = this.hypens;
        this.data.refreshKeyword();
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
    SettingmodalComponent = __decorate([
        core_1.Component({
            selector: 'app-settingmodal',
            templateUrl: './settingmodal.component.html',
            styleUrls: ['./settingmodal.component.css']
        })
    ], SettingmodalComponent);
    return SettingmodalComponent;
}());
exports.SettingmodalComponent = SettingmodalComponent;
