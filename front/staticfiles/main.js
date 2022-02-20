(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _guards_is_login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/is-login.guard */ 1299);




const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paginas_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/login/login.module */ 5099)).then(m => m.LoginPageModule)
    },
    {
        path: 'registro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paginas_registro_registro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/registro/registro.module */ 8819)).then(m => m.RegistroPageModule)
    },
    {
        path: 'recuperar-contrasenia',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paginas_recuperar-contrasenia_recuperar-contrasenia_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/recuperar-contrasenia/recuperar-contrasenia.module */ 2606)).then(m => m.RecuperarContraseniaPageModule)
    },
    {
        path: 'msj-confirm',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paginas_msj-confirm_msj-confirm_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/msj-confirm/msj-confirm.module */ 5294)).then(m => m.MsjConfirmPageModule)
    },
    {
        path: 'view-all-waterboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_paginas_view-all-waterboard_view-all-waterboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/view-all-waterboard/view-all-waterboard.module */ 7218)).then(m => m.ViewAllWaterboardPageModule),
        canActivate: [_guards_is_login_guard__WEBPACK_IMPORTED_MODULE_0__.IsLoginGuard]
    },
    {
        path: 'register-waterboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-node_modules_capacitor_filesystem_dis-732b43"), __webpack_require__.e("default-src_app_componentes_googlemaps_googlemaps_component_ts-src_app_modelo_WaterBoard_ts-s-438510"), __webpack_require__.e("src_app_paginas_register-waterboard_register-waterboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/register-waterboard/register-waterboard.module */ 5180)).then(m => m.RegisterWaterboardPageModule),
        canActivate: [_guards_is_login_guard__WEBPACK_IMPORTED_MODULE_0__.IsLoginGuard]
    },
    {
        path: 'galery',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-node_modules_capacitor_filesystem_dis-732b43"), __webpack_require__.e("common"), __webpack_require__.e("src_app_paginas_galery_galery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/galery/galery.module */ 4599)).then(m => m.GaleryPageModule),
        canActivate: [_guards_is_login_guard__WEBPACK_IMPORTED_MODULE_0__.IsLoginGuard]
    },
    {
        path: 'view-data-water-board',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_paginas_view-data-water-board_view-data-water-board_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/view-data-water-board/view-data-water-board.module */ 1910)).then(m => m.ViewDataWaterBoardPageModule),
        canActivate: [_guards_is_login_guard__WEBPACK_IMPORTED_MODULE_0__.IsLoginGuard]
    },
    {
        path: 'search-waterboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paginas_search-waterboard_search-waterboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/search-waterboard/search-waterboard.module */ 3498)).then(m => m.SearchWaterboardPageModule),
        canActivate: [_guards_is_login_guard__WEBPACK_IMPORTED_MODULE_0__.IsLoginGuard]
    },
    {
        path: 'pag-prueba',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paginas_pag-prueba_pag-prueba_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/pag-prueba/pag-prueba.module */ 998)).then(m => m.PagPruebaPageModule),
        canActivate: [_guards_is_login_guard__WEBPACK_IMPORTED_MODULE_0__.IsLoginGuard]
    },
    {
        path: 'edit-water-board',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-node_modules_capacitor_filesystem_dis-732b43"), __webpack_require__.e("default-src_app_componentes_googlemaps_googlemaps_component_ts-src_app_modelo_WaterBoard_ts-s-438510"), __webpack_require__.e("src_app_paginas_edit-water-board_edit-water-board_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/edit-water-board/edit-water-board.module */ 2103)).then(m => m.EditWaterBoardPageModule),
        canActivate: [_guards_is_login_guard__WEBPACK_IMPORTED_MODULE_0__.IsLoginGuard]
    },
    {
        path: 'galery-present',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-node_modules_capacitor_filesystem_dis-732b43"), __webpack_require__.e("common"), __webpack_require__.e("src_app_paginas_galery-present_galery-present_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/galery-present/galery-present.module */ 3906)).then(m => m.GaleryPresentPageModule),
        canActivate: [_guards_is_login_guard__WEBPACK_IMPORTED_MODULE_0__.IsLoginGuard]
    },
    {
        path: 'view-image',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_paginas_view-image_view-image_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/view-image/view-image.module */ 3728)).then(m => m.ViewImagePageModule)
    },
    {
        path: 'not-fount',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paginas_not-fount_not-fount_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/not-fount/not-fount.module */ 3997)).then(m => m.NotFountPageModule)
    },
    {
        path: 'nosotros',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paginas_nosotros_nosotros_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/nosotros/nosotros.module */ 4910)).then(m => m.NosotrosPageModule)
    },
    {
        path: 'desarolladores',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_paginas_desarolladores_desarolladores_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/desarolladores/desarolladores.module */ 2781)).then(m => m.DesarolladoresPageModule)
    },
    {
        path: 'version',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_paginas_version_version_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./paginas/version/version.module */ 3294)).then(m => m.VersionPageModule)
    },
    {
        path: '**',
        redirectTo: '/not-fount'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 7556);





