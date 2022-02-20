(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_nosotros_nosotros_module_ts"],{

/***/ 1314:
/*!*************************************************************!*\
  !*** ./src/app/paginas/nosotros/nosotros-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NosotrosPageRoutingModule": () => (/* binding */ NosotrosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _nosotros_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nosotros.page */ 4009);




const routes = [
    {
        path: '',
        component: _nosotros_page__WEBPACK_IMPORTED_MODULE_0__.NosotrosPage
    }
];
let NosotrosPageRoutingModule = class NosotrosPageRoutingModule {
};
NosotrosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NosotrosPageRoutingModule);



/***/ }),

/***/ 4910:
/*!*****************************************************!*\
  !*** ./src/app/paginas/nosotros/nosotros.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NosotrosPageModule": () => (/* binding */ NosotrosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nosotros-routing.module */ 1314);
/* harmony import */ var _nosotros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nosotros.page */ 4009);







let NosotrosPageModule = class NosotrosPageModule {
};
NosotrosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__.NosotrosPageRoutingModule
        ],
        declarations: [_nosotros_page__WEBPACK_IMPORTED_MODULE_1__.NosotrosPage]
    })
], NosotrosPageModule);



/***/ }),

/***/ 4009:
/*!***************************************************!*\
  !*** ./src/app/paginas/nosotros/nosotros.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NosotrosPage": () => (/* binding */ NosotrosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_nosotros_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nosotros.page.html */ 4242);
/* harmony import */ var _nosotros_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nosotros.page.scss */ 349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let NosotrosPage = class NosotrosPage {
    constructor() { }
    ngOnInit() {
    }
};
NosotrosPage.ctorParameters = () => [];
NosotrosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-nosotros',
        template: _raw_loader_nosotros_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nosotros_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NosotrosPage);



/***/ }),

/***/ 349:
/*!*****************************************************!*\
  !*** ./src/app/paginas/nosotros/nosotros.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mat-icon {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 27px;\n  width: 27px;\n  padding-top: 16px;\n}\n\n.centrar1 {\n  text-align: center;\n  color: #17232A;\n  font-weight: 500;\n  font-size: large;\n  font-family: \"Segoe UI\";\n  padding-right: 20%;\n  padding-left: 20%;\n}\n\n.centrar {\n  text-align: justify;\n  color: #17232A;\n  font-weight: 500;\n  font-size: larget;\n  font-family: \"Segoe UI\";\n}\n\nimg.mediana {\n  width: 100px;\n  height: 100px;\n}\n\nimg.grande {\n  width: 350px;\n  height: 350px;\n}\n\nimg.grande1 {\n  width: 330px;\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vc290cm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6Im5vc290cm9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNlbnRyYXIxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMTcyMzJBO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5jZW50cmFyIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBjb2xvcjogIzE3MjMyQTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdldDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XHJcbn1cclxuXHJcbmltZy5tZWRpYW5hIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbmltZy5ncmFuZGUge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuaW1nLmdyYW5kZTEge1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 4242:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/nosotros/nosotros.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Nosotros</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-card class=\"centrar1\">\r\n                        <img class=\"grande\" src=\"../../../assets/nosotros.jpeg\" alt=\"\">\r\n                    </ion-card>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n\r\n                    <ion-card class=\"centrar\">\r\n                        <div>\r\n                            <p>Aplicativo realizado en conjunto con Cloud Computing Smart Cities & High Performance Computing grupo de Investigación de la Universidad Politécnica Salesiana.</p>\r\n                            <p>Enfocado principalmente en el registro de juntas de agua potable en el territorio ecuatoriano y alineado con el proyecto de Investigación “Sistema de telemonitoreo automático del nivel de cloro presente en el agua potabilizada\r\n                                en plantas de tratamiento pertenecientes a pequeñas comunidades rurales ubicadas en el territorio ecuatoriano” que dirige el Ing. MARCELO ESTEBAN FLORES VAZQUEZ Mst. Mgt. </p>\r\n                        </div>\r\n                    </ion-card>\r\n\r\n                </ion-col>\r\n\r\n\r\n            </ion-row>\r\n\r\n        </ion-grid>\r\n\r\n    </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_nosotros_nosotros_module_ts.js.map