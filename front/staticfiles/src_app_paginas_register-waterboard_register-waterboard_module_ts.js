(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_register-waterboard_register-waterboard_module_ts"],{

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_waterboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-waterboard-routing.module */ 1503);
/* harmony import */ var _register_waterboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-waterboard.page */ 122);







let RegisterWaterboardPageModule = class RegisterWaterboardPageModule {
};
RegisterWaterboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _register_waterboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterWaterboardPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_waterboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-waterboard.page.html */ 8474);
/* harmony import */ var _register_waterboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-waterboard.page.scss */ 6649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_componentes_googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/componentes/googlemaps/googlemaps.component */ 5831);
/* harmony import */ var src_app_modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modelo/WaterBoard */ 4349);
/* harmony import */ var src_app_services_apigeodecoder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apigeodecoder.service */ 1656);
/* harmony import */ var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notificaciones.service */ 1319);
/* harmony import */ var src_app_services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/serv-waterboard-db.service */ 2499);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/photo.service */ 1957);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ 7556);














let RegisterWaterboardPage = class RegisterWaterboardPage {
    constructor(servWaterdb, notifi, router, svrPhoto, loadingController, menucontroler, modalController, servApiGeoDeco, fb, authSvc) {
        this.servWaterdb = servWaterdb;
        this.notifi = notifi;
        this.router = router;
        this.svrPhoto = svrPhoto;
        this.loadingController = loadingController;
        this.menucontroler = menucontroler;
        this.modalController = modalController;
        this.servApiGeoDeco = servApiGeoDeco;
        this.fb = fb;
        this.authSvc = authSvc;
        this.waterboard = new src_app_modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_3__.WaterBoard();
        this.estadoW = true;
        this.user$ = this.authSvc.afAuth.user;
    }
    ngOnInit() {
        this.user$.subscribe(x => {
            this.waterboard.registradorName = x.displayName;
            this.waterboard.registradorUid = x.uid;
        });
        this.studentForm = this.fb.group({
            nombreEscuela: [''],
            infoStudent: this.fb.array([this.studentInfo()])
        });
    }
    regWaterBoard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.svrPhoto.photos.length == 0) {
                this.notifi.notiErrorConTiempo("Por favor tomar fotografías a la junta", 3000);
            }
            else {
                this.presentLoading();
                this.waterboard.fotos_paths = yield this.svrPhoto.savedFirestorage();
                this.loading.dismiss();
                this.waterboard.estado = this.estadoW;
                this.getResponzablesObj();
                this.servWaterdb.saveWaterBoard(this.waterboard);
                this.svrPhoto.clearStorage();
                this.notifi.notificacionToast("Guardado Correctamente");
                this.waterboard = new src_app_modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_3__.WaterBoard();
            }
        });
    }
    getResponzablesObj() {
        var aryy = this.studentForm.getRawValue().infoStudent;
        let listaResponsables = [];
        for (const property in aryy) {
            var res = '';
            res += aryy[property].nombre; //esto hay qu
            res += " ";
            res += aryy[property].apellido;
            listaResponsables.push(res);
            this.removeStudent(property);
        }
        this.waterboard.listaResponsables = listaResponsables;
        console.log(this.waterboard.listaResponsables);
    }
    addPhotos() {
        this.router.navigate(['/galery-present']);
    }
    // ngOnDestroy():void{
    //   console.log('DEstroy')
    //   this.svrPhoto.clearStorage()
    // }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'normal',
                message: 'guardando...',
            });
            yield this.loading.present();
        });
    }
    addDirection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                this.waterboard.ubicacion = data.pos;
                console.log('UBICACION -> ', this.waterboard.ubicacion);
                // this.waterboard.provincia=this.servApiGeoDeco.getGeoDecoder(this.waterboard.ubicacion.lat,this.waterboard.ubicacion.lng)
                this.obtenerProvincia();
            }
        });
    }
    obtenerProvincia() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const prov = yield this.servApiGeoDeco.getGeoDecoder(this.waterboard.ubicacion.lat, this.waterboard.ubicacion.lng);
                const array = prov.results;
                var index = 0;
                for (const property in array) {
                    index = parseInt(property);
                    // console.log(`${property}: ${array[property]}`);
                    // index=`${property}`
                }
                // console.log(array[index-1].formatted_address.split(',')[0])
                var provin = array[index - 1].formatted_address.split(',')[0];
                // console.log(provin)
                if (provin.split(' ').length == 3) {
                    var pr1 = provin.split(' ');
                    this.waterboard.provincia = pr1[pr1.length - 1];
                    // console.log(pr1[pr1.length-1])
                }
                else {
                    this.waterboard.provincia = provin;
                    // console.log(provin)
                }
            }
            catch (error) {
                console.log(`Error: =======> ${error}`);
            }
        });
    }
    change(e) {
        if (this.estadoW == false && this.estadoW == false) {
            e.checked = true;
        }
    }
    studentInfo() {
        return this.fb.group({
            nombre: [''],
            apellido: ['']
        });
    }
    getStudentInfo() {
        return this.studentForm.get('infoStudent');
    }
    addStudent() {
        this.getStudentInfo().push(this.studentInfo());
    }
    removeStudent(index) {
        this.getStudentInfo().removeAt(index);
    }
};
RegisterWaterboardPage.ctorParameters = () => [
    { type: src_app_services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_6__.ServWaterboardDbService },
    { type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__.NotificacionesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_apigeodecoder_service__WEBPACK_IMPORTED_MODULE_4__.ApigeodecoderService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService }
];
RegisterWaterboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-register-waterboard',
        template: _raw_loader_register_waterboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_waterboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterWaterboardPage);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mat-icon {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 27px;\n  width: 27px;\n  padding-top: 16px;\n}\n\n.centrar {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXdhdGVyYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJyZWdpc3Rlci13YXRlcmJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNlbnRyYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Registro junta de Agua</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <form #form=\"ngForm\" (ngSubmit)=\"regWaterBoard(form)\">\r\n            <ion-grid>\r\n                <ion-row color=\"primary\" justify-content-center>\r\n                    <ion-col>\r\n                        <div class=\"centrar\">\r\n                            <h3>Ingrese los siguientes datos</h3>\r\n                        </div>\r\n                        <div padding>\r\n                            <ion-item>\r\n                                <ion-label>Nombre de la junta de Agua</ion-label>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-input name=\"name\" type=\"name\" placeholder=\"Ingrese el nombre de la junta\" [(ngModel)]='waterboard.nombre'>\r\n                                    <ion-text color=\"danger\">*</ion-text>\r\n                                </ion-input>\r\n                            </ion-item>\r\n\r\n                            <ion-item>\r\n                                <ion-label>Tipo de Monitoreo</ion-label>\r\n                                <ion-select [(ngModel)]=\"waterboard.tipoMonitoreo\" name=\"tipoMonitoreo\" interface=\"popover\" placeholder=\"Seleccione un tipo de monitoreo\" required>\r\n                                    <ion-select-option value=\"Manual\">Manual</ion-select-option>\r\n                                    <ion-select-option value=\"Automático\">Automático</ion-select-option>\r\n                                    <ion-select-option value=\"Ninguno\">Ninguno</ion-select-option>\r\n                                </ion-select>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    Responsables\r\n                                </ion-label>\r\n                            </ion-item>\r\n                            <form [formGroup]=\"studentForm\" #form=\"ngForm\">\r\n                                <ion-grid formArrayName=\"infoStudent\" *ngFor=\"let student of getStudentInfo().controls ; let i=index \">\r\n                                    <ion-row>\r\n                                        <ion-col>\r\n                                            <ion-item [formGroupName]='i'>\r\n                                                <ion-input ngDefaultControl formControlName=\"nombre\" placeholder='Nombre' required='true'></ion-input>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                        <ion-col>\r\n                                            <ion-item [formGroupName]='i'>\r\n                                                <ion-input ngDefaultControl formControlName=\"apellido\" placeholder='Apellido' required='true'></ion-input>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                        <ion-icon class=\"mat-icon\" name='trash-outline' (click)='removeStudent(i)'></ion-icon>\r\n                                    </ion-row>\r\n                                </ion-grid>\r\n                            </form>\r\n                            <ion-item>\r\n                                <ion-label class=\"centrar\">\r\n                                    <ion-button (click)=\"addStudent()\" required>Agregar responsable </ion-button>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label *ngIf=\"estadoW; else otro\">Estado de la Junta: <b>Activo</b></ion-label>\r\n                                <ng-template #otro>\r\n                                    <ion-label>\r\n                                        Estado de la Junta: <b>Inactivo</b>\r\n                                    </ion-label>\r\n                                </ng-template>\r\n                                <ion-toggle [(ngModel)]=\"estadoW\" name=\"importante\" (ionChange)=\"change($event)\">\r\n                                </ion-toggle>\r\n                            </ion-item>\r\n\r\n                            <!-- <ion-button (click)=\"submit()\">Add</ion-button> -->\r\n                            <ion-item (click)=\"addDirection()\">\r\n                                <ion-label class=\"normal\">\r\n                                    Ubicación:\r\n                                </ion-label>\r\n                                <ion-input name='ubicaciones' disabled=\"false\" required>\r\n                                    <a *ngIf=\"waterboard.ubicacion != undefined\"> {{waterboard.ubicacion.lat}},{{waterboard.ubicacion.lng}}</a>\r\n                                </ion-input>\r\n                                <ion-buttons slot=\"end\">\r\n                                    <ion-button>\r\n                                        <ion-icon slot=\"icon-only\" color=\"danger\" name=\"location\"></ion-icon>\r\n                                    </ion-button>\r\n                                </ion-buttons>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label class=\"centrar\">\r\n                                    <ion-button (click)=\"addPhotos()\">Agregar Fotos de la junta </ion-button>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <!-- PILAS PARA LAS INDICACIONES -->\r\n                                <ion-label>Observaciones</ion-label>\r\n                                <!-- <ion-label class=\"normal\">Comentario</ion-label> -->\r\n                                <!-- disabled readonly   [(ngModel)]=\"waterboard.comentario\"-->\r\n                                <ion-input name=\"comentario\" [(ngModel)]=\"waterboard.comentario\" placeholder=\"En este apartado puede poner observaciones acerca de la junta de agua\"></ion-input>\r\n                            </ion-item>\r\n                        </div>\r\n                        <div padding>\r\n                            <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">registrar Junta</ion-button>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </form>\r\n    </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_register-waterboard_register-waterboard_module_ts.js.map