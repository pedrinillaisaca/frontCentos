(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_edit-water-board_edit-water-board_module_ts"],{

/***/ 7836:
/*!*****************************************************************************!*\
  !*** ./src/app/paginas/edit-water-board/edit-water-board-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditWaterBoardPageRoutingModule": () => (/* binding */ EditWaterBoardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _edit_water_board_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-water-board.page */ 9504);




const routes = [
    {
        path: '',
        component: _edit_water_board_page__WEBPACK_IMPORTED_MODULE_0__.EditWaterBoardPage
    }
];
let EditWaterBoardPageRoutingModule = class EditWaterBoardPageRoutingModule {
};
EditWaterBoardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditWaterBoardPageRoutingModule);



/***/ }),

/***/ 2103:
/*!*********************************************************************!*\
  !*** ./src/app/paginas/edit-water-board/edit-water-board.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditWaterBoardPageModule": () => (/* binding */ EditWaterBoardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _edit_water_board_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-water-board-routing.module */ 7836);
/* harmony import */ var _edit_water_board_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-water-board.page */ 9504);







let EditWaterBoardPageModule = class EditWaterBoardPageModule {
};
EditWaterBoardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _edit_water_board_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditWaterBoardPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_edit_water_board_page__WEBPACK_IMPORTED_MODULE_1__.EditWaterBoardPage]
    })
], EditWaterBoardPageModule);



/***/ }),

/***/ 9504:
/*!*******************************************************************!*\
  !*** ./src/app/paginas/edit-water-board/edit-water-board.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditWaterBoardPage": () => (/* binding */ EditWaterBoardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_water_board_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-water-board.page.html */ 2856);
/* harmony import */ var _edit_water_board_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-water-board.page.scss */ 2582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/serv-waterboard-db.service */ 2499);
/* harmony import */ var _modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modelo/WaterBoard */ 4349);
/* harmony import */ var _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notificaciones.service */ 1319);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_apigeodecoder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/apigeodecoder.service */ 1656);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _componentes_googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../componentes/googlemaps/googlemaps.component */ 5831);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/photo.service */ 1957);













