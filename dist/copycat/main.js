(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function () { return { "color": "#f06529" }; };
const _c1 = function () { return { "height": "30px" }; };
const _c2 = function () { return { "width": "75%" }; };
const _c3 = function () { return { "color": "#2965f1" }; };
const _c4 = function () { return { "width": "80%" }; };
const _c5 = function () { return { "color": "#f0db4f" }; };
const _c6 = function () { return { "width": "72%" }; };
const _c7 = function () { return { "color": "#563d7c" }; };
const _c8 = function () { return { "width": "78%" }; };
const _c9 = function () { return { "color": "red" }; };
const _c10 = function () { return { "width": "70%" }; };
class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 108, vars: 30, consts: [[1, "row", "text-center"], [1, "col-sm-12"], [1, "about-me", "p-5"], [1, "row", "py-4"], ["data-aos", "fade-right", 1, "col-sm-4", "col-lg-3", "img-wrapper"], ["src", "../../assets/img/me.jpg", "alt", ""], ["data-aos", "fade-in", 1, "col-sm-8", "col-lg-7", "text-left", "p-3", "align-self-lg-center"], [1, "sub-heading", "my-5"], [1, "skill"], [1, "skill-icon"], [1, "fab", "fa-html5", "fa-3x", 3, "ngStyle"], [1, "skill-progress", "w-100", "align-self-center", "ml-3"], [1, "progress", 3, "ngStyle"], [1, "progress-bar", "progress-bar-striped", "bg-success", 3, "ngStyle"], [1, "fab", "fa-css3", "fa-3x", 3, "ngStyle"], [1, "progress-bar", "progress-bar-striped", 3, "ngStyle"], [1, "fab", "fa-js", "fa-3x", 3, "ngStyle"], [1, "progress-bar", "progress-bar-striped", "bg-warning", 3, "ngStyle"], [1, "fab", "fa-bootstrap", "fa-3x", 3, "ngStyle"], [1, "progress-bar", "progress-bar-striped", "bg-info", 3, "ngStyle"], [1, "fab", "fa-angular", "fa-3x", 3, "ngStyle"], [1, "progress-bar", "progress-bar-striped", "bg-danger", 3, "ngStyle"], [1, "row"], [1, "col-12", "col-sm-4"], ["id", "artCarousel", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-indicators"], ["data-target", "#artCarousel", "data-slide-to", "0"], ["data-target", "#artCarousel", "data-slide-to", "1"], ["data-target", "#artCarousel", "data-slide-to", "2"], [1, "carousel-inner"], ["data-interval", "1500", 1, "carousel-item", "active"], ["src", "../../assets/img/paint1.jpg", "height", "250px", "alt", "", 1, "d-block", "w-100"], ["data-interval", "1500", 1, "carousel-item"], ["src", "../../assets/img/paint2.jpg", "height", "250px", "alt", "", 1, "d-block", "w-100"], ["src", "../../assets/img/paint3.jpg", "height", "250px", "alt", "", 1, "d-block", "w-100"], ["href", "#artCarousel", "data-slide", "prev", 1, "carousel-control-prev"], [1, "carousel-control-prev-icon"], ["href", "#artCarousel", "data-slide", "next", 1, "carousel-control-next"], [1, "carousel-control-next-icon"], [1, "sub-heading", "my-2"], ["id", "cricketCarousel", 1, "carousel", "slide", "carousel-fade"], ["data-target", "#cricketCarousel", "data-slide-to", "0"], ["data-target", "#cricketCarousel", "data-slide-to", "1"], ["data-target", "#cricketCarousel", "data-slide-to", "2"], ["src", "../../assets/img/cricket1.jpg", "alt", "", "height", "250px", 1, "d-block", "w-100"], ["src", "../../assets/img/cricket2.jpg", "alt", "", "height", "250px", 1, "d-block", "w-100"], ["src", "../../assets/img/cricket3.jpg", "alt", "", "height", "250px", 1, "d-block", "w-100"], ["href", "#cricketCarousel", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#cricketCarousel", "data-slide", "next", 1, "carousel-control-next"], ["id", "musicCarousel", 1, "carousel", "slide", "carousel-fade"], ["data-target", "#musicCarousel", "data-slide-to", "0"], ["data-target", "#musicCarousel", "data-slide-to", "1"], ["data-target", "#musicCarousel", "data-slide-to", "2"], ["src", "../../assets/img/music1.jpg", "alt", "", "height", "250px", 1, "d-block", "w-100"], ["src", "../../assets/img/music2.jpg", "alt", "", "height", "250px", 1, "d-block", "w-100"], ["src", "../../assets/img/music3.jpg", "alt", "", "height", "250px", 1, "d-block", "w-100"], ["href", "#musicCarousel", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#musicCarousel", "data-slide", "next", 1, "carousel-control-next"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Who Am I ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Hi, I'm Venkata Subbarao Balineni. I'm an artist and a front end web developer with 4 years of experience. I create successful websites that are fast, easy to use, and built with best practices. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "HTML - 75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CSS - 80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "JS - 72%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Bootstrap - 78%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Angular - 70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ol", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Painting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ol", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Playing Cricket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ol", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Listening to Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c10));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".about-me[_ngcontent-%COMP%]{\r\n    background-color: rgb(250, 199, 255);\r\n    color:#666;\r\n    border-radius: 100px 0 100px 0;\r\n    -webkit-border-radius: 100px 0 100px 0;\r\n    -moz-border-radius: 100px 0 100px 0;\r\n    -ms-border-radius: 100px 0 100px 0;\r\n    -o-border-radius: 100px 0 100px 0;\r\n}\r\n.img-wrapper[_ngcontent-%COMP%]{    \r\n    max-width:300px;\r\n    max-height:300px;    \r\n}\r\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:100%;\r\n    border-radius:50%;\r\n    -webkit-border-radius:50%;\r\n    -moz-border-radius:50%;\r\n    -ms-border-radius:50%;\r\n    -o-border-radius:50%;\r\n    border: 4px solid #fff;\r\n}\r\n.about-me[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color:#777;\r\n    font-weight: normal;\r\n}\r\n.skill[_ngcontent-%COMP%]{\r\n    max-width:600px;\r\n    margin:20px auto;\r\n    display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsOEJBQThCO0lBQzlCLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1tZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDE5OSwgMjU1KTtcclxuICAgIGNvbG9yOiM2NjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweCAwIDEwMHB4IDA7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMHB4IDAgMTAwcHggMDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTAwcHggMCAxMDBweCAwO1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDEwMHB4IDAgMTAwcHggMDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXM6IDEwMHB4IDAgMTAwcHggMDtcclxufVxyXG4uaW1nLXdyYXBwZXJ7ICAgIFxyXG4gICAgbWF4LXdpZHRoOjMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDozMDBweDsgICAgXHJcbn1cclxuLmltZy13cmFwcGVyIGltZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAtbXMtYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAtby1ib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XHJcbn1cclxuLmFib3V0LW1lIGgye1xyXG4gICAgY29sb3I6Izc3NztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5za2lsbHtcclxuICAgIG1heC13aWR0aDo2MDBweDtcclxuICAgIG1hcmdpbjoyMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");









const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'copycat';
    }
    onScroll(e) {
        let el = document.querySelector('.navbar');
        if (window.pageYOffset > 100) {
            el.classList.add('changeNavBgc');
        }
        else {
            el.classList.remove('changeNavBgc');
        }
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 40, vars: 0, consts: [[1, "navbar", "navbar-expand-md", "navbar-light", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["src", "../assets/img/logo.png", "width", "180px", "height", "70px", "alt", ""], ["data-toggle", "collapse", "data-target", "#myNav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "myNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "home", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "about", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "gallery", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "contact", "routerLinkActive", "active", 1, "nav-link"], [1, "container"], [1, "container-fluid"], [1, "row", "text-center"], [1, "col-sm-12", "col-md-4"], [1, "inline", "cr"], [1, "inline", "me"], ["href", "http://www.subbusketch.blogspot.com", "target", "_blank", 2, "text-decoration", "none"], [1, "social-icons"], ["href", "https://www.facebook.com/balineni.subbu", "target", "_blank"], [1, "fab", "fa-facebook-square", "fa-2x"], ["href", "https://www.instagram.com/subbu_balineni/", "target", "_blank"], [1, "fab", "fa-instagram-square", "fa-2x"], ["href", "http://subbusketch.blogspot.com/", "target", "_blank"], [1, "fab", "fa-blogger", "fa-2x"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "My Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Copyright \u00A9 Subbu Balineni 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "www.subbusketch.blogspot.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%]{    \r\n    padding:30px 15px;\r\n    margin: 116px auto 40px;\r\n    background-color: #fefefe;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    transition:all .5s ease-in-out ;\r\n    -webkit-transition:all .5s ease-in-out ;\r\n    -moz-transition:all .5s ease-in-out ;\r\n    -ms-transition:all .5s ease-in-out ;\r\n    -o-transition:all .5s ease-in-out ;\r\n    box-shadow: 0px 6px 6px hsl(206.5, 0%, 75%);\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height:40px;\r\n    width:150px;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%]{\r\n    padding-right: 20px;\r\n}\r\n.nav-link[_ngcontent-%COMP%]{\r\n    color: rgb(77, 77, 77);\r\n    font-size: 19px;\r\n    margin-left: 20px;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    color:rgb(143, 218, 57)!important;\r\n}\r\n.changeNavBgc[_ngcontent-%COMP%]{\r\n    background-color: rgba(0, 0, 0);\r\n}\r\n.changeNavBgc[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]{\r\n        background-color: #fff;\r\n}\r\n.changeNavBgc[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%]{\r\n    width:25px;\r\n    height:20px;\r\n}\r\n.changeNavBgc[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n    color:#dddddd;\r\n}\r\n\r\n\r\nfooter[_ngcontent-%COMP%]{\r\n    background-color: #333;    \r\n}\r\nfooter[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]{\r\n    padding: 20px 20px;\r\n}\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    color: #ccc;\r\n}\r\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin-left: 20px;    \r\n}\r\n.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    color:#ccc;\r\n    transition: color .5s ease;\r\n    -webkit-transition: color .5s ease;\r\n    -moz-transition: color .5s ease;\r\n    -ms-transition: color .5s ease;\r\n    -o-transition: color .5s ease;\r\n}\r\n.social-icons[_ngcontent-%COMP%]   .fa-facebook-square[_ngcontent-%COMP%]:hover{\r\n    color:rgb(250, 199, 255);\r\n}\r\n.social-icons[_ngcontent-%COMP%]   .fa-instagram-square[_ngcontent-%COMP%]:hover{\r\n    color:rgb(250, 199, 255);\r\n    }\r\n.social-icons[_ngcontent-%COMP%]   .fa-blogger[_ngcontent-%COMP%]:hover{\r\n        color:rgb(250, 199, 255);\r\n        }\r\n@media(min-width:768px){\r\n    .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        height:60px;\r\n        width:160px;\r\n    }\r\n    .changeNavBgc[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        height:50px;\r\n        width:160px;\r\n    }\r\n}\r\n@media(min-width:1200px){\r\n    .container[_ngcontent-%COMP%]{\r\n     max-width: 1200px;\r\n    }\r\n}\r\n@media(min-width:1300px){\r\n    .container[_ngcontent-%COMP%]{\r\n      max-width: 1300px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7QUFDQSx3QkFBd0I7QUFDeEI7SUFDSSxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQywyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7UUFDUSxzQkFBc0I7QUFDOUI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQSxzQkFBc0I7QUFFdEIsa0JBQWtCO0FBQ2xCO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCO0FBQ0E7UUFDSSx3QkFBd0I7UUFDeEI7QUFFUjtJQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjtBQUNKO0FBQ0E7SUFDSTtLQUNDLGlCQUFpQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSTtNQUNFLGlCQUFpQjtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcnsgICAgXHJcbiAgICBwYWRkaW5nOjMwcHggMTVweDtcclxuICAgIG1hcmdpbjogMTE2cHggYXV0byA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxufVxyXG4vKiBuYXZiYXIgc3R5bGVzIHN0YXJ0ICovXHJcbi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0IDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0IDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0IDtcclxuICAgIC1tcy10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQgO1xyXG4gICAgLW8tdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0IDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IGhzbCgyMDYuNSwgMCUsIDc1JSk7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWd7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG59XHJcbi5uYXZiYXItbmF2e1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmFjdGl2ZXtcclxuICAgIGNvbG9yOnJnYigxNDMsIDIxOCwgNTcpIWltcG9ydGFudDtcclxufVxyXG4uY2hhbmdlTmF2Qmdje1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwKTtcclxufVxyXG4uY2hhbmdlTmF2QmdjIC5uYXZiYXItdG9nZ2xlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5jaGFuZ2VOYXZCZ2MgLm5hdmJhci10b2dnbGVyLWljb257XHJcbiAgICB3aWR0aDoyNXB4O1xyXG4gICAgaGVpZ2h0OjIwcHg7XHJcbn1cclxuLmNoYW5nZU5hdkJnYyAubmF2LWxpbmt7XHJcbiAgICBjb2xvcjojZGRkZGRkO1xyXG59XHJcbi8qIG5hdmJhciBzdHlsZXMgZW5kICovXHJcblxyXG4vKiBmb290ZXIgc3R5bGVzICovXHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7ICAgIFxyXG59XHJcbmZvb3RlciAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG59XHJcbmZvb3RlciBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbn1cclxuLnNvY2lhbC1pY29ucyBhe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7ICAgIFxyXG59XHJcbi5zb2NpYWwtaWNvbnMgaXtcclxuICAgIGNvbG9yOiNjY2M7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuNXMgZWFzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjVzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGNvbG9yIC41cyBlYXNlO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGNvbG9yIC41cyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogY29sb3IgLjVzIGVhc2U7XHJcbn1cclxuLnNvY2lhbC1pY29ucyAuZmEtZmFjZWJvb2stc3F1YXJlOmhvdmVye1xyXG4gICAgY29sb3I6cmdiKDI1MCwgMTk5LCAyNTUpO1xyXG59XHJcbi5zb2NpYWwtaWNvbnMgLmZhLWluc3RhZ3JhbS1zcXVhcmU6aG92ZXJ7XHJcbiAgICBjb2xvcjpyZ2IoMjUwLCAxOTksIDI1NSk7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25zIC5mYS1ibG9nZ2VyOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOnJnYigyNTAsIDE5OSwgMjU1KTtcclxuICAgICAgICB9XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5uYXZiYXItYnJhbmQgaW1ne1xyXG4gICAgICAgIGhlaWdodDo2MHB4O1xyXG4gICAgICAgIHdpZHRoOjE2MHB4O1xyXG4gICAgfVxyXG4gICAgLmNoYW5nZU5hdkJnYyAubmF2YmFyLWJyYW5kIGltZ3tcclxuICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICB3aWR0aDoxNjBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWluLXdpZHRoOjEyMDBweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYShtaW4td2lkdGg6MTMwMHB4KXtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIG1heC13aWR0aDogMTMwMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ContactComponent_div_16_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_16_small_1_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
function ContactComponent_div_20_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_20_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid email id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_20_small_1_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_20_small_2_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.email);
} }
function ContactComponent_div_24_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Write Something");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_24_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Too Short!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_24_small_1_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_24_small_2_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
} }
class ContactComponent {
    constructor(http) {
        this.http = http;
        this.spinModalDisplay = "none";
        this.thankModalDisplay = "none";
    }
    ngOnInit() {
    }
    onFormSubmit(form) {
        this.spinModalDisplay = "block";
        let data = {
            name: form.controls.name.value,
            email: form.controls.email.value,
            message: form.controls.message.value,
            _template: "table",
            _captcha: "false"
        };
        this.http.post("https://formsubmit.co/b.subbu504@gmail.com", data).subscribe((res) => { console.log(res); }, (err) => {
            this.spinModalDisplay = "none";
            this.thankModalDisplay = "block";
            setTimeout(function () {
                this.thankModalDisplay = "block";
            }, 2000);
        }, () => { console.log('completed'); });
    }
    reload() {
        this.thankModalDisplay = 'none';
        window.location.reload();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 52, vars: 8, consts: [["id", "contact-form"], [1, "container"], [1, "row"], [1, "col-sm-12", "text-center"], [1, "headings"], [1, "row", "justify-content-center"], [1, "col-md-6"], ["id", "myForm", 3, "ngSubmit"], ["contactForm", "ngForm"], [1, "form-group"], ["ngModel", "", "type", "text", "placeholder", "Your Name", "name", "name", "id", "name", "required", "", 1, "form-control"], ["name", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["ngModel", "", "type", "email", "placeholder", "Email Address", "name", "email", "id", "email", "required", "", "email", "", 1, "form-control"], ["email", "ngModel"], ["ngModel", "", "rows", "10", "placeholder", "Message", "name", "message", "id", "message", "required", "", "minlength", "4", 1, "form-control"], ["message", "ngModel"], ["type", "submit", "id", "submit-btn", 1, "btn", "btn-success", 3, "disabled"], ["tabindex", "-1", "role", "dialog", "id", "spinModal", 1, "modal", 3, "style.displayChange"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body"], [1, "text-center", "m-5"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["tabindex", "-1", "role", "dialog", "id", "myModal", 1, "modal", 3, "style.displayChange"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "text-dark"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", "onclick", "$('#myModal').hide()"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], [1, "text-danger"], [4, "ngIf"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Let us know your opinion on our site. We may not perfect but \"we can be\"... with your feedback. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.onFormSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactComponent_div_16_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactComponent_div_20_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "textarea", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ContactComponent_div_24_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("style.displayChange", function ContactComponent_Template_div_style_displayChange_27_listener($event) { return ctx.spinModalDisplay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("style.displayChange", function ContactComponent_Template_div_style_displayChange_37_listener($event) { return ctx.thankModalDisplay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Thank You!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "We will reply to you as soon as possible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_50_listener() { return ctx.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.spinModalDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.thankModalDisplay);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"]], styles: [".modal[_ngcontent-%COMP%]{\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
    onClick(e) {
        console.log(e);
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 43, vars: 0, consts: [[1, "main-heading"], [1, "sub-heading"], [1, "row", "px-3", "overflow-hidden"], ["data-aos", "flip-left", 1, "col-sm-12", "col-md-6", "col-lg-4"], [1, "work-wrapper"], ["data-toggle", "modal", "data-target", "#imageModal", "src", "../../assets/img/sketch1.jpg", "alt", "", 3, "click"], ["data-toggle", "modal", "data-target", "#imageModal", "src", "../../assets/img/sketch2.jpg", "alt", "", 3, "click"], ["data-toggle", "modal", "data-target", "#imageModal", "src", "../../assets/img/sketch3.jpg", "alt", "", 3, "click"], ["data-aos", "flip-right", 1, "col-sm-12", "col-md-6", "col-lg-4"], ["data-toggle", "modal", "data-target", "#imageModal", "src", "../../assets/img/sketch4.jpg", "alt", "", 3, "click"], ["data-toggle", "modal", "data-target", "#imageModal", "src", "../../assets/img/sketch5.jpg", "alt", "", 3, "click"], ["data-toggle", "modal", "data-target", "#imageModal", "src", "../../assets/img/sketch6.jpg", "alt", "", 3, "click"], ["data-aos", "fade-right", 1, "col-sm-12", "col-md-6", "col-lg-4"], ["data-toggle", "modal", "data-target", "#imageModal", "src", "../../assets/img/paint1.jpg", "alt", "", 3, "click"], ["data-aos", "fade-down", 1, "col-sm-12", "col-md-6", "col-lg-4"], ["data-toggle", "modal", "data-target", "#imageModal", "src", "../../assets/img/paint2.jpg", "alt", "", 3, "click"], ["data-aos", "fade-left", 1, "col-sm-12", "col-md-6", "col-lg-4"], ["data-toggle", "modal", "data-target", "#imageModal", "src", "../../assets/img/paint3.jpg", "alt", "", 3, "click"], ["id", "imageModal", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "p-0"], [1, "modal-body", "p-1"], ["data-dismiss", "modal", 1, "close"], ["data-toggle", "modal", "data-target", "#imageModal", "src", "../../assets/img/sketch2.jpg", "alt", ""], ["imgPreview", ""]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Art Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pencil Sketches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_img_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r0.src = $event.target.currentSrc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_img_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r0.src = $event.target.currentSrc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_img_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r0.src = $event.target.currentSrc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_img_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r0.src = $event.target.currentSrc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_img_click_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r0.src = $event.target.currentSrc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_img_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r0.src = $event.target.currentSrc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Acrylic Paints");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_img_click_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r0.src = $event.target.currentSrc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_img_click_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r0.src = $event.target.currentSrc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_img_click_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r0.src = $event.target.currentSrc; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-heading[_ngcontent-%COMP%]{    \r\n    font-size: 50px;\r\n    font-weight: normal;\r\n    color: #777;\r\n    text-align: center;\r\n    width:-webkit-fit-content;\r\n    width:-moz-fit-content;\r\n    width:fit-content;\r\n    margin: 30px auto;\r\n}\r\n\r\n.work-wrapper[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n    border: 10px solid rgb(209, 218, 226);\r\n    padding:5px;\r\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);\r\n    cursor: pointer;\r\n}\r\n\r\n.work-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:350px;\r\n}\r\n\r\n#imageModal[_ngcontent-%COMP%]{\r\n    margin-top: 100px;\r\n}\r\n\r\n#imageModal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n#imageModal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    top:10px;\r\n    right:15px;\r\n    font-size: 30px;\r\n    color:#ccc;\r\n    cursor: pointer;\r\n}\r\n\r\n@media(max-width:400px){\r\n    .work-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n      height:200px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQWlCO0lBQWpCLHNCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtNQUNFLFlBQVk7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1oZWFkaW5neyAgICBcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuXHJcbi53b3JrLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJnYigyMDksIDIxOCwgMjI2KTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi53b3JrLXdyYXBwZXIgaW1ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDozNTBweDtcclxufVxyXG4jaW1hZ2VNb2RhbHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbiNpbWFnZU1vZGFsIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNpbWFnZU1vZGFsIC5tb2RhbC1ib2R5IGltZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG4uY2xvc2V7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDoxMHB4O1xyXG4gICAgcmlnaHQ6MTVweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiNjY2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NDAwcHgpe1xyXG4gICAgLndvcmstd3JhcHBlciBpbWd7XHJcbiAgICAgIGhlaWdodDoyMDBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function () { return { "overflow-x": "hidden" }; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 60, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "bg-img"], [1, "bg-text"], [1, "myPara"], [1, "row", "g-5", "justify-content-around", "p-4", 3, "ngStyle"], [1, "col-sm-12", "col-md-5", "v-container", "my-3"], [1, "iframe-container"], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/onZAjfqcGOk?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/onZAjfqcGOk/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/onZAjfqcGOk", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/weRHyjj34ZE?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/weRHyjj34ZE/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/weRHyjj34ZE", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/Ow98GXfIyXA?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/Ow98GXfIyXA/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/Ow98GXfIyXA", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/vCEvCXuglqo?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/vCEvCXuglqo/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/vCEvCXuglqo", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/eWyukCvhGI0?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/eWyukCvhGI0/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/eWyukCvhGI0", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/iEe_eraFWWs?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/iEe_eraFWWs/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/iEe_eraFWWs", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/QNdANsEPT94?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/QNdANsEPT94/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/QNdANsEPT94", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/lvM9Y1MJAII?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/lvM9Y1MJAII/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/lvM9Y1MJAII", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/EBFHXwehVWI?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/EBFHXwehVWI/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/EBFHXwehVWI?start=18", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/0cjRAj1bk3U?start=28?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/0cjRAj1bk3U/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/0cjRAj1bk3U?start=28", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/AjGFFP6c4Eg?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/AjGFFP6c4Eg/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/AjGFFP6c4Eg", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/rjsNNcsUNzE?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/rjsNNcsUNzE/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/watch?v=rjsNNcsUNzE", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/VlTH_Bvca1k?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/VlTH_Bvca1k/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "loading", "lazy", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/VlTH_Bvca1k", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/wN4Rbc6HSPY?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/wN4Rbc6HSPY/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "loading", "lazy", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/wN4Rbc6HSPY", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["loading", "lazy", "srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/j2HY4G63qaE?start=36?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/j2HY4G63qaE/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "width", "560", "height", "315", "src", "https://www.youtube.com/embed/j2HY4G63qaE?start=36", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["srcdoc", "<style>\n                    * {\n                    padding: 0;\n                    margin: 0;\n                    overflow: hidden;\n                    }\n                    \n                    body, html {\n                      height: 100%;\n                    }\n                    \n                    img, svg {\n                      position: absolute;\n                      width: 100%;\n                      top: 0;\n                      bottom: 0;\n                      margin: auto;\n                    }\n                    \n                    svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));\n                      transition: all 250ms ease-in-out;\n                    }\n                    \n                    body:hover svg {\n                      filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));\n                      transform: scale(1.2);\n                    }\n                  </style>\n                  <a href='https://www.youtube.com/embed/KLJA-srM_yM?start=104?autoplay=1'>\n                    <img src='https://img.youtube.com/vi/KLJA-srM_yM/hqdefault.jpg' alt='Coffee Recipe Javascript Project'>\n                    <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>\n                  </a>\n                  ", "loading", "lazy", "width", "560", "height", "315", "loading", "lazy", "src", "https://www.youtube.com/embed/KLJA-srM_yM?start=104", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Copy ? (or) Inspired By!!! ( You Decide )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "In this article we will see some of the best tollywood music and their actual origin. After watching these you will realize that these songs were made with some reference and not at all coincidence :) . I don't know whether our music directors copied these songs or they get inspired by these songs and took them as a reference. Without furthur ado ... Lets see what we have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "iframe", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "iframe", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "iframe", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "iframe", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "iframe", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "iframe", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "iframe", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "iframe", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "iframe", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "iframe", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "iframe", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "iframe", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "iframe", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "iframe", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".bg-img[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width:100%;\r\n    height:450px;\r\n    background-image:linear-gradient(to right,rgba(0,0,0,.2),rgba(0,0,0,.6)) ,url('bg.jpg');\r\n    background-position: center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\r\n            clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);\r\n}\r\n.bg-text[_ngcontent-%COMP%]{\r\n    color:#fff;\r\n    padding: 20px;\r\n}\r\n.bg-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n}\r\n.iframe-container[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    position: relative;\r\n    padding-bottom: 56%;\r\n    margin-bottom: 20px;\r\n}\r\n.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100%;\r\n}\r\n.myPara[_ngcontent-%COMP%]{    \r\n    background-color: rgb(243, 250, 226);\r\n    margin: 30px auto;\r\n    padding: 20px;\r\n    border-left:5px solid rgb(222, 248, 162);\r\n}\r\n.v-container[_ngcontent-%COMP%]{\r\n    box-shadow: 6px 6px 10px hsl(206.5, 0%, 75%);\r\n}\r\n@media(min-width:768px){\r\n    .bg-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size:40px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWix1RkFBd0c7SUFDeEcsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsc0VBQThEO1lBQTlELDhEQUE4RDtBQUNsRTtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE1BQU07SUFDTixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUdBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmctaW1ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC4yKSxyZ2JhKDAsMCwwLC42KSkgLHVybCgnLi4vLi4vYXNzZXRzL2ltZy9iZy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCA3NSUgMCUsIDEwMCUgNTAlLCA3NSUgMTAwJSwgMCUgMTAwJSk7XHJcbn1cclxuLmJnLXRleHR7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uYmctdGV4dCBoM3tcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcblxyXG4uaWZyYW1lLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uaWZyYW1lLWNvbnRhaW5lciBpZnJhbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG4ubXlQYXJheyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI1MCwgMjI2KTtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1sZWZ0OjVweCBzb2xpZCByZ2IoMjIyLCAyNDgsIDE2Mik7XHJcbn1cclxuLnYtY29udGFpbmVye1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IGhzbCgyMDYuNSwgMCUsIDc1JSk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5iZy10ZXh0IGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0MHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\subbu\Desktop\One Folder\Real Projects\copycat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map