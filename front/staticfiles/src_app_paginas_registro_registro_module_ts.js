(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_registro_registro_module_ts"],{

/***/ 5732:
/*!*************************************************************!*\
  !*** ./src/app/paginas/registro/registro-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 2568);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 8819:
/*!*****************************************************!*\
  !*** ./src/app/paginas/registro/registro.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 5732);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 2568);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 2568:
/*!***************************************************!*\
  !*** ./src/app/paginas/registro/registro.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidators": () => (/* binding */ CustomValidators),
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro.page.html */ 7933);
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss */ 5009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notificaciones.service */ 1319);









function equalsValidator(otherControl) {
    return (control) => {
        const value = control.value;
        const otherValue = otherControl.value;
        return otherValue === value ? null : { 'notEquals': { value, otherValue } };
    };
}
const CustomValidators = {
    equals: equalsValidator
};
let RegistroPage = class RegistroPage {
    constructor(authSvc, afs, router, fb, servnoti) {
        this.authSvc = authSvc;
        this.afs = afs;
        this.router = router;
        this.fb = fb;
        this.servnoti = servnoti;
        this.formGroup = null;
        this.formGroup = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            repeat_password: '',
            email: '',
            name: '',
            lastname: ''
        });
        this.formGroup.get('repeat_password').setValidators(CustomValidators.equals(this.formGroup.get('password')));
    }
    ngOnInit() {
    }
    registro() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const password = this.formGroup.get('password').value;
            const email = this.formGroup.get('email').value;
            const name = this.formGroup.get('name').value;
            const lastname = this.formGroup.get('lastname').value;
            try {
                const user = yield this.authSvc.registerComplete(email.trim(), password.trim(), name.trim(), lastname.trim());
                // this.router.navigate(["/login"])
                // this.servnoti.notiErrorConTiempo("Registro Exitoso",2000);
                if (user) {
                    this.redireccionar(this.authSvc.isEmailVerified(user));
                }
            }
            catch (error) {
                console.log('Error', error);
            }
        });
    }
    redireccionar(isVerified) {
        if (isVerified) {
            console.log("VErificado");
            this.router.navigate(["/login"]); //NO SE VA A USAR
        }
        else {
            this.router.navigate(["/msj-confirm"]);
            // this.registrarConfiguracion(user.uid);
        }
    }
    updateUserData(user, nombreUsuario) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: nombreUsuario,
        };
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.LoadingController.create({
                cssClass: 'normal',
                message: 'Registrando...',
            });
            yield this.loading.present();
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__.NotificacionesService }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroPage);



/***/ }),

/***/ 5009:
/*!*****************************************************!*\
  !*** ./src/app/paginas/registro/registro.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mat-icon {\n  background-repeat: no-repeat;\n  display: inline-block;\n  fill: currentColor;\n  height: 27px;\n  width: 27px;\n  padding-top: 16px;\n}\n\n.centrar {\n  text-align: center;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJyZWdpc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jZW50cmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn0iXX0= */");

/***/ }),

/***/ 7933:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/registro/registro.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Registro</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"centrar\">\r\n    <ion-card>\r\n        <!-- [formGroup]=\"formGroup\" (ngSubmit)=\"\"onSubmit(form) -->\r\n        <form [formGroup]=\"formGroup\" (ngSubmit)=\"registro()\">\r\n            <ion-grid>\r\n                <ion-row color=\"primary\">\r\n                    <ion-col class=\"centrar\">\r\n                        <div>\r\n                            <h3>Crea tu cuenta</h3>\r\n                        </div>\r\n                        <div>\r\n                            <ion-item>\r\n                                <ion-label position=\"stacked\" name='name'>Nombre de usuario</ion-label>\r\n                                <ion-input name=\"name\" type=\"name\" placeholder=\"Nombre de usuario\" [formControl]=\"formGroup.controls['name']\"></ion-input>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label position=\"stacked\" name='lastname'>Apellido de usuario</ion-label>\r\n                                <ion-input name=\"lastname\" type=\"lastname\" placeholder=\"Apellido de usuario\" [formControl]=\"formGroup.controls['lastname']\"></ion-input>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label position=\"stacked\" name='email'>Correo Electrónico</ion-label>\r\n                                <ion-input name=\"email\" type=\"email\" placeholder=\"Correo Electrónico\" [formControl]=\"formGroup.controls['email']\"></ion-input>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label name='password' position=\"stacked\">Contraseña</ion-label>\r\n                                <ion-input name=\"password\" type=\"password\" placeholder=\"Contraseña\" [formControl]=\"formGroup.controls['password']\">\r\n\r\n                                </ion-input>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label name='password' position=\"stacked\">Repetir Contraseña</ion-label>\r\n                                <ion-input name=\"confirm\" type=\"password\" placeholder=\"Repita la contraseña\" [formControl]=\"formGroup.controls['repeat_password']\"></ion-input>\r\n                            </ion-item>\r\n                        </div>\r\n                        <div>\r\n                            <ion-button size=\"large\" type=\"submit\" [disabled]=\"formGroup.invalid\" expand=\"block\">Registrar</ion-button>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </form>\r\n    </ion-card>\r\n\r\n    <div class=\"texto\">\r\n        <p><a routerLink=\"/login\">Si ya tienes una cuenta puedes iniciar sesión </a></p>\r\n        <p><a routerLink=\"/recuperar-contrasenia\">Olvidaste tu contraseña</a></p>\r\n    </div>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_registro_registro_module_ts.js.map