let AppComponent = class AppComponent {
    constructor(authSvc) {
        this.authSvc = authSvc;
        //paginas barra lateral
        this.user$ = this.authSvc.afAuth.user;
        this.user1$ = this.authSvc.user1$;
        this.selectedIndex = 0;
        this.appPages = [
            // { title: 'Login', url: '/login', icon: 'mail',hiden: false },
            { title: 'Buscar Juntas', url: '/search-waterboard', icon: 'water', hiden: true },
            { title: 'Registro', url: '/register-waterboard', icon: 'attach', hiden: true },
            // { title: 'Prueba pagina', url: '/pag-prueba', icon: 'archive' },    
            // { title: 'Galeria antigua', url: '/galery', icon: 'heart' },
            // { title: 'galetia', url: '/galery-present', icon: 'heart' },
            // { title: 'informacion de la junta', url: '/view-data-water-board', icon: 'heart' },
        ];
        this.labels = [
            { title: 'Cerrar Sesión', url: '/login', icon: 'exit', hiden: false },
            { title: 'Nosotros', url: '/nosotros', icon: 'business', hiden: true },
            { title: 'Desarrolladores', url: '/desarolladores', icon: 'build', hiden: true },
            { title: 'Ayuda', url: '/version', icon: 'help', hiden: true }
        ];
    }
    ngOnInit() {
        // this.user$.subscribe(x=>{
        //   this.user1$=this.authSvc.getUserById(x.uid);            
        // });
    }
    logout() {
        console.log('salir');
        this.authSvc.logout();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_fire_compat___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/ */ 8939);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/database */ 9978);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/pipes.module */ 5503);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/app-launcher/ngx */ 812);







//importaciones









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire_compat___WEBPACK_IMPORTED_MODULE_9__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuthModule,
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_11__.AngularFireDatabaseModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_12__.AngularFireStorageModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestoreModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        ],
        providers: [
            _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_4__.AppLauncher,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 1299:
/*!******************************************!*\
  !*** ./src/app/guards/is-login.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsLoginGuard": () => (/* binding */ IsLoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/notificaciones.service */ 1319);





let IsLoginGuard = class IsLoginGuard {
    constructor(authSvc, router, notifi) {
        this.authSvc = authSvc;
        this.router = router;
        this.notifi = notifi;
        this.user$ = this.authSvc.afAuth.user;
        this.band = false;
    }
    canActivate() {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.user$.subscribe((responseData) => {
                // console.log("UID: ",responseData['uid'])
                if (responseData != null) {
                    resolve(true);
                }
                else {
                    resolve(false);
                    this.router.navigate(['/login']);
                    this.notifi.notificacionToasError("Acceso denegado");
                }
            });
            // setTimeout(()=>{
            //   resolve(true);
            //   true;
            // },3000);
        }));
    }
};
IsLoginGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_1__.NotificacionesService }
];
IsLoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], IsLoginGuard);



/***/ }),

