(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal\myBlogDev\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
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
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
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
        this.currentLang = 'zh-Hans';
        const arrLang = ['en-US', 'zh-Hans', 'zh-Hant'];
        translate.addLangs(arrLang); // 设置语言
        translate.setDefaultLang('zh-Hans'); // 设置默认语言
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_top_top_component__WEBPACK_IMPORTED_MODULE_2__["TopComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index/index.component */ "aUdj");
















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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _top_top_component__WEBPACK_IMPORTED_MODULE_5__["TopComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"]], imports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _top_top_component__WEBPACK_IMPORTED_MODULE_5__["TopComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"]],
                imports: [
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




function IndexComponent_div_28_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IndexComponent_div_28_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.detail);
} }
function IndexComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_div_28_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.linkClick(item_r1.title, item_r1.id, item_r1.detailTitle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndexComponent_div_28_ng_container_6_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IndexComponent_div_28_ng_container_7_Template, 4, 2, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.iconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r1.detailTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isDetailPic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.isDetailPic);
} }
class IndexComponent {
    constructor() {
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
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 29, vars: 13, consts: [[1, "bacground"], [1, "out"], [1, "glass"], [1, "dash-board"], [1, "up"], [1, "me"], [1, "per-pic"], [1, "per-galss"], [1, "zh-name", "per-detail"], ["src", "../../assets/img/icon/\u59D3\u540D.png"], [1, "per-detail"], ["src", "../../assets/img/icon/\u6635\u79F0.png"], ["src", "../../assets/img/icon/\u5BB6.png"], ["src", "../../assets/img/icon/\u5730\u70B9.png"], ["src", "../../assets/img/icon/\u804C\u4E1A.png"], [1, "links"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], [1, "link", 3, "id", "click"], [3, "src"], [1, "outside", 3, "id"], [1, "arrow"], [1, "link-detail-out"], [4, "ngIf"], [1, "link-detail-text"], [3, "href"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "MambaLiu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, IndexComponent_div_28_Template, 8, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, "BASE.NAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 7, "BASE.FROM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 9, "BASE.ADRESS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 11, "BASE.JOB"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.connectList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n.bacground[_ngcontent-%COMP%] {\r\n  background-image: url('4.png');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n   \r\n  height: calc(100vh - 50px); \r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: -1;\r\n  \r\n  \r\n  \r\n  \r\n}\r\n.out[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  \r\n  position: absolute;\r\n  top: 80px;\r\n}\r\n.glass[_ngcontent-%COMP%] {\r\n  width: 82%;\r\n  height: 85vh;\r\n  border-radius: 25px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.6),\r\n    rgba(255, 255, 255, 0.2)\r\n  );\r\n  -webkit-backdrop-filter: blur(3px);\r\n          backdrop-filter: blur(3px);\r\n  box-shadow: 2vh 2vh 2.7vh rgba(0, 0, 0, 0.3);\r\n}\r\n.dash-board[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: inherit;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.4)\r\n  );\r\n}\r\n.up[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.me[_ngcontent-%COMP%] {\r\n  width: 35vh;\r\n  height: 18vh;\r\n  \r\n  border-radius: 2.5vh;\r\n  margin-top: 2vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0.8vh 0.8vh 1.3vh #939597, -0.8vh -0.8vh 1.3vh #ffffffd5;\r\n}\r\n.per-galss[_ngcontent-%COMP%] {\r\n  width: 16vh;\r\n  height: 16vh;\r\n  \r\n  margin-left: 1.2vh;\r\n  color: rgb(178, 102, 201);\r\n  line-height: 1.1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  \r\n  \r\n  \r\n}\r\n.per-galss[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  line-height: inherit;\r\n  width: 1.9vh;\r\n  height: 1.9vh;\r\n  margin-right: 1vh;\r\n  margin-left: 0.5vh;\r\n}\r\n.zh-name[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n.per-detail[_ngcontent-%COMP%] {\r\n  height: 2.7vh;\r\n  width: 15vh;\r\n  border-radius: 1vh;\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  box-shadow: 0.2vh 0.2vh 0.2vh inset #939597,\r\n    -0.2vh -0.2vh 0.2vh inset #ffffffd5;\r\n}\r\n.per-pic[_ngcontent-%COMP%] {\r\n  width: 15vh;\r\n  height: 15vh;\r\n  border-radius: 2.5vh;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-image: url('perPic.png');\r\n  position: relative;\r\n  \r\n  \r\n}\r\n.links[_ngcontent-%COMP%] {\r\n  margin-top: 1.8vh;\r\n  margin-bottom: 1.5vh;\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative; \r\n}\r\n.link[_ngcontent-%COMP%] {\r\n  \r\n  height: 4vh;\r\n  width: 4vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 1.5vh;\r\n  border-radius: 1.2vh;\r\n  box-shadow: 0.6vh 0.6vh 1.2vh #939597, -0.6vh -0.6vh 1.2vh #ffffffd5;\r\n}\r\n.link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 2.7vh;\r\n  height: 2.7vh;\r\n}\r\n.outside[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.link-detail-out[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  -webkit-backdrop-filter: blur(3px);\r\n          backdrop-filter: blur(3px);\r\n  position: absolute;\r\n  top: 5.5vh;\r\n  left: -7vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  border-radius: 3vh;\r\n}\r\n.link-detail-pic[_ngcontent-%COMP%] {\r\n  \r\n  width: 19vh;\r\n  height: 19vh;\r\n  border: blue solid 2px;\r\n  background: gainsboro;\r\n  border-radius: 3vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.link-detail-text[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0.5vh 1.3vh;\r\n  text-align: center;\r\n}\r\n.link-detail-out[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 17vh;\r\n  height: 17vh;\r\n  border-radius: 3vh;\r\n  margin: 2vh 2vh;\r\n}\r\n.arrow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 2.5vh;\r\n  top: 3.5vh;\r\n  border-style: solid;\r\n  border-width: 1vh; \r\n  border-color: transparent transparent rgba(255, 255, 255, 0.4) transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLDhCQUFxRDtFQUNyRCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFFLHlDQUF5QztFQUNqRSwwQkFBMEIsRUFBRSxlQUFlO0VBQzNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25COzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qjs7OztHQUlDO0FBQ0g7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9FQUFvRTtBQUN0RTtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCOzs7O01BSUk7RUFDSix5REFBeUQ7RUFDekQsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CO3VDQUNxQztBQUN2QztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixtQ0FBMEQ7RUFDMUQsa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3Qyx3REFBd0Q7QUFDMUQ7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCLEVBQUUsV0FBVztBQUNqQztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsb0VBQW9FO0FBQ3RFO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFOzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBRSxPQUFPO0VBQzFCLDBFQUEwRTtBQUM1RTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYmFjZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JnaW1nLzQucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKiBvYmplY3QtZml0OiBmaWxsOyAqLyAvKiDov5nkuKrlsZ7mgKflkoxiYWNrZ3JvdW5kLXNpemU6Y292ZXIg6YO96IO96L6+5Yiw55u45ZCM55qE5pWI5p6cICovXHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7IC8qMTAwdmjkuLrmlbTkuKrlsY/luZXot53nprsqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxuICAvKiBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4IDEwMHB4OyAqL1xyXG4gIC8qYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsqL1xyXG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7ICovXHJcbiAgLyogYmFja2dyb3VuZC1zaXplOmNvdmVyOyAqL1xyXG59XHJcbi5vdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qIGJvcmRlcjogMnB4IHJlZCBzb2xpZDsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4MHB4O1xyXG59XHJcbi5nbGFzcyB7XHJcbiAgd2lkdGg6IDgyJTtcclxuICBoZWlnaHQ6IDg1dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpXHJcbiAgKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICBib3gtc2hhZG93OiAydmggMnZoIDIuN3ZoIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4uZGFzaC1ib2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClcclxuICApO1xyXG59XHJcbi51cCB7XHJcbiAgLyogYm9yZGVyOiBibGFjayAxcHggc29saWQ7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1lIHtcclxuICB3aWR0aDogMzV2aDtcclxuICBoZWlnaHQ6IDE4dmg7XHJcbiAgLyogYm9yZGVyOiBjaG9jb2xhdGUgMXB4IHNvbGlkOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuNXZoO1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwLjh2aCAwLjh2aCAxLjN2aCAjOTM5NTk3LCAtMC44dmggLTAuOHZoIDEuM3ZoICNmZmZmZmZkNTtcclxufVxyXG4ucGVyLWdhbHNzIHtcclxuICB3aWR0aDogMTZ2aDtcclxuICBoZWlnaHQ6IDE2dmg7XHJcbiAgLyogYm9yZGVyOiBncmVlbiBzb2xpZCAxcHg7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDEuMnZoO1xyXG4gIGNvbG9yOiByZ2IoMTc4LCAxMDIsIDIwMSk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYigxNTQsIDEyNCwgMTk4LDAuOCksXHJcbiAgICByZ2IoMTc4LCAxMDIsIDIwMSwwLjgpXHJcbiAgKTsgKi9cclxuICAvKiBib3gtc2hhZG93OjAuNHZoIDAuOHZoIDAuNXZoIHJnYmEoNjQsIDE5LCAxMDAsIDAuOCk7ICovXHJcbiAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7ICovXHJcbn1cclxuLnBlci1nYWxzcyBpbWcge1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOiAxLjl2aDtcclxuICBoZWlnaHQ6IDEuOXZoO1xyXG4gIG1hcmdpbi1yaWdodDogMXZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjV2aDtcclxufVxyXG4uemgtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5wZXItZGV0YWlsIHtcclxuICBoZWlnaHQ6IDIuN3ZoO1xyXG4gIHdpZHRoOiAxNXZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcclxuICAvKiBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMC4ydmggMC4ydmggMC4ydmggaW5zZXQgIzkzOTU5NyxcclxuICAgIC0wLjJ2aCAtMC4ydmggMC4ydmggaW5zZXQgI2ZmZmZmZmQ1O1xyXG59XHJcbi5wZXItcGljIHtcclxuICB3aWR0aDogMTV2aDtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMi41dmg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iZ2ltZy9wZXJQaWMucG5nXCIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBib3gtc2hhZG93OiAwcHggOHB4IDdweCByZ2IoNTQsIDUyLCA1Mik7ICovXHJcbiAgLyogYm94LXNoYWRvdzowLjR2aCAwLjh2aCAwLjV2aCByZ2JhKDc4LCA3OCwgNzgsIDAuOCk7ICovXHJcbn1cclxuLmxpbmtzIHtcclxuICBtYXJnaW4tdG9wOiAxLjh2aDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcclxuICAvKiBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIOeUqOS6juW8ueeql+WumuS9jSAqL1xyXG59XHJcbi5saW5rIHtcclxuICAvKiBib3JkZXI6IGJsdWUgMXB4IHNvbGlkOyAqL1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIHdpZHRoOiA0dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDEuNXZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuMnZoO1xyXG4gIGJveC1zaGFkb3c6IDAuNnZoIDAuNnZoIDEuMnZoICM5Mzk1OTcsIC0wLjZ2aCAtMC42dmggMS4ydmggI2ZmZmZmZmQ1O1xyXG59XHJcbi5saW5rIGltZyB7XHJcbiAgd2lkdGg6IDIuN3ZoO1xyXG4gIGhlaWdodDogMi43dmg7XHJcbn1cclxuLm91dHNpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxpbmstZGV0YWlsLW91dCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXHJcbiAgKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1LjV2aDtcclxuICBsZWZ0OiAtN3ZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3ZoO1xyXG59XHJcbi5saW5rLWRldGFpbC1waWMge1xyXG4gIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cclxuICB3aWR0aDogMTl2aDtcclxuICBoZWlnaHQ6IDE5dmg7XHJcbiAgYm9yZGVyOiBibHVlIHNvbGlkIDJweDtcclxuICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XHJcbiAgYm9yZGVyLXJhZGl1czogM3ZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5saW5rLWRldGFpbC10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAuNXZoIDEuM3ZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGluay1kZXRhaWwtb3V0IGltZyB7XHJcbiAgd2lkdGg6IDE3dmg7XHJcbiAgaGVpZ2h0OiAxN3ZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDN2aDtcclxuICBtYXJnaW46IDJ2aCAydmg7XHJcbn1cclxuLmFycm93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIuNXZoO1xyXG4gIHRvcDogMy41dmg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDF2aDsgLyrkuInop5LlpKflsI8qL1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiAuZHJvcC1kb3duLW91dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBib3JkZXI6IHllbGxvd2dyZWVuIDJweCBzb2xpZDtcclxufVxyXG4uZHJvcC1kb3duIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ljb24veF/kuIvmi4kucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlcjogcmVkIDFweCBzb2xpZDtcclxuICBhbmltYXRpb246IGRyb3AtZG93biAxLjZzIGluZmluaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGRyb3AtZG93biB7XHJcbiAgMCUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICA2NSUge1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn0gKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.css'],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





const _c0 = ["abc"];
function TopComponent_ul_11_ul_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_ul_11_ul_9_Template_ul_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const detailItem_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.detailItemClick(detailItem_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_ul_11_ul_9_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const detailItem_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.Menu2ndClick(detailItem_r4.deIndex, detailItem_r4.id); });
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
function TopComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_ul_11_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.moreContentClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TopComponent_ul_11_ul_9_Template, 4, 6, "ul", 15);
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
    } }, decls: 12, vars: 10, consts: [["id", "top"], [1, "top"], ["src", "../../assets/img/icon/myLogoBTwhite.png", 1, "img1"], ["src", "../../assets/img/icon/\u66F4\u591A.png", 1, "img2", 3, "ngClass", "click"], [1, "more", 3, "ngClass"], [1, "more-content"], [1, "more-ul"], ["class", "more-div", 4, "ngFor", "ngForOf"], [1, "more-div"], ["matRipple", "", 1, "moreListItem", 3, "matRippleRadius", "matRippleColor", "click"], [3, "src"], [1, "more-detail-out"], [1, "more-detail"], ["abc", ""], [1, "arrows2"], ["class", "detailItemUl click-wave-fater", "matRipple", "", 3, "id", "matRippleRadius", "matRippleColor", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "detailItemUl", "click-wave-fater", 3, "id", "matRippleRadius", "matRippleColor", "click"], [1, "moreDetailItem", 3, "click"]], template: function TopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_Template_img_click_7_listener() { return ctx.img2Click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TopComponent_ul_11_Template, 10, 7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "BASE.WELCOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.isMoreShow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx.isMoreShow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moreList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["#top[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 100%;\r\n  \r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n.top[_ngcontent-%COMP%] {\r\n}\r\n.top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 50px;\r\n  float: left;\r\n  color: white;\r\n  margin-left: 5px;\r\n}\r\n.img1[_ngcontent-%COMP%] {\r\n  margin: 10px 15px;\r\n  float: left;\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.img2[_ngcontent-%COMP%] {\r\n  margin: 13px 22px;\r\n  float: right;\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: all 0.1s;\r\n}\r\n.img2[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer; \r\n}\r\n\r\n.more[_ngcontent-%COMP%] {\r\n  width: 105px;\r\n  z-index: 1;\r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  -webkit-backdrop-filter: blur(5px);\r\n          backdrop-filter: blur(5px);\r\n  box-shadow: 0px 4px 7px rgb(54, 52, 52);\r\n  position: absolute;\r\n  \r\n  right: 5px;\r\n  top: -120px;\r\n  border-radius: 0 0 10px 10px;\r\n  opacity: 0;\r\n}\r\n.moreShow[_ngcontent-%COMP%] {\r\n  opacity: 0.9;\r\n  transform: translateY(168px);\r\n}\r\n.rotate[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.more-content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  margin: 5px auto;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-ul[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-div[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .moreListItem[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 2px;\r\n  \r\n  color: white;\r\n}\r\n.more[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer; \r\n}\r\n.more[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 28px;\r\n  height: 28px;\r\n  margin-right: 8px;\r\n}\r\n\r\n\r\n.more-detail-out[_ngcontent-%COMP%] {\r\n  \r\n  width: 180px;\r\n  \r\n  display: none;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  \r\n  z-index: -999;\r\n  position: absolute;\r\n  top: 4px;\r\n  left: -80px;\r\n}\r\n.more-detail[_ngcontent-%COMP%] {\r\n  \r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  -webkit-backdrop-filter: blur(4px);\r\n          backdrop-filter: blur(4px);\r\n  box-shadow: 0px 4px 5px rgb(54, 52, 52);\r\n  border-radius: 10px;\r\n  \r\n  \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .detailItemUl[_ngcontent-%COMP%]:nth-child(2) {\r\n  border-top-left-radius: 10px; \r\n  border-top-right-radius: 10px; \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .detailItemUl[_ngcontent-%COMP%]:last-child {\r\n  border-bottom-left-radius: 10px; \r\n  border-bottom-right-radius: 10px; \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .arrows2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: -19px;\r\n  top: 8px;\r\n  \r\n  border-style: solid;\r\n  border-width: 10px; \r\n  border-color: transparent transparent transparent rgb(178, 102, 201);\r\n}\r\n.more-detail[_ngcontent-%COMP%]   .detailItemUl[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .moreDetailItem[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  \r\n  line-height: 35px;\r\n  margin: 0 15px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-div[_ngcontent-%COMP%]:hover   .more-detail-out[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  transform: translateX(-110px);\r\n  animation: anim 0.5s;\r\n}\r\n@keyframes anim {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.more-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  display: table;\r\n}\r\n.example-label[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n.example-button-row[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n.example-button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: chartreuse;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QztFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsK0JBQStCO0VBQy9COzs7O0dBSUM7RUFDRCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWUsRUFBRSxrQkFBa0I7QUFDckM7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWOzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7Ozs7Ozs7OztFQVNFO0FBQ0Y7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFOzs7O01BSUk7QUFDTjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdURBQXVEO0VBQ3ZELFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZSxFQUFFLGtCQUFrQjtBQUNyQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQSwrQ0FBK0M7QUFDL0MsK0JBQStCO0FBQy9CO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQjs7OztHQUlDO0VBQ0Qsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDRCQUE0QixFQUFFLG9EQUFvRDtFQUNsRiw2QkFBNkIsRUFBRSxvREFBb0Q7QUFDckY7QUFDQTtFQUNFLCtCQUErQixFQUFFLG9EQUFvRDtFQUNyRixnQ0FBZ0MsRUFBRSxvREFBb0Q7QUFDeEY7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osUUFBUTtFQUNSO2NBQ1k7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUUsT0FBTztFQUMzQixvRUFBb0U7QUFDdEU7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0g7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC90b3AvdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0t5qCH6aKY5qCPLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jdG9wIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjYThkODsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAtMGRlZyxcclxuICAgIHJnYigxNTQsIDEyNCwgMTk4KSxcclxuICAgIHJnYigxNzgsIDEwMiwgMjAxKVxyXG4gICk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLnRvcCB7XHJcbn1cclxuLnRvcCBwIHtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uaW1nMSB7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5pbWcyIHtcclxuICBtYXJnaW46IDEzcHggMjJweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG59XHJcbi5pbWcyOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7IC8q6byg5qCH5oKs5YGc5pe277yM6byg5qCH5oyH6ZKI5Li654K55Ye75qC35byPKi9cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLTHnuqfoj5zljZUtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5tb3JlIHtcclxuICB3aWR0aDogMTA1cHg7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAtMGRlZyxcclxuICAgIHJnYigxNTQsIDEyNCwgMTk4KSxcclxuICAgIHJnYigxNzgsIDEwMiwgMjAxKVxyXG4gICk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA3cHggcmdiKDU0LCA1MiwgNTIpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKiBtaW4taGVpZ2h0OiAxMDI0cHg7ICovXHJcbiAgcmlnaHQ6IDVweDtcclxuICB0b3A6IC0xMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLm1vcmVTaG93IHtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2OHB4KTtcclxufVxyXG4ucm90YXRlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuLyoubW9yZSAuYXJyb3dzMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4OyBcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNjY2E4ZDggdHJhbnNwYXJlbnQ7XHJcbn0qL1xyXG4ubW9yZS1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcbi5tb3JlLWNvbnRlbnQgLm1vcmUtdWwge1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0wZGVnLFxyXG4gICAgcmdiKDE1NCwgMTI0LCAxOTgpLFxyXG4gICAgcmdiKDE3OCwgMTAyLCAyMDEpXHJcbiAgKTsgKi9cclxufVxyXG4ubW9yZS1jb250ZW50IC5tb3JlLWRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tb3JlLWNvbnRlbnQgLm1vcmVMaXN0SXRlbSB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIC8qIGJvcmRlci1ib3R0b206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAxcHggc29saWQ7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tb3JlIGxpOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7IC8q6byg5qCH5oKs5YGc5pe277yM6byg5qCH5oyH6ZKI5Li654K55Ye75qC35byPKi9cclxufVxyXG4ubW9yZSBsaSBpbWcge1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLTLnuqfoj5zljZUtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8q5ZyobW9yZS1kZXRhaWzlpJbliqDkuIDlsYLlrp7njrAy57qn5by556qX5by55Ye66Led56a75LiA5qC3Ki9cclxuLm1vcmUtZGV0YWlsLW91dCB7XHJcbiAgLyogb3BhY2l0eTogMDsgKi9cclxuICB3aWR0aDogMTgwcHg7XHJcbiAgLyogYm9yZGVyOiByZWQgMXB4IHNvbGlkOyAqL1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3M7ICovXHJcbiAgei1pbmRleDogLTk5OTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgbGVmdDogLTgwcHg7XHJcbn1cclxuLm1vcmUtZGV0YWlsIHtcclxuICAvKiBvcGFjaXR5OiAxOyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0wZGVnLFxyXG4gICAgcmdiKDE1NCwgMTI0LCAxOTgpLFxyXG4gICAgcmdiKDE3OCwgMTAyLCAyMDEpXHJcbiAgKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDVweCByZ2IoNTQsIDUyLCA1Mik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAg6Kej5YazbWF0ZXJpYWzmtp/mvKrmlYjmnpznu4Tku7bmuqLlh7ogKi9cclxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyovXHJcbn1cclxuLm1vcmUtZGV0YWlsIC5kZXRhaWxJdGVtVWw6bnRoLWNoaWxkKDIpIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4OyAvKiDlj5HnjrDlnKhpb3Pnq69vdmVyZmxvdzpoaWRkZW7lsZ7mgKflpLHmlYgs5Lul5q2k6Kej5YazbWF0ZXJpYWzmtp/mvKrmlYjmnpznu4Tku7bmuqLlh7ogKi9cclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDsgLyog5Y+R546w5ZyoaW9z56uvb3ZlcmZsb3c6aGlkZGVu5bGe5oCn5aSx5pWILOS7peatpOino+WGs21hdGVyaWFs5raf5ryq5pWI5p6c57uE5Lu25rqi5Ye6ICovXHJcbn1cclxuLm1vcmUtZGV0YWlsIC5kZXRhaWxJdGVtVWw6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDsgLyog5Y+R546w5ZyoaW9z56uvb3ZlcmZsb3c6aGlkZGVu5bGe5oCn5aSx5pWILOS7peatpOino+WGs21hdGVyaWFs5raf5ryq5pWI5p6c57uE5Lu25rqi5Ye6ICovXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7IC8qIOWPkeeOsOWcqGlvc+err292ZXJmbG93OmhpZGRlbuWxnuaAp+WkseaViCzku6XmraTop6PlhrNtYXRlcmlhbOa2n+a8quaViOaenOe7hOS7tua6ouWHuiAqL1xyXG59XHJcbi5tb3JlLWRldGFpbCAuYXJyb3dzMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTlweDtcclxuICB0b3A6IDhweDtcclxuICAvKiB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7ICovXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7IC8q5LiJ6KeS5aSn5bCPKi9cclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYigxNzgsIDEwMiwgMjAxKTtcclxufVxyXG4ubW9yZS1kZXRhaWwgLmRldGFpbEl0ZW1VbCB7XHJcbiAgLyogbWFyZ2luOiAzcHggMDsgKi9cclxufVxyXG4ubW9yZS1kZXRhaWwgLm1vcmVEZXRhaWxJdGVtIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgLyogYm9yZGVyOiBjaGFydHJldXNlIDJweCBzb2xpZDsgKi9cclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tb3JlLWNvbnRlbnQgLm1vcmUtZGl2OmhvdmVyIC5tb3JlLWRldGFpbC1vdXQge1xyXG4gIC8qIG9wYWNpdHk6IDE7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExMHB4KTtcclxuICBhbmltYXRpb246IGFuaW0gMC41cztcclxufVxyXG5Aa2V5ZnJhbWVzIGFuaW0ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuLyogQGtleWZyYW1lcyBjb2xvciB7IFxyXG5cdDAlIHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAtMGRlZyxcclxuICAgIHJnYigxNTQsIDEyNCwgMTk4KSxcclxuICAgIHJnYigxNzgsIDEwMiwgMjAxKVxyXG4gICk7fVxyXG5cdDEwMCV7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgLTBkZWcsXHJcbiAgICByZ2IoMTAsIDMsIDIwKSxcclxuICAgIHJnYigxNzgsIDEwMiwgMjAxKVxyXG4gICk7fTtcclxufVxyXG4ubW9yZURldGFpbEl0ZW06aG92ZXJ7XHJcbiAgYW5pbWF0aW9uOiBjb2xvciAwLjRzO1xyXG5cclxufSAqL1xyXG4ubW9yZS1jb250ZW50IHVsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLmV4YW1wbGUtbGFiZWwge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxufVxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA0OTBweDtcclxufVxyXG4uZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxufVxyXG4uZXhhbXBsZS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "aUdj");






const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        data: { title: '111' }
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        data: { title: '222' }
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