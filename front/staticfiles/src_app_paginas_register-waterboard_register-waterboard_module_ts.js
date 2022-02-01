(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_register-waterboard_register-waterboard_module_ts"],{

/***/ 1114:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 1091:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1114);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3384)).then(m => new m.GeolocationWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5831:
/*!****************************************************************!*\
  !*** ./src/app/componentes/googlemaps/googlemaps.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglemapsComponent": () => (/* binding */ GooglemapsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_googlemaps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./googlemaps.component.html */ 1950);
/* harmony import */ var _googlemaps_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlemaps.component.scss */ 7369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _googlemaps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./googlemaps.service */ 2326);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/geolocation */ 1091);








let GooglemapsComponent = class GooglemapsComponent {
    constructor(renderer, document, googlemapsService, modalController) {
        this.renderer = renderer;
        this.document = document;
        this.googlemapsService = googlemapsService;
        this.modalController = modalController;
        this.position = {
            lat: -2.898116,
            lng: -78.99958149999999
        };
        this.positionn = {
            lat: -2.898116,
            lng: -78.99958149999999
        };
        this.label = {
            titulo: 'Ubicación',
            subtitulo: 'uid'
        };
    }
    ngOnInit() {
        this.init();
        console.log('position ->', this.positionn);
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.googlemapsService.init(this.renderer, this.document).then(() => {
                this.initMap();
            }).catch((err) => {
                console.log(err);
            });
        });
    }
    initMap() {
        const position = this.positionn;
        let latLng = new google.maps.LatLng(position.lat, position.lng);
        let mapOptions = {
            center: latLng,
            zoom: 15,
            disableDefaultUI: true,
            clickableIcons: false,
        };
        this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            draggable: false,
        });
        this.clickHandleEvent();
        this.infowindow = new google.maps.InfoWindow();
        this.addMarker(position);
        this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);
    }
    clickHandleEvent() {
        this.map.addListener('click', (event) => {
            const position = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            };
            this.addMarker(position);
        });
    }
    addMarker(position) {
        let latLng = new google.maps.LatLng(position.lat, position.lng);
        this.marker.setPosition(latLng);
        this.map.panTo(position);
        this.positionSet = position;
    }
    setInfoWindow(marker, titulo, subtitulo) {
        const contentString = '<div id="contentInsideMap">' +
            '<div>' +
            '</div>' +
            '<p style="font-weight: bold; margin-bottom: 5px;">' + titulo + '</p>' +
            '<div id="bodyContent">' +
            '<p class"normal m-0">'
            + subtitulo + '</p>' +
            '</div>' +
            '</div>';
        this.infowindow.setContent(contentString);
        this.infowindow.open(this.map, marker);
    }
    mylocationn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('mylocation() click');
            const printCurrentPosition = () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition();
                console.log('Current position:========>', coordinates);
                const position = {
                    lat: coordinates.coords.latitude,
                    lng: coordinates.coords.longitude,
                };
                this.addMarker(position);
            });
        });
    }
    mylocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('mylocation() click');
            yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition().then((res) => {
                console.log('mylocation() -> get ', res);
                const position = {
                    lat: res.coords.latitude,
                    lng: res.coords.longitude,
                };
                this.addMarker(position);
            });
        });
    }
    aceptar() {
        console.log('click aceptar -> ', this.positionSet);
        this.modalController.dismiss({ pos: this.positionSet });
    }
};
GooglemapsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2 },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT,] }] },
    { type: _googlemaps_service__WEBPACK_IMPORTED_MODULE_2__.GooglemapsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
GooglemapsComponent.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    divMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['map',] }]
};
GooglemapsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-googlemaps',
        template: _raw_loader_googlemaps_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_googlemaps_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GooglemapsComponent);



/***/ }),

/***/ 2326:
/*!**************************************************************!*\
  !*** ./src/app/componentes/googlemaps/googlemaps.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglemapsService": () => (/* binding */ GooglemapsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);



