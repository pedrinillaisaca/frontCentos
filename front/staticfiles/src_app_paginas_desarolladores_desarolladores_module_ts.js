(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_desarolladores_desarolladores_module_ts"],{

/***/ 1230:
/*!*************************************************************************!*\
  !*** ./src/app/paginas/desarolladores/desarolladores-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesarolladoresPageRoutingModule": () => (/* binding */ DesarolladoresPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _desarolladores_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desarolladores.page */ 503);




const routes = [
    {
        path: '',
        component: _desarolladores_page__WEBPACK_IMPORTED_MODULE_0__.DesarolladoresPage
    }
];
let DesarolladoresPageRoutingModule = class DesarolladoresPageRoutingModule {
};
DesarolladoresPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DesarolladoresPageRoutingModule);



/***/ }),

/***/ 2781:
/*!*****************************************************************!*\
  !*** ./src/app/paginas/desarolladores/desarolladores.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesarolladoresPageModule": () => (/* binding */ DesarolladoresPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _desarolladores_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desarolladores-routing.module */ 1230);
/* harmony import */ var _desarolladores_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desarolladores.page */ 503);







let DesarolladoresPageModule = class DesarolladoresPageModule {
};
DesarolladoresPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _desarolladores_routing_module__WEBPACK_IMPORTED_MODULE_0__.DesarolladoresPageRoutingModule
        ],
        declarations: [_desarolladores_page__WEBPACK_IMPORTED_MODULE_1__.DesarolladoresPage]
    })
], DesarolladoresPageModule);



/***/ }),

/***/ 503:
/*!***************************************************************!*\
  !*** ./src/app/paginas/desarolladores/desarolladores.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesarolladoresPage": () => (/* binding */ DesarolladoresPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_desarolladores_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./desarolladores.page.html */ 9808);
/* harmony import */ var _desarolladores_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desarolladores.page.scss */ 5331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DesarolladoresPage = class DesarolladoresPage {
    constructor() { }
    ngOnInit() {
    }
};
DesarolladoresPage.ctorParameters = () => [];
DesarolladoresPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-desarolladores',
        template: _raw_loader_desarolladores_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_desarolladores_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DesarolladoresPage);



/***/ }),

/***/ 5331:
/*!*****************************************************************!*\
  !*** ./src/app/paginas/desarolladores/desarolladores.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("img.pequenia {\n  width: 80px;\n  height: 80px;\n}\n\n.centrar {\n  font-size: large;\n  font-family: \"Segoe UI\";\n  padding-right: 20%;\n  padding-left: 20%;\n}\n\n.cabeza {\n  text-align: center;\n  font-size: large;\n  font-family: \"Segoe UI\";\n  padding-right: 20%;\n  padding-left: 20%;\n}\n\n.paragraph {\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n\n.resalte {\n  color: #17232A;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2Fyb2xsYWRvcmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImRlc2Fyb2xsYWRvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5wZXF1ZW5pYSB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmNlbnRyYXIge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmNhYmV6YSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG59XHJcblxyXG4ucGFyYWdyYXBoIHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5yZXNhbHRlIHtcclxuICAgIGNvbG9yOiAjMTcyMzJBO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */");

/***/ }),

/***/ 9808:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/desarolladores/desarolladores.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Desarrolladores</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n    <ion-card>\r\n\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-card class=\"cabeza\">\r\n                        <h2 class=\"centrar1\">Grupo de trabajo</h2>\r\n                    </ion-card>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-card class=\"centrar\">\r\n                        <img class=\"pequenia\" src=\"../../../assets/pedro.jpg\" alt=\"\">\r\n                        <p class=\"resalte\">Pedro Xavier Illaisaca Tenecota</p>\r\n                        <p class=\"paragraph\">Desarrollo BackEnd y FrontEnd</p>\r\n                        <p><a href=\"mailto:pillaisaca@est.ups.edu.ec\">pillaisaca@est.ups.edu.ec</a></p>\r\n                        <p><a href=\"mailto:pillaisaca@est.ups.edu.ec\">pedroillaisaca010@gmail.com</a></p>\r\n                    </ion-card>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-card class=\"centrar\">\r\n                        <img class=\"pequenia\" src=\"../../../assets/barrrera.png\" alt=\"\">\r\n                        <p class=\"resalte\">Bryam Javier Barrera Chungata</p>\r\n                        <p class=\"paragraph\">Desarrollo BackEnd y FrontEnd</p>\r\n                        <p><a href=\"mailto:bbarrerac1@est.ups.edu.ec\">bbarrerac1@est.ups.edu.ec</a></p>\r\n                        <p><a href=\"mailto:bryanbarrera46@gmail.com\">bryanbarrera46@gmail.com</a></p>\r\n                    </ion-card>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-card class=\"cabeza\">\r\n                        <h2 class=\"centrar1\">Versión 0.1</h2>\r\n                    </ion-card>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n\r\n        </ion-grid>\r\n    </ion-card>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_desarolladores_desarolladores_module_ts.js.map