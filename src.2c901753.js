parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"a4tC":[function(require,module,exports) {
function t(t,e){this.imageList=t,this.imageElement=e,this.currentPage=0}t.prototype.setPage=function(t){console.log("setPage",t),this.imageElement.src=this.imageList[t],this.currentPage=t},t.prototype.nextPage=function(){var t=this.currentPage+1;return t>=this.imageList.length&&(t=0),this.imageElement.src=this.imageList[t],console.log("nextPage ".concat(this.currentPage," -> ").concat(t)),this.currentPage=t,this.currentPage},t.prototype.prevPage=function(){var t=this.currentPage-1;return t<0&&(t=this.imageList.length-1),this.imageElement.src=this.imageList[t],console.log("prevPage ".concat(this.currentPage," -> ").concat(t)),this.currentPage=t,this.currentPage},module.exports=t;
},{}],"Focm":[function(require,module,exports) {
var e=require("./CarouselController"),t=document.getElementById("left-btn"),o=document.getElementById("right-btn"),l=document.getElementById("dots"),n=l.querySelectorAll("li"),r=document.getElementById("img"),s=["https://myoffices.com/code/images/pictures/5.jpg","https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg","https://previews.123rf.com/images/alexis84/alexis841404/alexis84140400557/27773925-planet-earth-and-blue-human-eye-elements-of-this-image-furnished-by-nasa-.jpg","https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg","https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=1000&h=400"],a="black",i=" rgb(187, 185, 185)";function c(e){for(var t=0;t<n.length;t++)n[t].style.color=t==e?a:i}function g(){carouselController=new e(s,r);for(var l=function(e){n[e].addEventListener("click",function(){carouselController.setPage(e),c(e)})},a=0;a<n.length;a++)l(a);t.addEventListener("click",function(){page=carouselController.prevPage(),c(page)}),o.addEventListener("click",function(){page=carouselController.nextPage(),c(page)}),carouselController.setPage(0),c(0)}g();
},{"./CarouselController":"a4tC"}]},{},["Focm"], null)
//# sourceMappingURL=/practice_carousel/src.2c901753.js.map