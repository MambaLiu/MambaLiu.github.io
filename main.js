(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal\myBlogDev\src\main.ts */"zUnb");


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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top");
    } }, directives: [_top_top_component__WEBPACK_IMPORTED_MODULE_2__["TopComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _top_top_component__WEBPACK_IMPORTED_MODULE_5__["TopComponent"]], imports: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _top_top_component__WEBPACK_IMPORTED_MODULE_5__["TopComponent"]],
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopComponent_ul_11_ul_9_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const detailItem_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.Menu2ndClick(detailItem_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detailItem_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", detailItem_r4.id)("matRippleRadius", 100)("matRippleColor", ctx_r3.white);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, item_r1.title), " ");
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
                        id: 'zh-Hans',
                        text: 'LANGUAGE.ZH_HANS',
                    },
                    {
                        id: 'zh-Hant',
                        text: 'LANGUAGE.ZH_HANT',
                    },
                    {
                        id: 'en-US',
                        text: 'LANGUAGE.EN_US',
                    },
                ],
            },
            {
                title: 'BASE.THEME',
                imgSrc: '../../assets/img/icon/主题中心.png',
                detail: [
                    { id: 'themeDark', text: 'THEME.DARK' },
                    { id: 'themeLight', text: 'THEME.LIGHT' },
                ],
            },
            {
                title: 'BASE.ABOUT',
                imgSrc: '../../assets/img/icon/about4.png',
                detail: [{ id: 'aboutWebsite', text: 'BASE.ABOUT_WEBSITE' }],
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
    Menu2ndClick(event) {
        this.translate.setDefaultLang(event); // 设置默认语言
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
    } }, decls: 12, vars: 10, consts: [["id", "top"], [1, "top"], ["src", "../../assets/img/icon/myLogoBTwhite.png", 1, "img1"], ["src", "../../assets/img/icon/\u66F4\u591A.png", 1, "img2", 3, "ngClass", "click"], [1, "more", 3, "ngClass"], [1, "more-content"], [1, "more-ul"], ["class", "more-div", 4, "ngFor", "ngForOf"], [1, "more-div"], [1, "moreListItem", 3, "click"], [3, "src"], [1, "more-detail-out"], [1, "more-detail"], ["abc", ""], [1, "arrows2"], ["class", "detailItemUl click-wave-fater", "matRipple", "", 3, "id", "matRippleRadius", "matRippleColor", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "detailItemUl", "click-wave-fater", 3, "id", "matRippleRadius", "matRippleColor", "click"], [1, "moreDetailItem", 3, "click"]], template: function TopComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TopComponent_ul_11_Template, 10, 5, "ul", 7);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["#top[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 100%;\r\n  \r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n.top[_ngcontent-%COMP%] {\r\n}\r\n.top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 50px;\r\n  float: left;\r\n  color: white;\r\n  margin-left: 5px;\r\n}\r\n.img1[_ngcontent-%COMP%] {\r\n  margin: 10px 15px;\r\n  float: left;\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n.img2[_ngcontent-%COMP%] {\r\n  margin: 13px 22px;\r\n  float: right;\r\n  width: 25px;\r\n  height: 25px;\r\n  transition: all 0.1s;\r\n}\r\n.img2[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer; \r\n}\r\n\r\n.more[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n  z-index: 1;\r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  position: absolute;\r\n  \r\n  right: 0px;\r\n  top: -120px;\r\n  border-radius: 0 0 10px 10px;\r\n  opacity: 1;\r\n  transition: all 0.1s;\r\n}\r\n.moreShow[_ngcontent-%COMP%] {\r\n  transform: translateY(168px);\r\n}\r\n.rotate[_ngcontent-%COMP%]{\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.more-content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  margin: 5px auto;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-ul[_ngcontent-%COMP%] {\r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-div[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .moreListItem[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 2px;\r\n  \r\n  color: white;\r\n}\r\n.more[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer; \r\n}\r\n.more[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 28px;\r\n  height: 28px;\r\n  margin-right: 8px;\r\n}\r\n\r\n\r\n.more-detail-out[_ngcontent-%COMP%] {\r\n  \r\n  width: 180px;\r\n  \r\n  display: none;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  \r\n  z-index: -999;\r\n  position: absolute;\r\n  top: 4px;\r\n  left: -80px;\r\n}\r\n.more-detail[_ngcontent-%COMP%] {\r\n  \r\n  background-image: linear-gradient(\r\n    -0deg,\r\n    rgb(154, 124, 198),\r\n    rgb(178, 102, 201)\r\n  );\r\n  border-radius: 10px;\r\n  overflow: hidden; \r\n  \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .arrows2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: -17px;\r\n  top: 13px;\r\n  \r\n  border-style: solid;\r\n  border-width: 10px; \r\n  border-color: transparent transparent transparent rgb(178, 102, 201);\r\n}\r\n.more-detail[_ngcontent-%COMP%]   .detailItemUl[_ngcontent-%COMP%] {\r\n  \r\n  overflow: hidden; \r\n}\r\n.more-detail[_ngcontent-%COMP%]   .moreDetailItem[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  \r\n  line-height: 40px;\r\n  margin: 0 15px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.more-content[_ngcontent-%COMP%]   .more-div[_ngcontent-%COMP%]:hover   .more-detail-out[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  transform: translateX(-110px);\r\n  animation: anim 0.4s;\r\n\r\n}\r\n@keyframes anim { \r\n\t0% {opacity: 0;}\r\n\t100%{opacity:1};\r\n}\r\n\r\n.more-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n  display: table;\r\n  }\r\n.example-label[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n  }\r\n.example-button-row[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  width: 490px;\r\n  }\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n  margin: 8px 8px 8px 0;\r\n  }\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  }\r\n.example-button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n  }\r\n.button[_ngcontent-%COMP%]{\r\n    background-color: chartreuse;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QztFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsK0JBQStCO0VBQy9COzs7O0dBSUM7RUFDRCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWUsRUFBRSxrQkFBa0I7QUFDckM7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWOzs7O0dBSUM7RUFDRCxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7Ozs7Ozs7OztFQVNFO0FBQ0Y7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFOzs7O0dBSUM7QUFDSDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdURBQXVEO0VBQ3ZELFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZSxFQUFFLGtCQUFrQjtBQUNyQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQSwrQ0FBK0M7QUFDL0MsK0JBQStCO0FBQy9CO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQjs7OztHQUlDO0VBQ0QsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFFLHFCQUFxQjtFQUN2Qyx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNUO2NBQ1k7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUUsT0FBTztFQUMzQixvRUFBb0U7QUFDdEU7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBRSxxQkFBcUI7QUFDekM7QUFDQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixvQkFBb0I7O0FBRXRCO0FBQ0E7Q0FDQyxJQUFJLFVBQVUsQ0FBQztDQUNmLEtBQUssU0FBUyxDQUFBO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSDtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztFQUNkO0FBQ0E7RUFDQSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEI7QUFDQTtFQUNBLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1o7QUFDQTtFQUNBLHFCQUFxQjtFQUNyQjtBQUNBO0VBQ0EsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2Y7QUFDQTtFQUNBLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaO0FBRUE7SUFDRSw0QkFBNEI7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC90b3AvdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0t5qCH6aKY5qCPLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jdG9wIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjYThkODsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAtMGRlZyxcclxuICAgIHJnYigxNTQsIDEyNCwgMTk4KSxcclxuICAgIHJnYigxNzgsIDEwMiwgMjAxKVxyXG4gICk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLnRvcCB7XHJcbn1cclxuLnRvcCBwIHtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uaW1nMSB7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5pbWcyIHtcclxuICBtYXJnaW46IDEzcHggMjJweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG59XHJcbi5pbWcyOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7IC8q6byg5qCH5oKs5YGc5pe277yM6byg5qCH5oyH6ZKI5Li654K55Ye75qC35byPKi9cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLTHnuqfoj5zljZUtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5tb3JlIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAtMGRlZyxcclxuICAgIHJnYigxNTQsIDEyNCwgMTk4KSxcclxuICAgIHJnYigxNzgsIDEwMiwgMjAxKVxyXG4gICk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDEwMjRweDsgKi9cclxuICByaWdodDogMHB4O1xyXG4gIHRvcDogLTEyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcclxufVxyXG4ubW9yZVNob3cge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNjhweCk7XHJcbn1cclxuLnJvdGF0ZXtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuLyoubW9yZSAuYXJyb3dzMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxMHB4OyBcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNjY2E4ZDggdHJhbnNwYXJlbnQ7XHJcbn0qL1xyXG4ubW9yZS1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcbi5tb3JlLWNvbnRlbnQgLm1vcmUtdWwge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0wZGVnLFxyXG4gICAgcmdiKDE1NCwgMTI0LCAxOTgpLFxyXG4gICAgcmdiKDE3OCwgMTAyLCAyMDEpXHJcbiAgKTtcclxufVxyXG4ubW9yZS1jb250ZW50IC5tb3JlLWRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tb3JlLWNvbnRlbnQgLm1vcmVMaXN0SXRlbSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIC8qIGJvcmRlci1ib3R0b206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAxcHggc29saWQ7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tb3JlIGxpOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7IC8q6byg5qCH5oKs5YGc5pe277yM6byg5qCH5oyH6ZKI5Li654K55Ye75qC35byPKi9cclxufVxyXG4ubW9yZSBsaSBpbWcge1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLTLnuqfoj5zljZUtLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8q5ZyobW9yZS1kZXRhaWzlpJbliqDkuIDlsYLlrp7njrAy57qn5by556qX5by55Ye66Led56a75LiA5qC3Ki9cclxuLm1vcmUtZGV0YWlsLW91dCB7XHJcbiAgLyogb3BhY2l0eTogMDsgKi9cclxuICB3aWR0aDogMTgwcHg7XHJcbiAgLyogYm9yZGVyOiByZWQgMXB4IHNvbGlkOyAqL1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3M7ICovXHJcbiAgei1pbmRleDogLTk5OTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgbGVmdDogLTgwcHg7XHJcbn1cclxuLm1vcmUtZGV0YWlsIHtcclxuICAvKiBvcGFjaXR5OiAxOyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0wZGVnLFxyXG4gICAgcmdiKDE1NCwgMTI0LCAxOTgpLFxyXG4gICAgcmdiKDE3OCwgMTAyLCAyMDEpXHJcbiAgKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47IC8qbWF0ZXJpYWznu4Tku7bmtp/mvKrmlYjmnpzpmLLmraLmuqLlh7oqL1xyXG4gIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7Ki9cclxufVxyXG4ubW9yZS1kZXRhaWwgLmFycm93czIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTE3cHg7XHJcbiAgdG9wOiAxM3B4O1xyXG4gIC8qIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDsgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMTBweDsgLyrkuInop5LlpKflsI8qL1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiKDE3OCwgMTAyLCAyMDEpO1xyXG59XHJcbi5tb3JlLWRldGFpbCAuZGV0YWlsSXRlbVVsIHtcclxuICAvKiBtYXJnaW46IDVweCAwOyAqL1xyXG4gIG92ZXJmbG93OiBoaWRkZW47IC8qbWF0ZXJpYWznu4Tku7bmtp/mvKrmlYjmnpzpmLLmraLmuqLlh7oqL1xyXG59XHJcbi5tb3JlLWRldGFpbCAubW9yZURldGFpbEl0ZW0ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICAvKiBib3JkZXI6IGNoYXJ0cmV1c2UgMnB4IHNvbGlkOyAqL1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1vcmUtY29udGVudCAubW9yZS1kaXY6aG92ZXIgLm1vcmUtZGV0YWlsLW91dCB7XHJcbiAgLyogb3BhY2l0eTogMTsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTEwcHgpO1xyXG4gIGFuaW1hdGlvbjogYW5pbSAwLjRzO1xyXG5cclxufVxyXG5Aa2V5ZnJhbWVzIGFuaW0geyBcclxuXHQwJSB7b3BhY2l0eTogMDt9XHJcblx0MTAwJXtvcGFjaXR5OjF9O1xyXG59XHJcbi8qIEBrZXlmcmFtZXMgY29sb3IgeyBcclxuXHQwJSB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgLTBkZWcsXHJcbiAgICByZ2IoMTU0LCAxMjQsIDE5OCksXHJcbiAgICByZ2IoMTc4LCAxMDIsIDIwMSlcclxuICApO31cclxuXHQxMDAle2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC0wZGVnLFxyXG4gICAgcmdiKDEwLCAzLCAyMCksXHJcbiAgICByZ2IoMTc4LCAxMDIsIDIwMSlcclxuICApO307XHJcbn1cclxuLm1vcmVEZXRhaWxJdGVtOmhvdmVye1xyXG4gIGFuaW1hdGlvbjogY29sb3IgMC40cztcclxuXHJcbn0gKi9cclxuLm1vcmUtY29udGVudCB1bCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICAuZXhhbXBsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICAuZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA0OTBweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XHJcbiAgfSJdfQ== */"] });
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




const routes = [];
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