/***/ 4189:
/*!*************************************************!*\
  !*** ./src/app/pipes/filtro-coincident.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroCoincidentPipe": () => (/* binding */ FiltroCoincidentPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let FiltroCoincidentPipe = class FiltroCoincidentPipe {
    transform(value, arg, arg1) {
        if (arg === '' || arg.length < 3)
            return value;
        const resultPosts = [];
        for (const post of value) {
            // PILAS CON ESTTO  post.nombre
            if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                resultPosts.push(post);
                // if(arg1 == undefined){
                //   };
                // }else{
                //   if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 && post.provincia.toLowerCase().indexOf(arg1.toLowerCase()) > -1) {
                //     resultPosts.push(post);
                //   };
            }
        }
        ;
        return resultPosts;
    }
};
FiltroCoincidentPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtroCoincident'
    })
], FiltroCoincidentPipe);



/***/ }),

/***/ 7960:
/*!*******************************************!*\
  !*** ./src/app/pipes/filtro-prov.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltroProvPipe": () => (/* binding */ FiltroProvPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let FiltroProvPipe = class FiltroProvPipe {
    transform(value, arg) {
        // if (arg === '' || arg.length < 3) return value;
        try {
            // PILAS ES PORQUE ALGUNAS JUNTAS NO TIENE LA PROVINCIA
            const resultPosts = [];
            for (const post of value) {
                // PILAS CON ESTTO  post.nombre
                if (post.provincia.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                    resultPosts.push(post);
                }
                ;
            }
            return resultPosts;
        }
        catch (error) {
        }
    }
};
FiltroProvPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filtroProv'
    })
], FiltroProvPipe);



/***/ }),

/***/ 5503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _filtro_coincident_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtro-coincident.pipe */ 4189);
/* harmony import */ var _filtro_prov_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtro-prov.pipe */ 7960);




let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_filtro_coincident_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroCoincidentPipe, _filtro_prov_pipe__WEBPACK_IMPORTED_MODULE_1__.FiltroProvPipe],
        imports: [],
        exports: [_filtro_coincident_pipe__WEBPACK_IMPORTED_MODULE_0__.FiltroCoincidentPipe, _filtro_prov_pipe__WEBPACK_IMPORTED_MODULE_1__.FiltroProvPipe],
    })
], PipesModule);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var _notificaciones_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificaciones.service */ 1319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);






// import * as firebase from 'firebase/compat';


