(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal\myBlogDev\src\main.ts */"zUnb");


/***/ }),

/***/ "2lYq":
/*!***************************************!*\
  !*** ./src/app/me/me/me.component.ts ***!
  \***************************************/
/*! exports provided: MeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeComponent", function() { return MeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mamba Liu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.adress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
// import { Component, ViewEncapsulation, ViewChild,OnInit, AfterViewInit, } from "@angular/core";
// import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
// import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
// import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
// install Swiper modules
// SwiperCore.use([EffectCoverflow, Pagination]);
// install Swiper modules
// SwiperCore.use([EffectCoverflow, Pagination]);
// import Swiper from 'swiper';
// import Swiper from 'node_modules/swiper/swiper';
// node_modules\swiper\swiper.d.ts
// import { SwiperOptions } from './types/swiper-options';
// import { SwiperModule } from './types/shared';
class MeComponent {
    constructor() {
        this.cardList = [
            {
                adress: '澳门 永利皇宫',
                imgSrc: '../../../assets/img/album/浮雕.jpg',
            },
            {
                adress: '香港 彩虹邨',
                imgSrc: '../../../assets/img/album/香港彩虹邨.jpg',
            },
            {
                adress: '澳门',
                imgSrc: '../../../assets/img/album/澳门科比球衣.jpg',
            },
            {
                adress: '深圳 百度国际大厦',
                imgSrc: '../../../assets/img/album/百度大厦.jpg',
            },
            {
                adress: '珠海 国际会展中心',
                imgSrc: '../../../assets/img/album/珠海国际会展中心.JPG',
            },
            {
                adress: '澳门 巴黎人',
                imgSrc: '../../../assets/img/album/澳门巴黎人.jpg',
            },
        ];
    }
    ngOnInit() {
        // setTimeout(() => {
        //   this.initSwiper();
        // }, 20);
    }
    ngAfterViewInit() {
        // [effect]="'coverflow'"
        // [grabCursor]="true"
        // [centeredSlides]="true"
        // [slidesPerView]="'auto'"
        // [coverflowEffect]="{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true
        // }"
        // [pagination]="true"
        this.testSwiper = new Swiper('.swiper-container', {
            // direction: 'horizontal',
            loop: true,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 10,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            pagination: true,
        });
        // mySwiper: any;
        // ngAfterViewInit() {
        // }
        // initSwiper() {
        //   this.mySwiper = new Swiper('.swiper-container', {
        //     slidesPerView: 'auto',
        //     freeMode: true,
        //     observer:true,//修改swiper自己或子元素时，自动初始化swiper
        //     observeParents:true,//修改swiper的父元素时，自动初始化swiper
        //   });
        // }
    }
}
MeComponent.ɵfac = function MeComponent_Factory(t) { return new (t || MeComponent)(); };
MeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeComponent, selectors: [["app-me"]], decls: 5, vars: 1, consts: [[1, "me-out"], [1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-slide"], [1, "card"], [1, "card-top"], [1, "top-left"], ["src", "../../../assets/img/bgimg/perPic.png"], [1, "top-right"], [1, "adress"], ["src", "../../../assets/img/icon/\u5730\u70B9.png"], [1, "card-pic"], [3, "src"], [1, "card-description"], [1, "card-bottom"]], template: function MeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MeComponent_div_3_Template, 18, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".me-out {\r\n  width: 100%;\r\n  border: blue 2px solid;\r\n  overflow: hidden;\r\n}\r\n.swiper-container {\r\n  width: 33vh;\r\n  height: 60vh;\r\n  border: red 2px solid;\r\n  margin: 0 auto;\r\n}\r\n.card {\r\n  height: 100%;\r\n  /* border: green solid 2px; */\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.6),\r\n    rgba(255, 255, 255, 0.2)\r\n  );\r\n  -webkit-backdrop-filter: blur(3px);\r\n          backdrop-filter: blur(3px);\r\n  box-shadow: 2vh 2vh 2.7vh rgba(0, 0, 0, 0.3);\r\n  border-radius: 20px;\r\n}\r\n.card-top {\r\n  height: 15%;\r\n  border: purple 2px solid;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.top-left {\r\n  margin-left: 0.5vh;\r\n}\r\n.top-left img {\r\n  width: 6vh;\r\n  height: 6vh;\r\n  border-radius: 7vh;\r\n}\r\n.top-right {\r\n  margin-left: 0.5vh;\r\n  height: 6vh;\r\n  width: 20vh;\r\n  border: chocolate 2px solid;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n.top-right span:first-child {\r\n  color: rgb(178, 102, 201);\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  line-height: 1.2;\r\n}\r\n.adress {\r\n  border: springgreen 1px solid;\r\n  font-size: 10px;\r\n  color: rgb(178, 102, 201);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  margin-top: 4px;\r\n  line-height: 1;\r\n}\r\n.adress img {\r\n  width: 13px;\r\n  height: 13px;\r\n  margin-right: 3px;\r\n}\r\n.card-pic {\r\n  border: black 2px solid;\r\n  height: 35vh;\r\n}\r\n.card-pic img {    /*\u81EA\u52A8\u586B\u5145div*/\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover; \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWUvbWUvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCOzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLDRDQUE0QztFQUM1QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQSxtQkFBbUIsVUFBVTtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21lL21lL21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWUtb3V0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IGJsdWUgMnB4IHNvbGlkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnN3aXBlci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAzM3ZoO1xyXG4gIGhlaWdodDogNjB2aDtcclxuICBib3JkZXI6IHJlZCAycHggc29saWQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmNhcmQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBib3JkZXI6IGdyZWVuIHNvbGlkIDJweDsgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcclxuICApO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gIGJveC1zaGFkb3c6IDJ2aCAydmggMi43dmggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmNhcmQtdG9wIHtcclxuICBoZWlnaHQ6IDE1JTtcclxuICBib3JkZXI6IHB1cnBsZSAycHggc29saWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50b3AtbGVmdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXZoO1xyXG59XHJcbi50b3AtbGVmdCBpbWcge1xyXG4gIHdpZHRoOiA2dmg7XHJcbiAgaGVpZ2h0OiA2dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3ZoO1xyXG59XHJcbi50b3AtcmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjV2aDtcclxuICBoZWlnaHQ6IDZ2aDtcclxuICB3aWR0aDogMjB2aDtcclxuICBib3JkZXI6IGNob2NvbGF0ZSAycHggc29saWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4udG9wLXJpZ2h0IHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gIGNvbG9yOiByZ2IoMTc4LCAxMDIsIDIwMSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG4uYWRyZXNzIHtcclxuICBib3JkZXI6IHNwcmluZ2dyZWVuIDFweCBzb2xpZDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6IHJnYigxNzgsIDEwMiwgMjAxKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4uYWRyZXNzIGltZyB7XHJcbiAgd2lkdGg6IDEzcHg7XHJcbiAgaGVpZ2h0OiAxM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcbi5jYXJkLXBpYyB7XHJcbiAgYm9yZGVyOiBibGFjayAycHggc29saWQ7XHJcbiAgaGVpZ2h0OiAzNXZoO1xyXG59XHJcbi5jYXJkLXBpYyBpbWcgeyAgICAvKuiHquWKqOWhq+WFhWRpdiovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyOyBcclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-me',
                templateUrl: './me.component.html',
                styleUrls: ['./me.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4y5H":
/*!************************************************!*\
  !*** ./src/app/share/share/share.component.ts ***!
  \************************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ShareComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShareComponent.ɵfac = function ShareComponent_Factory(t) { return new (t || ShareComponent)(); };
ShareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShareComponent, selectors: [["app-share"]], decls: 2, vars: 0, template: function ShareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "share works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL3NoYXJlL3NoYXJlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-share',
                templateUrl: './share.component.html',
                styleUrls: ['./share.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5asC":
/*!******************************************************!*\
  !*** ./src/app/project/project/project.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjectComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 2, vars: 0, template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "project works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "JaJ+":
/*!************************************************!*\
  !*** ./src/app/about/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top/top.component */ "uCUT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'myBlogDev';
        this.arrLang = ['en-US', 'zh-Hans', 'zh-Hant'];
        this.isRouterHigher = false;
        this.isBFixed = false; //底部版权是否fixed布局
        this.isBehind = false; //底部版权是否跟在内容之后
        this.currentLang = 'zh-Hans';
        const arrLang = ['en-US', 'zh-Hans', 'zh-Hant'];
        translate.addLangs(arrLang); // 设置语言
        translate.setDefaultLang('zh-Hans'); // 设置默认语言
    }
    ngOnInit() {
        // this.getIsRouterHighter();
    }
    ngAfterContentInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["id", "router"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 0);
    } }, directives: [_top_top_component__WEBPACK_IMPORTED_MODULE_2__["TopComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "T0xb":
/*!******************************************!*\
  !*** ./src/app/lab/lab/lab.component.ts ***!
  \******************************************/
/*! exports provided: LabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabComponent", function() { return LabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LabComponent {
    constructor() { }
    ngOnInit() {
    }
}
LabComponent.ɵfac = function LabComponent_Factory(t) { return new (t || LabComponent)(); };
LabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabComponent, selectors: [["app-lab"]], decls: 2, vars: 0, template: function LabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lab works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhYi9sYWIvbGFiLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lab',
                templateUrl: './lab.component.html',
                styleUrls: ['./lab.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "T6mr":
/*!***************************************************!*\
  !*** ./src/app/bottom/bottom/bottom.component.ts ***!
  \***************************************************/
/*! exports provided: BottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomComponent", function() { return BottomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BottomComponent {
    constructor() { }
    ngOnInit() {
    }
}
BottomComponent.ɵfac = function BottomComponent_Factory(t) { return new (t || BottomComponent)(); };
BottomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomComponent, selectors: [["app-bottom"]], decls: 3, vars: 0, consts: [[1, "bottom"], [1, "copyright"]], template: function BottomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright \u00A9 2021 Yunze Liu. All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  color: rgb(178, 102, 201,0.7);\r\n}\r\n.bottom[_ngcontent-%COMP%]{\r\n  \r\n  position:absolute;\r\n  bottom: 0;\r\n  height: 4vh;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm90dG9tL2JvdHRvbS9ib3R0b20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYm90dG9tL2JvdHRvbS9ib3R0b20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogcmdiKDE3OCwgMTAyLCAyMDEsMC43KTtcclxufVxyXG4uYm90dG9te1xyXG4gIC8qIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7ICovXHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bottom',
                templateUrl: './bottom.component.html',
                styleUrls: ['./bottom.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateHttpLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateHttpLoader", function() { return createTranslateHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top/top.component */ "uCUT");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _about_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about/about.component */ "JaJ+");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index/index.component */ "aUdj");
