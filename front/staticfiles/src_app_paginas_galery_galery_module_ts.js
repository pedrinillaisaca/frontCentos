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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_galery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./galery.page.html */ 5863);
/* harmony import */ var _galery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery.page.scss */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/foto.service */ 7535);
/* harmony import */ var _services_back_button_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/back-button.service */ 7219);







let GaleryPage = class GaleryPage {
    constructor(servFoto, router, backboton) {
        this.servFoto = servFoto;
        this.router = router;
        this.backboton = backboton;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        this.backboton.backApp();
        // this.router.navigate(['/register-waterboard']);
    }
    testuploadFire() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var fotos = yield this.servFoto.savedFirestorage();
            console.log(fotos);
        });
    }
};
GaleryPage.ctorParameters = () => [
    { type: src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_2__.FotoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_back_button_service__WEBPACK_IMPORTED_MODULE_3__.BackButtonService }
];
GaleryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-galery',
        template: _raw_loader_galery_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_galery_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GaleryPage);



/***/ }),

/***/ 7535:
/*!******************************************!*\
  !*** ./src/app/services/foto.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotoService": () => (/* binding */ FotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 1977);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 6628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 197);








let FotoService = class FotoService {
    constructor(storage, loadingCrtl) {
        this.storage = storage;
        this.loadingCrtl = loadingCrtl;
        this.fotos = []; //Arreglo
        this.fotos_paths = []; //Arreglo de paths 
        this.PHOTO_STORAGE = 'fotos';
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
    }
    addNewToGalery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const fotoCapturada = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                quality: 50
            });
            // this.fotos.unshift({
            //   filepath: 'foto_',
            //   webviewPath: fotoCapturada.webPath
            // })
            const savedImageFile = yield this.savePicture(fotoCapturada);
            this.fotos.unshift(savedImageFile);
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                key: this.PHOTO_STORAGE,
                value: JSON.stringify(this.fotos)
            });
        });
    }
    savePicture(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const base64Data = yield this.readAsBase64(cameraPhoto);
            const fileName = new Date().getTime + '.jpeg';
            // const savedFile= await Filesystem.writeFile({
            //   path: fileName,
            //   data:base64Data,
            //   directory: Directory.Data
            // })
            return {
                filepath: fileName,
                webviewPath: base64Data
            };
        });
    }
    readAsBase64(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(cameraPhoto.webPath);
            const blob = yield response.blob();
            return yield this.convertBlobToBase64(blob);
        });
    }
    loadSaved() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const listaFotos = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: this.PHOTO_STORAGE });
            this.fotos = JSON.parse(listaFotos.value) || [];
            for (let foto of this.fotos) {
                const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
                    path: foto.filepath,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data
                });
                foto.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
            }
        });
    }
    savedFirestorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            for (let foto of this.fotos) {
                // let readFile =await Filesystem.readFile({
                //   path: foto.filepath,
                //   directory: Directory.Data
                // })
                // console.log('foto.filepath');
                // foto.webviewPath=`data:image/jpeg;base64,${readFile.data}`      
                // console.log(foto.webviewPath);
                // this.startUpload(foto.webviewPath);
                this.fotos_paths.unshift(yield this.startUpload(foto.webviewPath));
            }
            return this.fotos_paths;
        });
    }
    startUpload(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(file);
            return new Promise(resolve => {
                let byteChacarters = atob(file.split(',')[1]);
                const path = `images/${new Date().getTime()}.jpg`;
                let image = file;
                const data = {
                    ref: path,
                    type: 'image',
                    url: null,
                    name: 'image',
                    size: this.fileSize(Number(byteChacarters.length))
                };
                try {
                    let ref = this.storage.ref(path);
                    let task = ref.putString(image, 'data_url');
                    task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
                        ref.getDownloadURL().subscribe(res => {
                            const downloadURL = res;
                            resolve(downloadURL);
                            return;
                        });
                    })).subscribe();
                }
                catch (error) {
                    console.log(JSON.stringify(error));
                    console.log("Error B===D: ");
                }
            });
        });
    }
    fileSize(sizeInBytes) {
        const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power);
        const formattedSize = Math.round(size * 100) / 100;
        const unit = units[power];
        return size ? `${formattedSize} ${unit}` : '0';
    }
    clearStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.clear();
        });
    }
    uploadImage(file, path, nombre) {
        return new Promise(resolve => {
            const filePath = path + '/' + nombre;
            const ref = this.storage.ref(filePath);
            const task = ref.put(file);
            task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
                ref.getDownloadURL().subscribe(res => {
                    const downloadURL = res;
                    resolve(downloadURL);
                    console.log("downloadURL= " + downloadURL);
                    return;
                });
            }))
                .subscribe();
        });
    }
};
FotoService.ctorParameters = () => [
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_5__.AngularFireStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
FotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], FotoService);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-title>galery</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"6\" *ngFor=\"let foto of servFoto.fotos; index as position\">\r\n                <ion-img [src]='foto.webviewPath'></ion-img>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-fab vertical='bottom' horizontal='center' slot=\"fixed\">\r\n        <ion-fab-button (click)=\"addPhotoGalery()\">\r\n            <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-fab-button>\r\n\r\n        <!-- <ion-fab-button (click)=\"savedFire()\">\r\n      <ion-icon name=\"aperture\"></ion-icon>\r\n    </ion-fab-button> -->\r\n\r\n    </ion-fab>\r\n\r\n    <ion-fab vertical='bottom' horizontal='left' slot=\"fixed\">\r\n        <ion-fab-button (click)=\"gotoRegisterWB()\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab-button (click)=\"testuploadFire()\">\r\n        pedro\r\n    </ion-fab-button>\r\n\r\n    <ion-fab vertical='bottom' horizontal='left' slot=\"fixed\">\r\n        <ion-fab-button (click)=\"gotoRegisterWB()\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_galery_galery_module_ts.js.map