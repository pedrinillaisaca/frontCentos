(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_not-fount_not-fount_module_ts"],{

/***/ 7066:
/*!***************************************************************!*\
  !*** ./src/app/paginas/not-fount/not-fount-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFountPageRoutingModule": () => (/* binding */ NotFountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _not_fount_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-fount.page */ 7512);




const routes = [
    {
        path: '',
        component: _not_fount_page__WEBPACK_IMPORTED_MODULE_0__.NotFountPage
    }
];
let NotFountPageRoutingModule = class NotFountPageRoutingModule {
};
NotFountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotFountPageRoutingModule);



/***/ }),

/***/ 3997:
/*!*******************************************************!*\
  !*** ./src/app/paginas/not-fount/not-fount.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFountPageModule": () => (/* binding */ NotFountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _not_fount_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-fount-routing.module */ 7066);
/* harmony import */ var _not_fount_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-fount.page */ 7512);







let NotFountPageModule = class NotFountPageModule {
};
NotFountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _not_fount_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFountPageRoutingModule
        ],
        declarations: [_not_fount_page__WEBPACK_IMPORTED_MODULE_1__.NotFountPage]
    })
], NotFountPageModule);



/***/ }),

/***/ 7512:
/*!*****************************************************!*\
  !*** ./src/app/paginas/not-fount/not-fount.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFountPage": () => (/* binding */ NotFountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_not_fount_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./not-fount.page.html */ 5265);
/* harmony import */ var _not_fount_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-fount.page.scss */ 598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let NotFountPage = class NotFountPage {
    constructor() { }
    ngOnInit() {
    }
};
NotFountPage.ctorParameters = () => [];
NotFountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-not-fount',
        template: _raw_loader_not_fount_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_not_fount_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotFountPage);



/***/ }),

/***/ 598:
/*!*******************************************************!*\
  !*** ./src/app/paginas/not-fount/not-fount.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".centrar {\n  font-family: Geneva;\n  text-align: center;\n  font-size: large;\n}\n\n.icon {\n  height: 200px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoibm90LWZvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW5ldmE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59Il19 */");

/***/ }),

/***/ 5265:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/not-fount/not-fount.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>No encontrado </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"centrar\">\r\n        <h1>No encontrado</h1>\r\n        <ion-icon class=\"icon\" name=\"alert-circle-sharp\"></ion-icon>\r\n        <h2><a routerLink=\"/login\">Regresar a la Aplicación </a></h2>\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_not-fount_not-fount_module_ts.js.map