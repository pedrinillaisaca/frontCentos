(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_view-data-water-board_view-data-water-board_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_view_data_water_board_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view-data-water-board.page.html */ 3083);
/* harmony import */ var _view_data_water_board_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-data-water-board.page.scss */ 2048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelo/WaterBoard */ 4349);
/* harmony import */ var src_app_services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/serv-waterboard-db.service */ 2499);
/* harmony import */ var _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/app-launcher/ngx */ 812);
/* harmony import */ var _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/notificaciones.service */ 1319);
/* harmony import */ var _services_back_button_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/back-button.service */ 7219);










let ViewDataWaterBoardPage = class ViewDataWaterBoardPage {
    constructor(servWater, router, route, appLauncher, notifi, servBac) {
        this.servWater = servWater;
        this.router = router;
        this.route = route;
        this.appLauncher = appLauncher;
        this.notifi = notifi;
        this.servBac = servBac;
        this.button_bool = true;
        this.waterboard = new src_app_modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_2__.WaterBoard(); //incializamos el objeto
        this.uidWater = "";
        this.pswpElement = document.querySelectorAll('.pswp')[0];
        this.waterboard.nombre = '';
        this.waterboard.provincia = '';
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.waterboardA = yield this.servWater.getWaterBoardById(this.uidWater);
            this.waterboard = this.waterboardA;
            console.log(this.waterboardA);
        });
    }
    runMap() {
        console.log("PEDRO ILLAISACA");
        const options = {};
        options.uri = 'com.google.android.apps.maps://google.nvigation:q=22.659239,88.435534&mode=1'; //ESTA LINEA ES MUY IMPORTANTE !!!!!!!
        options.packageName = 'com.google.android.apps.maps';
        //console.log("INFORMACIONS DE LAS OPCIONES ",options)
        this.appLauncher.canLaunch(options) //canLaunch(options)
            .then((canLaunch) => {
            this.appLauncher.launch(options);
        })
            .catch((error) => { console.log("Error desconicido"); });
    }
    funcionEnable() {
        this.button_bool = !this.button_bool;
    }
    editWaterBoard() {
        this.servWater.borrarWaterBoard(this.waterboard.uid);
    }
    refirectMapa(ubication) {
        console.log(ubication);
        let params = {
            queryParams: {
                ubicationParam: ubication
            }
        };
        this.router.navigate(["/view-all-waterboard"], params);
    }
    viewImages() {
        let params = {
            queryParams: {
                uid: this.uidWater
            }
        };
        this.router.navigate(["/view-image"], params);
    }
    deletjunta() {
        this.notifi.confirmacionEliminarJunta("Advertencia", " Se borrará de forma permanente!", this.waterboard.uid);
    }
    editarJunta() {
        let params = {
            queryParams: {
                uidParam: this.waterboard.uid
            }
        };
        this.router.navigate(["/edit-water-board"], params);
    }
};
ViewDataWaterBoardPage.ctorParameters = () => [
    { type: src_app_services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_3__.ServWaterboardDbService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_4__.AppLauncher },
    { type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__.NotificacionesService },
    { type: _services_back_button_service__WEBPACK_IMPORTED_MODULE_6__.BackButtonService }
];
ViewDataWaterBoardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".centrar {\n  text-align: center;\n}\n\n.mat-icon {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 27px;\n  width: 27px;\n}\n\n.box {\n  margin: 70px auto;\n  width: 300px;\n  height: 70px;\n  margin-top: 30px;\n  margin-bottom: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZGF0YS13YXRlci1ib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoidmlldy1kYXRhLXdhdGVyLWJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICB3aWR0aDogMjdweDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBtYXJnaW46IDcwcHggYXV0bztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Información detallada sobre la junta</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item>\r\n        <ion-label>\r\n            <div class=\"centrar\">\r\n                <h4 class=\"ion-text-uppercase\">Informacion a detalla de la junta de agua</h4>\r\n            </div>\r\n        </ion-label>\r\n    </ion-item>\r\n    <ion-card>\r\n        <ion-row style=\"border-bottom: groove;\">\r\n            <ion-col col-4>\r\n                <ion-label class=\"ion-text-uppercase\">Atributo</ion-label>\r\n            </ion-col>\r\n            <ion-col col-4>\r\n                <ion-label class=\"ion-text-uppercase\">detalle</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"border-bottom: groove;\">\r\n            <ion-col col-4>\r\n                <ion-label>Nombre de la junta:</ion-label>\r\n            </ion-col>\r\n            <ion-col col-4>\r\n                <ion-label>{{waterboard.nombre}}</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"border-bottom: groove;\">\r\n            <ion-col col-4>\r\n                <ion-label>Se encuentra en la provincia de:</ion-label>\r\n            </ion-col>\r\n            <ion-col col-4>\r\n                <ion-label>{{waterboard.provincia}}</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"border-bottom: groove;\">\r\n            <ion-col col-4>\r\n                <ion-label>Responsables de la junta:</ion-label>\r\n            </ion-col>\r\n            <ion-col col-4>\r\n                <ion-row *ngFor=\"let responzable of waterboard.listaResponsables\">\r\n                    <ion-label>{{responzable}}</ion-label>\r\n                </ion-row>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"border-bottom: groove;\">\r\n            <ion-col col-4>\r\n                <ion-label>Ubicacion Geográfica:</ion-label>\r\n            </ion-col>\r\n            <ion-col col-4>\r\n                <ion-label>Pulse en el icono para ver la ubicaion\r\n                    <ion-icon class=\"mat-icon\" color=\"danger\" name='location' (click)='refirectMapa(waterboard.ubicacion)'></ion-icon>\r\n                </ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"border-bottom: groove;\">\r\n            <ion-col col-4>\r\n                <ion-label>Estado de la junta:</ion-label>\r\n            </ion-col>\r\n            <ion-col col-4 *ngIf=\"waterboard.estado; else otro\">\r\n                <ion-label>Activa</ion-label>\r\n                <ng-template #otro>\r\n                    <ion-col>\r\n                        <ion-label>Inactiva</ion-label>\r\n                    </ion-col>\r\n                </ng-template>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"border-bottom: groove;\">\r\n            <ion-col col-4>\r\n                <ion-label>Tipo de Monitoreo:</ion-label>\r\n            </ion-col>\r\n            <ion-col col-4>\r\n                <ion-label>{{waterboard.tipoMonitoreo}}</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"border-bottom: groove;\">\r\n            <ion-col col-4>\r\n                <ion-label>Registrado por:</ion-label>\r\n            </ion-col>\r\n            <ion-col col-4>\r\n                <ion-label>{{waterboard.registradorName}}</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"border-bottom: groove;\">\r\n            <ion-col col-4>\r\n                <ion-label>Comentario:</ion-label>\r\n            </ion-col>\r\n            <ion-col col-4>\r\n                <ion-label>{{waterboard.comentario}}</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"border-bottom: groove;\">\r\n            <ion-col col-4>\r\n                <ion-label>Fotografias:</ion-label>\r\n            </ion-col>\r\n            <ion-col col-4>\r\n                <ion-label>Pulse en el icono para ver las imágenes\r\n                    <ion-icon class=\"mat-icon\" color=\"primary\" name='images' (click)='viewImages()'></ion-icon>\r\n                </ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <div class=\"box\">\r\n            <ion-col>\r\n                <ion-button (click)=\"editarJunta()\" size=\"short\" type=\"submit\" expand=\"block\">Editar junta</ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n                <ion-button (click)=\"deletjunta()\" size=\"short\" color=\"danger\" expand=\"block\">Eliminar junta</ion-button>\r\n            </ion-col>\r\n        </div>\r\n\r\n        <!-- <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"6\" *ngFor=\"let foto of waterboard.fotos_paths; index as position\">\r\n                    <ion-img [src]='foto'></ion-img>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid> -->\r\n    </ion-card>\r\n    <ion-fab vertical='bottom' horizontal='left' slot=\"fixed\">\r\n        <ion-fab-button (click)=\"servBac.backApp()\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n<!-- <ion-content>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"regWaterBoard(form)\">\r\n    <ion-grid>\r\n      <ion-row color=\"primary\" justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div text-center>\r\n            <h3>datos</h3>\r\n          </div>\r\n          <div padding>\r\n            <ion-item>\r\n              <ion-input [disabled]=\"button_bool\" name=\"name\" type=\"name\" placeholder=\"name\"\r\n                [(ngModel)]='waterboard.nombre' required></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div padding>\r\n            <ion-button *ngIf=\"!button_bool\" size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">\r\n              Register</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n  <button (click)=\"funcionEnable()\" type=\"submit\" class=\"btn btn-warning add_to_cart\">\r\n    update\r\n  </button>\r\n</ion-content> \r\n\r\n============================================================================================================\r\n<ion-content>\r\n  <ion-text color=\"secondary\">\r\n    <h1>Nombre</h1>\r\n  </ion-text>\r\n  \r\n  <ion-text color=\"dark\">\r\n    <h2>{{waterboard.nombre }}</h2>\r\n  </ion-text>\r\n\r\n  <ion-text color=\"secondary\">\r\n    <h1>Provincia</h1>\r\n  </ion-text>\r\n  \r\n  <ion-text color=\"dark\">\r\n    <h2>{{waterboard.provincia }}</h2>\r\n  </ion-text>\r\n  \r\n\r\n\r\n\r\n</ion-content>-->");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_view-data-water-board_view-data-water-board_module_ts.js.map