(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["default-src_app_componentes_googlemaps_googlemaps_component_ts-src_app_modelo_WaterBoard_ts-s-438510"],{

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

/***/ 1656:
/*!***************************************************!*\
  !*** ./src/app/services/apigeodecoder.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApigeodecoderService": () => (/* binding */ ApigeodecoderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);



let ApigeodecoderService = class ApigeodecoderService {
    constructor() { }
    getGeoDecoder(myLat, myLon) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + myLat + ',' + myLon + '&key=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ApiKeyGoogleMaps, {
                method: 'GET',
                redirect: 'follow'
            });
            if (response.status !== 200) {
                throw Error("Algo sucede con el api");
            }
            return response.json();
        });
    }
    // ESTO SOLO ES PARA UNA REVISION 
    getGeoDecoderPrimer(myLat, myLon) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const objjson = yield this.getGeoDecoder(myLat, myLon);
                // console.log(objjson['DATA']['general']);      
                return objjson;
            }
            catch (error) {
                console.log(`Error: =======> ${error}`);
            }
        });
    }
};
ApigeodecoderService.ctorParameters = () => [];
ApigeodecoderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ApigeodecoderService);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".map {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.miubicacion {\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n  background: #2E86C1;\n}\n\n.aceptar {\n  position: fixed;\n  top: 50px;\n  right: 10px;\n  background: #80d894;\n}\n\n.cancelar {\n  position: fixed;\n  top: 100px;\n  right: 10px;\n  background: #C70039;\n}\n\n.search {\n  position: fixed;\n  top: 45px;\n  left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZW1hcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUNKIiwiZmlsZSI6Imdvb2dsZW1hcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taXViaWNhY2lvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJFODZDMTtcclxufVxyXG5cclxuLmFjZXB0YXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODBkODk0O1xyXG59XHJcblxyXG4uY2FuY2VsYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0M3MDAzOTtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDQ1cHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"modalController.dismiss()\">\r\n                <ion-icon name=\"arrow-back\" color=\"dark\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"normal ion-text-wrap\">\r\n            Ubica el selector en la ubicación deseada\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n    <div #map class=\"map\">\r\n\r\n    </div>\r\n\r\n\r\n    <ion-chip class=\"aceptar\" (click)=\"aceptar()\">\r\n        <ion-label class=\"normal\">Aceptar</ion-label>\r\n        <ion-icon name=\"checkmark\"></ion-icon>\r\n    </ion-chip>\r\n\r\n\r\n    <ion-chip class=\"cancelar\" (click)=\"modalController.dismiss()\">\r\n        <ion-label class=\"normal\">Cancelar</ion-label>\r\n        <ion-icon name=\"checkmark\"></ion-icon>\r\n    </ion-chip>\r\n\r\n\r\n\r\n    <ion-chip class=\"miubicacion\" (click)=\"mylocation()\">\r\n        <ion-label class=\"normal\">Mi ubicación actual</ion-label>\r\n        <ion-icon name=\"locate\"></ion-icon>\r\n    </ion-chip>\r\n\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_componentes_googlemaps_googlemaps_component_ts-src_app_modelo_WaterBoard_ts-s-438510.js.map