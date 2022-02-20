(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_msj-confirm_msj-confirm_module_ts"],{

/***/ 7613:
/*!*******************************************************************!*\
  !*** ./src/app/paginas/msj-confirm/msj-confirm-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsjConfirmPageRoutingModule": () => (/* binding */ MsjConfirmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _msj_confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msj-confirm.page */ 7269);




const routes = [
    {
        path: '',
        component: _msj_confirm_page__WEBPACK_IMPORTED_MODULE_0__.MsjConfirmPage
    }
];
let MsjConfirmPageRoutingModule = class MsjConfirmPageRoutingModule {
};
MsjConfirmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MsjConfirmPageRoutingModule);



/***/ }),

/***/ 5294:
/*!***********************************************************!*\
  !*** ./src/app/paginas/msj-confirm/msj-confirm.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsjConfirmPageModule": () => (/* binding */ MsjConfirmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _msj_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msj-confirm-routing.module */ 7613);
/* harmony import */ var _msj_confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msj-confirm.page */ 7269);







let MsjConfirmPageModule = class MsjConfirmPageModule {
};
MsjConfirmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _msj_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.MsjConfirmPageRoutingModule
        ],
        declarations: [_msj_confirm_page__WEBPACK_IMPORTED_MODULE_1__.MsjConfirmPage]
    })
], MsjConfirmPageModule);



/***/ }),

/***/ 7269:
/*!*********************************************************!*\
  !*** ./src/app/paginas/msj-confirm/msj-confirm.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsjConfirmPage": () => (/* binding */ MsjConfirmPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_msj_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./msj-confirm.page.html */ 9326);
/* harmony import */ var _msj_confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msj-confirm.page.scss */ 632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);






let MsjConfirmPage = class MsjConfirmPage {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.user$ = this.authSvc.afAuth.user;
    }
    ngOnInit() {
    }
    onSendEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.authSvc.sendVerifcationEmail();
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    redirectLogin() {
        this.router.navigate(['/login']);
    }
};
MsjConfirmPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
MsjConfirmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-msj-confirm',
        template: _raw_loader_msj_confirm_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_msj_confirm_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MsjConfirmPage);



/***/ }),

/***/ 632:
/*!***********************************************************!*\
  !*** ./src/app/paginas/msj-confirm/msj-confirm.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mat-icon {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 27px;\n  width: 27px;\n  padding-top: 16px;\n}\n\n.box {\n  margin: 70px auto;\n  width: 300px;\n  height: 50px;\n  text-align: center;\n  padding-bottom: 40%;\n}\n\n.centrar {\n  text-align: center;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zai1jb25maXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoibXNqLWNvbmZpcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIG1hcmdpbjogNzBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwJTtcclxufVxyXG5cclxuLmNlbnRyYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufSJdfQ== */");

/***/ }),

/***/ 9326:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/msj-confirm/msj-confirm.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Confirmación</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"user$ | async as user\">\r\n    <ion-card>\r\n        <div class=\"box\">\r\n            <h2>Gracias por registrase!</h2>\r\n            <p>Enviamos un correo de confirmacion a la cuenta </p>\r\n            <p><strong>{{user.email}}</strong></p>\r\n            <ion-button type=\"submit\" color=\"primary\" expand=\"block\" (click)=\"onSendEmail()\">Reenviar confirmación</ion-button>\r\n            <ion-button type=\"submit\" color=\"primary\" expand=\"block\" (click)=\"redirectLogin()\">Iniciar Sesión</ion-button>\r\n        </div>\r\n    </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_msj-confirm_msj-confirm_module_ts.js.map