let EditWaterBoardPage = class EditWaterBoardPage {
    constructor(router, route, serWaterDB, servWaterdb, notifi, svrPhoto, loadingController, menucontroler, modalController, servApiGeoDeco, fb) {
        this.router = router;
        this.route = route;
        this.serWaterDB = serWaterDB;
        this.servWaterdb = servWaterdb;
        this.notifi = notifi;
        this.svrPhoto = svrPhoto;
        this.loadingController = loadingController;
        this.menucontroler = menucontroler;
        this.modalController = modalController;
        this.servApiGeoDeco = servApiGeoDeco;
        this.fb = fb;
        this.estadoW = true;
        this.waterboard = new _modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_3__.WaterBoard();
        this.route.queryParams.subscribe(params => {
            try {
                if (this.router.getCurrentNavigation().extras.queryParams) {
                    let param = this.router.getCurrentNavigation().extras.queryParams.uidParam;
                    this.uidWater = this.router.getCurrentNavigation().extras.queryParams.infUser;
                    this.uidWater = param;
                }
            }
            catch (error) {
                console.log("Error al enivar");
            }
        });
    }
    ngOnInit() {
        this.studentForm = this.fb.group({
            nombreEscuela: [''],
            infoStudent: this.fb.array([this.studentInfo()])
        });
        this.loadPageData();
    }
    loadPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.waterboardA = yield this.serWaterDB.getWaterBoardById(this.uidWater);
            this.waterboard = this.waterboardA;
            this.estadoW = this.waterboard.estado;
            this.llenarResponzables();
            console.log(this.waterboard);
        });
    }
    regWaterBoard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.svrPhoto.photos.length == 0) {
                this.notifi.notiErrorConTiempo("Por favor tomar fotografías a la junta", 3000);
            }
            else {
                this.presentLoading();
                var fotos = yield this.svrPhoto.savedFirestorage();
                this.cargarFotos(fotos);
                this.waterboard.fotos_paths.push();
                this.loading.dismiss();
                this.waterboard.estado = this.estadoW;
                this.getResponzablesObj();
                this.servWaterdb.saveWaterBoard(this.waterboard);
                this.svrPhoto.clearStorage();
                this.waterboard = new _modelo_WaterBoard__WEBPACK_IMPORTED_MODULE_3__.WaterBoard();
                this.router.navigate(['/search-waterboard']);
                this.notifi.notificacionToast("Guardado Correctamente");
            }
            // this.presentLoading();      
            // this.waterboard.fotos_paths= await this.svrPhoto.savedFirestorage();    
            // this.loading.dismiss();
            // this.waterboard.estado=this.estadoW;
            // this.getResponzablesObj();
            // this.servWaterdb.saveWaterBoard(this.waterboard)    
            // this.svrPhoto.clearStorage();
            // this.notifi.notificacionToast("Guardado Correctamente")
            // this.waterboard=new WaterBoard();
        });
    }
    cargarFotos(fotos) {
        for (const key in fotos) {
            this.waterboard.fotos_paths.push(fotos[key]);
        }
    }
    addPhotos() {
        this.router.navigate(['/galery-present']);
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'normal',
                message: 'guardando...',
            });
            yield this.loading.present();
        });
    }
    addDirection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const ubicacion = this.waterboard.ubicacion;
            let positionInput = {
                lat: 0,
                lng: 0,
            };
            if (ubicacion !== null) {
                positionInput = ubicacion;
            }
            const modalAdd = yield this.modalController.create({
                component: _componentes_googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_6__.GooglemapsComponent,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    llenarResponzables() {
        this.getStudentInfo().removeAt(0);
        for (const key in this.waterboard.listaResponsables) {
            this.getStudentInfo().push(this.fb.group({ nombre: [this.waterboard.listaResponsables[key].split(" ")[0]], apellido: [this.waterboard.listaResponsables[key].split(" ")[1]] }));
            // this.getStudentInfo().push(this.fb.group({}));        
        }
    }
    removeStudent(index) {
        this.getStudentInfo().removeAt(index);
    }
};
EditWaterBoardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_2__.ServWaterboardDbService },
    { type: _services_serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_2__.ServWaterboardDbService },
    { type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_4__.NotificacionesService },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_7__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _services_apigeodecoder_service__WEBPACK_IMPORTED_MODULE_5__.ApigeodecoderService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder }
];
EditWaterBoardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-edit-water-board',
        template: _raw_loader_edit_water_board_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_water_board_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditWaterBoardPage);



/***/ }),

