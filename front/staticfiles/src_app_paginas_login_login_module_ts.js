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
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
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
        this.passwordTypeInput = 'password';
        this.user$ = this.authSvc.afAuth.user;
    }
    ngOnInit() {
        try {
            this.user$.subscribe(x => {
                if (x.uid)
                    this.router.navigate(['/search-waterboard']);
            });
        }
        catch (error) {
        }
    }
    login(param) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // const user = await this.authSvc.login(this.loginInfo.correo,this.loginInfo.contrasenia);
            const user = yield this.authSvc.login(param.value.email, param.value.password);
            if (user) { //TENER CUIDADO CON ESTO 
                this.redirectUser(this.authSvc.isEmailVerified(user));
            }
            else {
                this.notificaciones.notificacionToasError("Error en credenciales o cuenta no verificada");
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
            this.router.navigate(['/search-waterboard']);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mat-icon {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 27px;\n  width: 27px;\n  padding-top: 16px;\n}\n\n.centrar {\n  text-align: center;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jZW50cmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Inicio de Sesión</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <div *ngIf=\"user$ | async as user; else alternativo\">\r\n            <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\r\n                <ion-grid>\r\n                    <ion-row color=\"primary\" justify-content-center>\r\n                        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n\r\n                            <h3>Ingrese sus credenciales</h3>\r\n                            <div padding>\r\n                                <ion-item>\r\n                                    <ion-input name=\"email\" type=\"email\" placeholder=\"Correo Electrónico\" ngModel={{user.email}} ngModel required></ion-input>\r\n                                </ion-item>\r\n                                <ion-item>\r\n                                    <ion-input name=\"password\" type=\"password\" placeholder=\"Contraseña\" ngModel required></ion-input>\r\n                                </ion-item>\r\n                            </div>\r\n                            <div padding>\r\n                                <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Iniciar Sesión</ion-button>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </form>\r\n        </div>\r\n        <div class=\"centrar\">\r\n            <ng-template #alternativo>\r\n                <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\r\n                    <ion-grid>\r\n                        <ion-row color=\"primary\" justify-content-center>\r\n                            <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n                                <div class=\"centrar\">\r\n                                    <h3>Ingrese sus credenciales</h3>\r\n                                </div>\r\n                                <div padding>\r\n                                    <ion-item lines=\"none\">\r\n                                        <ion-label position=\"stacked\">Correo Electrónico</ion-label>\r\n                                        <ion-input name=\"email\" type=\"email\" placeholder=\"Correo Electrónico\" ngModel required></ion-input>\r\n                                    </ion-item>\r\n                                    <ion-item lines='none'>\r\n                                        <ion-label position=\"stacked\">Contraseña</ion-label>\r\n                                        <ion-input name=\"password\" type=\"password\" placeholder=\"Contraseña\" ngModel required></ion-input>\r\n                                    </ion-item>\r\n                                </div>\r\n                                <div padding>\r\n                                    <ion-button size=\"medium\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Iniciar Sesión</ion-button>\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n                </form>\r\n            </ng-template>\r\n        </div>\r\n    </ion-card>\r\n    <div class=\"centrar\">\r\n        <p><a routerLink=\"/registro\">Si no tienes una Cuenta puedes registrarte </a></p>\r\n        <p><a routerLink=\"/recuperar-contrasenia\">Olvidaste tu contraseña</a></p>\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_login_login_module_ts.js.map