"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService() {
        this.services = ["GoDaddy", "Bluehost", "Namecheap"];
        this.prefix = ["My", "The", "Mr", "Ilove", "Smart", "Easy"];
        this.suffix = ["Head", "Hero", "King", "Queen", "Digital", "Facts", "Paradise"];
        this.exts = [
            { name: ".com", value: true },
            { name: ".net", value: true },
            { name: ".org", value: true },
            { name: ".info", value: true },
            { name: ".co", value: false },
            { name: ".io", value: false },
            { name: ".pro", value: false },
            { name: ".me", value: false },
            { name: ".au", value: false },
            { name: ".zp", value: false },
            { name: ".us", value: false },
            { name: ".er", value: false }
        ];
        this.hypens = false;
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
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
