"use strict";
(self["webpackChunkdragon_oil"] = self["webpackChunkdragon_oil"] || []).push([["src_app_authentication_authentication_module_ts"],{

/***/ 32545:
/*!***********************************************************!*\
  !*** ./src/app/authentication/404/not-found.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotfoundComponent": () => (/* binding */ NotfoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class NotfoundComponent {
    ngAfterViewInit() { }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-not-found"]], decls: 10, vars: 0, consts: [[1, "error-box"], [1, "error-body", "text-center"], [1, "error-title", "text-danger"], [1, "text-uppercase", "error-subtitle"], [1, "text-muted", "m-t-30", "m-b-30"], ["href", "#/dashboard/classic", 1, "btn", "btn-danger", "btn-rounded", "waves-effect", "waves-light", "m-b-40"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PAGE NOT FOUND !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "YOU SEEM TO BE TRYING TO FIND HIS WAY HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 41082:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": () => (/* binding */ AuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/core.module */ 40294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404/not-found.component */ 32545);
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lock/lock.component */ 97880);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 67353);
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.routing */ 23173);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ 93667);
/* harmony import */ var _create_password_create_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-password/create-password.component */ 42133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);













class AuthenticationModule {
}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); };
AuthenticationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_4__.AuthenticationRoutes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_404_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotfoundComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _lock_lock_component__WEBPACK_IMPORTED_MODULE_2__.LockComponent,
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__.LogoutComponent,
        _create_password_create_password_component__WEBPACK_IMPORTED_MODULE_6__.CreatePasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 23173:
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationRoutes": () => (/* binding */ AuthenticationRoutes)
/* harmony export */ });
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404/not-found.component */ 32545);
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock/lock.component */ 97880);


const AuthenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotfoundComponent
            },
            {
                path: 'lock',
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__.LockComponent
            },
        ]
    }
];


/***/ }),

/***/ 42133:
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/create-password/create-password.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePasswordComponent": () => (/* binding */ CreatePasswordComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helper/validationrule.service */ 15157);
/* harmony import */ var src_app_core_service_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/login/login.service */ 76285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/helper/toast.helper.service */ 27995);
/* harmony import */ var src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/helper/storage.service */ 23995);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);













function CreatePasswordComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreatePasswordComponent_ng_container_12_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", "assets/images/svg/not-found-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.tokenError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 3, "Login"), " ");
} }
function CreatePasswordComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function CreatePasswordComponent_div_14_div_21_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 38);
} }
function CreatePasswordComponent_div_14_div_21_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 39);
} }
function CreatePasswordComponent_div_14_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CreatePasswordComponent_div_14_div_21_i_3_Template, 1, 0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CreatePasswordComponent_div_14_div_21_i_4_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validator_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", validator_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !validator_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 3, validator_r9.message), " ");
} }
function CreatePasswordComponent_div_14_div_22_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 38);
} }
function CreatePasswordComponent_div_14_div_22_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 39);
} }
function CreatePasswordComponent_div_14_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CreatePasswordComponent_div_14_div_22_i_3_Template, 1, 0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CreatePasswordComponent_div_14_div_22_i_4_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validator_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", validator_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !validator_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 3, validator_r13.message), " ");
} }
function CreatePasswordComponent_div_14_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreatePasswordComponent_div_14_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r17.setPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r7.f.confirmPassword.errors || ctx_r7.f.password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "Set Password"), " ");
} }
function CreatePasswordComponent_div_14_button_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Setting Up ..."), " ");
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function (a0, a1, a2) { return { "opacity-1": a0, "opacity-0": a1, "password": a2 }; };
const _c2 = function (a0) { return { "password-box": a0 }; };
function CreatePasswordComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function CreatePasswordComponent_div_14_Template_input_keyup_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.checkPasswordCompatibility("password"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function CreatePasswordComponent_div_14_Template_input_keyup_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.checkPasswordCompatibility("confirmPassword"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, CreatePasswordComponent_div_14_div_21_Template, 8, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, CreatePasswordComponent_div_14_div_22_Template, 8, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, CreatePasswordComponent_div_14_button_27_Template, 3, 4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, CreatePasswordComponent_div_14_button_28_Template, 3, 3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 12, "Password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](18, _c0, ctx_r2.submitted && ctx_r2.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 14, "Confirm Password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](20, _c0, ctx_r2.submitted && ctx_r2.f.confirmPassword.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](22, _c1, ctx_r2.passwordClicked, !ctx_r2.passwordClicked, !ctx_r2.confirmPasswordClicked));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](26, _c2, !ctx_r2.confirmPasswordClicked));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 16, ctx_r2.passwordMustHaveAMinimumOf), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.passwordParameters);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.confirmPasswordParameters);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.loading);
} }
class CreatePasswordComponent {
    constructor(formBuilder, rule, _login, _activated, _toast, _storage, _helper) {
        this.formBuilder = formBuilder;
        this.rule = rule;
        this._login = _login;
        this._activated = _activated;
        this._toast = _toast;
        this._storage = _storage;
        this._helper = _helper;
        this.submitted = false;
        this.loading = false;
        this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.loading;
        this.apiCall = true;
        this.passwordMustHaveAMinimumOf = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.passwordMustHaveAMinimumOf;
        this.confirmPasswordParameters = [{
                id: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.mustMatch,
                value: false,
                message: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.passwordMustMatch
            }
        ];
        this.passwordParameters = [{
                id: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.minimumLength,
                value: false,
                message: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.passwordMinimumLength
            }, {
                id: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.upperCase,
                value: false,
                message: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.passwordMinimumOneUpperCase
            }, {
                id: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.lowerCase,
                value: false,
                message: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.passwordMinimumOneLowerCase
            }, {
                id: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.number,
                value: false,
                message: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.passwordMinimumOneNumber
            }, {
                id: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.specialCharacter,
                value: false,
                message: _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.passwordOneSpecialCharacter
            }
        ];
        this.confirmPasswordClicked = false;
        this.passwordClicked = false;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_1__.SubSink();
    }
    ngOnInit() {
        this.tokenValidation = true;
        this._helper.deleteCookie().then(v => {
            this._storage.clearLocalStorage();
        });
        this.setPasswordForm();
        this.getIdFromUrl();
    }
    getIdFromUrl() {
        this.subs.add(this._activated.params.subscribe((params) => {
            this.passwordType = params[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.type];
            if (this.passwordType !== _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.userReset && this.passwordType !== _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.userActivate && this.passwordType !== _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.clientActivate && this.passwordType !== _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.clientReactivate) {
                this._login.forceLogoutPasswordCreate();
            }
            this.token = params[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.id];
            if (this.passwordType === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.userReset) {
                this.subs.add(this._login.resetTokenVerification(this.token).subscribe((res) => {
                    this.apiCall = false;
                    if (res.status === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiStatus.ok) {
                        this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.resetUserPassword;
                        this.tokenValidation = false;
                    }
                    else {
                        this.tokenValidation = true;
                        this.tokenError = res === null || res === void 0 ? void 0 : res.message;
                        this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.error;
                    }
                }));
            }
            else {
                this.subs.add(this._login.tokenVerification(this.token).subscribe((res) => {
                    this.apiCall = false;
                    if (res.status === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiStatus.ok) {
                        if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.failed === res.token_status) {
                            this.tokenValidation = true;
                            this.tokenError = res === null || res === void 0 ? void 0 : res.message;
                            this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.error;
                        }
                        else {
                            this.tokenValidation = false;
                            if (this.passwordType === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.clientActivate) {
                                this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.CreateNewClientPassword;
                            }
                            if (this.passwordType === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.userActivate) {
                                this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.CreateNewUserPassword;
                            }
                            if (this.passwordType === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.clientReactivate) {
                                this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.CreateNewPassword;
                            }
                        }
                    }
                }));
            }
        }));
    }
    login() {
        this._login.forceLogoutPasswordCreate();
    }
    /**
     * @description To check the Password compatibility w.r.t standard pattern
     * @author Joel P Thomas
     * @date 28/09/2021
     */
    checkPasswordCompatibility(passwordType) {
        if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.password === passwordType) {
            this.confirmPasswordClicked = false;
        }
        else {
            this.confirmPasswordClicked = true;
        }
        const password = this.f.password.value;
        this.passwordParameters.map((element, i) => {
            switch (element.id) {
                case _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.minimumLength:
                    element.value = this.rule.minimumPasswordLength(password);
                    break;
                case _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.upperCase:
                    element.value = this.rule.upperCaseValidator(password);
                    break;
                case _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.lowerCase:
                    element.value = this.rule.lowerCaseValidator(password);
                    break;
                case _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.number:
                    element.value = this.rule.numberValidator(password);
                    break;
                case _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.specialCharacter:
                    element.value = this.rule.specialCharacterValidator(password);
                    break;
            }
        });
        this.checkConfirmPasswordCompatibility();
    }
    /**
       * @description To check the Confirm Password compatibility w.r.t standard pattern
       * @author Joel P Thomas
       * @date 28/09/2021
       */
    checkConfirmPasswordCompatibility() {
        this.passwordClicked = false;
        const confirmPassword = this.f.confirmPassword.value;
        const password = this.f.password.value;
        this.confirmPasswordParameters.map((element, i) => {
            switch (element.id) {
                case _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.mustMatch:
                    if (password === confirmPassword && confirmPassword !== '') {
                        element.value = true;
                    }
                    else {
                        element.value = false;
                        this.passwordClicked = true;
                    }
                    break;
            }
        });
        this.passwordParameters.map((element) => {
            if (!element.value) {
                this.passwordClicked = true;
            }
        });
    }
    /**
       * @description To initialize the password form
       * @author Joel P Thomas
       * @date 28/09/2021
       */
    setPasswordForm() {
        this.passwordForm = this.formBuilder.group({
            password: ['', this.rule.enhancedPasswordValidation],
            confirmPassword: ['', this.rule.enhancedPasswordValidation]
        }, {
            validator: this.rule.passwordsMatch(_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.password, _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.confirmPassword)
        });
    }
    /**
       * @description To fetch the form controls
       * @author Joel P Thomas
       * @date 28/09/2021
       * @readonly
       */
    get f() {
        return this.passwordForm.controls;
    }
    /**
       * @description To finalize password
       * @author Joel P Thomas
       * @date 28/09/2021
       * @returns {*}
       */
    setPassword() {
        this.submitted = true;
        this.loading = true;
        if (this.passwordForm.invalid) {
            return;
        }
        const password = new FormData();
        password.append(_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.login.password, this.passwordForm.value.password);
        password.append(_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.login.confirmPassword, this.passwordForm.value.confirmPassword);
        password.append(_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.login.token, this.token);
        if (this.passwordType === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.clientReactivate) {
            this.subs.add(this._login.reactivateClientPassword(password).subscribe((res) => {
                this.loading = false;
                if (res.status === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiStatus.ok) {
                    if (res.warning === true) {
                        this._toast.warning(res.message);
                    }
                    else {
                        this._toast.success(res.message);
                        this._login.forceLogoutPasswordCreate();
                    }
                }
                else {
                    this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.error;
                    this.tokenValidation = true;
                    if (res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.message]) {
                        this.tokenError = res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.message];
                    }
                    else if (res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.msg]) {
                        this.tokenError = res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.msg];
                    }
                }
            }));
        }
        if (this.passwordType === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.clientActivate) {
            this.subs.add(this._login.activateClientPassword(password).subscribe((res) => {
                this.loading = false;
                if (res.status === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiStatus.ok) {
                    if (res.warning === true) {
                        this._toast.warning(res.message);
                    }
                    else {
                        this._toast.success(res.message);
                        this._login.forceLogoutPasswordCreate();
                    }
                }
                else {
                    this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.error;
                    this.tokenValidation = true;
                    if (res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.message]) {
                        this.tokenError = res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.message];
                    }
                    else if (res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.msg]) {
                        this.tokenError = res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.msg];
                    }
                }
            }));
        }
        if (this.passwordType === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.userReset) {
            this.subs.add(this._login.resetUserPassword(password).subscribe((res) => {
                this.loading = false;
                if (res.status === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiStatus.ok) {
                    if (res.warning === true) {
                        this._toast.warning(res.message);
                    }
                    else {
                        this._toast.success(res.message);
                        this._login.forceLogoutPasswordCreate();
                    }
                }
                else {
                    this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.error;
                    this.tokenValidation = true;
                    if (res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.message]) {
                        this.tokenError = res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.message];
                    }
                    else if (res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.msg]) {
                        this.tokenError = res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.msg];
                    }
                }
            }));
        }
        if (this.passwordType === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.passwordTypeUrl.userActivate) {
            this.subs.add(this._login.activateUserPassword(password).subscribe((res) => {
                this.loading = false;
                if (res.status === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiStatus.ok) {
                    if (res.warning === true) {
                        this._toast.warning(res.message);
                    }
                    else {
                        this._toast.success(res.message);
                        this._login.forceLogoutPasswordCreate();
                    }
                }
                else {
                    this.title = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.error;
                    this.tokenValidation = true;
                    if (res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.message]) {
                        this.tokenError = res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.message];
                    }
                    else if (res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.msg]) {
                        this.tokenError = res[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.CreatePasswordConstants.msg];
                    }
                }
            }));
        }
        this.resetForm();
    }
    /**
       * @description To reset the password form
       * @author Joel P Thomas
       * @date 28/09/2021
       */
    resetForm() {
        this.passwordClicked = false;
        this._markFormPristine(this.passwordForm);
        this.loading = false;
    }
    /**
       * @description To mark the form as pristine and untouched
       * @author Joel P Thomas
       * @date 28/09/2021
       * @private
       * @param {(FormGroup | NgForm)} form
       */
    _markFormPristine(form) {
        this.submitted = false;
        this.passwordForm.reset({ password: '', confirmPassword: '' });
        Object.keys(form.controls).forEach(control => {
            form.controls[control].markAsPristine();
            form.controls[control].markAsUntouched();
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
CreatePasswordComponent.ɵfac = function CreatePasswordComponent_Factory(t) { return new (t || CreatePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_2__.ValidationruleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_service_login_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_6__.FunctionService)); };
CreatePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CreatePasswordComponent, selectors: [["app-create-password"]], decls: 18, vars: 7, consts: [[1, "login-box"], [1, "login-content"], [1, "auth-box", "on-sidebar"], ["id", "loginform", 1, "loginform"], [1, "login-logo"], [1, "db"], ["src", "assets/images/logo-dark.png", "width", "150", "alt", "logo", 1, "login-image"], [1, "row"], [1, "col-md-12", "col-12"], [1, "login-text"], [4, "ngIf"], ["class", "col-12 ", 4, "ngIf"], [1, "left-content"], [1, "img-box"], ["alt", "auraa", 3, "src"], [1, "col-12"], ["alt", "auraa", 1, "error-img", 3, "src"], [1, "login-button"], [1, "btn", "btn-lg", "btn-login", 3, "click"], [1, "loading-spin"], [1, "las", "la-spinner", "la-3x", "la-spin"], ["id", "setPasswordform", "autocomplete", "off", 1, "form-horizontal", "m-t-20", 3, "formGroup"], [1, "form-group", "mb-13px"], ["type", "password", "placeholder", "Password", "formControlName", "password", "autocomplete", "off", 1, "form-control", "form-control-lg", 3, "ngClass", "keyup"], [1, "form-group"], ["type", "password", "placeholder", "Confirm Password", "formControlName", "confirmPassword", "autocomplete", "off", 1, "form-control", "form-control-lg", 3, "ngClass", "keyup"], [1, "arrow", 3, "ngClass"], [1, "tooltiptextpassword", 3, "ngClass"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "form-group", "mt-26px"], [1, "col-md-12"], [1, "form-bottom"], ["class", "btn btn-lg btn-login", "type", "submit", 3, "disabled", "click", 4, "ngIf"], ["disabled", "", "class", "btn btn-lg btn-login", "type", "submit", 4, "ngIf"], [1, "tooltip-holder"], [1, "pt-1"], ["class", "las la-check validationIcon la-2x text-success", 4, "ngIf"], ["class", "las la-times validationIcon la-2x text-danger", 4, "ngIf"], [1, "las", "la-check", "validationIcon", "la-2x", "text-success"], [1, "las", "la-times", "validationIcon", "la-2x", "text-danger"], ["type", "submit", 1, "btn", "btn-lg", "btn-login", 3, "disabled", "click"], ["disabled", "", "type", "submit", 1, "btn", "btn-lg", "btn-login"]], template: function CreatePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, CreatePasswordComponent_ng_container_12_Template, 11, 5, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, CreatePasswordComponent_ng_container_13_Template, 4, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, CreatePasswordComponent_div_14_Template, 29, 28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 5, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.tokenValidation && !ctx.apiCall);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.apiCall);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.tokenValidation && !ctx.apiCall);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", "assets/images/auraa-connections.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".login-box[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  min-height: 550px;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  width: 380px;\n  min-height: 332px;\n  background-color: #fff;\n  padding: 40px 30px;\n  border-radius: 20px;\n  right: 15%;\n  box-shadow: 0 0 7px 5px rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 992px) {\n  .login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\n    height: auto;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 550px) {\n  .login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 0 auto;\n  padding-bottom: 10px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]   .login-image[_ngcontent-%COMP%] {\n  max-width: 106px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .form-horizontal[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .form-bottom[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .form-bottom[_ngcontent-%COMP%]   .forgot-pwd[_ngcontent-%COMP%] {\n  text-align: right;\n  display: block;\n  width: 100%;\n  font-size: 14px;\n  color: #999;\n  margin-bottom: 26px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .form-bottom[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 99px;\n  min-height: 26px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border-radius: 3px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #999;\n  margin-bottom: 8px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 120px;\n  min-height: 40px;\n}\n.login-box[_ngcontent-%COMP%]   .login-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-weight: 500;\n  font-size: 14px;\n  color: #999;\n}\n.login-box[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  overflow: hidden;\n}\n.login-box[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n  z-index: 2;\n  display: flex;\n  align-items: center;\n}\n.login-box[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  width: 44%;\n  height: 100%;\n  position: absolute;\n  top: 20%;\n  left: 5%;\n}\n@media (max-width: 992px) {\n  .login-box[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n    width: 70%;\n    top: 30px;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n  }\n}\n.login-box[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-box[_ngcontent-%COMP%]   #recoverform[_ngcontent-%COMP%] {\n  display: none;\n}\n.mb-_15[_ngcontent-%COMP%] {\n  margin-bottom: -15px !important;\n}\n.mb-13px[_ngcontent-%COMP%] {\n  margin-bottom: 13px;\n}\n.mb-6px[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.mt-26px[_ngcontent-%COMP%] {\n  margin-top: 26px;\n}\n.validationIcon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-right: 10px;\n}\n.tooltip-holder[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.error-message[_ngcontent-%COMP%] {\n  line-height: 18px;\n  padding-top: 18px;\n  text-align: center;\n  color: #EC0000;\n}\n.tooltiptextpassword[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  position: absolute;\n  font-size: 12px;\n  padding: 25px 40px 28px 32px;\n  width: 250px;\n  margin: -20px;\n  top: 57px;\n  left: -265px;\n  background: inherit;\n  border-radius: 20px;\n  z-index: 10;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n}\n@media (max-width: 992px) {\n  .tooltiptextpassword[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n    color: #999;\n    top: 0;\n    left: 0;\n  }\n}\n.tooltiptextpassword[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 300px;\n  background: inherit;\n  position: absolute;\n  left: -25px;\n  right: 0;\n  top: -25px;\n  bottom: 0;\n  box-shadow: inset 111px 123px 189px 60px #0c3148f2;\n  filter: blur(10px);\n}\n@media (max-width: 992px) {\n  .tooltiptextpassword[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n.arrow[_ngcontent-%COMP%] {\n  z-index: 9;\n  background: inherit;\n  transition: all 0.3s ease-in-out;\n}\n.arrow[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 136px;\n  left: -35px;\n  z-index: 13;\n  filter: blur(1px);\n  width: 0;\n  height: 0;\n  border-top: 16px solid transparent;\n  border-left: 15px solid #0c3148f2;\n  border-bottom: 16px solid transparent;\n  transition: all 0.3s ease-in-out;\n}\n@media (max-width: 992px) {\n  .arrow[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n.arrow.password[_ngcontent-%COMP%]:before {\n  top: 55px;\n}\n.password-box[_ngcontent-%COMP%] {\n  top: -24px;\n}\n.opacity-0[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n@media (max-width: 992px) {\n  .opacity-0[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.opacity-1[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.error-img[_ngcontent-%COMP%] {\n  margin-top: 44px;\n  margin-bottom: 11px;\n  height: 54px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n.login-button[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 29px;\n}\n.loading-spin[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px;\n}\n@media (max-width: 700px) {\n  .login-content[_ngcontent-%COMP%] {\n    right: 0 !important;\n  }\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px white inset !important;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  font-size: 12px;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  font-size: 12px;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  font-size: 12px;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQVlJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FBVlI7QUFuQkk7RUFvQkE7SUFXUSxZQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxjQUFBO0VBUlY7QUFDRjtBQXJCSTtFQWNBO0lBaUJRLFVBQUE7RUFOVjtBQUNGO0FBT1E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBTFo7QUFNWTtFQUNJLGdCQUFBO0FBSmhCO0FBTVk7RUFDSSxXQUFBO0FBSmhCO0FBT1E7RUFDSSxnQkFBQTtBQUxaO0FBT1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFMWjtBQU1ZO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFKaEI7QUFNWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUpoQjtBQU9RO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBTFo7QUFPUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFMWjtBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUxaO0FBUUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU5SO0FBUUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQU5SO0FBUUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTlI7QUFPUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUxaO0FBMUdJO0VBMEdJO0lBT1EsVUFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7RUFIZDtBQUNGO0FBSVk7RUFDSSxXQUFBO0FBRmhCO0FBTUk7RUFDSSxhQUFBO0FBSlI7QUFRQTtFQUNJLCtCQUFBO0FBTEo7QUFRQTtFQUNJLG1CQUFBO0FBTEo7QUFRQTtFQUNJLGtCQUFBO0FBTEo7QUFRQTtFQUNJLGdCQUFBO0FBTEo7QUFRQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUE7RUFDSSxnQkFBQTtBQUxKO0FBUUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTEo7QUFRQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFMSjtBQXpLSTtFQWlLSjtJQWVRLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtFQUhOO0FBQ0Y7QUFNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrREFBQTtFQUVBLGtCQUFBO0FBSko7QUEvTEk7RUF3TEo7SUFhUSxhQUFBO0VBRk47QUFDRjtBQUtBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFGSjtBQUtBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxxQ0FBQTtFQUNBLGdDQUFBO0FBSEo7QUF6Tkk7RUErTUo7SUFlUSxhQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0ksU0FBQTtBQURKO0FBSUE7RUFDSSxVQUFBO0FBREo7QUFJQTtFQUNJLFVBQUE7QUFESjtBQTFPSTtFQTBPSjtJQUdRLGFBQUE7RUFDTjtBQUNGO0FBRUE7RUFDSSxVQUFBO0FBQ0o7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFQTtFQUNJO0lBQ0ksbUJBQUE7RUFDTjtBQUNGO0FBRUE7Ozs7RUFJSSxxREFBQTtBQUFKO0FBR0E7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQUo7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6ImNyZWF0ZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBsb2dpbi10YWJsZXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBsb2dpbi1tb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dpbi1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5sb2dpbi1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICB3aWR0aDogMzgwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzMycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA3cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgICAgQGluY2x1ZGUgbG9naW4tdGFibGV0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIGxvZ2luLW1vYmlsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbi1sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAubG9naW4taW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0taG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWJvdHRvbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5mb3Jnb3QtcHdkIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogOTlweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvZ2luLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgIH1cclxuICAgIC5sZWZ0LWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5sZWZ0LWNvbnRlbnQge1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5pbWctYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ0JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbG9naW4tdGFibGV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjcmVjb3ZlcmZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYi1fMTUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1iLTEzcHgge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxufVxyXG5cclxuLm1iLTZweCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5tdC0yNnB4IHtcclxuICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uSWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcC1ob2xkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRUMwMDAwO1xyXG59XHJcblxyXG4udG9vbHRpcHRleHRwYXNzd29yZCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDI1cHggNDBweCAyOHB4IDMycHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IC0yMHB4O1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgbGVmdDogLTI2NXB4O1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjMwcyBlYXNlLWluLW91dDtcclxuICAgIEBpbmNsdWRlIGxvZ2luLXRhYmxldCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9vbHRpcHRleHRwYXNzd29yZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTI1cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxMTFweCAxMjNweCAxODlweCA2MHB4ICMwYzMxNDhmMjtcclxuICAgIDtcclxuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgIEBpbmNsdWRlIGxvZ2luLXRhYmxldCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmFycm93IHtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zMHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5hcnJvdzpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTM2cHg7XHJcbiAgICBsZWZ0OiAtMzVweDtcclxuICAgIHotaW5kZXg6IDEzO1xyXG4gICAgZmlsdGVyOiBibHVyKDFweCk7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjMGMzMTQ4ZjI7XHJcbiAgICA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zMHMgZWFzZS1pbi1vdXQ7XHJcbiAgICBAaW5jbHVkZSBsb2dpbi10YWJsZXQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcnJvdy5wYXNzd29yZDpiZWZvcmUge1xyXG4gICAgdG9wOiA1NXB4O1xyXG59XHJcblxyXG4ucGFzc3dvcmQtYm94IHtcclxuICAgIHRvcDogLTI0cHg7XHJcbn1cclxuXHJcbi5vcGFjaXR5LTAge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIEBpbmNsdWRlIGxvZ2luLXRhYmxldCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLm9wYWNpdHktMSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZXJyb3ItaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDQ0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjlweDtcclxufVxyXG5cclxuLmxvYWRpbmctc3BpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2NHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5sb2dpbi1jb250ZW50IHtcclxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggd2hpdGUgaW5zZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSUUgMTArICovXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 97880:
/*!*******************************************************!*\
  !*** ./src/app/authentication/lock/lock.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockComponent": () => (/* binding */ LockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);


class LockComponent {
    constructor() { }
}
LockComponent.ɵfac = function LockComponent_Factory(t) { return new (t || LockComponent)(); };
LockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LockComponent, selectors: [["app-lock"]], decls: 18, vars: 0, consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/big/auth-bg.jpg) no-repeat center center"], [1, "auth-box"], [1, "logo"], [1, "db"], ["alt", "thumbnail", "width", "100", "src", "assets/images/users/1.jpg", 1, "rounded-circle"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], ["action", "index.html", 1, "form-horizontal", "m-t-20"], [1, "form-group", "row"], ["type", "password", "required", "", "placeholder", "Password", 1, "form-control", "form-control-lg"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["type", "submit", 1, "btn", "btn-block", "btn-lg", "btn-info"]], template: function LockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Genelia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_authentication_authentication_module_ts.js.map