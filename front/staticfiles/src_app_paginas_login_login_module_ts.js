(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_login_login_module_ts"],{

/***/ 2198:
/*!*******************************************************!*\
  !*** ./src/app/paginas/login/login-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 8419);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 5099:
/*!***********************************************!*\
  !*** ./src/app/paginas/login/login.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2198);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 8419);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 8419:
/*!*********************************************!*\
  !*** ./src/app/paginas/login/login.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 2328);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 3116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notificaciones.service */ 1319);







let LoginPage = class LoginPage {
    constructor(router, authSvc, notificaciones) {
        this.router = router;
        this.authSvc = authSvc;
        this.notificaciones = notificaciones;
        this.user$ = this.authSvc.afAuth.user;
    }
    ngOnInit() {
    }
    login(param) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // const user = await this.authSvc.login(this.loginInfo.correo,this.loginInfo.contrasenia);
            const user = yield this.authSvc.login(param.value.email, param.value.password);
            if (user) {
                const verificacion = this.authSvc.isEmailVerified(user);
                this.redirectUser(verificacion);
                console.log("Usuario-> " + user);
                //this.redirectUser(isVerified);
            }
            else {
                this.notificaciones.notificacionToasError("Error en credenciales o cuenta no verificada.");
            }
        });
    }
    // async onLoginGoogle() {
    //     try {
    //       const user = await this.authSvc.loginGoogle();
    //       if (user) {
    //         const isVerified = this.authSvc.isEmailVerified(user);
    //       }
    //     } catch (error) {
    //       console.log('Error->', error);
    //     }
    //   }
    // async  redireccionar (isVerified: boolean,user:any){        
    //   const configApp= await this.configAppServ.getConfigById(user.uid);
    //   let params: NavigationExtras={
    //     queryParams:{
    //       infUser: this.loginInfo,
    //       userL: user,
    //       configParam:configApp
    //     }
    //   }
    //   if(isVerified){
    //     console.log("VErificado")
    //     this.router.navigate(["/view-user"],params);
    //   }else{
    //     this.notificationsServ.notificacionToast("Porfavor verifique su cuenta");
    //   }
    // }
    redirectUser(isVerified) {
        if (isVerified) {
            this.router.navigate(['/view-all-waterboard']);
        }
        else {
            this.router.navigate(['/msj-confirm']);
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__.NotificacionesService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 3116:
/*!***********************************************!*\
  !*** ./src/app/paginas/login/login.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2328:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/login/login.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <!-- <ion-item>\n      <ion-label position=\"floating\">Correo:</ion-label>\n      <ion-input type=\"text\" #correo required [(ngModel)]=loginInfo.correo></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label position=\"floating\">Contraseña:</ion-label>\n      <ion-input type=\"password\" #password required [(ngModel)]=loginInfo.contrasenia></ion-input>\n  </ion-item>\n  <ion-row>\n\n      <ion-col>\n          <ion-item>\n              <ion-button color=\"dark\" (click)=\"login()\">Login</ion-button>\n          </ion-item>\n\n      </ion-col>|\n  </ion-row>\n\n -->\n <div *ngIf=\"user$ | async as user; else alternativo\">\n   <form  #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n        <ion-grid>\n          <ion-row color=\"primary\" justify-content-center>\n            <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n              <div text-center>\n                <h3>Ingrese sus credenciales</h3>\n              </div>\n              <div padding>\n                <ion-item>\n                  <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel={{user.email}}  ngModel required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n                </ion-item>            \n              </div>\n              <div padding>\n                <ion-button  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Iniciar Sesion</ion-button>            \n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <p>\n                <a routerLink=\"/registro\">Si no tienes una Cuenta puedes registrarte </a>\n            </p>\n          </ion-row>\n    \n          <ion-row align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n    \n            <p>\n                <a routerLink=\"/recuperar-contrasenia\">Olvidaste tu contraseña</a>\n            </p>\n          </ion-row>\n        </ion-grid>\n      </form>\n </div> \n <ng-template #alternativo>\n  <form  #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>Ingrese sus credenciales</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\"   ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n            </ion-item>            \n          </div>\n          <div padding>\n            <ion-button  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Iniciar Sesion</ion-button>            \n          </div>\n        </ion-col>       \n      </ion-row>\n      <ion-row align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <p>\n            <a routerLink=\"/registro\">Si no tienes una Cuenta puedes registrarte </a>\n        </p>\n      </ion-row>\n\n      <ion-row align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\n        <p>\n            <a routerLink=\"/recuperar-contrasenia\">Olvidaste tu contraseña</a>\n        </p>\n      </ion-row>                          \n    </ion-grid>\n  </form>\n </ng-template>\n\n \n    <!-- <form  #form=\"ngForm\" (ngSubmit)=\"logBasico\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">                      \n            <div padding>\n              <ion-button  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Using Google</ion-button>            \n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form> -->\n\n    \n    <!-- <ion-row>\n      <ion-col>\n          <ion-item>\n              <ion-button color=\"dark\" (click)=\"onLoginGoogle()\">Google</ion-button>\n          </ion-item>\n\n      </ion-col>\n  </ion-row> -->\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_login_login_module_ts.js.map