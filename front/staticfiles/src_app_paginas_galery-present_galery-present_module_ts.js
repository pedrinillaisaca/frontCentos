(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_galery-present_galery-present_module_ts"],{

/***/ 5760:
/*!*************************************************************************!*\
  !*** ./src/app/paginas/galery-present/galery-present-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryPresentPageRoutingModule": () => (/* binding */ GaleryPresentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _galery_present_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-present.page */ 2999);




const routes = [
    {
        path: '',
        component: _galery_present_page__WEBPACK_IMPORTED_MODULE_0__.GaleryPresentPage
    }
];
let GaleryPresentPageRoutingModule = class GaleryPresentPageRoutingModule {
};
GaleryPresentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GaleryPresentPageRoutingModule);



/***/ }),

/***/ 3906:
/*!*****************************************************************!*\
  !*** ./src/app/paginas/galery-present/galery-present.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryPresentPageModule": () => (/* binding */ GaleryPresentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _galery_present_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./galery-present-routing.module */ 5760);
/* harmony import */ var _galery_present_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery-present.page */ 2999);







let GaleryPresentPageModule = class GaleryPresentPageModule {
};
GaleryPresentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _galery_present_routing_module__WEBPACK_IMPORTED_MODULE_0__.GaleryPresentPageRoutingModule
        ],
        declarations: [_galery_present_page__WEBPACK_IMPORTED_MODULE_1__.GaleryPresentPage]
    })
], GaleryPresentPageModule);



/***/ }),

/***/ 2999:
/*!***************************************************************!*\
  !*** ./src/app/paginas/galery-present/galery-present.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaleryPresentPage": () => (/* binding */ GaleryPresentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_galery_present_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./galery-present.page.html */ 9935);
/* harmony import */ var _galery_present_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery-present.page.scss */ 9467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/photo.service */ 1957);
/* harmony import */ var _services_back_button_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/back-button.service */ 7219);







let GaleryPresentPage = class GaleryPresentPage {
    constructor(photoService, actionSheetController, backboton, loadingController) {
        this.photoService = photoService;
        this.actionSheetController = actionSheetController;
        this.backboton = backboton;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.photoService.loadSaved();
            this.photoService.clearStorage();
        });
    }
    showActionSheet(photo, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Photos',
                buttons: [{
                        text: 'Eliminar',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.photoService.deletePicture(photo, position);
                        }
                    }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            // Nothing to do, action sheet is automatically closed
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    gotoBack() {
        // this.photoService.savedFirestorage();
        // this.photoService.returnFotos();
        this.backboton.backApp();
    }
    llamarFoto() {
        this.photoService.addNewToGallery();
    }
};
GaleryPresentPage.ctorParameters = () => [
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController },
    { type: _services_back_button_service__WEBPACK_IMPORTED_MODULE_3__.BackButtonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
GaleryPresentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-galery-present',
        template: _raw_loader_galery_present_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_galery_present_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GaleryPresentPage);



/***/ }),

/***/ 1957:
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 1977);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 6628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 197);








let PhotoService = class PhotoService {
    constructor(platform, storage) {
        this.platform = platform;
        this.storage = storage;
        this.fotos_paths = []; //Arreglo de paths 
        this.photos = [];
        this.PHOTO_STORAGE = 'photos';
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
    }
    loadSaved() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Retrieve cached photo array data
            const photoList = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: this.PHOTO_STORAGE });
            this.photos = JSON.parse(photoList.value) || [];
            // If running on the web...
            if (!this.platform.is('hybrid')) {
                // Display the photo by reading into base64 format
                for (let photo of this.photos) {
                    // Read each saved photo's data from the Filesystem
                    const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
                        path: photo.filepath,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data,
                    });
                    // Web platform only: Load the photo as base64 data
                    photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
                }
            }
        });
    }
    addNewToGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                quality: 100, // highest quality (0 to 100)
            });
            this.photos.unshift(yield this.savePicture(capturedPhoto));
            console.log(this.photos);
            // Cache all photo data for future retrieval
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                key: this.PHOTO_STORAGE,
                value: JSON.stringify(this.photos),
            });
        });
    }
    // Save picture to file on device
    savePicture(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Convert photo to base64 format, required by Filesystem API to save
            const base64Data = yield this.readAsBase64(cameraPhoto);
            // Write the file to the data directory
            const fileName = new Date().getTime() + '.jpeg';
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data,
            });
            // if (this.platform.is('hybrid')) {
            //   // Display the new image by rewriting the 'file://' path to HTTP
            //   // Details: https://ionicframework.com/docs/building/webview#file-protocol
            //   return {
            //     filepath: savedFile.uri,
            //     webviewPath: Capacitor.convertFileSrc(savedFile.uri),
            //   };
            // } else {
            //   // Use webPath to display the new image instead of base64 since it's
            //   // already loaded into memory
            //   return {
            //     filepath: fileName,
            //     webviewPath: cameraPhoto.webPath,
            //   };
            // }
            return {
                filepath: fileName,
                // webviewPath: cameraPhoto.webPath,
                webviewPath: base64Data,
            };
        });
    }
    // Read camera photo into base64 format based on the platform the app is running on
    readAsBase64(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(cameraPhoto.webPath);
            const blob = yield response.blob();
            return yield this.convertBlobToBase64(blob);
        });
    }
    // Delete picture by removing it from reference data and the filesystem
    deletePicture(photo, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Remove this photo from the Photos reference data array
            this.photos.splice(position, 1);
            // Update photos array cache by overwriting the existing photo array
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                key: this.PHOTO_STORAGE,
                value: JSON.stringify(this.photos),
            });
            // delete photo file from filesystem
            const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
            yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.deleteFile({
                path: filename,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data,
            });
        });
    }
    savedFirestorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            for (let foto of this.photos) {
                this.fotos_paths.unshift(yield this.startUpload(foto.webviewPath));
            }
            return this.fotos_paths;
        });
    }
    returnFotos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadSaved();
        });
    }
    startUpload(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                var t = file.split(',')[1];
                let byteChacarters = atob(t);
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
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.clear();
    }
};
PhotoService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage }
];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ 9467:
/*!*****************************************************************!*\
  !*** ./src/app/paginas/galery-present/galery-present.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxlcnktcHJlc2VudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 9935:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/galery-present/galery-present.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Fotografias de juntas</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"6\" *ngFor=\"let photo of photoService.photos; index as position\">\r\n                    <ion-img [src]=\"photo.webviewPath\" (click)=\"showActionSheet(photo, position)\"></ion-img>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n\r\n    </ion-card>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n        <ion-fab-button (click)=\"llamarFoto()\">\r\n            <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-fab vertical='bottom' horizontal='left' slot=\"fixed\">\r\n        <ion-fab-button (click)=\"gotoBack()\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_galery-present_galery-present_module_ts.js.map