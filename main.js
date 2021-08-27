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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IndexComponent_div_28_ng_container_7_Template(rf, ctx) { if (rf & 1) {
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
function IndexComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_div_28_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.linkClick(item_r2.title, item_r2.id, item_r2.detailTitle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndexComponent_div_28_ng_container_6_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IndexComponent_div_28_ng_container_7_Template, 4, 2, "ng-container", 25);
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
const _c0 = function (a0) { return { "scale": a0 }; };
function IndexComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_ng_container_30_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.navClick(item_r9.index); });
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
        this.navList = [
            {
                index: 0,
                title: 'BASE.PER_PAGE',
                iconSrc: '../../assets/img/icon/主页.png',
                text: 'TEXT.PER_PAGE_TEXT',
                isClick: false,
            },
            {
                index: 1,
                title: 'BASE.RESUME',
                iconSrc: '../../assets/img/icon/简历.png',
                text: 'TEXT.RESUME_TEXT',
                isClick: false,
            },
            {
                index: 2,
                title: 'BASE.PROJECT',
                iconSrc: '../../assets/img/icon/项目.png',
                text: 'TEXT.PROJECT_TEXT',
                isClick: false,
            },
            {
                index: 3,
                title: 'BASE.LAB',
                iconSrc: '../../assets/img/icon/实验室.png',
                text: 'TEXT.LAB_TEXT',
                isClick: false,
            },
            {
                index: 4,
                title: 'BASE.SHARE',
                iconSrc: '../../assets/img/icon/分享.png',
                text: 'TEXT.SHARE_TEXT',
                isClick: false,
            },
            {
                index: 5,
                title: 'BASE.ABOUT',
                iconSrc: '../../assets/img/icon/about4.png',
                text: 'TEXT.ABOUT_TEXT',
                isClick: false,
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
    navClick(index) {
        this.navList[index].isClick = true;
        setTimeout(() => {
            this.navList[index].isClick = false;
        }, 600);
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 31, vars: 14, consts: [[1, "bacground"], [1, "out"], [1, "glass"], [1, "dash-board"], [1, "up"], [1, "me"], [1, "per-pic"], [1, "per-galss"], [1, "zh-name", "per-detail"], ["src", "../../assets/img/icon/\u59D3\u540D.png"], [1, "per-detail"], ["src", "../../assets/img/icon/\u6635\u79F0.png"], ["src", "../../assets/img/icon/\u5BB6.png"], ["src", "../../assets/img/icon/\u5730\u70B9.png"], ["src", "../../assets/img/icon/\u804C\u4E1A.png"], [1, "links"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "nav"], [4, "ngFor", "ngForOf"], [1, "container"], [1, "link", 3, "id", "click"], [3, "src"], [1, "outside", 3, "id"], [1, "arrow"], [1, "link-detail-out"], [4, "ngIf"], [1, "link-detail-text"], ["target", "_blank", 3, "href"], [1, "nav-items", 3, "ngClass", "click"], [1, "nav-items-right"], [1, "nav-title"], [1, "nav-text"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, IndexComponent_ng_container_30_Template, 10, 10, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "BASE.NAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 8, "BASE.FROM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 10, "BASE.ADRESS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 12, "BASE.JOB"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.connectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color:rgb(178, 102, 201) ;\r\n}\r\n.bacground[_ngcontent-%COMP%] {\r\n  background-image: url('snow.png');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n   \r\n  height: calc(100vh - 50px); \r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: -1;\r\n  \r\n  \r\n  \r\n  \r\n}\r\n.out[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  \r\n  position: absolute;\r\n  top: 65px;\r\n}\r\n.glass[_ngcontent-%COMP%] {\r\n  width: 82%;\r\n  height: 89vh;\r\n  border-radius: 25px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.6),\r\n    rgba(255, 255, 255, 0.2)\r\n  );\r\n  -webkit-backdrop-filter: blur(3px);\r\n          backdrop-filter: blur(3px);\r\n  box-shadow: 2vh 2vh 2.7vh rgba(0, 0, 0, 0.3);\r\n}\r\n.dash-board[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: inherit;\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.4)\r\n  );\r\n  box-shadow: 0vh 1vh 1.5vh rgba(0, 0, 0, 0.3);\r\n}\r\n.up[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.me[_ngcontent-%COMP%] {\r\n  width: 35vh;\r\n  height: 18vh;\r\n  \r\n  border-radius: 2.5vh;\r\n  margin-top: 2vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0.8vh 0.8vh 1.3vh #939597, -0.8vh -0.8vh 1.3vh #ffffffd5;\r\n}\r\n.per-galss[_ngcontent-%COMP%] {\r\n  width: 16vh;\r\n  height: 16vh;\r\n  \r\n  margin-left: 1.2vh;\r\n  line-height: 1.1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  \r\n  \r\n  \r\n}\r\n.per-galss[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  line-height: inherit;\r\n  width: 1.9vh;\r\n  height: 1.9vh;\r\n  margin-right: 1vh;\r\n  margin-left: 0.5vh;\r\n}\r\n.zh-name[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n.per-detail[_ngcontent-%COMP%] {\r\n  height: 2.7vh;\r\n  width: 15vh;\r\n  border-radius: 1vh;\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  box-shadow: 0.2vh 0.2vh 0.2vh inset #939597,\r\n    -0.2vh -0.2vh 0.2vh inset #ffffffd5;\r\n}\r\n.per-pic[_ngcontent-%COMP%] {\r\n  width: 15vh;\r\n  height: 15vh;\r\n  border-radius: 2.5vh;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-image: url('perPic.png');\r\n  position: relative;\r\n  \r\n  \r\n}\r\n.links[_ngcontent-%COMP%] {\r\n  margin-top: 1.8vh;\r\n  margin-bottom: 1.5vh;\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative; \r\n}\r\n.link[_ngcontent-%COMP%] {\r\n  \r\n  height: 4vh;\r\n  width: 4vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 1.5vh;\r\n  border-radius: 1.2vh;\r\n  box-shadow: 0.6vh 0.6vh 1.2vh #939597, -0.6vh -0.6vh 1.2vh #ffffffec;\r\n}\r\n.link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 2.7vh;\r\n  height: 2.7vh;\r\n}\r\n.outside[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.link-detail-out[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to right bottom,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.3)\r\n  );\r\n  -webkit-backdrop-filter: blur(5px);\r\n          backdrop-filter: blur(5px);\r\n  box-shadow: 2vh 2vh 2vh rgba(0, 0, 0, 0.3);\r\n  position: absolute;\r\n  top: 5vh;\r\n  left: -7vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  border-radius: 3vh;\r\n}\r\n.link-detail-pic[_ngcontent-%COMP%] {\r\n  \r\n  width: 19vh;\r\n  height: 19vh;\r\n  \r\n  background: gainsboro;\r\n  border-radius: 3vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.link-detail-text[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0.5vh 1.3vh;\r\n  text-align: center;\r\n}\r\n.link-detail-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: underline; \r\n}\r\n.link-detail-out[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 17vh;\r\n  height: 17vh;\r\n  border-radius: 3vh;\r\n  margin: 2vh 2vh;\r\n}\r\n.arrow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 2vh;\r\n  top: 2.5vh;\r\n  border-style: solid;\r\n  border-width: 1.5vh; \r\n  border-color: transparent transparent rgba(255, 255, 255, 0.7) transparent;\r\n}\r\n\r\n\r\n.nav[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: -1;\r\n  margin-top: 1.5vh;\r\n  width: 35vh;\r\n  height: 57.5vh;\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content:space-between;\r\n  align-items: center;\r\n  \r\n}\r\n.nav-items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  margin-left: 1.3vh;\r\n  width: 5.2vh;\r\n  height: 5.2vh;\r\n}\r\n.nav-items[_ngcontent-%COMP%] {\r\n  width: 32vh;\r\n  height: 8.2vh;\r\n  \r\n  background: linear-gradient(\r\n    to right,\r\n    rgba(255, 255, 255, 0.7),\r\n    rgba(255, 255, 255, 0.4)\r\n  );\r\n  -webkit-backdrop-filter: blur(3px);\r\n          backdrop-filter: blur(3px);\r\n  box-shadow: 0.6vh 0.6vh 1.3vh #606161;\r\n  border-radius: 1.2vh;\r\n  transition: all 0.2s;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content:flex-start;\r\n  align-items: center;\r\n}\r\n.nav-items[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.11,1.11);\r\n}\r\n.scale[_ngcontent-%COMP%]{\r\n  transform: scale(1.11,1.11);\r\n}\r\n.nav-items-right[_ngcontent-%COMP%]{\r\n  margin-left: 1.3vh;\r\n  height: 7.8vh;\r\n  width: 23vh;\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content:center;\r\n  align-items: flex-start;\r\n}\r\n.nav-title[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-bottom: 0.4vh;\r\n  \r\n}\r\n.nav-text[_ngcontent-%COMP%]{\r\n  line-height: 1;\r\n  color:rgb(178, 102, 201,0.7) ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGlDQUF3RDtFQUN4RCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFFLHlDQUF5QztFQUNqRSwwQkFBMEIsRUFBRSxlQUFlO0VBQzNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25COzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLDRDQUE0QztBQUM5QztBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qjs7OztHQUlDO0VBQ0QsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvRUFBb0U7QUFDdEU7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCOzs7O01BSUk7RUFDSix5REFBeUQ7RUFDekQsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CO3VDQUNxQztBQUN2QztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixtQ0FBMEQ7RUFDMUQsa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3Qyx3REFBd0Q7QUFDMUQ7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCLEVBQUUsV0FBVztBQUNqQztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsb0VBQW9FO0FBQ3RFO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFOzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBMEIsRUFBRSxRQUFRO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUUsT0FBTztFQUM1QiwwRUFBMEU7QUFDNUU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQUVILHlDQUF5QztBQUN6QztFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQjs7O3FCQUdtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCOzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjtBQUdBLFlBQVk7QUFDWjs7O0dBR0c7QUFDSCxpQkFBaUI7QUFDakI7Ozs7R0FJRztBQUVILGNBQWM7QUFDZDs7OztHQUlHIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjpyZ2IoMTc4LCAxMDIsIDIwMSkgO1xyXG59XHJcbi5iYWNncm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmdpbWcvc25vdy5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8qIG9iamVjdC1maXQ6IGZpbGw7ICovIC8qIOi/meS4quWxnuaAp+WSjGJhY2tncm91bmQtc2l6ZTpjb3ZlciDpg73og73ovr7liLDnm7jlkIznmoTmlYjmnpwgKi9cclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTsgLyoxMDB2aOS4uuaVtOS4quWxj+W5lei3neemuyovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHg7ICovXHJcbiAgLypiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyovXHJcbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7ICovXHJcbn1cclxuLm91dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogYm9yZGVyOiAycHggcmVkIHNvbGlkOyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY1cHg7XHJcbn1cclxuLmdsYXNzIHtcclxuICB3aWR0aDogODIlO1xyXG4gIGhlaWdodDogODl2aDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCBib3R0b20sXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMilcclxuICApO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gIGJveC1zaGFkb3c6IDJ2aCAydmggMi43dmggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbi5kYXNoLWJvYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMHZoIDF2aCAxLjV2aCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuLnVwIHtcclxuICAvKiBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubWUge1xyXG4gIHdpZHRoOiAzNXZoO1xyXG4gIGhlaWdodDogMTh2aDtcclxuICAvKiBib3JkZXI6IGNob2NvbGF0ZSAxcHggc29saWQ7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMi41dmg7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAuOHZoIDAuOHZoIDEuM3ZoICM5Mzk1OTcsIC0wLjh2aCAtMC44dmggMS4zdmggI2ZmZmZmZmQ1O1xyXG59XHJcbi5wZXItZ2Fsc3Mge1xyXG4gIHdpZHRoOiAxNnZoO1xyXG4gIGhlaWdodDogMTZ2aDtcclxuICAvKiBib3JkZXI6IGdyZWVuIHNvbGlkIDFweDsgKi9cclxuICBtYXJnaW4tbGVmdDogMS4ydmg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAgIHJnYigxNTQsIDEyNCwgMTk4LDAuOCksXHJcbiAgICByZ2IoMTc4LCAxMDIsIDIwMSwwLjgpXHJcbiAgKTsgKi9cclxuICAvKiBib3gtc2hhZG93OjAuNHZoIDAuOHZoIDAuNXZoIHJnYmEoNjQsIDE5LCAxMDAsIDAuOCk7ICovXHJcbiAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7ICovXHJcbn1cclxuLnBlci1nYWxzcyBpbWcge1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOiAxLjl2aDtcclxuICBoZWlnaHQ6IDEuOXZoO1xyXG4gIG1hcmdpbi1yaWdodDogMXZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjV2aDtcclxufVxyXG4uemgtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5wZXItZGV0YWlsIHtcclxuICBoZWlnaHQ6IDIuN3ZoO1xyXG4gIHdpZHRoOiAxNXZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcclxuICAvKiBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMC4ydmggMC4ydmggMC4ydmggaW5zZXQgIzkzOTU5NyxcclxuICAgIC0wLjJ2aCAtMC4ydmggMC4ydmggaW5zZXQgI2ZmZmZmZmQ1O1xyXG59XHJcbi5wZXItcGljIHtcclxuICB3aWR0aDogMTV2aDtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgYm9yZGVyLXJhZGl1czogMi41dmg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iZ2ltZy9wZXJQaWMucG5nXCIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBib3gtc2hhZG93OiAwcHggOHB4IDdweCByZ2IoNTQsIDUyLCA1Mik7ICovXHJcbiAgLyogYm94LXNoYWRvdzowLjR2aCAwLjh2aCAwLjV2aCByZ2JhKDc4LCA3OCwgNzgsIDAuOCk7ICovXHJcbn1cclxuLmxpbmtzIHtcclxuICBtYXJnaW4tdG9wOiAxLjh2aDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjV2aDtcclxuICAvKiBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIOeUqOS6juW8ueeql+WumuS9jSAqL1xyXG59XHJcbi5saW5rIHtcclxuICAvKiBib3JkZXI6IGJsdWUgMXB4IHNvbGlkOyAqL1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIHdpZHRoOiA0dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDEuNXZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuMnZoO1xyXG4gIGJveC1zaGFkb3c6IDAuNnZoIDAuNnZoIDEuMnZoICM5Mzk1OTcsIC0wLjZ2aCAtMC42dmggMS4ydmggI2ZmZmZmZmVjO1xyXG59XHJcbi5saW5rIGltZyB7XHJcbiAgd2lkdGg6IDIuN3ZoO1xyXG4gIGhlaWdodDogMi43dmg7XHJcbn1cclxuLm91dHNpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxpbmstZGV0YWlsLW91dCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpXHJcbiAgKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICBib3gtc2hhZG93OiAydmggMnZoIDJ2aCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXZoO1xyXG4gIGxlZnQ6IC03dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzdmg7XHJcbn1cclxuLmxpbmstZGV0YWlsLXBpYyB7XHJcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG4gIHdpZHRoOiAxOXZoO1xyXG4gIGhlaWdodDogMTl2aDtcclxuICAvKiBib3JkZXI6IGJsdWUgc29saWQgMnB4OyAqL1xyXG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcclxuICBib3JkZXItcmFkaXVzOiAzdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxpbmstZGV0YWlsLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMC41dmggMS4zdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5saW5rLWRldGFpbC10ZXh0IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiDkuIvliJLnur8gKi9cclxufVxyXG4ubGluay1kZXRhaWwtb3V0IGltZyB7XHJcbiAgd2lkdGg6IDE3dmg7XHJcbiAgaGVpZ2h0OiAxN3ZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDN2aDtcclxuICBtYXJnaW46IDJ2aCAydmg7XHJcbn1cclxuLmFycm93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDJ2aDtcclxuICB0b3A6IDIuNXZoO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxLjV2aDsgLyrkuInop5LlpKflsI8qL1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIHRyYW5zcGFyZW50O1xyXG59XHJcbi8qIC5kcm9wLWRvd24tb3V0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlcjogeWVsbG93Z3JlZW4gMnB4IHNvbGlkO1xyXG59XHJcbi5kcm9wLWRvd24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaWNvbi94X+S4i+aLiS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyOiByZWQgMXB4IHNvbGlkO1xyXG4gIGFuaW1hdGlvbjogZHJvcC1kb3duIDEuNnMgaW5maW5pdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbkBrZXlmcmFtZXMgZHJvcC1kb3duIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIDY1JSB7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxufSAqL1xyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS3lr7zoiKrpg6jliIYtLS0tLS0tLS0tLS0tLS0tKi9cclxuLm5hdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIG1hcmdpbi10b3A6IDEuNXZoO1xyXG4gIHdpZHRoOiAzNXZoO1xyXG4gIGhlaWdodDogNTcuNXZoO1xyXG4gIC8qIGJvcmRlcjogYmx1ZSAycHggc29saWQ7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvOyAqL1xyXG59XHJcbi5uYXYtaXRlbXMgaW1ne1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjN2aDtcclxuICB3aWR0aDogNS4ydmg7XHJcbiAgaGVpZ2h0OiA1LjJ2aDtcclxufVxyXG4ubmF2LWl0ZW1zIHtcclxuICB3aWR0aDogMzJ2aDtcclxuICBoZWlnaHQ6IDguMnZoO1xyXG4gIC8qIGJvcmRlcjogcmVkIDJweCBzb2xpZDsgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KVxyXG4gICk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgYm94LXNoYWRvdzogMC42dmggMC42dmggMS4zdmggIzYwNjE2MTtcclxuICBib3JkZXItcmFkaXVzOiAxLjJ2aDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubmF2LWl0ZW1zOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xMSwxLjExKTtcclxufVxyXG4uc2NhbGV7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjExLDEuMTEpO1xyXG59XHJcbi5uYXYtaXRlbXMtcmlnaHR7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuM3ZoO1xyXG4gIGhlaWdodDogNy44dmg7XHJcbiAgd2lkdGg6IDIzdmg7XHJcbiAgLyogYm9yZGVyOnJlZCAxcHggc29saWQ7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLm5hdi10aXRsZXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40dmg7XHJcbiAgLyogYm9yZGVyOmdyZWVuIDFweCBzb2xpZDsgKi9cclxufVxyXG4ubmF2LXRleHR7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY29sb3I6cmdiKDE3OCwgMTAyLCAyMDEsMC43KSA7XHJcbn1cclxuXHJcblxyXG4vKiDlrprkuYnmu5rliqjmnaHmoLflvI8gKi9cclxuLyogOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG59ICovXHJcbi8q5a6a5LmJ5rua5Yqo5p2h6L2o6YGTIOWGhemYtOW9sSvlnIbop5IqL1xyXG4vKiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XHJcbn0gKi9cclxuXHJcbi8q5a6a5LmJ5ruR5Z2XIOWGhemYtOW9sSvlnIbop5IqL1xyXG4vKiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59ICovXHJcblxyXG4iXX0= */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["#top[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 100%;\r\n  \r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n.top[_ngcontent-%COMP%] {\r\n}\r\n.top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 50px;\r\n  float: left;\r\n  color: white;\r\n  margin-left: 5px;\r\n}\r\n.img1[_ngcontent-%COMP%] {\r\n  margin: 10px 15px;\r\n  float: left;\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.img2[_ngcontent-%COMP%] {\r\n  margin: 13px 22px;\r\n  float: right;\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: all 0.1s;\r\n}\r\n.img2[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer; \r\n}\r\n\r\n.more[_ngcontent-%COMP%] {\r\n  width: 105px;\r\n  z-index: 1;\r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  -webkit-backdrop-filter: blur(5px);\r\n          backdrop-filter: blur(5px);\r\n  box-shadow: 0px 4px 7px rgb(54, 52, 52);\r\n  position: absolute;\r\n  \r\n  right: 5px;\r\n  top: -120px;\r\n  border-radius: 0 0 10px 10px;\r\n  opacity: 0;\r\n}\r\n.moreShow[_ngcontent-%COMP%] {\r\n  opacity: 0.9;\r\n  transform: translateY(168px);\r\n}\r\n.rotate[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.more-content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  margin: 5px auto;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-ul[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-div[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .moreListItem[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 2px;\r\n  \r\n  color: white;\r\n}\r\n.more[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer; \r\n}\r\n.more[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 28px;\r\n  height: 28px;\r\n  margin-right: 8px;\r\n}\r\n\r\n\r\n.more-detail-out[_ngcontent-%COMP%] {\r\n  \r\n  width: 180px;\r\n  \r\n  display: none;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  \r\n  z-index: -999;\r\n  position: absolute;\r\n  top: 4px;\r\n  left: -80px;\r\n}\r\n.more-detail[_ngcontent-%COMP%] {\r\n  \r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  -webkit-backdrop-filter: blur(4px);\r\n          backdrop-filter: blur(4px);\r\n  box-shadow: 0px 4px 5px rgb(54, 52, 52);\r\n  border-radius: 10px;\r\n  \r\n  \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .detailItemUl[_ngcontent-%COMP%]:nth-child(2) {\r\n  border-top-left-radius: 10px; \r\n  border-top-right-radius: 10px; \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .detailItemUl[_ngcontent-%COMP%]:last-child {\r\n  border-bottom-left-radius: 10px; \r\n  border-bottom-right-radius: 10px; \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .arrows2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: -19px;\r\n  top: 8px;\r\n  \r\n  border-style: solid;\r\n  border-width: 10px; \r\n  border-color: transparent transparent transparent rgb(178, 102, 201,0.8);\r\n}\r\n.more-detail[_ngcontent-%COMP%]   .detailItemUl[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .moreDetailItem[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  \r\n  line-height: 35px;\r\n  margin: 0 15px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-div[_ngcontent-%COMP%]:hover   .more-detail-out[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  transform: translateX(-110px);\r\n  animation: anim 0.5s;\r\n}\r\n@keyframes anim {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.more-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  display: table;\r\n}\r\n.example-label[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n.example-button-row[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n.example-button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: chartreuse;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QztFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsK0JBQStCO0VBQy9COzs7O0dBSUM7RUFDRCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWUsRUFBRSxrQkFBa0I7QUFDckM7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWOzs7O0dBSUM7RUFDRCxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7Ozs7Ozs7OztFQVNFO0FBQ0Y7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFOzs7O01BSUk7QUFDTjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdURBQXVEO0VBQ3ZELFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZSxFQUFFLGtCQUFrQjtBQUNyQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQSwrQ0FBK0M7QUFDL0MsK0JBQStCO0FBQy9CO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQjs7OztHQUlDO0VBQ0Qsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDRCQUE0QixFQUFFLG9EQUFvRDtFQUNsRiw2QkFBNkIsRUFBRSxvREFBb0Q7QUFDckY7QUFDQTtFQUNFLCtCQUErQixFQUFFLG9EQUFvRDtFQUNyRixnQ0FBZ0MsRUFBRSxvREFBb0Q7QUFDeEY7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osUUFBUTtFQUNSO2NBQ1k7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUUsT0FBTztFQUMzQix3RUFBd0U7QUFDMUU7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0g7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC90b3AvdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0t5qCH6aKY5qCPLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jdG9wIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjYThkODsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAtMGRlZyxcclxuICAgIHJnYigxNTQsIDEyNCwgMTk4KSxcclxuICAgIHJnYigxNzgsIDEwMiwgMjAxKVxyXG4gICk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLnRvcCB7XHJcbn1cclxuLnRvcCBwIHtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uaW1nMSB7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5pbWcyIHtcclxuICBtYXJnaW46IDEzcHggMjJweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG59XHJcbi5pbWcyOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7IC8q6byg5qCH5oKs5YGc5pe277yM6byg5qCH5oyH6ZKI5Li654K55Ye75qC35byPKi9cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLTHnuqfoj5zljZUtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5tb3JlIHtcclxuICB3aWR0aDogMTA1cHg7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAtMGRlZyxcclxuICAgIHJnYigxNTQsIDEyNCwgMTk4KSxcclxuICAgIHJnYigxNzgsIDEwMiwgMjAxKVxyXG4gICk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA3cHggcmdiKDU0LCA1MiwgNTIpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKiBtaW4taGVpZ2h0OiAxMDI0cHg7ICovXHJcbiAgcmlnaHQ6IDVweDtcclxuICB0b3A6IC0xMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLm1vcmVTaG93IHtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2OHB4KTtcclxufVxyXG4ucm90YXRlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuLyoubW9yZSAuYXJyb3dzMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4OyBcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNjY2E4ZDggdHJhbnNwYXJlbnQ7XHJcbn0qL1xyXG4ubW9yZS1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcbi5tb3JlLWNvbnRlbnQgLm1vcmUtdWwge1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0wZGVnLFxyXG4gICAgcmdiKDE1NCwgMTI0LCAxOTgpLFxyXG4gICAgcmdiKDE3OCwgMTAyLCAyMDEpXHJcbiAgKTsgKi9cclxufVxyXG4ubW9yZS1jb250ZW50IC5tb3JlLWRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tb3JlLWNvbnRlbnQgLm1vcmVMaXN0SXRlbSB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIC8qIGJvcmRlci1ib3R0b206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAxcHggc29saWQ7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tb3JlIGxpOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7IC8q6byg5qCH5oKs5YGc5pe277yM6byg5qCH5oyH6ZKI5Li654K55Ye75qC35byPKi9cclxufVxyXG4ubW9yZSBsaSBpbWcge1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLTLnuqfoj5zljZUtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8q5ZyobW9yZS1kZXRhaWzlpJbliqDkuIDlsYLlrp7njrAy57qn5by556qX5by55Ye66Led56a75LiA5qC3Ki9cclxuLm1vcmUtZGV0YWlsLW91dCB7XHJcbiAgLyogb3BhY2l0eTogMDsgKi9cclxuICB3aWR0aDogMTgwcHg7XHJcbiAgLyogYm9yZGVyOiByZWQgMXB4IHNvbGlkOyAqL1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3M7ICovXHJcbiAgei1pbmRleDogLTk5OTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgbGVmdDogLTgwcHg7XHJcbn1cclxuLm1vcmUtZGV0YWlsIHtcclxuICAvKiBvcGFjaXR5OiAxOyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0wZGVnLFxyXG4gICAgcmdiKDE1NCwgMTI0LCAxOTgpLFxyXG4gICAgcmdiKDE3OCwgMTAyLCAyMDEpXHJcbiAgKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDVweCByZ2IoNTQsIDUyLCA1Mik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAg6Kej5YazbWF0ZXJpYWzmtp/mvKrmlYjmnpznu4Tku7bmuqLlh7ogKi9cclxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyovXHJcbn1cclxuLm1vcmUtZGV0YWlsIC5kZXRhaWxJdGVtVWw6bnRoLWNoaWxkKDIpIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4OyAvKiDlj5HnjrDlnKhpb3Pnq69vdmVyZmxvdzpoaWRkZW7lsZ7mgKflpLHmlYgs5Lul5q2k6Kej5YazbWF0ZXJpYWzmtp/mvKrmlYjmnpznu4Tku7bmuqLlh7ogKi9cclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDsgLyog5Y+R546w5ZyoaW9z56uvb3ZlcmZsb3c6aGlkZGVu5bGe5oCn5aSx5pWILOS7peatpOino+WGs21hdGVyaWFs5raf5ryq5pWI5p6c57uE5Lu25rqi5Ye6ICovXHJcbn1cclxuLm1vcmUtZGV0YWlsIC5kZXRhaWxJdGVtVWw6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDsgLyog5Y+R546w5ZyoaW9z56uvb3ZlcmZsb3c6aGlkZGVu5bGe5oCn5aSx5pWILOS7peatpOino+WGs21hdGVyaWFs5raf5ryq5pWI5p6c57uE5Lu25rqi5Ye6ICovXHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7IC8qIOWPkeeOsOWcqGlvc+err292ZXJmbG93OmhpZGRlbuWxnuaAp+WkseaViCzku6XmraTop6PlhrNtYXRlcmlhbOa2n+a8quaViOaenOe7hOS7tua6ouWHuiAqL1xyXG59XHJcbi5tb3JlLWRldGFpbCAuYXJyb3dzMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTlweDtcclxuICB0b3A6IDhweDtcclxuICAvKiB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7ICovXHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7IC8q5LiJ6KeS5aSn5bCPKi9cclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYigxNzgsIDEwMiwgMjAxLDAuOCk7XHJcbn1cclxuLm1vcmUtZGV0YWlsIC5kZXRhaWxJdGVtVWwge1xyXG4gIC8qIG1hcmdpbjogM3B4IDA7ICovXHJcbn1cclxuLm1vcmUtZGV0YWlsIC5tb3JlRGV0YWlsSXRlbSB7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIC8qIGJvcmRlcjogY2hhcnRyZXVzZSAycHggc29saWQ7ICovXHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubW9yZS1jb250ZW50IC5tb3JlLWRpdjpob3ZlciAubW9yZS1kZXRhaWwtb3V0IHtcclxuICAvKiBvcGFjaXR5OiAxOyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMTBweCk7XHJcbiAgYW5pbWF0aW9uOiBhbmltIDAuNXM7XHJcbn1cclxuQGtleWZyYW1lcyBhbmltIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbi8qIEBrZXlmcmFtZXMgY29sb3IgeyBcclxuXHQwJSB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgLTBkZWcsXHJcbiAgICByZ2IoMTU0LCAxMjQsIDE5OCksXHJcbiAgICByZ2IoMTc4LCAxMDIsIDIwMSlcclxuICApO31cclxuXHQxMDAle2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0wZGVnLFxyXG4gICAgcmdiKDEwLCAzLCAyMCksXHJcbiAgICByZ2IoMTc4LCAxMDIsIDIwMSlcclxuICApO307XHJcbn1cclxuLm1vcmVEZXRhaWxJdGVtOmhvdmVye1xyXG4gIGFuaW1hdGlvbjogY29sb3IgMC40cztcclxuXHJcbn0gKi9cclxuLm1vcmUtY29udGVudCB1bCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi5leGFtcGxlLWxhYmVsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbn1cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB3aWR0aDogNDkwcHg7XHJcbn1cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbn1cclxuLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uZXhhbXBsZS1idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTtcclxufVxyXG4iXX0= */"] });
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