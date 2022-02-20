(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_view-image_view-image_module_ts"],{

/***/ 4349:
/*!**************************************!*\
  !*** ./src/app/modelo/WaterBoard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaterBoard": () => (/* binding */ WaterBoard)
/* harmony export */ });
class WaterBoard {
    constructor() {
        this.fotos_paths = [];
        this.listaResponsables = [];
        this.deleted = 'false';
    }
}


/***/ }),

/***/ 170:
/*!*****************************************************************!*\
  !*** ./src/app/paginas/view-image/view-image-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewImagePageRoutingModule": () => (/* binding */ ViewImagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _view_image_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-image.page */ 3132);




const routes = [
    {
        path: '',
        component: _view_image_page__WEBPACK_IMPORTED_MODULE_0__.ViewImagePage
    }
];
let ViewImagePageRoutingModule = class ViewImagePageRoutingModule {
};
ViewImagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewImagePageRoutingModule);



/***/ }),

/***/ 3728:
/*!*********************************************************!*\
  !*** ./src/app/paginas/view-image/view-image.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewImagePageModule": () => (/* binding */ ViewImagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _view_image_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-image-routing.module */ 170);
/* harmony import */ var _view_image_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-image.page */ 3132);







let ViewImagePageModule = class ViewImagePageModule {
};
ViewImagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_image_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewImagePageRoutingModule
        ],
        declarations: [_view_image_page__WEBPACK_IMPORTED_MODULE_1__.ViewImagePage]
    })
], ViewImagePageModule);



/***/ }),

/***/ 3132:
/*!*******************************************************!*\
  !*** ./src/app/paginas/view-image/view-image.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewImagePage": () => (/* binding */ ViewImagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_view_image_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view-image.page.html */ 2602);
/* harmony import */ var _view_image_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-image.page.scss */ 91);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/serv-waterboard-db.service */ 2499);
/* harmony import */ var _modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modelo/WaterBoard */ 4349);
/* harmony import */ var _services_back_button_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/back-button.service */ 7219);








let ViewImagePage = class ViewImagePage {
    constructor(router, route, servWater, back) {
        this.router = router;
        this.route = route;
        this.servWater = servWater;
        this.back = back;
        this.waterboard = new _modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_3__.WaterBoard(); //incializamos el objeto
        this.uidWater = 'CgeLjhplzuTykLpe2BuF';
        this.route.queryParams.subscribe(params => {
            try {
                if (this.router.getCurrentNavigation().extras.queryParams) {
                    let param = this.router.getCurrentNavigation().extras.queryParams.uid;
                    // this.uidWater=this.router.getCurrentNavigation().extras.queryParams.infUser; 
                    console.log(param);
                    this.uidWater = param;
                }
            }
            catch (error) {
                console.log("Es mi primera vez");
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.waterboardA = yield this.servWater.getWaterBoardById(this.uidWater);
            this.waterboard = this.waterboardA;
            console.log(this.waterboardA);
        });
    }
    swipeNext() {
        this.slides.slideNext();
    }
    swipePrev() {
        this.slides.slidePrev();
    }
};
ViewImagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_2__.ServWaterboardDbService },
    { type: _services_back_button_service__WEBPACK_IMPORTED_MODULE_4__.BackButtonService }
];
ViewImagePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['mySlider',] }]
};
ViewImagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-view-image',
        template: _raw_loader_view_image_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_image_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewImagePage);



/***/ }),

/***/ 91:
/*!*********************************************************!*\
  !*** ./src/app/paginas/view-image/view-image.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-slides {\n  height: 130%;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n\nimg.galeria {\n  padding-left: 10%;\n  padding-right: 10%;\n  padding-top: 10%;\n  padding-bottom: 10%;\n  width: 30px;\n  height: 30px;\n}\n\n.pic {\n  width: 200px;\n  height: 120px;\n}\n\n.zoom {\n  position: absolute;\n  width: 0px;\n  transition: width 0.3s linear 0s;\n  z-index: 10;\n}\n\n.pic:hover + .zoom {\n  width: 400px;\n}\n\nion-content {\n  --ion-background-color: #111D12;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxnQ0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0oiLCJmaWxlIjoidmlldy1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTMwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmltZy5nYWxlcmlhIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnBpYyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4uem9vbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGxpbmVhciAwcztcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgbGluZWFyIDBzO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5waWM6aG92ZXIrLnpvb20ge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTExRDEyO1xyXG59Il19 */");

/***/ }),

/***/ 2602:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/view-image/view-image.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Fotos de la junta</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-tabs>\r\n        <ion-tab>\r\n            <ion-slides pager=\"true\" pager=\"false\" #mySlider>\r\n                <ion-slide *ngFor=\"let image of waterboard.fotos_paths\">\r\n                    <!-- <ion-card>\r\n                    </ion-card> -->\r\n                    <ion-img class=\"pic\" [src]='image'></ion-img>\r\n                    <ion-img class=\"zoom\" [src]='image'></ion-img>\r\n                </ion-slide>\r\n\r\n            </ion-slides>\r\n        </ion-tab>\r\n        <ion-tab-bar slot=\"bottom\">\r\n            <ion-tab-button (click)=\"swipePrev()\">\r\n                <ion-icon name=\"arrow-undo-outline\"></ion-icon>\r\n            </ion-tab-button>\r\n            <ion-tab-button (click)=\"swipeNext()\">\r\n                <ion-icon name=\"arrow-redo-outline\"></ion-icon>\r\n            </ion-tab-button>\r\n        </ion-tab-bar>\r\n    </ion-tabs>\r\n    <!-- <ion-slides>\r\n        <ion-slide *ngFor=\"let image of waterboard.fotos_paths\">\r\n            <ion-card>\r\n                <ion-item>\r\n                    <ion-thumbnail slot=\"start\">\r\n                        <img [src]=\"image\">\r\n                    </ion-thumbnail>\r\n                </ion-item>\r\n            </ion-card>\r\n        </ion-slide>\r\n    </ion-slides> -->\r\n\r\n    <ion-fab vertical='bottom' horizontal='left' slot=\"fixed\" style=\"padding-bottom: 20%;\">\r\n        <ion-fab-button (click)=\"back.backApp()\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_view-image_view-image_module_ts.js.map