/* harmony import */ var _me_me_me_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./me/me/me.component */ "2lYq");
/* harmony import */ var _resume_resume_resume_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resume/resume/resume.component */ "z7Cr");
/* harmony import */ var _project_project_project_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project/project/project.component */ "5asC");
/* harmony import */ var _lab_lab_lab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lab/lab/lab.component */ "T0xb");
/* harmony import */ var _share_share_share_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./share/share/share.component */ "4y5H");
/* harmony import */ var _bottom_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bottom/bottom/bottom.component */ "T6mr");









//插件库













// import { SwiperModule } from "swiper/angular";
function createTranslateHttpLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
            // SwiperModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: createTranslateHttpLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _top_top_component__WEBPACK_IMPORTED_MODULE_5__["TopComponent"],
        _about_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
        _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"],
        _me_me_me_component__WEBPACK_IMPORTED_MODULE_14__["MeComponent"],
        _resume_resume_resume_component__WEBPACK_IMPORTED_MODULE_15__["ResumeComponent"],
        _project_project_project_component__WEBPACK_IMPORTED_MODULE_16__["ProjectComponent"],
        _lab_lab_lab_component__WEBPACK_IMPORTED_MODULE_17__["LabComponent"],
        _share_share_share_component__WEBPACK_IMPORTED_MODULE_18__["ShareComponent"],
        _bottom_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_19__["BottomComponent"]], imports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
        // SwiperModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _top_top_component__WEBPACK_IMPORTED_MODULE_5__["TopComponent"],
                    _about_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                    _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"],
                    _me_me_me_component__WEBPACK_IMPORTED_MODULE_14__["MeComponent"],
                    _resume_resume_resume_component__WEBPACK_IMPORTED_MODULE_15__["ResumeComponent"],
                    _project_project_project_component__WEBPACK_IMPORTED_MODULE_16__["ProjectComponent"],
                    _lab_lab_lab_component__WEBPACK_IMPORTED_MODULE_17__["LabComponent"],
                    _share_share_share_component__WEBPACK_IMPORTED_MODULE_18__["ShareComponent"],
                    _bottom_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_19__["BottomComponent"],
                ],
                imports: [
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
                    // SwiperModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                            useFactory: createTranslateHttpLoader,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                        },
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aUdj":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function IndexComponent_div_27_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IndexComponent_div_27_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r2.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.detail);
} }
function IndexComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_div_27_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.linkClick(item_r2.title, item_r2.id, item_r2.detailTitle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndexComponent_div_27_ng_container_6_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IndexComponent_div_27_ng_container_7_Template, 4, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2.iconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r2.detailTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.isDetailPic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.isDetailPic);
} }
const _c0 = function (a0) { return { scale: a0 }; };
function IndexComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_ng_container_30_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.navClick(item_r9.index, item_r9.router); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, item_r9.isClick));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r9.iconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, item_r9.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, item_r9.text));
} }
class IndexComponent {
    constructor(router) {
        this.router = router;
        this.connectList = [
            {
                id: 0,
                title: 'weChat',
                iconSrc: '../../assets/img/icon/微信.png',
                isDetailPic: true,
                isClickDown: false,
                detail: '../../assets/img/img/微信二维码.jpg',
                detailTitle: 'weChatShow',
            },
            {
                id: 1,
                title: 'ins',
                iconSrc: '../../assets/img/icon/ins2.png',
                isDetailPic: true,
                isClickDown: false,
                detail: '../../assets/img/img/ins二维码.jpg',
                detailTitle: 'insShow',
            },
            {
                id: 2,
                title: 'csdn',
                iconSrc: '../../assets/img/icon/csdn.png',
                isDetailPic: false,
                isClickDown: false,
                detail: 'https://blog.csdn.net/weixin_45213401',
                detailTitle: 'csdnShow',
            },
            {
                id: 3,
                title: 'gitHub',
                iconSrc: '../../assets/img/icon/github.png',
                isDetailPic: false,
                isClickDown: false,
                detail: 'https://github.com/MambaLiu',
                detailTitle: 'gitHubShow',
            },
        ];
        this.navList = [
            {
                index: 0,
                title: 'BASE.PER_PAGE',
                iconSrc: '../../assets/img/icon/主页.png',
                text: 'TEXT.PER_PAGE_TEXT',
                isClick: false,
                router: '/me',
            },
            {
                index: 1,
                title: 'BASE.RESUME',
                iconSrc: '../../assets/img/icon/简历.png',
                text: 'TEXT.RESUME_TEXT',
                isClick: false,
                router: '/resume',
            },
            {
                index: 2,
                title: 'BASE.PROJECT',
                iconSrc: '../../assets/img/icon/项目.png',
                text: 'TEXT.PROJECT_TEXT',
                isClick: false,
                router: '/project',
            },
            {
                index: 3,
                title: 'BASE.LAB',
                iconSrc: '../../assets/img/icon/实验室.png',
                text: 'TEXT.LAB_TEXT',
                isClick: false,
                router: '/lab',
            },
            {
                index: 4,
                title: 'BASE.SHARE',
                iconSrc: '../../assets/img/icon/分享.png',
                text: 'TEXT.SHARE_TEXT',
                isClick: false,
                router: '/share',
            },
            {
                index: 5,
                title: 'BASE.ABOUT',
                iconSrc: '../../assets/img/icon/about4.png',
                text: 'TEXT.ABOUT_TEXT',
                isClick: false,
                router: '/about',
            },
            {
                index: 6,
                title: 'BASE.TO_BE_DEVELOPED',
                iconSrc: '../../assets/img/icon/问号.png',
                text: 'TEXT.TO_BE_DEVELOPED_TEXT',
                isClick: false,
                router: '',
            },
            {
                index: 7,
                title: 'BASE.TO_BE_DEVELOPED',
                iconSrc: '../../assets/img/icon/问号.png',
                text: 'TEXT.TO_BE_DEVELOPED_TEXT',
                isClick: false,
                router: '',
            },
        ];
        this.lastTimeTitle = '';
        this.lastTimeDetailTitle = '';
    }
    ngOnInit() { }
    linkClick(title, index, detailTitle) {
        //第一次点击时
        if (this.lastTimeTitle === '') {
            this.pushDown(title, index, detailTitle); // 第一次按下
        }
        else if (title === this.lastTimeTitle) {
            if (this.connectList[index].isClickDown) {
                this.pullUp(title, index, detailTitle); // 如果是按下的时候弹起
            }
            else {
                this.pushDown(title, index, detailTitle); // 如果是弹起的时候按下
            }
        }
        else if (title !== this.lastTimeTitle) {
            if (this.connectList[this.lastTimeIndex].isClickDown) {
                this.pullUp(this.lastTimeTitle, this.lastTimeIndex, this.lastTimeDetailTitle); //如果上一次的按钮是按下状态是弹起上一次按钮
                this.pushDown(title, index, detailTitle); //然后按下这次按钮
            }
            else if (!this.connectList[this.lastTimeIndex].isClickDown) {
                this.pushDown(title, index, detailTitle); // 如果上一次按钮是弹起状态直接按下这次的按钮
            }
        }
    }
    //按下
    pushDown(title, index, detailTitle) {
        this.connectList[index].isClickDown = !this.connectList[index].isClickDown;
        var arr = document.querySelector('#' + title);
        arr.setAttribute('style', 'box-shadow:0.6vh 0.6vh 1.2vh #939597 inset, -0.6vh -0.6vh 1.2vh #fff inset');
        var arr2 = document.querySelector('#' + detailTitle);
        arr2.setAttribute('style', 'display:flex');
        this.lastTimeTitle = title;
        this.lastTimeIndex = index;
        this.lastTimeDetailTitle = detailTitle;
    }
    //弹起
    pullUp(title, index, detailTitle) {
        this.connectList[index].isClickDown = !this.connectList[index].isClickDown;
        var arr = document.querySelector('#' + title);
        arr.setAttribute('style', 'box-shadow:0.6vh 0.6vh 1.2vh #939597, -0.6vh -0.6vh 1.2vh #fff;');
        var arr2 = document.querySelector('#' + detailTitle);
        arr2.setAttribute('style', 'display:none');
        this.lastTimeTitle = title;
        this.lastTimeIndex = index;
        this.lastTimeDetailTitle = detailTitle;
    }
    navClick(index, router) {
        this.navList[index].isClick = true;
        setTimeout(() => {
            this.navList[index].isClick = false;
        }, 250);
        setTimeout(() => {
            /*页面跳转1*/
            // this.router.navigate([router]);
            /*页面跳转2*/
            this.router.navigateByUrl(router);
        }, 500);
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 31, vars: 14, consts: [[1, "out"], [1, "glass"], [1, "dash-board"], [1, "up"], [1, "me"], [1, "per-pic"], [1, "per-galss"], [1, "zh-name", "per-detail"], ["src", "../../assets/img/icon/\u59D3\u540D.png"], [1, "per-detail"], ["src", "../../assets/img/icon/\u6635\u79F0.png"], ["src", "../../assets/img/icon/\u5BB6.png"], ["src", "../../assets/img/icon/\u5730\u70B9.png"], ["src", "../../assets/img/icon/\u804C\u4E1A.png"], [1, "links"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "nav-container"], [1, "nav"], [4, "ngFor", "ngForOf"], [1, "container"], [1, "link", 3, "id", "click"], [3, "src"], [1, "outside", 3, "id"], [1, "arrow"], [1, "link-detail-out"], [4, "ngIf"], [1, "link-detail-text"], ["target", "_blank", 3, "href"], [1, "nav-items", 3, "ngClass", "click"], [1, "nav-items-right"], [1, "nav-title"], [1, "nav-text"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "MambaLiu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, IndexComponent_div_27_Template, 8, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, IndexComponent_ng_container_30_Template, 10, 10, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, "BASE.NAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, "BASE.FROM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 10, "BASE.ADRESS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 12, "BASE.JOB"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.connectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: rgb(178, 102, 201);\r\n}\r\n.out[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  \r\n  top: 70px;\r\n}\r\n.glass[_ngcontent-%COMP%] {\r\n  width: 86%;\r\n  height: 83vh; \r\n  border-radius: 25px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.6),\r\n    rgba(255, 255, 255, 0.2)\r\n  );\r\n  -webkit-backdrop-filter: blur(3px);\r\n          backdrop-filter: blur(3px);\r\n  box-shadow: 2vh 2vh 2.7vh rgba(0, 0, 0, 0.3);\r\n}\r\n.dash-board[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: inherit;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.4)\r\n  );\r\n  box-shadow: 0vh 1vh 1.5vh rgba(0, 0, 0, 0.3);\r\n}\r\n.up[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.me[_ngcontent-%COMP%] {\r\n  width: 38vh;\r\n  height: 18vh;\r\n  \r\n  border-radius: 2.5vh;\r\n  margin-top: 2vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0.8vh 0.8vh 1.3vh #939597, -0.8vh -0.8vh 1.3vh #ffffffd5;\r\n}\r\n.per-galss[_ngcontent-%COMP%] {\r\n  width: 16vh;\r\n  height: 16vh;\r\n  \r\n  margin-left: 1.2vh;\r\n  line-height: 1.1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  \r\n  \r\n  \r\n}\r\n.per-galss[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  line-height: inherit;\r\n  width: 1.9vh;\r\n  height: 1.9vh;\r\n  margin-right: 1vh;\r\n  margin-left: 0.5vh;\r\n}\r\n.zh-name[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n.per-detail[_ngcontent-%COMP%] {\r\n  height: 2.7vh;\r\n  width: 17vh;\r\n  border-radius: 1vh;\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  box-shadow: 0.2vh 0.2vh 0.2vh inset #939597,\r\n    -0.2vh -0.2vh 0.2vh inset #ffffffd5;\r\n}\r\n.per-pic[_ngcontent-%COMP%] {\r\n  width: 15.5vh;\r\n  height: 15.5vh;\r\n  border-radius: 2.5vh;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-image: url('perPic.png');\r\n  position: relative;\r\n  \r\n  \r\n}\r\n.links[_ngcontent-%COMP%] {\r\n  margin-top: 1.8vh;\r\n  margin-bottom: 1.5vh;\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative; \r\n  z-index: 2;\r\n}\r\n.link[_ngcontent-%COMP%] {\r\n  \r\n  height: 4vh;\r\n  width: 4vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 1.5vh;\r\n  border-radius: 1.2vh;\r\n  box-shadow: 0.6vh 0.6vh 1.2vh #939597, -0.6vh -0.6vh 1.2vh #ffffffec;\r\n}\r\n.link[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer; \r\n}\r\n.link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 2.7vh;\r\n  height: 2.7vh;\r\n}\r\n.outside[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.link-detail-out[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  -webkit-backdrop-filter: blur(5px);\r\n          backdrop-filter: blur(5px);\r\n  box-shadow: 2vh 2vh 2vh rgba(0, 0, 0, 0.3);\r\n  position: absolute;\r\n  top: 5vh;\r\n  left: -7vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  border-radius: 3vh;\r\n}\r\n.link-detail-pic[_ngcontent-%COMP%] {\r\n  \r\n  width: 19vh;\r\n  height: 19vh;\r\n  \r\n  background: gainsboro;\r\n  border-radius: 3vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.link-detail-text[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0.5vh 1.3vh;\r\n  text-align: center;\r\n}\r\n.link-detail-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: underline; \r\n}\r\n.link-detail-out[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 17vh;\r\n  height: 17vh;\r\n  border-radius: 3vh;\r\n  margin: 2vh 2vh;\r\n}\r\n.arrow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 2vh;\r\n  top: 2.5vh;\r\n  border-style: solid;\r\n  border-width: 1.5vh; \r\n  border-color: transparent transparent rgba(255, 255, 255, 0.7) transparent;\r\n}\r\n\r\n\r\n.nav-container[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  \r\n  \r\n  width: 89%;\r\n  -webkit-overflow-scrolling: touch;\r\n  \r\n  \r\n  border-radius: 0 0 25px 25px;\r\n  box-shadow:0.6vh 0.6vh 1.2vh #939597 inset, -0.6vh -0.6vh 1.2vh #fff inset\r\n}\r\n.nav[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 102.2%;\r\n  height: 52.5vh;\r\n  \r\n  \r\n  overflow: hidden;\r\n  -webkit-overflow-scrolling: touch;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  display: inline-block;\r\n  z-index: 1;\r\n}\r\n.nav-items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-left: 1.3vh;\r\n  width: 5.2vh;\r\n  height: 5.2vh;\r\n}\r\n.nav-items[_ngcontent-%COMP%] {\r\n  width: 33.5vh;\r\n  height: 9.2vh;\r\n  margin:2vh auto;\r\n  margin-top: 0;\r\n  margin-bottom: 1.8vh;\r\n  \r\n  background: linear-gradient(\r\n    to right,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.4)\r\n  );\r\n  -webkit-backdrop-filter: blur(3px);\r\n          backdrop-filter: blur(3px);\r\n  box-shadow: 0.6vh 0.6vh 1.3vh #606161;\r\n  border-radius: 1.2vh;\r\n  transition: all 0.2s;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.nav-items[_ngcontent-%COMP%]:first-child{\r\n  margin-top: 2vh;\r\n}\r\n@media screen and (max-width: 400px){\r\n  .nav-items[_ngcontent-%COMP%] {\r\n    \r\n  }\r\n}\r\n@media screen and (min-width: 400px) {\r\n  .nav-items[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.11, 1.11) translateX(-0.6vh);\r\n    cursor: pointer; \r\n  }\r\n}\r\n.scale[_ngcontent-%COMP%] {\r\n  transform: scale(1.11, 1.11) translateX(-0.6vh);\r\n}\r\n.nav-items-right[_ngcontent-%COMP%] {\r\n  margin-left: 1.3vh;\r\n  height: 7.8vh;\r\n  width: 23vh;\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n.nav-title[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-bottom: 0.2vh;\r\n  \r\n}\r\n.nav-text[_ngcontent-%COMP%] {\r\n  line-height: 1;\r\n  color: rgb(178, 102, 201, 0.7);\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0px;\r\n  background-color: inherit;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25COzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qjs7OztHQUlDO0VBQ0QsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvRUFBb0U7QUFDdEU7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCOzs7O01BSUk7RUFDSix5REFBeUQ7RUFDekQsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CO3VDQUNxQztBQUN2QztBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixtQ0FBMEQ7RUFDMUQsa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3Qyx3REFBd0Q7QUFDMUQ7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCLEVBQUUsV0FBVztFQUMvQixVQUFVO0FBQ1o7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG9FQUFvRTtBQUN0RTtBQUNBO0VBQ0UsZUFBZSxFQUFFLGtCQUFrQjtBQUNyQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRTs7OztHQUlDO0VBQ0Qsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMEJBQTBCLEVBQUUsUUFBUTtBQUN0QztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFFLE9BQU87RUFDNUIsMEVBQTBFO0FBQzVFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0Qkc7QUFFSCx5Q0FBeUM7QUFDekM7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCO0FBQ0Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qjs7O3dCQUdzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCOzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjtBQUNBO0VBQ0U7SUFDRSwrQ0FBK0M7SUFDL0MsZUFBZSxFQUFFLGtCQUFrQjtFQUNyQztBQUNGO0FBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtBQUNoQztBQUVBLFlBQVk7QUFDWjtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQSxpQkFBaUI7QUFDakI7Ozs7R0FJRztBQUVILGNBQWM7QUFDZDs7OztHQUlHIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmdiKDE3OCwgMTAyLCAyMDEpO1xyXG59XHJcbi5vdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cclxuICB0b3A6IDcwcHg7XHJcbn1cclxuLmdsYXNzIHtcclxuICB3aWR0aDogODYlO1xyXG4gIGhlaWdodDogODN2aDsgXHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXHJcbiAgKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICBib3gtc2hhZG93OiAydmggMnZoIDIuN3ZoIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4uZGFzaC1ib2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClcclxuICApO1xyXG4gIGJveC1zaGFkb3c6IDB2aCAxdmggMS41dmggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbi51cCB7XHJcbiAgLyogYm9yZGVyOiBibGFjayAxcHggc29saWQ7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1lIHtcclxuICB3aWR0aDogMzh2aDtcclxuICBoZWlnaHQ6IDE4dmg7XHJcbiAgLyogYm9yZGVyOiBjaG9jb2xhdGUgMXB4IHNvbGlkOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuNXZoO1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwLjh2aCAwLjh2aCAxLjN2aCAjOTM5NTk3LCAtMC44dmggLTAuOHZoIDEuM3ZoICNmZmZmZmZkNTtcclxufVxyXG4ucGVyLWdhbHNzIHtcclxuICB3aWR0aDogMTZ2aDtcclxuICBoZWlnaHQ6IDE2dmg7XHJcbiAgLyogYm9yZGVyOiBncmVlbiBzb2xpZCAxcHg7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDEuMnZoO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2IoMTU0LCAxMjQsIDE5OCwwLjgpLFxyXG4gICAgcmdiKDE3OCwgMTAyLCAyMDEsMC44KVxyXG4gICk7ICovXHJcbiAgLyogYm94LXNoYWRvdzowLjR2aCAwLjh2aCAwLjV2aCByZ2JhKDY0LCAxOSwgMTAwLCAwLjgpOyAqL1xyXG4gIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpOyAqL1xyXG59XHJcbi5wZXItZ2Fsc3MgaW1nIHtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICB3aWR0aDogMS45dmg7XHJcbiAgaGVpZ2h0OiAxLjl2aDtcclxuICBtYXJnaW4tcmlnaHQ6IDF2aDtcclxuICBtYXJnaW4tbGVmdDogMC41dmg7XHJcbn1cclxuLnpoLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucGVyLWRldGFpbCB7XHJcbiAgaGVpZ2h0OiAyLjd2aDtcclxuICB3aWR0aDogMTd2aDtcclxuICBib3JkZXItcmFkaXVzOiAxdmg7XHJcbiAgLyogYm9yZGVyOiBibGFjayAxcHggc29saWQ7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAuMnZoIDAuMnZoIDAuMnZoIGluc2V0ICM5Mzk1OTcsXHJcbiAgICAtMC4ydmggLTAuMnZoIDAuMnZoIGluc2V0ICNmZmZmZmZkNTtcclxufVxyXG4ucGVyLXBpYyB7XHJcbiAgd2lkdGg6IDE1LjV2aDtcclxuICBoZWlnaHQ6IDE1LjV2aDtcclxuICBib3JkZXItcmFkaXVzOiAyLjV2aDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JnaW1nL3BlclBpYy5wbmdcIik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIGJveC1zaGFkb3c6IDBweCA4cHggN3B4IHJnYig1NCwgNTIsIDUyKTsgKi9cclxuICAvKiBib3gtc2hhZG93OjAuNHZoIDAuOHZoIDAuNXZoIHJnYmEoNzgsIDc4LCA3OCwgMC44KTsgKi9cclxufVxyXG4ubGlua3Mge1xyXG4gIG1hcmdpbi10b3A6IDEuOHZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXZoO1xyXG4gIC8qIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkOyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyog55So5LqO5by556qX5a6a5L2NICovXHJcbiAgei1pbmRleDogMjtcclxufVxyXG4ubGluayB7XHJcbiAgLyogYm9yZGVyOiBibHVlIDFweCBzb2xpZDsgKi9cclxuICBoZWlnaHQ6IDR2aDtcclxuICB3aWR0aDogNHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAxLjV2aDtcclxuICBib3JkZXItcmFkaXVzOiAxLjJ2aDtcclxuICBib3gtc2hhZG93OiAwLjZ2aCAwLjZ2aCAxLjJ2aCAjOTM5NTk3LCAtMC42dmggLTAuNnZoIDEuMnZoICNmZmZmZmZlYztcclxufVxyXG4ubGluazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyAvKum8oOagh+aCrOWBnOaXtu+8jOm8oOagh+aMh+mSiOS4uueCueWHu+agt+W8jyovXHJcbn1cclxuLmxpbmsgaW1nIHtcclxuICB3aWR0aDogMi43dmg7XHJcbiAgaGVpZ2h0OiAyLjd2aDtcclxufVxyXG4ub3V0c2lkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubGluay1kZXRhaWwtb3V0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcclxuICApO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gIGJveC1zaGFkb3c6IDJ2aCAydmggMnZoIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1dmg7XHJcbiAgbGVmdDogLTd2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDN2aDtcclxufVxyXG4ubGluay1kZXRhaWwtcGljIHtcclxuICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXHJcbiAgd2lkdGg6IDE5dmg7XHJcbiAgaGVpZ2h0OiAxOXZoO1xyXG4gIC8qIGJvcmRlcjogYmx1ZSBzb2xpZCAycHg7ICovXHJcbiAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDN2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGluay1kZXRhaWwtdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwLjV2aCAxLjN2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxpbmstZGV0YWlsLXRleHQgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIOS4i+WIkue6vyAqL1xyXG59XHJcbi5saW5rLWRldGFpbC1vdXQgaW1nIHtcclxuICB3aWR0aDogMTd2aDtcclxuICBoZWlnaHQ6IDE3dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3ZoO1xyXG4gIG1hcmdpbjogMnZoIDJ2aDtcclxufVxyXG4uYXJyb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMnZoO1xyXG4gIHRvcDogMi41dmg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEuNXZoOyAvKuS4ieinkuWkp+WwjyovXHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLyogLmRyb3AtZG93bi1vdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgYm9yZGVyOiB5ZWxsb3dncmVlbiAycHggc29saWQ7XHJcbn1cclxuLmRyb3AtZG93biB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pY29uL3hf5LiL5ouJLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXI6IHJlZCAxcHggc29saWQ7XHJcbiAgYW5pbWF0aW9uOiBkcm9wLWRvd24gMS42cyBpbmZpbml0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuQGtleWZyYW1lcyBkcm9wLWRvd24ge1xyXG4gIDAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59ICovXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLeWvvOiIqumDqOWIhi0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ubmF2LWNvbnRhaW5lcntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8qIGJvcmRlcjogZ3JlZW4gMnB4IHNvbGlkOyAqL1xyXG4gIC8qIGRpc3BsYXk6IGNvbnRlbnRzOyAqL1xyXG4gIHdpZHRoOiA4OSU7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIC8qIG92ZXJmbG93LXg6IGF1dG87ICovXHJcbiAgLyogei1pbmRleDogMjsgKi9cclxuICBib3JkZXItcmFkaXVzOiAwIDAgMjVweCAyNXB4O1xyXG4gIGJveC1zaGFkb3c6MC42dmggMC42dmggMS4ydmggIzkzOTU5NyBpbnNldCwgLTAuNnZoIC0wLjZ2aCAxLjJ2aCAjZmZmIGluc2V0XHJcbn1cclxuLm5hdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDIuMiU7XHJcbiAgaGVpZ2h0OiA1Mi41dmg7XHJcbiAgLyogYm9yZGVyOiBibHVlIDJweCBzb2xpZDsgKi9cclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLm5hdi1pdGVtcyBpbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjN2aDtcclxuICB3aWR0aDogNS4ydmg7XHJcbiAgaGVpZ2h0OiA1LjJ2aDtcclxufVxyXG4ubmF2LWl0ZW1zIHtcclxuICB3aWR0aDogMzMuNXZoO1xyXG4gIGhlaWdodDogOS4ydmg7XHJcbiAgbWFyZ2luOjJ2aCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS44dmg7XHJcbiAgLyogYm9yZGVyOiByZWQgMnB4IHNvbGlkOyAqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0LFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXHJcbiAgKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICBib3gtc2hhZG93OiAwLjZ2aCAwLjZ2aCAxLjN2aCAjNjA2MTYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuMnZoO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubmF2LWl0ZW1zOmZpcnN0LWNoaWxke1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgLm5hdi1pdGVtcyB7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMi4xdmg7ICovXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XHJcbiAgLm5hdi1pdGVtczpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTEsIDEuMTEpIHRyYW5zbGF0ZVgoLTAuNnZoKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyrpvKDmoIfmgqzlgZzml7bvvIzpvKDmoIfmjIfpkojkuLrngrnlh7vmoLflvI8qL1xyXG4gIH1cclxufVxyXG4uc2NhbGUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xMSwgMS4xMSkgdHJhbnNsYXRlWCgtMC42dmgpO1xyXG59XHJcbi5uYXYtaXRlbXMtcmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjN2aDtcclxuICBoZWlnaHQ6IDcuOHZoO1xyXG4gIHdpZHRoOiAyM3ZoO1xyXG4gIC8qIGJvcmRlcjpyZWQgMXB4IHNvbGlkOyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4ubmF2LXRpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4ydmg7XHJcbiAgLyogYm9yZGVyOmdyZWVuIDFweCBzb2xpZDsgKi9cclxufVxyXG4ubmF2LXRleHQge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGNvbG9yOiByZ2IoMTc4LCAxMDIsIDIwMSwgMC43KTtcclxufVxyXG5cclxuLyog5a6a5LmJ5rua5Yqo5p2h5qC35byPICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG4vKuWumuS5iea7muWKqOadoei9qOmBkyDlhoXpmLTlvbEr5ZyG6KeSKi9cclxuLyogOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCByZ2JhKDI0MCwgMjQwLCAyNDAsIC41KTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xyXG59ICovXHJcblxyXG4vKuWumuS5iea7keWdlyDlhoXpmLTlvbEr5ZyG6KeSKi9cclxuLyogOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufSAqL1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "uCUT":
/*!**************************************!*\
  !*** ./src/app/top/top.component.ts ***!
  \**************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _bottom_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bottom/bottom/bottom.component */ "T6mr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






const _c0 = ["abc"];
function TopComponent_ul_13_ul_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_ul_13_ul_9_Template_ul_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const detailItem_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.detailItemClick(detailItem_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_ul_13_ul_9_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const detailItem_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.Menu2ndClick(detailItem_r4.deIndex, detailItem_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detailItem_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", detailItem_r4.id)("matRippleRadius", 50)("matRippleColor", ctx_r3.white);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, detailItem_r4.text), " ");
} }
function TopComponent_ul_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_ul_13_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.moreContentClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TopComponent_ul_13_ul_9_Template, 4, 6, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleRadius", 60)("matRippleColor", ctx_r0.white);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, item_r1.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.detail);
} }
const _c1 = function (a0) { return { rotate: a0 }; };
const _c2 = function (a0) { return { moreShow: a0 }; };
class TopComponent {
    constructor(translate) {
        this.translate = translate;
        this.isMoreShow = false;
        this.cssOpacity = false;
        this.isClickWave = false;
        this.moreList = [
            {
                title: 'BASE.LANGUAGE',
                imgSrc: '../../assets/img/icon/earthColor.png',
                detail: [
                    {
                        deIndex: 1,
                        id: 'zh-Hans',
                        text: 'LANGUAGE.ZH_HANS',
                    },
                    {
                        deIndex: 2,
                        id: 'zh-Hant',
                        text: 'LANGUAGE.ZH_HANT',
                    },
                    {
                        deIndex: 3,
                        id: 'en-US',
                        text: 'LANGUAGE.EN_US',
                    },
                ],
            },
            {
                title: 'BASE.THEME',
                imgSrc: '../../assets/img/icon/主题中心.png',
                detail: [
                    { deIndex: 4, id: 'themeDark', text: 'THEME.DARK' },
                    { deIndex: 5, id: 'themeLight', text: 'THEME.LIGHT' },
                ],
            },
            {
                title: 'BASE.ABOUT',
                imgSrc: '../../assets/img/icon/about4.png',
                detail: [{ deIndex: 6, id: 'aboutWebsite', text: 'BASE.ABOUT_WEBSITE' }],
            },
        ];
    }
    ngOnInit() { }
    add() { }
    img2Click() {
        if (this.isMoreShow) {
            this.isMoreShow = false;
            // document.querySelector('.more-detail').setAttribute("style","opacity:0")
            //this.Dom.nativeElement.style.opacity = '0';
        }
        else {
            this.isMoreShow = true;
        }
    }
    Menu2ndClick(deIndex, id) {
        if (deIndex && deIndex <= 3) {
            this.translate.setDefaultLang(id); // 设置默认语言
        }
    }
    moreContentClick() {
        /* 1-------------Angular改变css属性方法 */
        //this.Dom.nativeElement.style.opacity = this.Dom.nativeElement.style.opacity === '1'?'0':'1';
        // let target_div: HTMLElement = document.getElementById("");
        /* 2-------------原生js改变css属性方法 */
        /*
        // let target_div:any= document.getElementsByClassName("more-detail");
        // target_div[0].style.opacity= target_div[0].style.opacity==='1'?'0':'1';
        */
        /*
        var arr=document.getElementsByClassName('more-detail')[0] //byClassName也可以换成querySelector
        this.cssOpacity = !this.cssOpacity
        if(this.cssOpacity){
          // arr.setAttribute("style","opacity:1") //修改opacity属性方法1
          // arr.style.opacity = '1' //修改opacity属性方法2(style报错为ts代码规范,不影响效果)
        }else{
          // arr.setAttribute("style","opacity:0") //修改opacity属性方法1
          // arr.style.opacity = '0' //修改opacity属性方法2(style报错为ts代码规范,不影响效果)
        }
      */
    }
    detailItemClick(id) {
        /*以下代码是实现点击不同位置,波纹的初始位置不同,但效果不理想,注释掉*/
        // let x = e.clientX - e.target.offsetLeft;
        // let y = e.clientY - e.target.offsetTop;
        // console.log(e)
        //   let ripples = document.createElement('span')
        //   console.log(ripples)
        //   ripples.style.left = x + 'px';
        //   ripples.style.top = y + 'px';
        //   document.querySelector('#'+id).appendChild(ripples);
        // }
        /*--------------------------点击波纹效果-------------------------------------*/
        /*需要配合[id]和(click)还有style.css中的样式实现点击波纹效果*/
        // let ripples = document.createElement('span');
        // document.querySelector('#' + id).appendChild(ripples);
        // setTimeout(() => {
        //   ripples.remove();
        // }, 500);
    }
}
TopComponent.ɵfac = function TopComponent_Factory(t) { return new (t || TopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopComponent, selectors: [["app-top"]], viewQuery: function TopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Dom = _t.first);
    } }, decls: 14, vars: 10, consts: [[1, "bacground"], ["id", "top"], [1, "top"], ["src", "../../assets/img/icon/myLogoBTwhite.png", 1, "img1"], ["src", "../../assets/img/icon/\u66F4\u591A.png", 1, "img2", 3, "ngClass", "click"], [1, "more", 3, "ngClass"], [1, "more-content"], [1, "more-ul"], ["class", "more-div", 4, "ngFor", "ngForOf"], [1, "more-div"], ["matRipple", "", 1, "moreListItem", 3, "matRippleRadius", "matRippleColor", "click"], [3, "src"], [1, "more-detail-out"], [1, "more-detail"], ["abc", ""], [1, "arrows2"], ["class", "detailItemUl click-wave-fater", "matRipple", "", 3, "id", "matRippleRadius", "matRippleColor", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "detailItemUl", "click-wave-fater", 3, "id", "matRippleRadius", "matRippleColor", "click"], [1, "moreDetailItem", 3, "click"]], template: function TopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_Template_img_click_9_listener() { return ctx.img2Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TopComponent_ul_13_Template, 10, 7, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "BASE.WELCOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.isMoreShow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx.isMoreShow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moreList);
    } }, directives: [_bottom_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_2__["BottomComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".bacground[_ngcontent-%COMP%] {\r\n  background-image: url('snow.png');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n   \r\n  height: 100vh; \r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: -1;\r\n  \r\n  \r\n  \r\n  \r\n}\r\n#top[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 100%;\r\n  \r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n \r\n  z-index: 2;\r\n}\r\n.top[_ngcontent-%COMP%] {\r\n}\r\n.top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 50px;\r\n  float: left;\r\n  color: white;\r\n  margin-left: 5px;\r\n}\r\n.img1[_ngcontent-%COMP%] {\r\n  margin: 10px 15px;\r\n  float: left;\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.img2[_ngcontent-%COMP%] {\r\n  margin: 13px 22px;\r\n  float: right;\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: all 0.1s;\r\n}\r\n.img2[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer; \r\n}\r\n\r\n.more[_ngcontent-%COMP%] {\r\n  width: 105px;\r\n  z-index: 1;\r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  -webkit-backdrop-filter: blur(5px);\r\n          backdrop-filter: blur(5px);\r\n  box-shadow: 0px 4px 7px rgb(54, 52, 52);\r\n  position: absolute;\r\n  \r\n  right: 5px;\r\n  top: -120px;\r\n  border-radius: 0 0 10px 10px;\r\n  opacity: 0;\r\n}\r\n.moreShow[_ngcontent-%COMP%] {\r\n  opacity: 0.9;\r\n  transform: translateY(168px);\r\n}\r\n.rotate[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.more-content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  margin: 5px auto;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-ul[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-div[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .moreListItem[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 2px;\r\n  \r\n  color: white;\r\n}\r\n.more[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer; \r\n}\r\n.more[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 28px;\r\n  height: 28px;\r\n  margin-right: 8px;\r\n}\r\n\r\n\r\n.more-detail-out[_ngcontent-%COMP%] {\r\n  \r\n  width: 180px;\r\n  \r\n  display: none;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  \r\n  z-index: -999;\r\n  position: absolute;\r\n  top: 4px;\r\n  left: -80px;\r\n}\r\n.more-detail[_ngcontent-%COMP%] {\r\n  \r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  -webkit-backdrop-filter: blur(4px);\r\n          backdrop-filter: blur(4px);\r\n  box-shadow: 0px 4px 5px rgb(54, 52, 52);\r\n  border-radius: 10px;\r\n  \r\n  \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .detailItemUl[_ngcontent-%COMP%]:nth-child(2) {\r\n  border-top-left-radius: 10px; \r\n  border-top-right-radius: 10px; \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .detailItemUl[_ngcontent-%COMP%]:last-child {\r\n  border-bottom-left-radius: 10px; \r\n  border-bottom-right-radius: 10px; \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .arrows2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: -19px;\r\n  top: 8px;\r\n  \r\n  border-style: solid;\r\n  border-width: 10px; \r\n  border-color: transparent transparent transparent rgb(178, 102, 201,0.8);\r\n}\r\n.more-detail[_ngcontent-%COMP%]   .detailItemUl[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .moreDetailItem[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  \r\n  line-height: 35px;\r\n  margin: 0 15px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-div[_ngcontent-%COMP%]:hover   .more-detail-out[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  transform: translateX(-110px);\r\n  animation: anim 0.5s;\r\n}\r\n@keyframes anim {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.more-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  display: table;\r\n}\r\n.example-label[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n.example-button-row[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n.example-button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: chartreuse;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QztFQUNFLGlDQUF3RDtFQUN4RCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFFLHlDQUF5QztFQUNqRSxhQUFhLEVBQUUsZUFBZTtFQUM5QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQywyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsK0JBQStCO0VBQy9COzs7O0dBSUM7O0VBRUQsVUFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWUsRUFBRSxrQkFBa0I7QUFDckM7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWOzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7Ozs7Ozs7OztFQVNFO0FBQ0Y7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFOzs7O01BSUk7QUFDTjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdURBQXVEO0VBQ3ZELFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZSxFQUFFLGtCQUFrQjtBQUNyQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQSwrQ0FBK0M7QUFDL0MsK0JBQStCO0FBQy9CO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQjs7OztHQUlDO0VBQ0Qsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDRCQUE0QixFQUFFLG9EQUFvRDtFQUNsRiw2QkFBNkIsRUFBRSxvREFBb0Q7QUFDckY7QUFDQTtFQUNFLCtCQUErQixFQUFFLG9EQUFvRDtFQUNyRixnQ0FBZ0MsRUFBRSxvREFBb0Q7QUFDeEY7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osUUFBUTtFQUNSO2NBQ1k7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUUsT0FBTztFQUMzQix3RUFBd0U7QUFDMUU7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0g7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC90b3AvdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0t5qCH6aKY5qCPLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uYmFjZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JnaW1nL3Nub3cucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKiBvYmplY3QtZml0OiBmaWxsOyAqLyAvKiDov5nkuKrlsZ7mgKflkoxiYWNrZ3JvdW5kLXNpemU6Y292ZXIg6YO96IO96L6+5Yiw55u45ZCM55qE5pWI5p6cICovXHJcbiAgaGVpZ2h0OiAxMDB2aDsgLyoxMDB2aOS4uuaVtOS4quWxj+W5lei3neemuyovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7ICovXHJcbiAgLypiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyovXHJcbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7ICovXHJcbn1cclxuI3RvcCB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNjY2E4ZDg7ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgLTBkZWcsXHJcbiAgICByZ2IoMTU0LCAxMjQsIDE5OCksXHJcbiAgICByZ2IoMTc4LCAxMDIsIDIwMSlcclxuICApO1xyXG4gXHJcbiAgei1pbmRleDogMjtcclxufVxyXG4udG9wIHtcclxufVxyXG4udG9wIHAge1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5pbWcxIHtcclxuICBtYXJnaW46IDEwcHggMTVweDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuLmltZzIge1xyXG4gIG1hcmdpbjogMTNweCAyMnB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbn1cclxuLmltZzI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgLyrpvKDmoIfmgqzlgZzml7bvvIzpvKDmoIfmjIfpkojkuLrngrnlh7vmoLflvI8qL1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tMee6p+iPnOWNlS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLm1vcmUge1xyXG4gIHdpZHRoOiAxMDVweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0wZGVnLFxyXG4gICAgcmdiKDE1NCwgMTI0LCAxOTgpLFxyXG4gICAgcmdiKDE3OCwgMTAyLCAyMDEpXHJcbiAgKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDdweCByZ2IoNTQsIDUyLCA1Mik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDEwMjRweDsgKi9cclxuICByaWdodDogNXB4O1xyXG4gIHRvcDogLTEyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4ubW9yZVNob3cge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTY4cHgpO1xyXG59XHJcbi5yb3RhdGUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG4vKi5tb3JlIC5hcnJvd3MxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAtMjBweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7IFxyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2NjYThkOCB0cmFuc3BhcmVudDtcclxufSovXHJcbi5tb3JlLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuLm1vcmUtY29udGVudCAubW9yZS11bCB7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgLTBkZWcsXHJcbiAgICByZ2IoMTU0LCAxMjQsIDE5OCksXHJcbiAgICByZ2IoMTc4LCAxMDIsIDIwMSlcclxuICApOyAqL1xyXG59XHJcbi5tb3JlLWNvbnRlbnQgLm1vcmUtZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1vcmUtY29udGVudCAubW9yZUxpc3RJdGVtIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgLyogYm9yZGVyLWJvdHRvbTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDFweCBzb2xpZDsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1vcmUgbGk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgLyrpvKDmoIfmgqzlgZzml7bvvIzpvKDmoIfmjIfpkojkuLrngrnlh7vmoLflvI8qL1xyXG59XHJcbi5tb3JlIGxpIGltZyB7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tMue6p+iPnOWNlS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyrlnKhtb3JlLWRldGFpbOWkluWKoOS4gOWxguWunueOsDLnuqflvLnnqpflvLnlh7rot53nprvkuIDmoLcqL1xyXG4ubW9yZS1kZXRhaWwtb3V0IHtcclxuICAvKiBvcGFjaXR5OiAwOyAqL1xyXG4gIHdpZHRoOiAxODBweDtcclxuICAvKiBib3JkZXI6IHJlZCAxcHggc29saWQ7ICovXHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4zczsgKi9cclxuICB6LWluZGV4OiAtOTk5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICBsZWZ0OiAtODBweDtcclxufVxyXG4ubW9yZS1kZXRhaWwge1xyXG4gIC8qIG9wYWNpdHk6IDE7ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgLTBkZWcsXHJcbiAgICByZ2IoMTU0LCAxMjQsIDE5OCksXHJcbiAgICByZ2IoMTc4LCAxMDIsIDIwMSlcclxuICApO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IHJnYig1NCwgNTIsIDUyKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICDop6PlhrNtYXRlcmlhbOa2n+a8quaViOaenOe7hOS7tua6ouWHuiAqL1xyXG4gIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7Ki9cclxufVxyXG4ubW9yZS1kZXRhaWwgLmRldGFpbEl0ZW1VbDpudGgtY2hpbGQoMikge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7IC8qIOWPkeeOsOWcqGlvc+err292ZXJmbG93OmhpZGRlbuWxnuaAp+WkseaViCzku6XmraTop6PlhrNtYXRlcmlhbOa2n+a8quaViOaenOe7hOS7tua6ouWHuiAqL1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4OyAvKiDlj5HnjrDlnKhpb3Pnq69vdmVyZmxvdzpoaWRkZW7lsZ7mgKflpLHmlYgs5Lul5q2k6Kej5YazbWF0ZXJpYWzmtp/mvKrmlYjmnpznu4Tku7bmuqLlh7ogKi9cclxufVxyXG4ubW9yZS1kZXRhaWwgLmRldGFpbEl0ZW1VbDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4OyAvKiDlj5HnjrDlnKhpb3Pnq69vdmVyZmxvdzpoaWRkZW7lsZ7mgKflpLHmlYgs5Lul5q2k6Kej5YazbWF0ZXJpYWzmtp/mvKrmlYjmnpznu4Tku7bmuqLlh7ogKi9cclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDsgLyog5Y+R546w5ZyoaW9z56uvb3ZlcmZsb3c6aGlkZGVu5bGe5oCn5aSx5pWILOS7peatpOino+WGs21hdGVyaWFs5raf5ryq5pWI5p6c57uE5Lu25rqi5Ye6ICovXHJcbn1cclxuLm1vcmUtZGV0YWlsIC5hcnJvd3MyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0xOXB4O1xyXG4gIHRvcDogOHB4O1xyXG4gIC8qIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDsgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMTBweDsgLyrkuInop5LlpKflsI8qL1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiKDE3OCwgMTAyLCAyMDEsMC44KTtcclxufVxyXG4ubW9yZS1kZXRhaWwgLmRldGFpbEl0ZW1VbCB7XHJcbiAgLyogbWFyZ2luOiAzcHggMDsgKi9cclxufVxyXG4ubW9yZS1kZXRhaWwgLm1vcmVEZXRhaWxJdGVtIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgLyogYm9yZGVyOiBjaGFydHJldXNlIDJweCBzb2xpZDsgKi9cclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tb3JlLWNvbnRlbnQgLm1vcmUtZGl2OmhvdmVyIC5tb3JlLWRldGFpbC1vdXQge1xyXG4gIC8qIG9wYWNpdHk6IDE7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExMHB4KTtcclxuICBhbmltYXRpb246IGFuaW0gMC41cztcclxufVxyXG5Aa2V5ZnJhbWVzIGFuaW0ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuLyogQGtleWZyYW1lcyBjb2xvciB7IFxyXG5cdDAlIHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAtMGRlZyxcclxuICAgIHJnYigxNTQsIDEyNCwgMTk4KSxcclxuICAgIHJnYigxNzgsIDEwMiwgMjAxKVxyXG4gICk7fVxyXG5cdDEwMCV7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgLTBkZWcsXHJcbiAgICByZ2IoMTAsIDMsIDIwKSxcclxuICAgIHJnYigxNzgsIDEwMiwgMjAxKVxyXG4gICk7fTtcclxufVxyXG4ubW9yZURldGFpbEl0ZW06aG92ZXJ7XHJcbiAgYW5pbWF0aW9uOiBjb2xvciAwLjRzO1xyXG5cclxufSAqL1xyXG4ubW9yZS1jb250ZW50IHVsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLmV4YW1wbGUtbGFiZWwge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxufVxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA0OTBweDtcclxufVxyXG4uZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxufVxyXG4uZXhhbXBsZS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top',
                templateUrl: './top.component.html',
                styleUrls: ['./top.component.css'],
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, { Dom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['abc']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about/about.component */ "JaJ+");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "aUdj");
/* harmony import */ var _me_me_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./me/me/me.component */ "2lYq");
/* harmony import */ var _resume_resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume/resume.component */ "z7Cr");
/* harmony import */ var _project_project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/project/project.component */ "5asC");
/* harmony import */ var _lab_lab_lab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lab/lab/lab.component */ "T0xb");
/* harmony import */ var _share_share_share_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./share/share/share.component */ "4y5H");











const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        data: { title: '首页' } //还未实现，猜想跳转携带数据命名页面标题？
    },
    {
        path: 'me',
        component: _me_me_me_component__WEBPACK_IMPORTED_MODULE_4__["MeComponent"],
        data: { title: '我' }
    },
    {
        path: 'resume',
        component: _resume_resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
        data: { title: '简历' }
    },
    {
        path: 'project',
        component: _project_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"],
        data: { title: '项目' }
    },
    {
        path: 'lab',
        component: _lab_lab_lab_component__WEBPACK_IMPORTED_MODULE_7__["LabComponent"],
        data: { title: '实验室' }
    },
    {
        path: 'share',
        component: _share_share_share_component__WEBPACK_IMPORTED_MODULE_8__["ShareComponent"],
        data: { title: '分享' }
    },
    {
        path: 'about',
        component: _about_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        data: { title: '关于' }
    },
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

/***/ "z7Cr":
/*!***************************************************!*\
  !*** ./src/app/resume/resume/resume.component.ts ***!
  \***************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 2, vars: 0, template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "resume works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map