let AuthService = class AuthService {
    constructor(afAuth, notificationServ, router, afs) {
        this.afAuth = afAuth;
        this.notificationServ = notificationServ;
        this.router = router;
        this.afs = afs;
        this.user$ = this.afAuth.authState.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((user) => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).update;
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
        }));
    }
    resetPassword(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return this.afAuth.sendPasswordResetEmail(email);
            }
            catch (error) {
                console.log('Error->', error);
                this.notificationServ.notificacionToasError(error.message);
            }
        });
    }
    //  async loginGoogle(): Promise<User> {
    //    try {
    //      const { user } = await this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
    //      this.updateUserData(user);
    //      return user;
    //    } catch (error) {
    //      console.log('Error->', error);
    //    }
    //  }
    register(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.createUserWithEmailAndPassword(email, password);
                // this.notificationServ.confirmacion("Registro Existoso","");
                return user;
            }
            catch (error) {
                console.log('Error->', error);
                this.notificationServ.notificacionToasError(error.message);
            }
        });
    }
    registerAndUser(email, password, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.createUserWithEmailAndPassword(email, password);
                const userRef = this.afs.doc(`users/${user.uid}`);
                const data = {
                    uid: user.uid,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    displayName: name,
                };
                userRef.set(data, { merge: true });
                return data;
            }
            catch (error) {
                console.log('Error->', error);
                this.notificationServ.notificacionToasError(error.message);
            }
        });
    }
    registerComplete(email, password, name, lastname) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.createUserWithEmailAndPassword(email, password);
                const data = {
                    uid: user.uid,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    displayName: name + " " + lastname
                };
                user.updateProfile(data); //VALIDO POR SI ACASO QUIERO PONER UNA FOTO DE PERFIL O DEMAS COSAS
                const nombres = name + " " + lastname;
                this.updateUserData(user, nombres);
                return user;
            }
            catch (error) {
                console.log('Error->', error);
                this.notificationServ.notificacionToasError(error.message);
            }
        });
    }
    getUserById(uid) {
        return this.afs.collection("users", ref => ref.where('uid', '==', uid)).valueChanges();
    }
    updateUserAppById(uid) {
        this.user1$ = this.afs.collection("users", ref => ref.where('uid', '==', uid)).valueChanges();
    }
    login(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.signInWithEmailAndPassword(email, password);
                // this.updateUserData(user);
                return user;
            }
            catch (error) {
                console.log('Error->', error);
                this.notificationServ.notificacionToasError(error.message);
            }
        });
    }
    sendVerifcationEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return (yield this.afAuth.currentUser).sendEmailVerification();
            }
            catch (error) {
                console.log('Error->', error);
                this.notificationServ.notificacionToasError(error.message);
            }
        });
    }
    isEmailVerified(user) {
        return user.emailVerified === true ? true : false;
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.user1$ = null;
            try {
                yield this.afAuth.signOut();
            }
            catch (error) {
                console.log('Error->', error);
                this.notificationServ.notificacionToasError(error.message);
            }
        });
    }
    updateUserData(user, nombres) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: nombres
        };
        return userRef.set(data, { merge: true });
    }
    redirectUser(isVerified) {
        if (isVerified) {
            this.router.navigate(['/view-user']);
        }
        else {
            this.router.navigate(['msj-confirm']);
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth },
    { type: _notificaciones_service__WEBPACK_IMPORTED_MODULE_0__.NotificacionesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 1319:
/*!****************************************************!*\
  !*** ./src/app/services/notificaciones.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacionesService": () => (/* binding */ NotificacionesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serv-waterboard-db.service */ 2499);





let NotificacionesService = class NotificacionesService {
    constructor(toastController, alertController, router, serWaterDB) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.serWaterDB = serWaterDB;
    }
    notificacionToast(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Llamada a las notificaciones:");
            const toast = yield this.toastController.create({
                message: text,
                duration: 5000
            });
            toast.present();
        });
    }
    notificacionToasError(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Llamada a las notificaciones:");
            const toast = yield this.toastController.create({
                message: '<strong>' + text + '</strong>',
                duration: 2000,
                position: "bottom",
                color: "danger"
            });
            toast.present();
        });
    }
    notiErrorConTiempo(text, tiempo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Llamada a las notificaciones:");
            const toast = yield this.toastController.create({
                message: '<strong>' + text + '</strong>',
                duration: tiempo,
                position: "bottom",
                color: "danger"
            });
            toast.present();
        });
    }
    confirmacion(header, message, funtion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Aceptar',
                        role: 'ok',
                        handler: () => {
                            funtion();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirmacionEliminarJunta(header, message, uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: message,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Aceptar',
                        role: 'ok',
                        handler: () => {
                            this.serWaterDB.borrarWaterBoard(uid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
NotificacionesService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _serv_waterboard_db_service__WEBPACK_IMPORTED_MODULE_0__.ServWaterboardDbService }
];
NotificacionesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], NotificacionesService);



/***/ }),

/***/ 2499:
/*!********************************************************!*\
  !*** ./src/app/services/serv-waterboard-db.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServWaterboardDbService": () => (/* binding */ ServWaterboardDbService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8049);




