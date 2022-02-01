(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_galery_galery_module_ts"],{

/***/ 6117:
/*!*********************************************************!*\
  !*** ./src/app/paginas/galery/galery-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryPageRoutingModule": () => (/* binding */ GaleryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _galery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery.page */ 4703);




const routes = [
    {
        path: '',
        component: _galery_page__WEBPACK_IMPORTED_MODULE_0__.GaleryPage
    }
];
let GaleryPageRoutingModule = class GaleryPageRoutingModule {
};
GaleryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GaleryPageRoutingModule);



/***/ }),

/***/ 4599:
/*!*************************************************!*\
  !*** ./src/app/paginas/galery/galery.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryPageModule": () => (/* binding */ GaleryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _galery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-routing.module */ 6117);
/* harmony import */ var _galery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery.page */ 4703);







let GaleryPageModule = class GaleryPageModule {
};
GaleryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _galery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GaleryPageRoutingModule
        ],
        declarations: [_galery_page__WEBPACK_IMPORTED_MODULE_1__.GaleryPage]
    })
], GaleryPageModule);



/***/ }),

/***/ 4703:
/*!***********************************************!*\
  !*** ./src/app/paginas/galery/galery.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryPage": () => (/* binding */ GaleryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_galery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./galery.page.html */ 5863);
/* harmony import */ var _galery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery.page.scss */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/foto.service */ 7535);






let GaleryPage = class GaleryPage {
    constructor(servFoto, router) {
        this.servFoto = servFoto;
        this.router = router;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.servFoto.loadSaved();
        });
    }
    addPhotoGalery() {
        this.servFoto.addNewToGalery();
    }
    savedFire() {
        this.servFoto.savedFirestorage();
    }
    gotoRegisterWB() {
        this.router.navigate(['/register-waterboard']);
    }
    ngOnDestroy() {
        console.log('DEstroy');
        this.servFoto.clearStorage();
    }
};
GaleryPage.ctorParameters = () => [
    { type: src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_2__.FotoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
GaleryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-galery',
        template: _raw_loader_galery_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_galery_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GaleryPage);



/***/ }),

/***/ 3252:
/*!*************************************************!*\
  !*** ./src/app/paginas/galery/galery.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxlcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 5863:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/galery/galery.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>galery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" \n      *ngFor=\"let foto of servFoto.fotos; index as position\">\n      <ion-img [src]='foto.webviewPath'></ion-img>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical='bottom' horizontal='center' slot=\"fixed\">\n    <ion-fab-button (click)=\"addPhotoGalery()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n\n    <!-- <ion-fab-button (click)=\"savedFire()\">\n      <ion-icon name=\"aperture\"></ion-icon>\n    </ion-fab-button> -->\n    \n  </ion-fab>\n\n  <ion-fab vertical='bottom' horizontal='left' slot=\"fixed\">    \n    <ion-fab-button (click)=\"gotoRegisterWB()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-fab-button>    \n  </ion-fab>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_galery_galery_module_ts.js.map