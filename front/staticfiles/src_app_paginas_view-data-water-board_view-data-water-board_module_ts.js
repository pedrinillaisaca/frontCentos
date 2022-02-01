(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_view-data-water-board_view-data-water-board_module_ts"],{

/***/ 659:
/*!***************************************************************************************!*\
  !*** ./src/app/paginas/view-data-water-board/view-data-water-board-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDataWaterBoardPageRoutingModule": () => (/* binding */ ViewDataWaterBoardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _view_data_water_board_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-data-water-board.page */ 6036);




const routes = [
    {
        path: '',
        component: _view_data_water_board_page__WEBPACK_IMPORTED_MODULE_0__.ViewDataWaterBoardPage
    }
];
let ViewDataWaterBoardPageRoutingModule = class ViewDataWaterBoardPageRoutingModule {
};
ViewDataWaterBoardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewDataWaterBoardPageRoutingModule);



/***/ }),

/***/ 1910:
/*!*******************************************************************************!*\
  !*** ./src/app/paginas/view-data-water-board/view-data-water-board.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDataWaterBoardPageModule": () => (/* binding */ ViewDataWaterBoardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _view_data_water_board_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-data-water-board-routing.module */ 659);
/* harmony import */ var _view_data_water_board_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-data-water-board.page */ 6036);







let ViewDataWaterBoardPageModule = class ViewDataWaterBoardPageModule {
};
ViewDataWaterBoardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_data_water_board_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewDataWaterBoardPageRoutingModule
        ],
        declarations: [_view_data_water_board_page__WEBPACK_IMPORTED_MODULE_1__.ViewDataWaterBoardPage]
    })
], ViewDataWaterBoardPageModule);



/***/ }),

/***/ 6036:
/*!*****************************************************************************!*\
  !*** ./src/app/paginas/view-data-water-board/view-data-water-board.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDataWaterBoardPage": () => (/* binding */ ViewDataWaterBoardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_view_data_water_board_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view-data-water-board.page.html */ 3083);
/* harmony import */ var _view_data_water_board_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-data-water-board.page.scss */ 2048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelo/WaterBoard */ 4349);
/* harmony import */ var src_app_services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/serv-waterboard-db.service */ 2499);






let ViewDataWaterBoardPage = class ViewDataWaterBoardPage {
    constructor(servWater) {
        this.servWater = servWater;
        this.button_bool = true;
        this.waterboard = new src_app_modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_2__.WaterBoard(); //incializamos el objeto
        this.uidWater = "zMVpBo6VoBI3xNJSnhvS";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.waterboardA = yield this.servWater.getWaterBoardById(this.uidWater);
            console.log(this.waterboardA.nombre);
            this.waterboard = this.waterboardA;
        });
    }
    funcionEnable() {
        this.button_bool = !this.button_bool;
    }
    editWaterBoard() {
    }
};
ViewDataWaterBoardPage.ctorParameters = () => [
    { type: src_app_services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_3__.ServWaterboardDbService }
];
ViewDataWaterBoardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-view-data-water-board',
        template: _raw_loader_view_data_water_board_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_data_water_board_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewDataWaterBoardPage);



/***/ }),

/***/ 2048:
/*!*******************************************************************************!*\
  !*** ./src/app/paginas/view-data-water-board/view-data-water-board.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWRhdGEtd2F0ZXItYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3083:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/view-data-water-board/view-data-water-board.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Junta de Agua</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content >\n  <form  #form=\"ngForm\" (ngSubmit)=\"regWaterBoard(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>datos</h3>\n          </div>\n          <div padding>       \n            <ion-item>\n              <ion-input [disabled]=\"button_bool\" name=\"name\" type=\"name\" placeholder=\"name\"  [(ngModel)]='waterboard.nombre' required></ion-input>\n            </ion-item>\n            <!-- <ion-item>\n              <ion-input [disabled]=\"button_bool\" name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input [disabled]=\"button_bool\" name=\"confirm\" type=\"password\" placeholder=\"Password again\" ngModel required></ion-input>\n            </ion-item> -->\n          </div>\n          <div padding>\n            <ion-button *ngIf=\"!button_bool\"  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Register</ion-button>            \n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <button (click)=\"funcionEnable()\"\n        type=\"submit\" class=\"btn btn-warning add_to_cart\">\n     update\n</button>\n</ion-content>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" \n      *ngFor=\"let foto of waterboard.fotos_paths; index as position\">\n      <ion-img [src]='foto'></ion-img>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_view-data-water-board_view-data-water-board_module_ts.js.map