let ServWaterboardDbService = class ServWaterboardDbService {
    constructor(afs) {
        this.afs = afs;
    }
    // guardamos en la base de datos un registro 
    saveWaterBoard(waterboard) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const refUsuario = this.afs.collection("waterboard"); //referencia a la tabla de la base de datos
            if (waterboard.uid == null)
                waterboard.uid = this.afs.createId();
            refUsuario.doc(waterboard.uid).set(Object.assign({}, waterboard), { merge: true });
        });
    }
    // retorna una lista de las juntas de agua las cuales no tengan un eliminado logico
    getWaterBoards() {
        // return this.afs.collection("waterboard",ref => ref.where('deleted', '==', false)).valueChanges();  
        return this.afs.collection("waterboard").valueChanges();
    }
    // retorna determinada junta en funcion al uid de la misma
    getWaterBoardById(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let aux = yield this.afs.collection("waterboard", ref => ref.where('uid', '==', uid))
                    .valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.first)()).toPromise().then(doc => {
                    return doc;
                }).catch(error => {
                    throw error;
                });
                if (aux == null)
                    return {};
                return aux[0];
            }
            catch (error) {
                console.error("Error get waterboard ById", error);
                throw error;
            }
        });
    }
    //segunda manera de obtener una determinada junta
    getWaterBoardById2(uid) {
        console.log("ACTIVE SERVICIO");
        return this.afs.collection("waterboard", ref => ref.where('uid', '==', uid).where('deleted', '==', false)).valueChanges();
    }
    //Eliminar junta 
    borrarWaterBoard(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            console.log("fun Eminar OK: ", uid);
            const refWaterB = this.afs.collection("waterboard");
            const aux = { deleted: true };
            refWaterB.doc(uid).set(Object.assign({}, aux), { merge: true });
        });
    }
};
ServWaterboardDbService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore }
];
ServWaterboardDbService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ServWaterboardDbService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    ApiKeyGoogleMaps: 'AIzaSyAk8tRQ9RP98I_NSLD10PjoQAsvt-Enpn0',
    firebase: {
        apiKey: "AIzaSyB9hkHkJkXk2aDi_QAMKSav3XhPjE63rek",
        authDomain: "pruebatesis13.firebaseapp.com",
        projectId: "pruebatesis13",
        storageBucket: "pruebatesis13.appspot.com",
        messagingSenderId: "798806666417",
        appId: "1:798806666417:web:a7dcb9408026e87c844690"
    }
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 2404);




//colodado por desarrollador

if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 27:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		9437,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		8025,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		4262,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		8206,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		4297,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 27;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nimg.mediana {\n  width: 100px;\n  height: 100px;\n  padding-left: 10%;\n  padding-bottom: 10%;\n}\n\nimg.grande {\n  width: 250px;\n  height: 250px;\n}\n\nimg.peque {\n  width: 25px;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJFQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTs7RUFFSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkRBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0RBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTs7RUFFSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjNjE2ZTdlO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzczODQ5YTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW1nLm1lZGlhbmEge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxufVxyXG5cclxuaW1nLmdyYW5kZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG5pbWcucGVxdWUge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n    <ion-split-pane contentId=\"main-content\">\r\n        <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n            <ion-content>\r\n                <ion-list id=\"inbox-list\">\r\n                    <ion-list-header style=\"padding-bottom: 10%;\">REGISTRO DE JUNTAS WEB</ion-list-header>\r\n\r\n                    <img class=\"mediana\" src=\"../assets/imageMenu.jpeg\" alt=\"\">\r\n                    <!-- <label *ngIf=\"user$ | async as user\"><h2 >Bienvenido:  Pedro Illaisaca </h2></label> -->\r\n                    <!-- <label *ngIf=\"user1$ | async as user\"><h2 >Bienvenido: {{user[0].displayName}} </h2><ion-note>{{user[0].email}}</ion-note></label> -->\r\n                    <label *ngIf=\"user$ | async as user\"><h2 >Bienvenido: </h2><h3>{{user.displayName}} </h3><ion-note>{{user.email}}</ion-note></label>\r\n                    <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n                        <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n                            <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n                            <ion-label>{{ p.title }}</ion-label>\r\n                        </ion-item>\r\n\r\n                    </ion-menu-toggle>\r\n                </ion-list>\r\n                <ion-list id=\"labels-list\">\r\n                    <ion-list-header>Aplicación</ion-list-header>\r\n                    <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of labels; let i = index\">\r\n\r\n                        <ion-item *ngIf=\"p.hiden==false && user$ | async as user\" (click)=\"logout()\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n                            <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n                            <ion-label>{{ p.title }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngIf=\"p.hiden\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n                            <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n                            <ion-label>{{ p.title }}</ion-label>\r\n                        </ion-item>\r\n\r\n                    </ion-menu-toggle>\r\n                </ion-list>\r\n            </ion-content>\r\n        </ion-menu>\r\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n    </ion-split-pane>\r\n\r\n\r\n</ion-app>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map