/***/ 2582:
/*!*********************************************************************!*\
  !*** ./src/app/paginas/edit-water-board/edit-water-board.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mat-icon {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 27px;\n  width: 27px;\n  padding-top: 16px;\n}\n\n.centrar {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtd2F0ZXItYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXdhdGVyLWJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNlbnRyYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 2856:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/edit-water-board/edit-water-board.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Editar junta de Agua</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <form #form=\"ngForm\" (ngSubmit)=\"regWaterBoard(form)\">\r\n            <ion-grid>\r\n                <ion-row color=\"primary\" justify-content-center>\r\n                    <ion-col>\r\n                        <div class=\"centrar\">\r\n                            <h3>Actualize los datos de la junta</h3>\r\n                        </div>\r\n                        <div padding>\r\n                            <ion-item>\r\n                                <ion-label>Nombre de la junta de Agua</ion-label>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-input name=\"name\" type=\"name\" placeholder=\"Ingrese el nombre de la junta\" [(ngModel)]='waterboard.nombre' required>\r\n                                    <ion-text color=\"danger\">*</ion-text>\r\n                                </ion-input>\r\n                            </ion-item>\r\n\r\n                            <ion-item>\r\n                                <ion-label>Monitoreo</ion-label>\r\n                                <ion-select [(ngModel)]=\"waterboard.tipoMonitoreo\" name=\"tipoMonitoreo\" interface=\"popover\" placeholder=\"Seleccione un tipo de monitoreo\" required>\r\n                                    <ion-select-option value=\"Manual\">Manual</ion-select-option>\r\n                                    <ion-select-option value=\"Automático\">Automático</ion-select-option>\r\n                                    <ion-select-option value=\"Ninguno\">Ninguno</ion-select-option>\r\n                                </ion-select>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    Responsables\r\n                                </ion-label>\r\n                            </ion-item>\r\n                            <form [formGroup]=\"studentForm\" #form=\"ngForm\">\r\n                                <ion-grid formArrayName=\"infoStudent\" *ngFor=\"let student of getStudentInfo().controls ; let i=index \">\r\n                                    <ion-row>\r\n                                        <ion-col>\r\n                                            <ion-item [formGroupName]='i'>\r\n                                                <ion-input ngDefaultControl formControlName=\"nombre\" placeholder='Nombre' required='true'></ion-input>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                        <ion-col>\r\n                                            <ion-item [formGroupName]='i'>\r\n                                                <ion-input ngDefaultControl formControlName=\"apellido\" placeholder='Apellido' required='true'></ion-input>\r\n                                            </ion-item>\r\n                                        </ion-col>\r\n                                        <ion-icon class=\"mat-icon\" name='trash-outline' (click)='removeStudent(i)'></ion-icon>\r\n                                    </ion-row>\r\n                                </ion-grid>\r\n                            </form>\r\n                            <ion-item>\r\n                                <ion-label class=\"centrar\">\r\n                                    <ion-button (click)=\"addStudent()\" required>Agregar responsable </ion-button>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label *ngIf=\"estadoW; else otro\">Estado de la Junta: <b>Activo</b></ion-label>\r\n                                <ng-template #otro>\r\n                                    <ion-label>\r\n                                        Estado de la Junta: <b>Inactivo</b>\r\n                                    </ion-label>\r\n                                </ng-template>\r\n                                <ion-toggle [(ngModel)]=\"estadoW\" name=\"importante\" (ionChange)=\"change($event)\">\r\n                                </ion-toggle>\r\n                            </ion-item>\r\n\r\n                            <!-- <ion-button (click)=\"submit()\">Add</ion-button> -->\r\n                            <ion-item (click)=\"addDirection()\">\r\n                                <ion-label class=\"normal\">\r\n                                    Ubicación:\r\n                                </ion-label>\r\n                                <ion-input name='ubicaciones' disabled=\"false\" required>\r\n                                    <a *ngIf=\"waterboard.ubicacion != undefined\"> {{waterboard.ubicacion.lat}},{{waterboard.ubicacion.lng}}</a>\r\n                                </ion-input>\r\n                                <ion-buttons slot=\"end\">\r\n                                    <ion-button>\r\n                                        <ion-icon slot=\"icon-only\" color=\"danger\" name=\"location\"></ion-icon>\r\n                                    </ion-button>\r\n                                </ion-buttons>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label class=\"centrar\">\r\n                                    <ion-button (click)=\"addPhotos()\">Agregar Fotos de la junta </ion-button>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <!-- PILAS PARA LAS INDICACIONES -->\r\n                                <ion-label>Observaciones</ion-label>\r\n                                <!-- <ion-label class=\"normal\">Comentario</ion-label> -->\r\n                                <!-- disabled readonly   [(ngModel)]=\"waterboard.comentario\"-->\r\n                                <ion-input name=\"comentario\" [(ngModel)]=\"waterboard.comentario\" placeholder=\"En este apartado puede poner detalles acerca de la junta de agua\"></ion-input>\r\n                            </ion-item>\r\n                        </div>\r\n                        <div padding>\r\n                            <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Actualizar Junta</ion-button>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </form>\r\n    </ion-card>\r\n    <!-- <ion-fab vertical='bottom' horizontal='left' slot=\"fixed\">\r\n        <ion-fab-button (click)=\"servBac.backApp()\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab> -->\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_edit-water-board_edit-water-board_module_ts.js.map