let GooglemapsService = class GooglemapsService {
    constructor() {
        // AIzLSyCzwRcOLLgw9xfAaIt11HD523Q69g62J3Z
        this.apiKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ApiKeyGoogleMaps;
        this.mapsLoaded = false;
    }
    init(renderer, document) {
        return new Promise((resolve) => {
            if (this.mapsLoaded) {
                console.log('google is preview loaded');
                resolve(true);
                return;
            }
            const script = renderer.createElement('script');
            script.id = 'googleMaps';
            window['mapInit'] = () => {
                this.mapsLoaded = true;
                if (google) {
                    console.log('google is loaded');
                }
                else {
                    console.log('google is not Defined');
                }
                resolve(true);
                return;
            };
            if (this.apiKey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
            }
            else {
                script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
            }
            renderer.appendChild(document.body, script);
        });
    }
};
GooglemapsService.ctorParameters = () => [];
GooglemapsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GooglemapsService);



/***/ }),

/***/ 1503:
/*!***********************************************************************************!*\
  !*** ./src/app/paginas/register-waterboard/register-waterboard-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterWaterboardPageRoutingModule": () => (/* binding */ RegisterWaterboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_waterboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-waterboard.page */ 122);




const routes = [
    {
        path: '',
        component: _register_waterboard_page__WEBPACK_IMPORTED_MODULE_0__.RegisterWaterboardPage
    }
];
let RegisterWaterboardPageRoutingModule = class RegisterWaterboardPageRoutingModule {
};
RegisterWaterboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterWaterboardPageRoutingModule);



/***/ }),

/***/ 5180:
/*!***************************************************************************!*\
  !*** ./src/app/paginas/register-waterboard/register-waterboard.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterWaterboardPageModule": () => (/* binding */ RegisterWaterboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_waterboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-waterboard-routing.module */ 1503);
/* harmony import */ var _register_waterboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-waterboard.page */ 122);







let RegisterWaterboardPageModule = class RegisterWaterboardPageModule {
};
RegisterWaterboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_waterboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterWaterboardPageRoutingModule
        ],
        declarations: [_register_waterboard_page__WEBPACK_IMPORTED_MODULE_1__.RegisterWaterboardPage]
    })
], RegisterWaterboardPageModule);



/***/ }),

/***/ 122:
/*!*************************************************************************!*\
  !*** ./src/app/paginas/register-waterboard/register-waterboard.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterWaterboardPage": () => (/* binding */ RegisterWaterboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_waterboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-waterboard.page.html */ 8474);
/* harmony import */ var _register_waterboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-waterboard.page.scss */ 6649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_componentes_googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/componentes/googlemaps/googlemaps.component */ 5831);
/* harmony import */ var src_app_modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modelo/WaterBoard */ 4349);
/* harmony import */ var src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/foto.service */ 7535);
/* harmony import */ var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notificaciones.service */ 1319);
/* harmony import */ var src_app_services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/serv-waterboard-db.service */ 2499);











let RegisterWaterboardPage = class RegisterWaterboardPage {
    constructor(servWaterdb, notifi, router, svrPhoto, loadingController, menucontroler, modalController) {
        this.servWaterdb = servWaterdb;
        this.notifi = notifi;
        this.router = router;
        this.svrPhoto = svrPhoto;
        this.loadingController = loadingController;
        this.menucontroler = menucontroler;
        this.modalController = modalController;
        this.waterboard = new src_app_modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_3__.WaterBoard(); //incializamos el objeto
    }
    ngOnInit() {
    }
    regWaterBoard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            yield this.savedPhotos();
            console.log(this.waterboard);
            this.servWaterdb.saveWaterBoard(this.waterboard);
            this.notifi.notificacionToast("Guardado Correctamente");
            this.loading.dismiss();
        });
    }
    savedPhotos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.waterboard.fotos_paths = yield this.svrPhoto.savedFirestorage();
        });
    }
    addPhotos() {
        this.router.navigate(['/galery']);
    }
    // ngOnDestroy():void{
    //   console.log('DEstroy')
    //   this.svrPhoto.clearStorage()
    // }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'normal',
                message: 'guardando...',
            });
            yield this.loading.present();
        });
    }
    addDirection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const ubicacion = this.waterboard.ubicacion;
            let positionInput = {
                lat: 0,
                lng: 0,
            };
            if (ubicacion !== null) {
                positionInput = ubicacion;
            }
            const modalAdd = yield this.modalController.create({
                component: src_app_componentes_googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_2__.GooglemapsComponent,
                mode: 'ios',
                swipeToClose: true,
                componentProps: { position: positionInput }
            });
            yield modalAdd.present();
            const { data } = yield modalAdd.onWillDismiss();
            if (data) {
                console.log('data -> ', data);
                this.waterboard.ubicacion = data.pos;
                console.log('this.cliente -> ', this.waterboard);
            }
        });
    }
};
RegisterWaterboardPage.ctorParameters = () => [
    { type: src_app_services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_6__.ServWaterboardDbService },
    { type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__.NotificacionesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_4__.FotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
RegisterWaterboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-register-waterboard',
        template: _raw_loader_register_waterboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_waterboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterWaterboardPage);



/***/ }),

