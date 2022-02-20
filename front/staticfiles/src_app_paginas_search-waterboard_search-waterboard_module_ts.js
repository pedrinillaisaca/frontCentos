(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_search-waterboard_search-waterboard_module_ts"],{

/***/ 3385:
/*!*******************************************************************************!*\
  !*** ./src/app/paginas/search-waterboard/search-waterboard-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchWaterboardPageRoutingModule": () => (/* binding */ SearchWaterboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _search_waterboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-waterboard.page */ 8612);




const routes = [
    {
        path: '',
        component: _search_waterboard_page__WEBPACK_IMPORTED_MODULE_0__.SearchWaterboardPage
    }
];
let SearchWaterboardPageRoutingModule = class SearchWaterboardPageRoutingModule {
};
SearchWaterboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchWaterboardPageRoutingModule);



/***/ }),

/***/ 3498:
/*!***********************************************************************!*\
  !*** ./src/app/paginas/search-waterboard/search-waterboard.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchWaterboardPageModule": () => (/* binding */ SearchWaterboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _search_waterboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-waterboard-routing.module */ 3385);
/* harmony import */ var _search_waterboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-waterboard.page */ 8612);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);








let SearchWaterboardPageModule = class SearchWaterboardPageModule {
};
SearchWaterboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _search_waterboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchWaterboardPageRoutingModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_search_waterboard_page__WEBPACK_IMPORTED_MODULE_1__.SearchWaterboardPage]
    })
], SearchWaterboardPageModule);



/***/ }),

/***/ 8612:
/*!*********************************************************************!*\
  !*** ./src/app/paginas/search-waterboard/search-waterboard.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchWaterboardPage": () => (/* binding */ SearchWaterboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_search_waterboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./search-waterboard.page.html */ 9766);
/* harmony import */ var _search_waterboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-waterboard.page.scss */ 8332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/serv-waterboard-db.service */ 2499);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);






let SearchWaterboardPage = class SearchWaterboardPage {
    // juntas1: Observable<WaterBoard[]>;
    constructor(servWater, router) {
        this.servWater = servWater;
        this.router = router;
        this.filterPost = '';
        this.filterWater = '';
        // juntas: WaterBoard[] = [];
        this.juntas = [];
        this.juntas1 = [];
        this.seleccionadoProv = '';
    }
    ngOnInit() {
        this.servWater.getWaterBoards().subscribe(juntaOne => {
            this.juntas = juntaOne;
            this.juntas1 = this.juntas;
            console.log(this.juntas1);
        });
        console.log(this.juntas1);
        // this.juntas1=this.servWater.getWaterBoards();
    }
    viewInforWater(param) {
        let params = {
            queryParams: {
                uid: param
            }
        };
        this.router.navigate(["/view-data-water-board"], params);
    }
};
SearchWaterboardPage.ctorParameters = () => [
    { type: src_app_services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_2__.ServWaterboardDbService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SearchWaterboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-search-waterboard',
        template: _raw_loader_search_waterboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_waterboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchWaterboardPage);



/***/ }),

