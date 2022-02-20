(self["webpackChunkTesis"] = self["webpackChunkTesis"] || []).push([["src_app_paginas_pag-prueba_pag-prueba_module_ts"],{

/***/ 2304:
/*!*****************************************************************!*\
  !*** ./src/app/paginas/pag-prueba/pag-prueba-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagPruebaPageRoutingModule": () => (/* binding */ PagPruebaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pag_prueba_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pag-prueba.page */ 8401);




const routes = [
    {
        path: '',
        component: _pag_prueba_page__WEBPACK_IMPORTED_MODULE_0__.PagPruebaPage
    }
];
let PagPruebaPageRoutingModule = class PagPruebaPageRoutingModule {
};
PagPruebaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagPruebaPageRoutingModule);



/***/ }),

/***/ 998:
/*!*********************************************************!*\
  !*** ./src/app/paginas/pag-prueba/pag-prueba.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagPruebaPageModule": () => (/* binding */ PagPruebaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pag_prueba_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pag-prueba-routing.module */ 2304);
/* harmony import */ var _pag_prueba_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pag-prueba.page */ 8401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);







// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let PagPruebaPageModule = class PagPruebaPageModule {
};
PagPruebaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _pag_prueba_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagPruebaPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_pag_prueba_page__WEBPACK_IMPORTED_MODULE_1__.PagPruebaPage]
    })
], PagPruebaPageModule);



/***/ }),

/***/ 8401:
/*!*******************************************************!*\
  !*** ./src/app/paginas/pag-prueba/pag-prueba.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagPruebaPage": () => (/* binding */ PagPruebaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pag_prueba_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pag-prueba.page.html */ 7159);
/* harmony import */ var _pag_prueba_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pag-prueba.page.scss */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);





let PagPruebaPage = class PagPruebaPage {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.studentForm = this.fb.group({
            nombreEscuela: [''],
            infoStudent: this.fb.array([this.studentInfo()])
        });
    }
    studentInfo() {
        return this.fb.group({
            nombre: [''],
            edad: ['']
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
    submit() {
        console.log(typeof (this.studentForm.getRawValue().infoStudent));
    }
};
PagPruebaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
PagPruebaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pag-prueba',
        template: _raw_loader_pag_prueba_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pag_prueba_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PagPruebaPage);



/***/ }),

/***/ 4595:
/*!*********************************************************!*\
  !*** ./src/app/paginas/pag-prueba/pag-prueba.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".centrar {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZy1wcnVlYmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJwYWctcHJ1ZWJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ 7159:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/pag-prueba/pag-prueba.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>puta</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-card class=\"centrar\">\r\n        <form [formGroup]=\"studentForm\" #form=\"ngForm\">\r\n            <!-- <ion-item>\r\n          <ion-input ngDefaultControl formControlName=\"nombreEscuela\" placeholder=\"nombre Escuela\" required='true'></ion-input>\r\n      </ion-item> -->\r\n\r\n            <ion-grid formArrayName=\"infoStudent\" *ngFor=\"let student of getStudentInfo().controls ; let i=index \">\r\n                <ion-row>\r\n                    <!-- <ion-col>\r\n                  <ion-item [formGroupName]='i'>\r\n                      <ion-input ngDefaultControl formControlName=\"nombre\" placeholder='nombre 1' required='true'></ion-input>\r\n                  </ion-item>\r\n              </ion-col> -->\r\n\r\n                    <ion-col>\r\n                        <ion-item [formGroupName]='i'>\r\n                            <ion-input ngDefaultControl formControlName=\"edad\" placeholder='edad 1' required='true'></ion-input>\r\n                        </ion-item>\r\n                    </ion-col>\r\n                    <ion-icon name='trash-outline' (click)='removeStudent(i)'></ion-icon>\r\n\r\n                </ion-row>\r\n\r\n            </ion-grid>\r\n\r\n            <ion-button (click)=\"addStudent()\">Add</ion-button>\r\n            <ion-button (click)=\"submit()\">Add</ion-button>\r\n        </form>\r\n    </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_paginas_pag-prueba_pag-prueba_module_ts.js.map