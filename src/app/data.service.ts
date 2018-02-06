import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  services = ["GoDaddy","Namecheap"];
  prefix = ["My","The","Mr","Ilove","Smart","Easy"];
  suffix = ["Head","Hero","King","Queen","Digital","Facts","Paradise"];
  exts = [
    {name:".com",value:true},
    {name:".net",value:true},
    {name:".org",value:false},
    {name:".info",value:false},
    {name:".io",value:false},
    {name:".co.uk",value:false}
  ];
  hypens = false;
  selectedValue: string = "GoDaddy";
  keyword = "";
  domainKeyword = "";
  constructor() {
    this.keyword = ""
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min - 1)) + min;
  }
  getUppercase(value){
    return value.charAt(0).toUpperCase()+value.substr(1).toLowerCase();
  }
  setKeyword(value){
    this.keyword = value;
    if (this.hypens==false){
      this.domainKeyword = this.prefix[this.getRandomInt(0,this.prefix.length)] + this.getUppercase(value) + this.suffix[this.getRandomInt(0,this.suffix.length)];
    }else{
      this.domainKeyword = this.prefix[this.getRandomInt(0,this.prefix.length)] + "-" +this.getUppercase(value)+"-" + this.suffix[this.getRandomInt(0,this.suffix.length)];
    }
  }
  refreshKeyword(){
    if (this.hypens==false){
      this.domainKeyword = this.prefix[this.getRandomInt(0,this.prefix.length)] + this.getUppercase(this.keyword) + this.suffix[this.getRandomInt(0,this.suffix.length)];
    }else{
      this.domainKeyword = this.prefix[this.getRandomInt(0,this.prefix.length)] + "-" +this.getUppercase(this.keyword)+"-" + this.suffix[this.getRandomInt(0,this.suffix.length)];
    }
  }
  getExts(){
    return this.exts;
  }
  setExts(value){
    this.keyword = value;
  }
}