/***/ 7369:
/*!******************************************************************!*\
  !*** ./src/app/componentes/googlemaps/googlemaps.component.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".map {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.miubicacion {\n  position: fixed;\n  bottom: 0px;\n  background: #ffd740;\n}\n\n.aceptar {\n  position: fixed;\n  top: 50px;\n  right: 5px;\n  background: #80d894;\n}\n\n.search {\n  position: fixed;\n  top: 45px;\n  left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZW1hcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFDSiIsImZpbGUiOiJnb29nbGVtYXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWl1YmljYWNpb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDBweDsgIFxyXG4gIGJhY2tncm91bmQ6ICNmZmQ3NDA7XHJcbn1cclxuXHJcbi5hY2VwdGFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODBkODk0O1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNDVweDtcclxuICAgIGxlZnQ6IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 6649:
/*!***************************************************************************!*\
  !*** ./src/app/paginas/register-waterboard/register-waterboard.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci13YXRlcmJvYXJkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1950:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/googlemaps/googlemaps.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n     <ion-buttons slot=\"start\">\n        <ion-button (click)=\"modalController.dismiss()\">\n           <ion-icon name=\"arrow-back\" color=\"dark\"></ion-icon>\n        </ion-button>\n     </ion-buttons>\n     <ion-title class=\"normal ion-text-wrap\">\n        Ubica el selector en la ubicación deseada\n     </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<div #map class=\"map\">\n\n</div>\n\n\n<ion-chip class=\"aceptar\" (click)=\"aceptar()\">\n  <ion-label class=\"normal\">Aceptar</ion-label>\n  <ion-icon name=\"checkmark\" ></ion-icon>\n</ion-chip>\n\n\n\n<ion-chip class=\"miubicacion\" (click)=\"mylocation()\">\n  <ion-label class=\"normal\">Mi ubicación actual</ion-label>\n  <ion-icon name=\"locate\" ></ion-icon>\n</ion-chip>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ 8474:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/register-waterboard/register-waterboard.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Registro junta de Agua</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content >\n  <form  #form=\"ngForm\" (ngSubmit)=\"regWaterBoard(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>registro junta de  Agua</h3>\n          </div>\n          <div padding>       \n            <ion-item>\n              <ion-input name=\"name\" type=\"name\"  [(ngModel)]='waterboard.nombre' required></ion-input>\n            </ion-item>\n             <ion-item (click)=\"addDirection()\">\n              <ion-label class=\"normal\">\n                Ubicación\n             </ion-label>\n             <ion-buttons slot=\"end\">\n               <ion-button>\n                    <ion-icon slot=\"icon-only\" color=\"danger\" name=\"location\"></ion-icon>\n               </ion-button>\n             </ion-buttons>\n            </ion-item>\n            <!--<ion-item>\n              <ion-input name=\"confirm\" type=\"password\" placeholder=\"Password again\" ngModel required></ion-input>\n            </ion-item> -->\n          </div>\n          <div padding>\n            <ion-button  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Register</ion-button>            \n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <ion-fab vertical='bottom' horizontal='left' slot=\"fixed\">    \n\n    <ion-fab-button (click)=\"addPhotos()\">\n      \n      <ion-icon name=\"images\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n\n  \n");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_register-waterboard_register-waterboard_module_ts.js.map