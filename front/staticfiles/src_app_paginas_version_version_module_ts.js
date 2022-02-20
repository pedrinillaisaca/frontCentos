(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_version_version_module_ts"],{

/***/ 5013:
/*!***********************************************************!*\
  !*** ./src/app/paginas/version/version-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionPageRoutingModule": () => (/* binding */ VersionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _version_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.page */ 3277);




const routes = [
    {
        path: '',
        component: _version_page__WEBPACK_IMPORTED_MODULE_0__.VersionPage
    }
];
let VersionPageRoutingModule = class VersionPageRoutingModule {
};
VersionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VersionPageRoutingModule);



/***/ }),

/***/ 3294:
/*!***************************************************!*\
  !*** ./src/app/paginas/version/version.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionPageModule": () => (/* binding */ VersionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _version_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version-routing.module */ 5013);
/* harmony import */ var _version_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.page */ 3277);







let VersionPageModule = class VersionPageModule {
};
VersionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _version_routing_module__WEBPACK_IMPORTED_MODULE_0__.VersionPageRoutingModule
        ],
        declarations: [_version_page__WEBPACK_IMPORTED_MODULE_1__.VersionPage]
    })
], VersionPageModule);



/***/ }),

/***/ 3277:
/*!*************************************************!*\
  !*** ./src/app/paginas/version/version.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionPage": () => (/* binding */ VersionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_version_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./version.page.html */ 2026);
/* harmony import */ var _version_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.page.scss */ 5231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_back_button_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/back-button.service */ 7219);





let VersionPage = class VersionPage {
    constructor(servBac) {
        this.servBac = servBac;
    }
    ngOnInit() {
    }
    openDoc() {
        window.open('https://firebasestorage.googleapis.com/v0/b/pruebatesis13.appspot.com/o/docs%2FManualUsuario.pdf?alt=media&token=279a647d-a714-4c66-81fb-341ecc37a440', '_system');
    }
};
VersionPage.ctorParameters = () => [
    { type: _services_back_button_service__WEBPACK_IMPORTED_MODULE_2__.BackButtonService }
];
VersionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-version',
        template: _raw_loader_version_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_version_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VersionPage);



/***/ }),

/***/ 5231:
/*!***************************************************!*\
  !*** ./src/app/paginas/version/version.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mat-icon {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 27px;\n  width: 27px;\n  padding-top: 16px;\n}\n\n.centrar {\n  text-align: center;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InZlcnNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uY2VudHJhciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59Il19 */");

/***/ }),

/***/ 2026:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/version/version.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Ayuda</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <div class=\"centrar\">\r\n            <p>\r\n                <a (click)=\"openDoc()\">\r\n                Pulse en este enlace para acceder al manual de usuario\r\n                </a>\r\n            </p>\r\n        </div>\r\n    </ion-card>\r\n    <ion-fab vertical='bottom' horizontal='left' slot=\"fixed\">\r\n        <ion-fab-button (click)=\"servBac.backApp()\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_version_version_module_ts.js.map