/***/ 8332:
/*!***********************************************************************!*\
  !*** ./src/app/paginas/search-waterboard/search-waterboard.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("body {\n  background: #343d46;\n}\n\n.box {\n  padding-top: 5%;\n  padding-bottom: 2%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC13YXRlcmJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InNlYXJjaC13YXRlcmJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzM0M2Q0NjtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ 9766:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/search-waterboard/search-waterboard.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Búsqueda de Juntas de Agua</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <!-- -->\r\n        <div class=\"box\">\r\n            <!-- <ion-item>\r\n            </ion-item> -->\r\n            <!-- <ion-label>\r\n                <h1>Ingresa el nombre de una junta</h1>\r\n            </ion-label> -->\r\n            <ion-searchbar type=\"search\" id=\"search\" [(ngModel)]=\"filterWater\" placeholder=\"Ingrese el nombre de la junta \" name=\"filterWater\"></ion-searchbar>\r\n            <!-- <ion-input type=\"search\" id=\"search\" class=\"form-control\" name=\"filterWater\" placeholder=\"Ingrese el nombre de la junta \" [(ngModel)]=\"filterWater\"/>                 -->\r\n            <!-- <div class=\"container-1\">\r\n                <span class=\"icon\"><i class=\"fa fa-search\"></i></span>\r\n                <input type=\"search\" id=\"search\" [(ngModel)]=\"filterWater\" placeholder=\"Ingrese el nombre de la junta \" name=\"filterWater\" />\r\n            </div> -->\r\n        </div>\r\n\r\n        <div class=\"box\">\r\n            <ion-list>\r\n                <!-- <ion-list-header>\r\n                    </ion-list-header> -->\r\n                <ion-label>\r\n                    Selecciona una provincia\r\n                </ion-label>\r\n\r\n                <ion-item>\r\n                    <ion-label>Provincia</ion-label>\r\n                    <ion-select value=\"seleccionadoProv\" [(ngModel)]=\"seleccionadoProv\" name=\"seleccionadoProv\" interface=\"popover\" placeholder=\"Selecione una provincia\">\r\n                        <ion-select-option value=\"\">Ninguna</ion-select-option>\r\n                        <ion-select-option value=\"Esmeraldas\">Esmeraldas</ion-select-option>\r\n                        <ion-select-option value=\"Manabí\">Manabí</ion-select-option>\r\n                        <ion-select-option value=\"Los Ríos\">Los Ríos</ion-select-option>\r\n                        <ion-select-option value=\"Santa Elena\">Santa Elena</ion-select-option>\r\n                        <ion-select-option value=\"Guayas\">Guayas</ion-select-option>\r\n                        <ion-select-option value=\"Santo Domingo de los Tsáchilas\">Santo Domingo de los Tsáchilas</ion-select-option>\r\n                        <ion-select-option value=\"El Oro\">El Oro</ion-select-option>\r\n                        <ion-select-option value=\"Azuay\">Azuay</ion-select-option>\r\n                        <ion-select-option value=\"Bolívar\">Bolívar</ion-select-option>\r\n                        <ion-select-option value=\"Cañar\">Cañar</ion-select-option>\r\n                        <ion-select-option value=\"Carchi\">Carchi</ion-select-option>\r\n                        <ion-select-option value=\"Cotopaxi\">Cotopaxi</ion-select-option>\r\n                        <ion-select-option value=\"Chimborazo\">Chimborazo</ion-select-option>\r\n                        <ion-select-option value=\"Imbabura\">Imbabura</ion-select-option>\r\n                        <ion-select-option value=\"Loja\">Loja</ion-select-option>\r\n                        <ion-select-option value=\"Pichincha\">Pichincha</ion-select-option>\r\n                        <ion-select-option value=\"Tungurahua\">Tungurahua</ion-select-option>\r\n                        <ion-select-option value=\"Morona Santiago\">Morona Santiago</ion-select-option>\r\n                        <ion-select-option value=\"Napo\">Napo</ion-select-option>\r\n                        <ion-select-option value=\"Orellana\">Orellana</ion-select-option>\r\n                        <ion-select-option value=\"Pastaza\">Pastaza</ion-select-option>\r\n                        <ion-select-option value=\"Sucumbíos\">Sucumbíos</ion-select-option>\r\n                        <ion-select-option value=\"Zamora Chinchipe\">Zamora Chinchipe</ion-select-option>\r\n                    </ion-select>\r\n                </ion-item>\r\n            </ion-list>\r\n        </div>\r\n\r\n\r\n        <!--  *ngIf='filterWater.length >=3'-->\r\n\r\n\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n        <div *ngIf='filterWater.length >=3  || seleccionadoProv !=\"\" '>\r\n\r\n            <ion-item-sliding *ngFor=\"let junta of juntas1 | filtroCoincident:filterWater | filtroProv:seleccionadoProv\">\r\n                <!-- <ion-item-sliding *ngFor=\"let junta of juntas1 | filtroCoincident:filterWater\"> -->\r\n\r\n                <ion-item (click)=\"viewInforWater(junta.uid)\" style=\"border-bottom: groove; text-align: center;\">\r\n                    <!-- style=\"text-align: center;\" -->\r\n                    <div>\r\n\r\n                        <ion-avatar slot=\"start\">\r\n                            <img [src]=junta.fotos_paths[0]>\r\n                        </ion-avatar>\r\n                        <ion-label>\r\n                            <h2>{{junta.nombre}}</h2>\r\n                        </ion-label>\r\n                    </div>\r\n                </ion-item>\r\n                <ion-reorder slot=\"end\"></ion-reorder>\r\n            </ion-item-sliding>\r\n        </div>\r\n    </ion-card>\r\n\r\n    <!-- <ion-button (click)=\"verTipo()\" size=\"large\" type=\"submit\" expand=\"block\">Editar junta</ion-button>\r\n    <ion-button (click)=\"verTipo()\" size=\"large\" type=\"danger\" expand=\"block\">Eliminar junta</ion-button> -->\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_search-waterboard_search-waterboard_module_ts.js.map