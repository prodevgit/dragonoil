(self["webpackChunkdragon_oil"] = self["webpackChunkdragon_oil"] || []).push([["main"],{

/***/ 98255:
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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 63879:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification/notification.component */ 9613);
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../widget/widget.module */ 88503);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/core.module */ 40294);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ 43256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);








class AccountModule {
}
AccountModule.ɵfac = function AccountModule_Factory(t) { return new (t || AccountModule)(); };
AccountModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule] }); })();


/***/ }),

/***/ 9613:
/*!****************************************************************!*\
  !*** ./src/app/account/notification/notification.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/constants/constants */ 78073);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var src_app_core_service_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/notifications/notifications.service */ 15377);
/* harmony import */ var _core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/helper/toast.helper.service */ 27995);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/helper/validationrule.service */ 15157);
/* harmony import */ var src_app_core_service_common_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/common/communication.service */ 62309);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ 43256);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);















function NotificationComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NotificationComponent_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r5.toggleNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function NotificationComponent_div_6_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "Mark as Unread"));
} }
function NotificationComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "Mark as Unread"));
} }
function NotificationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, NotificationComponent_div_6_div_14_Template, 6, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, NotificationComponent_div_6_div_15_Template, 6, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 4, "Delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 6, "Flag"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.unread);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.unread);
} }
function NotificationComponent_div_8_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NotificationComponent_div_8_div_14_Template_input_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const filter_r12 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r14.filterEvent(filter_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r12 = ctx.$implicit;
    const z_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "notification-", z_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", filter_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("for", "notification-", z_r13, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](filter_r12 == null ? null : filter_r12.name);
} }
function NotificationComponent_div_8_ng_container_20_h6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Today"), " ");
} }
function NotificationComponent_div_8_ng_container_20_h6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "This Week"), " ");
} }
function NotificationComponent_div_8_ng_container_20_h6_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Previous"), " ");
} }
function NotificationComponent_div_8_ng_container_20_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NotificationComponent_div_8_ng_container_20_ng_container_4_ng_container_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); const item_r24 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4); return ctx_r25.notificationClick(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h6", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r24 == null ? null : item_r24.timeslice);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.action_object_content_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r24 == null ? null : item_r24.verb, " ");
} }
function NotificationComponent_div_8_ng_container_20_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NotificationComponent_div_8_ng_container_20_ng_container_4_ng_container_1_Template, 20, 4, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", list_r22.list);
} }
function NotificationComponent_div_8_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NotificationComponent_div_8_ng_container_20_h6_1_Template, 3, 3, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, NotificationComponent_div_8_ng_container_20_h6_2_Template, 3, 3, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, NotificationComponent_div_8_ng_container_20_h6_3_Template, 3, 3, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, NotificationComponent_div_8_ng_container_20_ng_container_4_Template, 2, 1, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r17 === 0 && group_r16.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r17 === 1 && group_r16.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r17 === 2 && group_r16.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", group_r16);
} }
function NotificationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("search", function NotificationComponent_div_8_Template_input_search_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r27.search(); })("ngModelChange", function NotificationComponent_div_8_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r29.tableSearch = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "use", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, NotificationComponent_div_8_div_14_Template, 5, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scrolled", function NotificationComponent_div_8_Template_div_scrolled_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r30.onScroll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, NotificationComponent_div_8_ng_container_20_Template, 5, 4, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("size", ctx_r2.sideSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r2.tableSearch)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 9, "Search notifications"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.filters);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 11, "Apply"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.notificationList);
} }
function NotificationComponent_div_11_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r31.notification == null ? null : ctx_r31.notification.notification, " ");
} }
function NotificationComponent_div_11_table_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Audit Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "AU-386");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function NotificationComponent_div_11_table_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r36 == null ? null : item_r36.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r36 == null ? null : item_r36.value);
} }
function NotificationComponent_div_11_table_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "table", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NotificationComponent_div_11_table_19_ng_container_1_Template, 6, 2, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r33.notification == null ? null : ctx_r33.notification.notification_data);
} }
function NotificationComponent_div_11_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NotificationComponent_div_11_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r37.viewDetailsClick(ctx_r37.notification == null ? null : ctx_r37.notification.time_object); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "View Details"), " ");
} }
function NotificationComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, NotificationComponent_div_11_p_17_Template, 2, 1, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, NotificationComponent_div_11_table_18_Template, 7, 0, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, NotificationComponent_div_11_table_19_Template, 2, 1, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, NotificationComponent_div_11_button_20_Template, 3, 3, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.notification == null ? null : ctx_r3.notification.user, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.notification == null ? null : ctx_r3.notification.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.notification == null ? null : ctx_r3.notification.timeslice, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r3.notification == null ? null : ctx_r3.notification.format) == "general" || (ctx_r3.notification == null ? null : ctx_r3.notification.format) == "comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r3.notification == null ? null : ctx_r3.notification.format) == "record-diff");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r3.notification == null ? null : ctx_r3.notification.format) == "key-value" || (ctx_r3.notification == null ? null : ctx_r3.notification.format) == "comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.notification == null ? null : ctx_r3.notification.time_object);
} }
function NotificationComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "No notification has been selected"), " ");
} }
class NotificationComponent {
    constructor(_fun, _notification, _toast, _helper, router, _activatedRoute, formBuilder, rule, _communication, titleService) {
        this._fun = _fun;
        this._notification = _notification;
        this._toast = _toast;
        this._helper = _helper;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.formBuilder = formBuilder;
        this.rule = rule;
        this._communication = _communication;
        this.titleService = titleService;
        this.filters = [{ name: 'clear' }, { name: 'read' }, { name: 'unflag' }, { name: 'unread' }];
        this.notificationView = true;
        this.unread = false;
        this.offset = 1;
        this.limit = 10;
        this.notificationCount = 0;
        this.sideSize = 'full';
        this.sideView = false;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_1__.SubSink();
    }
    ngOnInit() {
        this.tableSearch = '';
        this.getFormId();
        this.notificationGrid();
        this.handleSidebar();
    }
    toggleNotification() {
        this.sideView = !this.sideView;
    }
    onResize(event) {
        this.handleSidebar();
    }
    handleSidebar() {
        const innerWidth = window.innerWidth;
        if (innerWidth > 767) {
            this.sideSize = 'full';
        }
        if (innerWidth < 767) {
            this.sideSize = 'small';
        }
    }
    getFormId() {
        this.subs.add(this._activatedRoute.params.subscribe(res => {
            const id = res['id'];
            if (id) {
                this.notificationDetails(id);
            }
        }));
    }
    notificationGrid(offSet = 1, search = this.tableSearch, limit = this.limit) {
        const gridParams = {
            q: search,
            offset: (offSet - 1) * this.limit,
            limit: limit,
        };
        this.subs.add(this._notification.getViewNotification(gridParams).subscribe(res => {
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiStatus.ok === res.status) {
                this.notificationList = [[], [], []];
                this.notificationPush(res.emails);
                this.notificationCount = res === null || res === void 0 ? void 0 : res.count;
            }
        }));
    }
    notificationPush(notification) {
        this._helper.convertToServerDate(new Date());
        const week = new Date();
        week.setDate(week.getDate() - 7);
        const thisWeek = week.setHours(0, 0, 0, 0);
        notification.map((value) => {
            const group = new Date(value.group).setHours(0, 0, 0, 0);
            if (this._helper.convertToServerDate(value.group) === this._helper.convertToServerDate(new Date())) {
                this.notificationList[0].push(value);
            }
            if (thisWeek <= group) {
                this.notificationList[1].push(value);
            }
            if (thisWeek > group) {
                this.notificationList[2].push(value);
            }
        });
    }
    notificationScroll(offSet = 1, search = this.tableSearch, limit = this.limit) {
        const gridParams = {
            q: search,
            offset: (offSet - 1) * this.limit,
            limit: limit,
        };
        this.subs.add(this._notification.getViewNotification(gridParams).subscribe(res => {
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiStatus.ok === res.status) {
                this.notificationCount = res === null || res === void 0 ? void 0 : res.count;
                this.notificationList.push(res.emails);
            }
        }));
    }
    notificationClick(ev) {
        this.notificationDetails(ev.notification_id);
    }
    notificationDetails(id) {
        this.subs.add(this._notification.getNotificationDetails(id).subscribe(res => {
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiStatus.ok === res.status) {
                this.sideView = false;
                this.notificationView = false;
                this.notification = res;
            }
        }));
    }
    filterEvent(filter) {
    }
    search() {
        this.notificationGrid(1);
        this.offset = 1;
    }
    onScroll() {
        if (this.notificationCount > (this.offset * this.limit)) {
            this.offset = this.offset + 1;
            this.notificationScroll(this.offset, this.tableSearch, this.limit);
        }
    }
    viewDetailsClick(id) {
        this.router.navigate([`/time-management/detail/${id}`]);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_service_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_5__.ValidationruleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_service_common_communication_service__WEBPACK_IMPORTED_MODULE_6__.CommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title)); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], hostBindings: function NotificationComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function NotificationComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    } }, decls: 13, vars: 8, consts: [[1, "row"], [1, "col-12", "col-md-6"], [1, "mt-3", "font-color-blue", "heading"], ["class", "ri-align-left fw-100", 3, "click", 4, "ngIf"], ["class", "col-12 col-md-6", 4, "ngIf"], ["class", "col-12 col-md-4 no-sidebar", 4, "ngIf"], [1, "col-12", "col-md-8"], [1, "bg-white-notification", "h-100"], ["class", "notification-main-tab", 4, "ngIf"], ["class", "detail-pagenotification", 4, "ngIf"], [1, "ri-align-left", "fw-100", 3, "click"], [1, "title-right", "do-gap-12", "d-flex", "mt-3", "no-icons"], [1, "pointer", "no-icon-head"], [1, "no-sub-icon"], [1, "ri-delete-bin-5-fill"], [1, "ri-flag-line"], ["class", "pointer no-icon-head", 4, "ngIf"], [1, "ri-mail-line"], [1, "ri-mail-open-line"], [1, "col-12", "col-md-4", "no-sidebar"], [1, "no-search", "d-flex", "p-3"], [1, "input-search"], ["type", "search", 1, "form-control", "pr-24", 3, "ngModel", "placeholder", "search", "ngModelChange"], [1, "search-icon-position"], [0, "xlink", "href", "assets/images/svg/notification.svg#icon-search"], ["ngbDropdown", "", 1, "pointer"], ["closeDrop", "ngbDropdown"], ["id", "dropdownBasic", "ngbDropdownToggle", "", 1, ""], ["aria-hidden", "true", 1, "ri-equalizer-line", "setting-icon"], ["ngbDropdownMenu", "", "new", "", "aria-labelledby", "dropdownBasic", 1, ""], [1, "filter-drop-box"], ["class", "ml-2 custom-control custom-radio custom-control-inline", 4, "ngFor", "ngForOf"], ["appDisableButtonApi", "", "id", "dropdownBasic", 1, "btn", "btn-primary", "br-20"], [1, "card"], ["infiniteScroll", "", 1, "card-body", "scroll-height", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], [4, "ngFor", "ngForOf"], [1, "ml-2", "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "name", "notification_selector", 1, "custom-control-input", 3, "id", "value", "click"], [1, "pointer", "custom-control-label", 3, "for"], [1, "ml-2"], ["class", "text-dark notification-sub-heading", 4, "ngIf"], [1, "text-dark", "notification-sub-heading"], [1, "hover-notification-icon", "notification-list-box-color", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "pointer", "pl-1"], ["type", "checkbox", "checked", "true", "id", "option_10", 1, "form-check-input", "pointer", "ng-untouched", "ng-pristine", "ng-valid"], [1, "form-check-label", "notifcation-checkbox", "fs-12", "pointer"], [1, "survey_request"], [1, "survey-text"], [1, "pt-1", "pr-2", "pl-ar-10", "ng-star-inserted"], ["title", "Mark as read", 1, "las", "la-envelope-open", "la-lg", "text-muted", "pointer", "text-danger", "la-icon-notification"], [1, "pointer", "pl-4", "moduleNamePaddingForArabic"], [1, "mt-1", "ml-2"], [1, "font-color-blue", "notification-card-title"], [1, "pr-5", "ml-2", "text-black"], [1, "notification-main-tab"], [1, "col-4", "col-sm-3", "col-md-2", "col-lg-2", "col-xl-1"], [1, "image"], ["src", "assets/images/png/user.png", "alt", "User Image", 1, "img-circle", "elevation-2"], [1, "col-8", "col-sm-9", "col-md-10", "col-lg-10", "col-xl-11"], [1, ""], [1, "font-color-blue", "notification-name"], [1, "font-color-blue", "notification-sub-title"], [1, "notification-sub-title-time"], ["class", "pl-0 mt-1", 4, "ngIf"], ["class", "no-table", 4, "ngIf"], ["class", "btn-blue-gradient my-2", 3, "click", 4, "ngIf"], [1, "pl-0", "mt-1"], [1, "no-table"], [1, "mt-1", "notification-box-bgcolor"], [1, "no-table-col"], [1, "no-table-row"], [1, "btn-blue-gradient", "my-2", 3, "click"], [1, "detail-pagenotification"], [1, "do-no-details", "font-color-blue"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, NotificationComponent_i_3_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, NotificationComponent_div_6_Template, 16, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, NotificationComponent_div_8_Template, 21, 13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, NotificationComponent_div_11_Template, 21, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, NotificationComponent_div_12_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sideSize === "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 6, "Notifications"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.notificationView);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sideSize === "full" ? true : ctx.sideView);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.notificationView);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.notificationView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__.InfiniteScrollDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["@charset \"UTF-8\";\n.no-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n}\n.no-sidebar[size=small][_ngcontent-%COMP%] {\n  position: fixed;\n  width: 95%;\n  z-index: 9;\n}\n.fw-100[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n.heading[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  line-height: 35.88px !important;\n}\n.no-search[_ngcontent-%COMP%] {\n  border: 0px solid black;\n  background-color: #eaeef4;\n  margin-top: 0px;\n}\n.search-icon-position[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 11px;\n  width: 12px;\n  height: 12px;\n  z-index: 3;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.input-search[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.setting-icon[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  line-height: 1.94;\n  font-size: 19px;\n}\n.br-20[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 87%;\n  margin-left: 9px;\n  padding: 2px;\n}\n.custom-control-input[_ngcontent-%COMP%]:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #003b6d;\n  background-color: #003b6d;\n}\n.survey-text[_ngcontent-%COMP%] {\n  font-weight: 550;\n  font-size: 12px;\n  color: #2c65ae;\n  padding-top: 5px;\n}\n.notification-card-title[_ngcontent-%COMP%] {\n  font-weight: 550;\n  font-size: 14px;\n}\n.notification-card-read[_ngcontent-%COMP%] {\n  font-weight: normal !important;\n  font-size: 14px !important;\n  padding: 0px;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\ninput[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.1rem;\n  padding: 0.1rem;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  background-color: #003b6d;\n  border-color: #003b6d;\n  color: white;\n}\ninput[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  content: \"\u2714\";\n  font-size: 12px;\n  text-align: center;\n  border: 1px solid #999;\n  border-radius: 0.2rem;\n  display: inline-block;\n  top: 0;\n  left: 0;\n  height: 16px;\n  width: 16px;\n  margin-right: 0.5rem;\n  vertical-align: text-bottom;\n  color: transparent;\n}\n.notification-sub-heading[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.bg-white-notification[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.detail-pagenotification[_ngcontent-%COMP%] {\n  height: calc(100vh - 174px);\n  display: flex;\n  align-items: center;\n  margin: auto 0;\n  justify-content: center;\n}\n@media (max-width: 767px) {\n  .detail-pagenotification[_ngcontent-%COMP%] {\n    height: calc(100vh - 174px);\n  }\n}\n.do-no-details[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.scroll-height[_ngcontent-%COMP%] {\n  height: calc(100vh - 244px);\n  overflow-y: auto;\n  scrollbar-width: none;\n}\n.image[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  border-radius: 50%;\n  background-color: #ccc;\n  padding: 0;\n  box-shadow: 0px 4px 9px #00000033;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23) !important;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n  height: 100%;\n}\n.notification-main-tab[_ngcontent-%COMP%] {\n  height: calc(100vh - 174px);\n  padding: 20px;\n}\n@media (max-width: 767px) {\n  .notification-main-tab[_ngcontent-%COMP%] {\n    height: calc(100vh - 233px);\n  }\n}\n.notification-main-tab[_ngcontent-%COMP%]   .notification-box-bgcolor[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n@media (max-width: 540px) {\n  .notification-main-tab[_ngcontent-%COMP%]   .notification-box-bgcolor[_ngcontent-%COMP%] {\n    display: grid;\n  }\n}\n.no-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #2c65ae;\n}\n.no-icons[_ngcontent-%COMP%]   .no-icon-head[_ngcontent-%COMP%] {\n  grid-gap: 7px;\n  gap: 7px;\n  line-height: 41px;\n  display: flex;\n}\n.no-icons[_ngcontent-%COMP%]   .no-sub-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.do-gap-12[_ngcontent-%COMP%] {\n  grid-gap: 12px;\n  gap: 12px;\n}\n.no-table[_ngcontent-%COMP%] {\n  display: table;\n  border-collapse: separate;\n  box-sizing: border-box;\n  text-indent: initial;\n  width: 100%;\n}\n.no-table[_ngcontent-%COMP%]   .no-table-col[_ngcontent-%COMP%] {\n  font-weight: 550;\n  color: #0b3a62;\n  padding: 10px;\n}\n.no-table[_ngcontent-%COMP%]   .no-table-row[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.pr-24[_ngcontent-%COMP%] {\n  padding-right: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFZaEI7RUFDRSxrQkFBQTtBQVZGO0FBV0U7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFUSjtBQVlBO0VBQ0EsZ0JBQUE7QUFUQTtBQVlBO0VBQ0UsMEJBQUE7RUFDQSwrQkFBQTtBQVRGO0FBV0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQVJGO0FBVUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7QUFQRjtBQVNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBTkY7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTEY7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUpGO0FBTUE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBSEY7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFERjtBQUdBO0VBQ0UsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFBRjtBQUVBO0VBQ0MsYUFBQTtBQUNEO0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFFRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQURBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBSUY7QUFEQTtFQUNFLHNCQUFBO0FBSUY7QUFGQTtFQUNHLDJCQUFBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLHVCQUFBO0FBSUo7QUE3SEU7RUFtSEY7SUFRTSwyQkFBQTtFQU1KO0FBQ0Y7QUFKQTtFQUNFLGVBQUE7QUFPRjtBQUxBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBUUY7QUFOQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUZBQUE7QUFTRjtBQVJFO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVVOO0FBTkE7RUFDRSwyQkFBQTtFQUNBLGFBQUE7QUFTRjtBQWpLRTtFQXNKRjtJQUlJLDJCQUFBO0VBV0Y7QUFDRjtBQURFO0VBQ0UseUJBQUE7QUFHSjtBQXBLQTtFQWdLRTtJQUdJLGFBQUE7RUFLSjtBQUNGO0FBREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDRSxjQUFBO0FBSUo7QUFGRTtFQUNFLGFBQUE7RUFBQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBSUo7QUFGRTtFQUNFLGVBQUE7QUFJSjtBQUFBO0VBQ0UsY0FBQTtFQUFBLFNBQUE7QUFHRjtBQURBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFJRjtBQUhFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUtKO0FBSEU7RUFDRSxhQUFBO0FBS0o7QUFGQTtFQUNFLG1CQUFBO0FBS0YiLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm5vLXNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubm8tc2lkZWJhcltzaXplPXNtYWxsXSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDk1JTtcbiAgei1pbmRleDogOTtcbn1cblxuLmZ3LTEwMCB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzNS44OHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1zZWFyY2gge1xuICBib3JkZXI6IDBweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWVmNDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uc2VhcmNoLWljb24tcG9zaXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDExcHg7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlucHV0LXNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5nLWljb24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuOTQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmJyLTIwIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDg3JTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXM6bm90KDpjaGVja2VkKSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAzYjZkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYjZkO1xufVxuXG4uc3VydmV5LXRleHQge1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMmM2NWFlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ubm90aWZpY2F0aW9uLWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogNTUwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ub3RpZmljYXRpb24tY2FyZC1yZWFkIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjFyZW07XG4gIHBhZGRpbmc6IDAuMXJlbTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNiNmQ7XG4gIGJvcmRlci1jb2xvcjogIzAwM2I2ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5ub3RpZmljYXRpb24tc3ViLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5iZy13aGl0ZS1ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZGV0YWlsLXBhZ2Vub3RpZmljYXRpb24ge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzRweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0byAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZGV0YWlsLXBhZ2Vub3RpZmljYXRpb24ge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE3NHB4KTtcbiAgfVxufVxuXG4uZG8tbm8tZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNjcm9sbC1oZWlnaHQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDRweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDlweCAjMDAwMDAwMzM7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKSAhaW1wb3J0YW50O1xufVxuLmltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubm90aWZpY2F0aW9uLW1haW4tdGFiIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc0cHgpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ub3RpZmljYXRpb24tbWFpbi10YWIge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzM3B4KTtcbiAgfVxufVxuLm5vdGlmaWNhdGlvbi1tYWluLXRhYiAubm90aWZpY2F0aW9uLWJveC1iZ2NvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAubm90aWZpY2F0aW9uLW1haW4tdGFiIC5ub3RpZmljYXRpb24tYm94LWJnY29sb3Ige1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cbn1cblxuLm5vLWljb25zIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzJjNjVhZTtcbn1cbi5uby1pY29ucyAubm8taWNvbi1oZWFkIHtcbiAgZ2FwOiA3cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm5vLWljb25zIC5uby1zdWItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRvLWdhcC0xMiB7XG4gIGdhcDogMTJweDtcbn1cblxuLm5vLXRhYmxlIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtaW5kZW50OiBpbml0aWFsO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uby10YWJsZSAubm8tdGFibGUtY29sIHtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6ICMwYjNhNjI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubm8tdGFibGUgLm5vLXRhYmxlLXJvdyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wci0yNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59Il19 */"] });


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutes": () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _account_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account/notification/notification.component */ 9613);
/* harmony import */ var _guard_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/admin.guard */ 13233);
/* harmony import */ var _guard_manager_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/manager.guard */ 60980);
/* harmony import */ var _guard_role_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/role.guard */ 86376);
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/blank/blank.component */ 71658);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full/full.component */ 76729);
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/login/login.component */ 67353);
/* harmony import */ var _guard_publicauth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/publicauth.guard */ 62741);
/* harmony import */ var _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/logout/logout.component */ 93667);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 92340);










let routes = [];
if (src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.production) {
    routes = [
        {
            path: '',
            component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__.FullComponent,
            children: [
                {
                    path: '',
                    redirectTo: '/login',
                    pathMatch: 'full'
                },
                {
                    path: 'notification',
                    component: _account_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent,
                    canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_3__.RoleGuard]
                },
                {
                    path: 'notification/:id',
                    component: _account_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent,
                    canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_3__.RoleGuard]
                },
                {
                    path: 'home',
                    redirectTo: 'dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'employee-details',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_employee-details_employee-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./employee-details/employee-details.module */ 47658)).then(m => m.EmployeeDetailsModule),
                    canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_1__.AdminGuard]
                },
                {
                    path: 'dashboard',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(m => m.DashboardModule),
                    canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_1__.AdminGuard]
                },
                {
                    path: 'project-settings',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_project-settings_project-settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./project-settings/project-settings.module */ 80866)).then(m => m.ProjectSettingsModule),
                    canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_1__.AdminGuard]
                },
                {
                    path: 'task-entry',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_task-entry_task-entry_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./task-entry/task-entry.module */ 9376)).then(m => m.TaskEntryModule),
                    canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_3__.RoleGuard]
                },
                {
                    path: 'time-management',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_time-management_time-management_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./time-management/time-management.module */ 86226)).then(m => m.TimeManagementModule),
                    canActivate: [_guard_manager_guard__WEBPACK_IMPORTED_MODULE_2__.ManagerGuard]
                },
                {
                    path: 'control-panel',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_control-panel_control-pannel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./control-panel/control-pannel.module */ 17820)).then(m => m.ControlPanelModule),
                    canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_1__.AdminGuard]
                },
            ]
        },
        {
            path: 'logout',
            redirectTo: 'account/logout',
            pathMatch: 'full'
        },
        {
            path: 'account/logout',
            component: _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__.LogoutComponent
        },
        {
            path: '',
            component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_4__.BlankComponent,
            children: [
                {
                    path: 'login',
                    component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent,
                    canActivate: [_guard_publicauth_guard__WEBPACK_IMPORTED_MODULE_7__.PublicAuthGuard]
                },
                {
                    path: 'authentication',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then(m => m.AuthenticationModule),
                    canActivate: [_guard_publicauth_guard__WEBPACK_IMPORTED_MODULE_7__.PublicAuthGuard]
                },
            ]
        },
        {
            path: '**',
            redirectTo: '/login'
        }
    ];
}
else {
    routes = [
        {
            path: '',
            component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__.FullComponent,
            children: [
                {
                    path: '',
                    redirectTo: '/login',
                    pathMatch: 'full'
                },
                {
                    path: 'notification',
                    component: _account_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent,
                    canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_3__.RoleGuard]
                },
                {
                    path: 'notification/:id',
                    component: _account_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent,
                    canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_3__.RoleGuard]
                },
                {
                    path: 'home',
                    redirectTo: 'dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'employee-details',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_employee-details_employee-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./employee-details/employee-details.module */ 47658)).then(m => m.EmployeeDetailsModule),
                    canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_1__.AdminGuard]
                },
                {
                    path: 'control-panel',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_control-panel_control-pannel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./control-panel/control-pannel.module */ 17820)).then(m => m.ControlPanelModule),
                    canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_1__.AdminGuard]
                },
                {
                    path: 'dashboard',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(m => m.DashboardModule),
                    canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_1__.AdminGuard]
                },
                {
                    path: 'project-settings',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_project-settings_project-settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./project-settings/project-settings.module */ 80866)).then(m => m.ProjectSettingsModule),
                    canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_1__.AdminGuard]
                },
                {
                    path: 'task-entry',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_task-entry_task-entry_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./task-entry/task-entry.module */ 9376)).then(m => m.TaskEntryModule),
                    canActivate: [_guard_role_guard__WEBPACK_IMPORTED_MODULE_3__.RoleGuard]
                },
                {
                    path: 'time-management',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_time-management_time-management_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./time-management/time-management.module */ 86226)).then(m => m.TimeManagementModule),
                    canActivate: [_guard_manager_guard__WEBPACK_IMPORTED_MODULE_2__.ManagerGuard]
                },
            ]
        },
        {
            path: 'logout',
            redirectTo: 'account/logout',
            pathMatch: 'full'
        },
        {
            path: 'account/logout',
            component: _authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__.LogoutComponent
        },
        {
            path: '',
            component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_4__.BlankComponent,
            children: [
                {
                    path: 'login',
                    component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent,
                    canActivate: [_guard_publicauth_guard__WEBPACK_IMPORTED_MODULE_7__.PublicAuthGuard]
                },
                {
                    path: 'authentication',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then(m => m.AuthenticationModule),
                    canActivate: [_guard_publicauth_guard__WEBPACK_IMPORTED_MODULE_7__.PublicAuthGuard]
                },
            ]
        },
        {
            path: '**',
            redirectTo: '/login'
        }
    ];
}
const appRoutes = routes;


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




class AppComponent {
    constructor(_router, _translate) {
        this._router = _router;
        this._translate = _translate;
        this._translate.setDefaultLang('en');
        // translate.get('HELLO', { value: 'world' }).subscribe((res: string) => { });
        // Listen the navigation events to start or complete the slim bar loading
        this.sub = this._router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationStart) {
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationCancel ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationError) {
                const scrollToTop = window.setInterval(() => {
                    const pos = window.pageYOffset;
                    if (pos > 0) {
                        window.scrollTo(0, pos - 50); // how far to scroll on each step
                    }
                    else {
                        window.clearInterval(scrollToTop);
                    }
                }, 16);
            }
        }, (error) => {
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account/account.module */ 63879);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ 17500);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/blank/blank.component */ 71658);
/* harmony import */ var _shared_httploader_httploader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/httploader/httploader.component */ 79152);
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/header-navigation/navigation.component */ 80496);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full/full.component */ 76729);
/* harmony import */ var _core_interceptor_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/interceptor/auth-header.interceptor */ 45464);
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ 56300);
/* harmony import */ var _core_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/interceptor/loader.interceptor */ 5674);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 86608);
/* harmony import */ var src_app_core_interceptor_status_check_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/interceptor/status-check.interceptor */ 79395);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/http-loader */ 49476);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget/widget.module */ 88503);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-select-dropdown */ 34772);
/* harmony import */ var _chart_chart_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chart/chart.module */ 76534);



































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
class catchConsoleErrorHandler {
    handleError(error) {
        // do something with the exception
        console.log(error);
    }
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ErrorHandler, useClass: catchConsoleErrorHandler },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: _core_interceptor_loader_interceptor__WEBPACK_IMPORTED_MODULE_8__.LoaderInterceptor,
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: src_app_core_interceptor_status_check_interceptor__WEBPACK_IMPORTED_MODULE_12__.StatusCheckInterceptor,
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: _core_interceptor_auth_header_interceptor__WEBPACK_IMPORTED_MODULE_6__.AuthHeaderInterceptor,
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS,
            useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_7__.ErrorInterceptor,
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_11__.CoreModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.ScrollingModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_9__.appRoutes, { useHash: false }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient]
                }
            }),
            _widget_widget_module__WEBPACK_IMPORTED_MODULE_13__.WidgetModule,
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_28__.SelectDropDownModule,
            _chart_chart_module__WEBPACK_IMPORTED_MODULE_14__.ChartModule,
            _account_account_module__WEBPACK_IMPORTED_MODULE_0__.AccountModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__.AppComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__.FullComponent,
        _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__.BlankComponent,
        _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__.NavigationComponent,
        _shared_httploader_httploader_component__WEBPACK_IMPORTED_MODULE_3__.HttploaderComponent,
        _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_11__.CoreModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.ScrollingModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule, _widget_widget_module__WEBPACK_IMPORTED_MODULE_13__.WidgetModule,
        ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_28__.SelectDropDownModule,
        _chart_chart_module__WEBPACK_IMPORTED_MODULE_14__.ChartModule,
        _account_account_module__WEBPACK_IMPORTED_MODULE_0__.AccountModule] }); })();
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__.TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


/***/ }),

/***/ 67353:
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_warning_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/constants/warning-messages */ 31501);
/* harmony import */ var _core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/constants/login-constants */ 22767);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/helper/validationrule.service */ 15157);
/* harmony import */ var src_app_core_service_login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/login/login.service */ 76285);
/* harmony import */ var src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/helper/storage.service */ 23995);
/* harmony import */ var src_app_core_service_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/service/loader/loader.service */ 8891);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/helper/toast.helper.service */ 27995);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

















function LoginComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "Email is required"));
} }
function LoginComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "Email must be a valid email address"), " ");
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, LoginComponent_div_19_div_1_Template, 3, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, LoginComponent_div_19_div_2_Template, 3, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.email);
} }
function LoginComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "This field is required"));
} }
function LoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, LoginComponent_div_25_div_1_Template, 3, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function LoginComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "Login"));
} }
function LoginComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "Logging ..."), " ");
} }
function LoginComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r4.httpError, " ");
} }
function LoginComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "Email is required "));
} }
function LoginComponent_div_53_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "Email must be a valid email address "), " ");
} }
function LoginComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, LoginComponent_div_53_div_1_Template, 3, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, LoginComponent_div_53_div_2_Template, 3, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.resetFormControl.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.resetFormControl.email.errors.email);
} }
function LoginComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r6.httpErrorForgot, " ");
} }
const _c0 = function (a0) { return { "d-none": a0 }; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const _c2 = function (a0) { return { "d-block": a0 }; };
class LoginComponent {
    constructor(document, formBuilder, rule, login, storage, _loader, _helper, _toaster, router, _activatedRoute) {
        this.document = document;
        this.formBuilder = formBuilder;
        this.rule = rule;
        this.login = login;
        this.storage = storage;
        this._loader = _loader;
        this._helper = _helper;
        this._toaster = _toaster;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.loginForm = true;
        this.recoverForm = false;
        this.passwordClick = false;
        this.validationPassword = true;
        this.submitted = false;
        this.resetFormSubmitted = false;
        this.loading = false;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_3__.SubSink();
        this.userDetails = {};
        this._loader.isLoading.subscribe(res => {
            this.loading = res;
        });
    }
    ngOnInit() {
        this.httpError = '';
        this.httpErrorForgot = '';
        this.setForm();
        this.resetForm = this.formBuilder.group({
            email: ['', this.rule.emailValidation]
        });
    }
    setForm() {
        this.registerForm = this.formBuilder.group({
            email: ['', this.rule.emailValidation],
            password: ['', this.rule.requiredValidation],
        });
    }
    get f() {
        return this.registerForm.controls;
    }
    get resetFormControl() {
        return this.resetForm.controls;
    }
    showRecoverForm() {
        this.resetEmail = '';
        this.loginForm = !this.loginForm;
        this.resetFormSubmitted = false;
        this.submitted = false;
        this.passwordClick = false;
        this.httpError = '';
        this.httpErrorForgot = '';
        this.setForm();
        this.resetForm.reset();
        this.recoverForm = !this.recoverForm;
        if (this.recoverForm) {
            this.validationPassword = false;
        }
        else {
            this.validationPassword = true;
        }
    }
    onSubmit() {
        this.submitted = true;
        document.cookie = `${src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.LocalStorageKey.userLogin}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;;Domain=.${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.cookieDomain}`;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.subs.add(this.login.login(this.registerForm.value).subscribe((res) => {
            if (res.status === src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.ApiStatus.ok) {
                this.httpError = '';
                let returnUrlValue = this._activatedRoute.snapshot.queryParamMap.get(_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.returnUrl);
                if (returnUrlValue === null || returnUrlValue === void 0 ? void 0 : returnUrlValue.includes(_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginUrls.logout)) {
                    returnUrlValue = null;
                }
                this.userDetails = res;
                this._helper.setUser(res);
                this._toaster.success(res === null || res === void 0 ? void 0 : res.message);
                if (res.user_type === src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.userRole.admin) {
                    this.router.navigate([returnUrlValue || _core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginUrls.dashboard]);
                }
                else {
                    this.router.navigate([returnUrlValue || _core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginUrls.employee]);
                }
            }
            else {
                if (res[_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginValue.message]) {
                    this.httpError = res[_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginValue.message];
                }
                else if (res[_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginValue.msg]) {
                    this.httpError = res[_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginValue.msg];
                }
            }
        }));
    }
    getUserProfile() {
        this.subs.add(this.login.userProfile().subscribe((res) => {
            if (res.status === src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.ApiStatus.ok) {
                if (res instanceof Array) {
                    this.storage.setLocalStorage(src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.LocalStorageKey.userDetails, res[0]);
                }
            }
        }));
    }
    resetPassword() {
        this.resetFormSubmitted = true;
        this.resetEmail = this.resetForm.value.email;
        if (this.resetForm.invalid) {
            this._toaster.warning(_core_constants_warning_messages__WEBPACK_IMPORTED_MODULE_0__.toastMessages.invalidEmail);
            return;
        }
        const formData = new FormData();
        formData.append(_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginValue.email, this.resetEmail);
        this.subs.add(this.login.resetPassword(formData).subscribe((res) => {
            if (res.status === src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_4__.ApiStatus.created) {
                this.httpErrorForgot = '';
                this._toaster.success(res.message);
                this.resetEmail = '';
                this.showRecoverForm();
            }
            else {
                if (res[_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginValue.message]) {
                    this.httpErrorForgot = res[_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginValue.message];
                }
                else if (res[_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginValue.msg]) {
                    this.httpErrorForgot = res[_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginValue.msg];
                }
            }
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_5__.ValidationruleService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_service_login_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_service_loader_loader_service__WEBPACK_IMPORTED_MODULE_8__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_9__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_10__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 68, vars: 51, consts: [[1, "login-box"], [1, "login-content"], [1, "auth-box", "on-sidebar"], ["id", "loginform", 1, "loginform", 3, "ngClass"], [1, "login-logo"], [1, "db"], ["src", "assets/images/svg/logo_icon.svg", "width", "150", "alt", "logo", 1, "login-image"], [1, "row"], [1, "col-md-12", "col-12"], [1, "login-text"], [1, "col-12"], ["id", "loginform", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-13px"], ["type", "text", "placeholder", "Enter username", "formControlName", "email", "aria-label", "email", "aria-describedby", "basic-addon1", 1, "form-control", "form-control-lg", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "mb-6px"], ["type", "password", "placeholder", "Enter password", "aria-label", "Password", "formControlName", "password", "aria-describedby", "basic-addon1", 1, "form-control", "form-control-lg", 3, "ngClass"], [1, "col-md-12"], [1, "form-bottom"], ["href", "javascript:void(0)", "id", "to-recover", 1, "forgot-pwd", 3, "click"], ["class", "btn background-dark-btn primary", "type", "submit", 4, "ngIf"], ["disabled", "", "class", "btn btn-lg btn-login", "type", "submit", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["id", "recoverform", 3, "ngClass"], ["src", "assets/images/png/logo.png", "width", "150", "alt", "logo", 1, "login-image"], [1, "mb-13px"], [3, "formGroup", "ngSubmit"], [1, "col-12", "col-md-12"], ["formControlName", "email", "type", "email", "required", "", "placeholder", "Email", 1, "form-control", "form-control-lg", 3, "ngClass"], ["class", "invalid-feedback ", 4, "ngIf"], [1, "form-bottom", "mt-26px"], ["appDisableButtonApi", "", "type", "submit ", "name", "action ", 1, "btn", "btn-lg", "btn-login", 3, "click"], [1, "mt-4"], ["href", "javascript:void(0) ", "id", "to-recover ", 1, "fw-600", "ml-1", "pointer", 3, "click"], [1, "left-content"], [1, "img-box"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "submit", 1, "btn", "background-dark-btn", "primary"], ["disabled", "", "type", "submit", 1, "btn", "btn-lg", "btn-login"], [1, "error-message"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_29_listener() { return ctx.showRecoverForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, LoginComponent_button_32_Template, 4, 3, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, LoginComponent_button_33_Template, 3, 3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, LoginComponent_div_34_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](38, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_46_listener() { return ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](52, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, LoginComponent_div_53_Template, 3, 2, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_56_listener() { return ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_62_listener() { return ctx.showRecoverForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, LoginComponent_div_65_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](67, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](41, _c0, ctx.recoverForm));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 23, "Login to continue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 25, "Username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](43, _c1, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 27, "Password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](45, _c1, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 29, "Forgot password"), "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.httpError !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](47, _c2, ctx.recoverForm));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](44, 31, "Recover Password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.resetForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](51, 33, "Enter your Email and instructions will be sent to you"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](49, _c1, ctx.resetFormSubmitted && ctx.resetFormControl.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.resetFormSubmitted && ctx.resetFormControl.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](58, 35, "Reset"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](61, 37, "Back to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](64, 39, "Login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.httpErrorForgot !== "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: [".login-box[_ngcontent-%COMP%] {\n  background: url('banner.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  min-height: 550px;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  width: 488px;\n  min-height: 100%;\n  background-color: #fff;\n  padding: 95px 55px 55px 55px;\n  right: 0;\n  box-shadow: 0 0 7px 5px rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 550px) {\n  .login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 0 auto;\n  padding-bottom: 10px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]   .login-image[_ngcontent-%COMP%] {\n  max-width: 160px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .form-horizontal[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .form-bottom[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .form-bottom[_ngcontent-%COMP%]   .forgot-pwd[_ngcontent-%COMP%] {\n  text-align: right;\n  display: block;\n  width: 100%;\n  font-size: 14px;\n  color: #999;\n  margin-bottom: 26px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .form-bottom[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 26px;\n  background: #000069;\n  color: white;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border-radius: 3px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #999;\n  margin-bottom: 8px;\n}\n.login-box[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 120px;\n  min-height: 40px;\n}\n.login-box[_ngcontent-%COMP%]   .login-text[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-size: 18px;\n  color: #333333;\n  line-height: 1.2;\n}\n.login-box[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  overflow: hidden;\n}\n.login-box[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n  z-index: 2;\n  display: flex;\n  align-items: center;\n}\n.login-box[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  width: 44%;\n  height: 100%;\n  position: absolute;\n  top: 20%;\n  left: 5%;\n}\n@media (max-width: 992px) {\n  .login-box[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n    width: 70%;\n    top: 30px;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n  }\n}\n.login-box[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-box[_ngcontent-%COMP%]   #recoverform[_ngcontent-%COMP%] {\n  display: none;\n}\n.mb-_15[_ngcontent-%COMP%] {\n  margin-bottom: -15px !important;\n}\n.mb-13px[_ngcontent-%COMP%] {\n  margin-bottom: 13px;\n}\n.mb-6px[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.mt-26px[_ngcontent-%COMP%] {\n  margin-top: 26px;\n}\n.validationIcon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-right: 10px;\n}\n.tooltip-holder[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.tooltiptextpassword[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  position: absolute;\n  font-size: 12px;\n  padding: 25px 40px 28px 32px;\n  width: 250px;\n  margin: -20px;\n  top: 57px;\n  left: -265px;\n  background: inherit;\n  border-radius: 20px;\n  z-index: 10;\n  overflow: hidden;\n}\n@media (max-width: 992px) {\n  .tooltiptextpassword[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n    color: #999;\n    top: 0;\n    left: 0;\n  }\n}\n.tooltiptextpassword[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 300px;\n  background: inherit;\n  position: absolute;\n  left: -25px;\n  right: 0;\n  top: -25px;\n  bottom: 0;\n  box-shadow: inset 111px 123px 189px 60px #132331;\n  filter: blur(10px);\n}\n@media (max-width: 992px) {\n  .tooltiptextpassword[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n.arrow[_ngcontent-%COMP%] {\n  z-index: 9;\n  background: inherit;\n  transition: all 0.3s ease-in-out;\n}\n.arrow[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 136px;\n  left: -35px;\n  z-index: 13;\n  filter: blur(1px);\n  width: 0;\n  height: 0;\n  border-top: 16px solid transparent;\n  border-left: 15px solid rgba(19, 44, 65, 0.38);\n  border-bottom: 16px solid transparent;\n}\n@media (max-width: 992px) {\n  .arrow[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n}\n.opacity-0[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n@media (max-width: 992px) {\n  .opacity-0[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.opacity-1[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.error-message[_ngcontent-%COMP%] {\n  line-height: 18px;\n  padding-top: 18px;\n  text-align: center;\n  color: #EC0000;\n}\n@media (max-width: 700px) {\n  .login-content[_ngcontent-%COMP%] {\n    right: 0 !important;\n  }\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px white inset !important;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  font-size: 12px;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  font-size: 12px;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  font-size: 12px;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWEo7QUFZSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxRQUFBO0VBQ0EsMkNBQUE7QUFWUjtBQWJJO0VBZUE7SUFVUSxXQUFBO0VBUlY7QUFDRjtBQVNRO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVBaO0FBUVk7RUFDSSxnQkFBQTtBQU5oQjtBQVFZO0VBQ0ksV0FBQTtBQU5oQjtBQVNRO0VBQ0ksZ0JBQUE7QUFQWjtBQVNRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBUFo7QUFRWTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTmhCO0FBUVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFOaEI7QUFTUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQVBaO0FBU1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBUFo7QUFTUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFQWjtBQVVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQVVJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVJSO0FBU1E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFQWjtBQXBHSTtFQXNHSTtJQU9RLFVBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxjQUFBO0VBTGQ7QUFDRjtBQU1ZO0VBQ0ksV0FBQTtBQUpoQjtBQVFJO0VBQ0ksYUFBQTtBQU5SO0FBVUE7RUFDSSwrQkFBQTtBQVBKO0FBVUE7RUFDSSxtQkFBQTtBQVBKO0FBVUE7RUFDSSxrQkFBQTtBQVBKO0FBVUE7RUFDSSxnQkFBQTtBQVBKO0FBVUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVVBO0VBQ0ksZ0JBQUE7QUFQSjtBQVVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQTNKSTtFQXNKSjtJQWNRLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtFQUxOO0FBQ0Y7QUFRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FBTEo7QUFqTEk7RUE0S0o7SUFZUSxhQUFBO0VBSE47QUFDRjtBQU1BO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFISjtBQU1BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsOENBQUE7RUFDQSxxQ0FBQTtBQUhKO0FBMU1JO0VBa01KO0lBYVEsYUFBQTtFQUROO0FBQ0Y7QUFJQTtFQUNJLFVBQUE7QUFESjtBQW5OSTtFQW1OSjtJQUdRLGFBQUE7RUFDTjtBQUNGO0FBRUE7RUFDSSxVQUFBO0FBQ0o7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVBO0VBQ0k7SUFDSSxtQkFBQTtFQUNOO0FBQ0Y7QUFFQTs7OztFQUlJLHFEQUFBO0FBQUo7QUFHQTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFBSjtBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbG9naW4tdGFibGV0IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbG9naW4tbW9iaWxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9naW4tYm94IHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2pwZy9iYW5uZXIuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAubG9naW4tY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgd2lkdGg6IDQ4OHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiA5NXB4IDU1cHggNTVweCA1NXB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA3cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgICAgQGluY2x1ZGUgbG9naW4tbW9iaWxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbi1sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAubG9naW4taW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0taG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWJvdHRvbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5mb3Jnb3QtcHdkIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDY5O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sb2dpbi10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgICAubGVmdC1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubGVmdC1jb250ZW50IHtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuaW1nLWJveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICAgICAgbGVmdDogNSU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxvZ2luLXRhYmxldCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI3JlY292ZXJmb3JtIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWItXzE1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYi0xM3B4IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XHJcbn1cclxuXHJcbi5tYi02cHgge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4ubXQtMjZweCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG59XHJcblxyXG4udmFsaWRhdGlvbkljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnRvb2x0aXAtaG9sZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwdGV4dHBhc3N3b3JkIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMjVweCA0MHB4IDI4cHggMzJweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogLTIwcHg7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICBsZWZ0OiAtMjY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIEBpbmNsdWRlIGxvZ2luLXRhYmxldCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9vbHRpcHRleHRwYXNzd29yZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTI1cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxMTFweCAxMjNweCAxODlweCA2MHB4ICMxMzIzMzE7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICBAaW5jbHVkZSBsb2dpbi10YWJsZXQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMzBzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYXJyb3c6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzNnB4O1xyXG4gICAgbGVmdDogLTM1cHg7XHJcbiAgICB6LWluZGV4OiAxMztcclxuICAgIGZpbHRlcjogYmx1cigxcHgpO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgcmdiYSgxOSwgNDQsIDY1LCAwLjM4KTtcclxuICAgIGJvcmRlci1ib3R0b206IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBAaW5jbHVkZSBsb2dpbi10YWJsZXQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcGFjaXR5LTAge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIEBpbmNsdWRlIGxvZ2luLXRhYmxldCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLm9wYWNpdHktMSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNFQzAwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmxvZ2luLWNvbnRlbnQge1xyXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCB3aGl0ZSBpbnNldCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogRmlyZWZveCAxOSsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJRSAxMCsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgLyogRmlyZWZveCAxOC0gKi9cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 93667:
/*!***********************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/constants/login-constants */ 22767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helper/storage.service */ 23995);
/* harmony import */ var src_app_core_service_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/login/login.service */ 76285);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/helper/toast.helper.service */ 27995);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);







class LogoutComponent {
    constructor(_storage, _loginService, _helper, _toast, router, _activatedRoute) {
        this._storage = _storage;
        this._loginService = _loginService;
        this._helper = _helper;
        this._toast = _toast;
        this.router = router;
        this._activatedRoute = _activatedRoute;
    }
    ngOnInit() {
        this._loginService.logOut().subscribe((res) => {
            this._toast.success(res[_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__.loginValue.detail]);
            this._helper.deleteCookie().then(v => {
                this._storage.clearLocalStorage();
                this.router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__.loginUrls.login], { queryParams: { returnUrl: this._activatedRoute.snapshot.queryParamMap.get(_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__.returnUrl) } });
            });
        });
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_service_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
LogoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 0, vars: 0, template: function LogoutComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 42482:
/*!********************************************************!*\
  !*** ./src/app/chart/bar-graph/bar-graph.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarGraphComponent": () => (/* binding */ BarGraphComponent)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ 90390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipe/short-text.pipe */ 48984);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);




const _c0 = ["barGraph"];
const _c1 = ["barGraphTooltip"];
class BarGraphComponent {
    constructor(_shortText, _helper) {
        this._shortText = _shortText;
        this._helper = _helper;
        this.horizontalGraph = false;
        this.chartConfiguration = {
            width: 400,
            height: 210,
            margin: { top: 40, right: 40, bottom: 40, left: 40 },
            axisFontSize: '12px',
            dataLabelFontSize: '12px',
            yAxisTranslateX: -20,
            groupTranslateX: 20
        };
        this.placeholderDataset = [
            { label: 'No Data 1', colors: '#e9e9e9', data: 1 },
            { label: 'No Data 2', colors: '#e9e9e9', data: 2 },
            { label: 'No Data 3', colors: '#e9e9e9', data: 3 },
            { label: 'No Data 4', colors: '#e9e9e9', data: 4 },
            { label: 'No Data 5', colors: '#e9e9e9', data: 5 }
        ];
    }
    ngOnInit() {
        this.initSvg();
        this.initScale(this.placeholderDataset);
        this.drawAxis();
        this.drawChart();
    }
    ngOnChanges() {
        var _a;
        if (this.svg) {
            if (((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
                this.initScale(this.data);
                this.drawUpdatedAxis();
                this.updateChart(this.data);
            }
            else {
                d3__WEBPACK_IMPORTED_MODULE_0__.select(this.chartContainer.nativeElement).select('svg').remove();
                d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement).style('display', 'none');
                this.initSvg();
                this.initScale(this.placeholderDataset);
                this.drawAxis();
                this.drawChart();
            }
        }
    }
    /**
    * @description Function used to initialize and create the svg
    * @author Sreejith T
    * @date 28/09/2021
    */
    initSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__.select(this.chartContainer.nativeElement)
            .append('svg')
            .attr('viewBox', `0 0 ${this.chartConfiguration.width + this.chartConfiguration.margin.left + this.chartConfiguration.margin.right} ${this.chartConfiguration.height + this.chartConfiguration.margin.top + this.chartConfiguration.margin.bottom + 10}`)
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .append('g')
            .attr('transform', `translate(${this.chartConfiguration.margin.left + this.chartConfiguration.groupTranslateX} , ${this.chartConfiguration.margin.top})`);
    }
    /**
    * @description Function used to draw the created axes
    * @author Sreejith T
    * @date 28/09/2021
    */
    drawAxis() {
        this.xAxis = this.svg.append('g')
            .attr('class', 'xAxis')
            .attr('transform', `translate(0, ${this.chartConfiguration.height})`);
        this.yAxis = this.svg.append('g')
            .attr('class', 'yAxis')
            .attr('transform', `translate(${this.chartConfiguration.yAxisTranslateX}, 0)`);
    }
    /**
    * @description Function used to draw the initial bar chart (placeholder bar graph)
    * @author Sreejith T
    * @date 28/09/2021
    */
    drawChart() {
        this.bars = this.svg
            .selectAll('rect')
            .data(this.placeholderDataset)
            .enter()
            .append('rect')
            .attr('width', (d) => this.horizontalGraph ? this.xScale(d.data) : this.xScale.bandwidth())
            .attr('height', (d) => this.horizontalGraph ? this.yScale.bandwidth() : this.chartConfiguration.height - this.yScale(d.data))
            .attr('fill', (d) => d.colors ? d.colors : d.color)
            .attr('x', (d) => this.horizontalGraph ? 0 : this.xScale(d.label))
            .attr('y', (d) => this.horizontalGraph ? this.yScale(d.label) : this.yScale(d.data));
    }
    /**
    * @description Function used to initialize and update the X axis and Y axis from the data provided from the parent component
    * @author Sreejith T
    * @date 28/09/2021
    * @param {D3BarChartDataFromParent[]} data
    */
    initScale(data) {
        if (!this.horizontalGraph) {
            this.xScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleBand().domain(data.map(data => data.label)).rangeRound([0, this.chartConfiguration.width]).padding(0.1);
            this.yScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().domain([0, d3__WEBPACK_IMPORTED_MODULE_0__.max(data, (d) => d.data)]).range([this.chartConfiguration.height, 0]);
        }
        else {
            this.xScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().domain([0, d3__WEBPACK_IMPORTED_MODULE_0__.max(data, (d) => d.data)]).range([0, this.chartConfiguration.width]);
            this.yScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleBand().domain(data.map(data => data.label)).rangeRound([this.chartConfiguration.height, 0]).padding(0.1);
        }
    }
    /**
    * @description Function used to draw the updated axes
    * @author Sreejith T
    * @date 28/09/2021
    */
    drawUpdatedAxis() {
        if (!this.horizontalGraph) {
            this.xAxis.call(d3__WEBPACK_IMPORTED_MODULE_0__.axisBottom(this.xScale))
                .selectAll('text')
                .style('font-size', this.chartConfiguration.axisFontSize)
                .attr('text-anchor', 'end')
                .attr('dx', '-0.3em')
                .attr('dy', '0.3em')
                .attr('transform', 'rotate(-30)')
                .text(d => {
                const text = d.split('-');
                return this._shortText.transform(d, 10);
            });
        }
        this.yAxis.call(d3__WEBPACK_IMPORTED_MODULE_0__.axisLeft(this.yScale))
            .selectAll('text')
            .style('font-size', this.chartConfiguration.axisFontSize)
            .attr('text-anchor', 'middle')
            .text(d => {
            if (this.horizontalGraph) {
                const text = d.split('-');
                return this._shortText.transform(text[1] ? text[1].trim() : text[0].trim(), 7);
            }
            else {
                return d;
            }
        });
    }
    /**
    * @description Function used to update the bar chart according to the data provided
    * @author Sreejith T
    * @date 28/09/2021
    * @param {D3BarChartDataFromParent[]} data
    */
    updateChart(data) {
        this.bars = this.svg.selectAll('rect').data(data);
        this.dataLabels = this.svg.selectAll('.dataLabels').data(data);
        this.bars
            .join(enter => enter.append('rect')
            .on('mouseover', (event, data) => this.onMouseOver(event, data))
            .on('mousemove', (event) => this.onMouseMove(event))
            .on('mouseout', (event) => this.onMouseOut(event))
            .attr('width', (d) => this.horizontalGraph ? 0 : null)
            .attr('x', (d) => this.horizontalGraph ? 0 : null)
            .attr('height', (d) => this.horizontalGraph ? null : 0)
            .attr('y', (d) => this.horizontalGraph ? null : this.chartConfiguration.height)
            .transition()
            .duration(1000)
            .attr('width', (d) => this.horizontalGraph ? this.xScale(d.data) : this.xScale.bandwidth())
            .attr('height', (d) => this.horizontalGraph ? this.yScale.bandwidth() : this.chartConfiguration.height - this.yScale(d.data))
            .attr('fill', (d) => d.colors ? d.colors : d.color)
            .attr('x', (d) => this.horizontalGraph ? 0 : this.xScale(d.label))
            .attr('y', (d) => this.horizontalGraph ? this.yScale(d.label) : this.yScale(d.data)))
            .on('mouseover', (event, data) => this.onMouseOver(event, data))
            .on('mousemove', (event) => this.onMouseMove(event))
            .on('mouseout', (event) => this.onMouseOut(event))
            .transition()
            .duration(1000)
            .attr('width', (d) => this.horizontalGraph ? this.xScale(d.data) : this.xScale.bandwidth())
            .attr('height', (d) => this.horizontalGraph ? this.yScale.bandwidth() : this.chartConfiguration.height - this.yScale(d.data))
            .attr('fill', (d) => d.colors ? d.colors : d.color)
            .attr('x', (d) => this.horizontalGraph ? 0 : this.xScale(d.label))
            .attr('y', (d) => this.horizontalGraph ? this.yScale(d.label) : this.yScale(d.data));
        this.dataLabels
            .join(enter => enter.append('text')
            .on('mouseover', (event, data) => this.onMouseOver(event, data))
            .on('mousemove', (event) => this.onMouseMove(event))
            .on('mouseout', (event) => this.onMouseOut(event))
            .attr('x', (d) => this.horizontalGraph ? 0 : null)
            .attr('y', (d) => this.horizontalGraph ? null : this.chartConfiguration.height)
            .transition()
            .duration(1000)
            .attr('fill', (d) => d.colors ? d.colors : d.color)
            .attr('x', (d) => this.horizontalGraph ? 0 : this.xScale(d.label))
            .attr('y', (d) => this.horizontalGraph ? this.yScale(d.label) : this.yScale(d.data)))
            .on('mouseover', (event, data) => this.onMouseOver(event, data))
            .on('mousemove', (event) => this.onMouseMove(event))
            .on('mouseout', (event) => this.onMouseOut(event))
            .transition()
            .duration(1000)
            .attr('x', (d) => this.horizontalGraph ? this.xScale(d.data) - 13 : this.xScale(d.label) + ((this.xScale.bandwidth()) / 2))
            .attr('y', (d) => this.horizontalGraph ? this.yScale(d.label) + ((this.yScale.bandwidth()) / 2) : this.yScale(d.data) + 13)
            .text(d => d.data)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', this.horizontalGraph ? 'central' : 'unset')
            .attr('class', 'dataLabels')
            .style('fill', (d) => d.data === 0 ? '#000' : this._helper.invertColor(d.colors ? d.colors : d.color))
            .style('font-size', this.chartConfiguration.dataLabelFontSize);
    }
    /**
     * @description Function used to show the tooltip when is mouse is over on top of the path
     * @author Sreejith T
     * @date 28/09/2021
     * @param {MouseEvent} event
     * @param {D3BarChartDataFromParent} data
     */
    onMouseOver(event, data) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
            .html(`<div>
      <label class="tool-tip-text w-100 text-center">${data.label}</label>
      <div class="d-flex align-items-center justify-content-center">
      <span class="tool-tip-marker" style="background-color:${data.colors ? data.colors : data.color}"></span>
      <label class="tool-tip-text">${data.data}</label></div>
      </div>`)
            .style('display', 'flex');
    }
    /**
       * @description Function used to move the tooltip according the position of the mouse pointer
       * @author Sreejith T
       * @date 28/09/2021
       * @param {MouseEvent} event
       */
    onMouseMove(event) {
        const width = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__.select(this.chartContainer.nativeElement).style('width'));
        if (width / 2 < event.offsetX) {
            d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
                .style('top', event.offsetY - 10 + 'px')
                .style('right', -event.offsetX + width + 20 + 'px')
                .style('left', 'unset');
        }
        else {
            d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
                .style('top', event.offsetY - 10 + 'px')
                .style('left', event.offsetX + 20 + 'px')
                .style('right', 'unset');
        }
    }
    /**
       * @description Function used to hide the tooltip when is mouse is moved out from the path
       * @author Sreejith T
       * @date 28/09/2021
       * @param {MouseEvent} event
       */
    onMouseOut(event) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
            .html('')
            .style('display', 'none');
    }
}
BarGraphComponent.ɵfac = function BarGraphComponent_Factory(t) { return new (t || BarGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_1__.ShortTextPipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService)); };
BarGraphComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BarGraphComponent, selectors: [["app-bar-graph"]], viewQuery: function BarGraphComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tooltipContainer = _t.first);
    } }, inputs: { data: "data", horizontalGraph: "horizontalGraph", chartConfiguration: "chartConfiguration" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 0, consts: [["id", "barGraph"], ["barGraph", ""], [1, "tool-tip", 2, "display", "none", "position", "absolute"], ["barGraphTooltip", ""]], template: function BarGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2, 3);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXItZ3JhcGguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 76534:
/*!***************************************!*\
  !*** ./src/app/chart/chart.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartModule": () => (/* binding */ ChartModule)
/* harmony export */ });
/* harmony import */ var _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-graph/bar-graph.component */ 42482);
/* harmony import */ var _stacked_bar_graph_stacked_bar_graph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-bar-graph/stacked-bar-graph.component */ 73229);
/* harmony import */ var _donut_graph_donut_graph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donut-graph/donut-graph.component */ 72107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class ChartModule {
}
ChartModule.ɵfac = function ChartModule_Factory(t) { return new (t || ChartModule)(); };
ChartModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ChartModule });
ChartModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChartModule, { declarations: [_donut_graph_donut_graph_component__WEBPACK_IMPORTED_MODULE_2__.DonutGraphComponent,
        _stacked_bar_graph_stacked_bar_graph_component__WEBPACK_IMPORTED_MODULE_1__.StackedBarGraphComponent,
        _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_0__.BarGraphComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_donut_graph_donut_graph_component__WEBPACK_IMPORTED_MODULE_2__.DonutGraphComponent,
        _stacked_bar_graph_stacked_bar_graph_component__WEBPACK_IMPORTED_MODULE_1__.StackedBarGraphComponent,
        _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_0__.BarGraphComponent] }); })();


/***/ }),

/***/ 72107:
/*!************************************************************!*\
  !*** ./src/app/chart/donut-graph/donut-graph.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonutGraphComponent": () => (/* binding */ DonutGraphComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ 90390);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var src_app_core_pipe_short_number_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/pipe/short-number.pipe */ 61233);
/* harmony import */ var src_app_core_pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/short-text.pipe */ 48984);






const _c0 = ["donutChart"];
const _c1 = ["donutChartTooltip"];
class DonutGraphComponent {
    constructor(_helper, _shortNumber, _shortText) {
        this._helper = _helper;
        this._shortNumber = _shortNumber;
        this._shortText = _shortText;
        this.pointSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.clickable = true;
        this.center = '-';
        this.chartConfiguration = {
            width: 220,
            height: 220,
            margin: { top: 25, right: 25, bottom: 25, left: 25 },
            innerRadius: 40,
            outerRadius: 0,
            centerTextFontSize: '30px',
            dataLabelFontSize: '16px',
            centerTextFontWeight: 600,
            subCenterTextFontSize: '11px',
        };
        this.enterClockwise = {
            startAngle: 0,
            endAngle: 0
        };
        this.enterAntiClockwise = {
            startAngle: Math.PI * 2,
            endAngle: Math.PI * 2
        };
        this.placeholderDataset = [
            {
                label: 'No Data', data: 1, color: '#e9e9e9'
            }
        ];
    }
    ngOnInit() {
        this.drawChart(this.placeholderDataset);
        this.setCenterText();
    }
    ngOnChanges() {
        this.setRadius();
        this.timeOut = setTimeout(() => {
            if (this.svg) {
                if (this.data.length !== 0) {
                    this.updateChart(this.data);
                    this.setCenterText();
                }
                else {
                    this.center = '0';
                    this.updateChart(this.placeholderDataset);
                    this.setCenterText();
                }
            }
        }, 100);
    }
    /**
      * @description Function used to draw the placeholder chart
      * @author Sreejith T
      * @date 28/09/2021
      * @param {D3DonutGraphDataFromParent[]} data
      */
    drawChart(data) {
        this.pie = d3__WEBPACK_IMPORTED_MODULE_0__.pie()
            .padAngle(0.005)
            .value((d) => d.data)
            .sort(null);
        this.arc = d3__WEBPACK_IMPORTED_MODULE_0__.arc()
            .innerRadius(this.innerRadius)
            .outerRadius(this.outerRadius);
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__.select(this.chartContainer.nativeElement)
            .append('svg')
            .attr('viewBox', `${-(this.chartConfiguration.width + this.chartConfiguration.margin.left + this.chartConfiguration.margin.right) / 2} ${-(this.chartConfiguration.height + this.chartConfiguration.margin.top + this.chartConfiguration.margin.bottom) / 2} ${this.chartConfiguration.width + this.chartConfiguration.margin.left + this.chartConfiguration.margin.right} ${this.chartConfiguration.height + this.chartConfiguration.margin.top + this.chartConfiguration.margin.bottom}`)
            .attr('preserveAspectRatio', 'xMinYMin meet')
            .attr('class', 'w-100');
        this.path = this.svg.selectAll('path')
            .data(this.pie(data), (d) => d.data.label)
            .enter()
            .append('path')
            .attr('class', 'slice')
            .attr('fill', (d) => d.data.color)
            .attr('d', this.arc(this.enterAntiClockwise))
            .each((d, index, n) => {
            n[index]._current = d;
        });
        this.path.transition()
            .duration(1000)
            .attrTween('d', (d, index, n) => {
            const i = d3__WEBPACK_IMPORTED_MODULE_0__.interpolate(n[index]._current, d);
            n[index]._current = i(0);
            return t => this.arc(i(t));
        });
    }
    /**
       * @description Function used to update the data labels and their position
       * @author Sreejith T
       * @date 28/09/2021
       * @param {D3DonutGraphDataFromParent[]} data
       */
    updateLabel(data) {
        this.text = this.svg.selectAll('.dataLabels')
            .data(this.pie(data), (d) => d.data.label);
        this.text
            .enter()
            .append('text')
            .on('mouseover', (event, data) => this.onMouseOver(event, data))
            .on('mousemove', (event) => this.onMouseMove(event))
            .on('mouseout', (event) => this.onMouseOut(event))
            .attr('class', 'dataLabels')
            .attr('text-anchor', 'middle')
            .attr('data-name', (d) => d.data.label)
            .style('font-size', this.chartConfiguration.dataLabelFontSize)
            .style('font-family', 'Verdana, Geneva, sans-serif')
            .attr('fill', (d) => this._helper.invertColor(d.data.color))
            .attr('cursor', 'pointer')
            .style('font-weight', 400)
            .attr('dy', '.35em')
            .transition().duration(1000)
            .attrTween('transform', (d, index, n) => {
            n[index]._current = {
                data: d.data,
                value: d.value,
                index: d.index,
                padAngle: d.padAngle,
                startAngle: this.enterClockwise.startAngle,
                endAngle: this.enterClockwise.endAngle
            };
            const i = d3__WEBPACK_IMPORTED_MODULE_0__.interpolate(n[index]._current, d);
            n[index]._current = i(0);
            return t => {
                const d2 = i(t);
                const pos = this.arc.centroid(d2);
                return 'translate(' + pos + ')';
            };
        })
            .text((d) => {
            if (this.getPercentage(d.data.data, this.center) > 3) {
                return this.getPercentage(d.data.data, this.center) + '%';
            }
        });
        this.text.exit().remove();
        this.text
            .transition().duration(1000)
            .attrTween('transform', (d, index, n) => {
            const i = d3__WEBPACK_IMPORTED_MODULE_0__.interpolate(n[index]._current, d);
            n[index]._current = i(0);
            return t => {
                const d2 = i(t);
                const pos = this.arc.centroid(d2);
                return 'translate(' + pos + ')';
            };
        })
            .text((d) => {
            if (this.getPercentage(d.data.data, this.center) > 3) {
                return this.getPercentage(d.data.data, this.center) + '%';
            }
        });
    }
    /**
       * @description Function used to update the chart according to the data
       * @author Sreejith T
       * @date 28/09/2021
       * @param {D3DonutGraphDataFromParent[]} data
       */
    updateChart(data) {
        data = data.filter((d) => {
            if (d.data !== 0) {
                return d;
            }
        });
        this.path = this.svg.selectAll('path').data(this.pie(data), (d) => d.data.label);
        this.path
            .enter().append('path')
            .on('click', (event, data) => this.onClick(event, data))
            .on('mouseover', (event, data) => this.onMouseOver(event, data))
            .on('mousemove', (event) => this.onMouseMove(event))
            .on('mouseout', (event) => this.onMouseOut(event))
            .attr('class', 'slice')
            .attr('fill', (d) => d.data.color)
            .attr('d', this.arc(this.enterClockwise))
            .each((d, index, n) => {
            n[index]._current = {
                data: d.data,
                value: d.value,
                index: d.index,
                padAngle: d.padAngle,
                startAngle: this.enterClockwise.startAngle,
                endAngle: this.enterClockwise.endAngle
            };
        })
            .transition()
            .duration(1000)
            .attrTween('d', (d, index, n) => {
            const i = d3__WEBPACK_IMPORTED_MODULE_0__.interpolate(n[index]._current, d);
            n[index]._current = i(0);
            return t => this.arc(i(t));
        });
        this.path.exit()
            .transition()
            .duration(1000)
            .attrTween('d', (d, index, n) => {
            const i = d3__WEBPACK_IMPORTED_MODULE_0__.interpolate(n[index]._current, {
                startAngle: (d.data.label === 'No Data' ? this.enterAntiClockwise.startAngle : this.enterClockwise.startAngle),
                endAngle: (d.data.label === 'No Data' ? this.enterAntiClockwise.endAngle : this.enterClockwise.endAngle), value: 0
            });
            n[index]._current = i(0);
            return t => this.arc(i(t));
        })
            .remove();
        this.path.transition()
            .duration(1000)
            .attr('class', 'slice')
            .attrTween('d', (d, index, n) => {
            const i = d3__WEBPACK_IMPORTED_MODULE_0__.interpolate(n[index]._current, d);
            n[index]._current = i(0);
            return t => this.arc(i(t));
        });
        this.updateLabel(data);
    }
    /**
     * @description Function used for the emitting the data required for filter and is triggered on clicking the path
     * @author Sreejith T
     * @date 28/09/2021
     * @param {MouseEvent} event
     * @param {D3DonutGraphFormattedData)} data
     */
    onClick(event, data) {
        if (this.clickable) {
            const name = 'clicked';
            const elem = d3__WEBPACK_IMPORTED_MODULE_0__.select(event.currentTarget);
            const className = elem.attr('class');
            const dataForEmit = {
                label: data.data.label,
                value: data.data.data,
                identifier: data.data.identifier
            };
            this.animatePath(elem, className.split(' ')[0] === name ? 1 : 0, name);
            this.pointSelection.emit(dataForEmit);
        }
    }
    /**
      * @description Function used for animating the clicked path (increase/decrease the outer radius)
      * @author Sreejith T
      * @date 28/09/2021
      * @param {Selection<SVGSVGElement | any, any, any, any>} path
      * @param {number} dir
      * @param {string} className
      */
    animatePath(path, dir, className) {
        switch (dir) {
            case 0:
                d3__WEBPACK_IMPORTED_MODULE_0__.selectAll('.' + className)
                    .attr('d', d3__WEBPACK_IMPORTED_MODULE_0__.arc()
                    .innerRadius((this.innerRadius))
                    .outerRadius(this.outerRadius));
                path.transition()
                    .duration(500)
                    .attr('class', className + ' slice clicked')
                    .ease(d3__WEBPACK_IMPORTED_MODULE_0__.easeBounce)
                    .attr('d', d3__WEBPACK_IMPORTED_MODULE_0__.arc()
                    .innerRadius((this.innerRadius))
                    .outerRadius((this.outerRadius) * 1.08));
                break;
            case 1:
                path.transition()
                    .attr('class', 'slice')
                    .transition()
                    .duration(500)
                    .ease(d3__WEBPACK_IMPORTED_MODULE_0__.easeBounce)
                    .attr('d', d3__WEBPACK_IMPORTED_MODULE_0__.arc()
                    .innerRadius((this.innerRadius))
                    .outerRadius(this.outerRadius));
                break;
        }
    }
    /**
       * @description Function used to set the center text
       * @author Sreejith T
       * @date 28/09/2021
       */
    setCenterText() {
        this.svg.selectAll('.d3-donut-center').remove();
        if (this.subCenter) {
            const textCenter = this.svg
                .append('text')
                .attr('transform', 'translate(-25, -10)')
                .attr('text-anchor', 'middle')
                .attr('class', 'd3-donut-center')
                .style('font-size', this.chartConfiguration.centerTextFontSize)
                .style('font-family', 'Verdana, Geneva, sans-serif')
                .style('fill', '#555')
                .style('font-weight', this.chartConfiguration.centerTextFontWeight)
                // tslint:disable-next-line:radix
                .text(this._shortNumber.transform(this.center));
            this.svg
                .append('text')
                .attr('transform', 'translate(30 , -10)')
                .attr('text-anchor', 'middle')
                .attr('class', 'd3-donut-center')
                .style('font-size', '18px')
                .style('font-family', 'Verdana, Geneva, sans-serif')
                .style('fill', '#555')
                .style('font-weight', this.chartConfiguration.centerTextFontWeight)
                .text(this.centerSymbol);
            const textSubText = this.svg
                .append('text')
                .attr('transform', 'translate(0 , 25)')
                .attr('text-anchor', 'middle')
                .attr('class', 'd3-donut-center')
                .style('font-size', this.chartConfiguration.subCenterTextFontSize)
                .style('font-family', 'Verdana, Geneva, sans-serif')
                .style('fill', '#555')
                .style('font-weight', this.chartConfiguration.centerTextFontWeight)
                .text(this._shortText.transform(this.subCenter, 18));
        }
        else {
            const textCenter = this.svg
                .append('text')
                .attr('transform', 'translate(0 , 10)')
                .attr('text-anchor', 'middle')
                .attr('class', 'd3-donut-center')
                .style('font-size', this.chartConfiguration.centerTextFontSize)
                .style('font-family', 'Verdana, Geneva, sans-serif')
                .style('fill', '#555')
                .style('font-weight', this.chartConfiguration.centerTextFontWeight)
                // tslint:disable-next-line:radix
                .text(this._shortNumber.transform(parseInt(this.center)));
        }
    }
    /**
       * @description Function used to set the radius of the chart according to the configuration sent from parent component
       * @author Sreejith T
       * @date 28/09/2021
       */
    setRadius() {
        this.radius = Math.min(this.chartConfiguration.width, this.chartConfiguration.height) / 2;
        this.innerRadius = this.radius - this.chartConfiguration.innerRadius;
        this.outerRadius = this.radius - this.chartConfiguration.outerRadius;
    }
    /**
      * @description Function used to calculate the percentage of the value with the total
      * @author Sreejith T
      * @date 28/09/2021
      * @param {value} number
      * @param {string | number | any} total
      */
    getPercentage(value, total) {
        try {
            const percentage = Math.round((value / total) * 100);
            // tslint:disable-next-line:radix
            return parseInt(percentage);
        }
        catch (error) {
            return 0;
        }
    }
    /**
       * @description Function used to show the tooltip when is mouse is over on top of the path
       * @author Sreejith T
       * @date 28/09/2021
       * @param {MouseEvent} event
       * @param {D3DonutGraphFormattedData} data
       */
    onMouseOver(event, data) {
        var _a;
        if (((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.label) === 'No Data') {
            return;
        }
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
            .html(`<div>
    <label class="tool-tip-text w-100 text-center">${data.data.label}</label>
    <div class="d-flex align-items-center justify-content-center">
    <span class="tool-tip-marker" style="background-color:${data.data.color}"></span>
    <label class="tool-tip-text">${data.data.data}</label></div>
    </div>`)
            .style('display', 'flex');
    }
    /**
       * @description Function used to move the tooltip according the position of the mouse pointer
       * @author Sreejith T
       * @date 28/09/2021
       * @param {MouseEvent} event
       */
    onMouseMove(event) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
            .style('top', event.offsetY - 10 + 'px')
            .style('left', event.offsetX + 20 + 'px');
    }
    /**
       * @description Function used to hide the tooltip when is mouse is moved out from the path
       * @author Sreejith T
       * @date 28/09/2021
       * @param {MouseEvent} event
       */
    onMouseOut(event) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
            .html('')
            .style('display', 'none');
    }
    ngOnDestroy() {
        clearTimeout(this.timeOut);
    }
}
DonutGraphComponent.ɵfac = function DonutGraphComponent_Factory(t) { return new (t || DonutGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_1__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_pipe_short_number_pipe__WEBPACK_IMPORTED_MODULE_2__.ShortNumberPipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_3__.ShortTextPipe)); };
DonutGraphComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DonutGraphComponent, selectors: [["app-donut-graph"]], viewQuery: function DonutGraphComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tooltipContainer = _t.first);
    } }, inputs: { data: "data", clickable: "clickable", center: "center", subCenter: "subCenter", centerSymbol: "centerSymbol", chartConfiguration: "chartConfiguration" }, outputs: { pointSelection: "pointSelection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 0, consts: [["id", "donutChart"], ["donutChart", ""], [1, "tool-tip", 2, "display", "none", "position", "absolute"], ["donutChartTooltip", ""]], template: function DonutGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2, 3);
    } }, styles: ["svg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdyYXBoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImRvbnV0LWdyYXBoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ 73229:
/*!************************************************************************!*\
  !*** ./src/app/chart/stacked-bar-graph/stacked-bar-graph.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackedBarGraphComponent": () => (/* binding */ StackedBarGraphComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ 90390);
/* harmony import */ var src_app_core_pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/pipe/short-text.pipe */ 48984);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var src_app_core_pipe_short_number_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/pipe/short-number.pipe */ 61233);






const _c0 = ["stackedBarChart"];
const _c1 = ["stackedBarChartTooltip"];
class StackedBarGraphComponent {
    constructor(_shortText, _helper, _shortNumber) {
        this._shortText = _shortText;
        this._helper = _helper;
        this._shortNumber = _shortNumber;
        this.pointSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.verticalStackedChart = false;
        this.chartConfiguration = {
            width: 400,
            height: 220,
            margin: { top: 40, right: 40, bottom: 40, left: 40 },
            offsetHeight: 40
        };
        this.placeholderData = {
            data: [{ 'name': '', 'data': [10, 9, 8, 7, 6, 5] }],
            color: ['#e9e9e9'],
            label: ['a', 'b', 'c', 'd', 'e', 'f'],
            tooltip: { 'a': { '-': '-' }, 'b': { '-': '-' }, 'c': { '-': '-' }, 'd': { '-': '-' }, 'e': { '-': '-' }, 'f': { '-': '-' } }
        };
    }
    ngOnInit() {
        const placeHolderData = this.convertDataFormat(this.placeholderData); // to be standardized
        this.initSvg();
        this.initScale(placeHolderData, this.placeholderData);
        this.drawAxis();
        this.drawGraph();
    }
    ngOnChanges() {
        this.timeOut = setTimeout(() => {
            var _a, _b;
            if (this.svg) {
                if (((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) !== 0) {
                    const data = this.convertDataFormat(this.data); // to be standardized
                    this.initScale(data, this.data);
                    this.updateAxis();
                    this.updateGraph();
                }
                else {
                    d3__WEBPACK_IMPORTED_MODULE_0__.select(this.chartContainer.nativeElement).select('svg').remove();
                    d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement).style('display', 'none');
                    const placeHolderData = this.convertDataFormat(this.placeholderData); // to be standardized
                    this.initSvg();
                    this.initScale(placeHolderData, this.placeholderData);
                    this.drawAxis();
                    this.drawGraph();
                }
            }
        }, 100);
    }
    /**
    * @description Function used to convert the data format
    * @author Sreejith T
    * @date 28/09/2021
    */
    convertDataFormat(data) {
        var _a;
        const owner = data.label;
        const mapping_values = data.data;
        const result = [];
        if (owner !== undefined) {
            if ((_a = owner[0]) === null || _a === void 0 ? void 0 : _a.formatName) {
                owner.forEach((eachOwner, index) => {
                    if (eachOwner !== null) {
                        const sample_dict = { State: eachOwner.type, Title: eachOwner.formatName };
                        mapping_values.forEach((eachMappingValue, dictIndex) => {
                            sample_dict[eachMappingValue.name] = eachMappingValue.data[index];
                        });
                        result.push(sample_dict);
                    }
                });
            }
            else {
                owner.forEach((eachOwner, index) => {
                    if (eachOwner !== null) {
                        const sample_dict = { State: eachOwner };
                        mapping_values.forEach((eachMappingValue, dictIndex) => {
                            sample_dict[eachMappingValue.name] = eachMappingValue.data[index];
                        });
                        result.push(sample_dict);
                    }
                });
            }
        }
        return result;
    }
    /**
    * @description Function used to initialize and create the svg
    * @author Sreejith T
    * @date 28/09/2021
    */
    initSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__.select(this.chartContainer.nativeElement)
            .append('svg')
            .attr('viewBox', `0 0 ${this.chartConfiguration.width + this.chartConfiguration.margin.left + this.chartConfiguration.margin.right} ${this.chartConfiguration.height + this.chartConfiguration.margin.top + this.chartConfiguration.margin.bottom}`)
            .attr('preserveAspectRatio', 'xMinYMin meet');
    }
    /**
    * @description Function used to initialize and update the X axis and Y axis from the data provided from the parent component
    * @author Sreejith T
    * @date 28/09/2021
    * @param {D3StackedBarChartDataFromParent[]} data
    * @param {D3StackedBarGraphFormattedData[]} convertedData
    */
    initScale(convertedData, data) {
        if (convertedData.length > 0) {
            const yScaleHeight = (convertedData.length * this.chartConfiguration.offsetHeight);
            const sliceFactor = (Object.getOwnPropertyNames(convertedData[0]))[1] === 'Title' ? 2 : 1;
            const keys = Object.getOwnPropertyNames(convertedData[0]).slice(sliceFactor);
            convertedData = convertedData.map(v => {
                v.total = keys.map(key => v[key]).reduce((a, b) => a + b, 0);
                return v;
            });
            convertedData.sort((a, b) => a.total - b.total);
            convertedData = convertedData.map(v => {
                delete v.total;
                return v;
            });
            this.series = d3__WEBPACK_IMPORTED_MODULE_0__.stack().keys(Object.getOwnPropertyNames(convertedData[0]).slice(sliceFactor))(convertedData).map(d => (d.forEach((v) => v.key = d.key), d));
            if (!this.verticalStackedChart) {
                this.xScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().range([0, this.chartConfiguration.width]);
                this.yScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleBand().domain(convertedData.map(d => d.Title ? d.Title : d.State)).rangeRound([yScaleHeight, 0]).padding(0.3);
                this.zScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleOrdinal().domain(this.series.map(d => d.key)).range(data.color);
                this.xScale.domain([0, d3__WEBPACK_IMPORTED_MODULE_0__.max(this.series, d => d3__WEBPACK_IMPORTED_MODULE_0__.max(d, d => d[1]))]);
                this.svg.attr('viewBox', `0 0 ${this.chartConfiguration.width + this.chartConfiguration.margin.left + this.chartConfiguration.margin.right} ${yScaleHeight}`);
            }
            else {
                this.xScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleBand().domain(convertedData.map(d => d.Title ? d.Title : d.State)).rangeRound([0, this.chartConfiguration.width]).padding(0.1);
                this.yScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().range([this.chartConfiguration.height, 0]);
                this.zScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleOrdinal().domain(this.series.map(d => d.key)).range(data.color);
                this.yScale.domain([0, d3__WEBPACK_IMPORTED_MODULE_0__.max(this.series, d => d3__WEBPACK_IMPORTED_MODULE_0__.max(d, d => d[1]))]);
            }
        }
    }
    /**
    * @description Function used to draw the axes
    * @author Sreejith T
    * @date 28/09/2021
    */
    drawAxis() {
        if (!this.verticalStackedChart) {
            this.yAxis = this.svg.append('g')
                .attr('class', 'yAxis');
        }
        else {
            this.xAxis = this.svg.append('g')
                .attr('class', 'xAxis')
                .attr('transform', `translate(${this.chartConfiguration.margin.left}, ${this.chartConfiguration.height + this.chartConfiguration.margin.top})`);
        }
    }
    /**
    * @description Function used to update the axes
    * @author Sreejith T
    * @date 28/09/2021
    */
    updateAxis() {
        if (!this.verticalStackedChart) {
            this.yAxis
                .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisLeft(this.yScale))
                .attr('transform', `translate(${this.chartConfiguration.margin.left + this.chartConfiguration.margin.right}, 0)`)
                .attr('text-anchor', 'end')
                .selectAll('text')
                .text(d => this._shortText.transform(d, 8));
        }
        else {
            this.xAxis
                .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisBottom(this.xScale))
                .selectAll('text')
                .attr('dx', '-0.3em')
                .attr('dy', '0.3em')
                .attr('transform', 'rotate(-30)')
                .attr('text-anchor', 'end')
                .text(d => this._shortText.transform(d, 6));
        }
    }
    /**
    * @description Function used to draw the initial stacked bar chart (placeholder stacked bar graph)
    * @author Sreejith T
    * @date 28/09/2021
    */
    drawGraph() {
        if (!this.verticalStackedChart) {
            this.translateGroupX = this.chartConfiguration.margin.left + this.chartConfiguration.margin.right;
            this.translateGroupY = 0;
        }
        else {
            this.translateGroupX = this.chartConfiguration.margin.left;
            this.translateGroupY = this.chartConfiguration.margin.top;
        }
        this.bars = this.svg.append('g').attr('class', 'stackedBarsGroup')
            .attr('transform', `translate(${this.translateGroupX},${this.translateGroupY})`)
            .selectAll('g')
            .data(this.series)
            .join('g')
            .attr('class', 'stackedBars')
            .attr('fill', (d) => this.zScale(d.key));
        this.bars
            .selectAll('rect')
            .data((d) => d)
            .join('rect')
            .attr('x', d => !this.verticalStackedChart ? this.xScale(d[0]) : this.xScale(d.data.Title ? d.data.Title : d.data.State))
            .attr('y', d => !this.verticalStackedChart ? this.yScale(d.data.Title ? d.data.Title : d.data.State) : this.yScale(d[1]))
            .attr('width', d => !this.verticalStackedChart ? this.xScale(d[1]) - this.xScale(d[0]) : this.xScale.bandwidth())
            .attr('height', d => !this.verticalStackedChart ? this.yScale.bandwidth() : this.yScale(d[0]) - this.yScale(d[1]));
        this.bars
            .selectAll('text')
            .data(d => d)
            .join('text')
            .attr('class', 'stackedBarsText')
            .attr('x', d => !this.verticalStackedChart ? (this.xScale(d[0]) + this.xScale(d[1])) / 2 : this.xScale(d.data.Title ? d.data.Title : d.data.State) + (this.xScale.bandwidth() / 2))
            .attr('y', d => !this.verticalStackedChart ? this.yScale(d.data.Title ? d.data.Title : d.data.State) + (this.yScale.bandwidth() / 2) : this.yScale(d[1]) + 10)
            .attr('display', 'none');
    }
    /**
    * @description Function used to update the bar chart according to the data provided
    * @author Sreejith T
    * @date 28/09/2021
    */
    updateGraph() {
        this.bars = this.svg.select('.stackedBarsGroup').selectAll('.stackedBars').data(this.series).join('g')
            .attr('class', 'stackedBars')
            .attr('fill', (d) => this.zScale(d.key));
        this.bars
            .selectAll('rect')
            .data(d => d)
            .join('rect')
            .on('click', (event, data) => this.onClick(event, data))
            .on('mouseover', (event, data) => this.onMouseOver(event, data))
            .on('mousemove', (event, d) => this.onMouseMove(event, d))
            .on('mouseout', (event) => this.onMouseOut(event))
            .attr('cursor', 'pointer')
            .transition()
            .duration(1000)
            .attr('x', d => !this.verticalStackedChart ? this.xScale(d[0]) : this.xScale(d.data.Title ? d.data.Title : d.data.State))
            .attr('y', d => !this.verticalStackedChart ? this.yScale(d.data.Title ? d.data.Title : d.data.State) : this.yScale(d[1]))
            .attr('width', d => !this.verticalStackedChart ? this.xScale(d[1]) - this.xScale(d[0]) : this.xScale.bandwidth())
            .attr('height', d => !this.verticalStackedChart ? this.yScale.bandwidth() : this.yScale(d[0]) - this.yScale(d[1]));
        this.bars
            .selectAll('text')
            .data(d => d)
            .join('text')
            .on('click', (event, data) => this.onClick(event, data))
            .on('mouseover', (event, data) => this.onMouseOver(event, data))
            .on('mousemove', (event, d) => this.onMouseMove(event, d))
            .on('mouseout', (event) => this.onMouseOut(event))
            .transition()
            .duration(1000)
            .attr('class', 'stackedBarsText')
            .attr('x', d => !this.verticalStackedChart ? this.xScale(d[0]) + (this.xScale(d[1]) - this.xScale(d[0])) / 2 - 4 : this.xScale(d.data.Title ? d.data.Title : d.data.State) + (this.xScale.bandwidth() / 2))
            .attr('y', d => !this.verticalStackedChart ? this.yScale(d.data.Title ? d.data.Title : d.data.State) + (this.yScale.bandwidth() / 2) : this.yScale(d[0]) + (this.yScale(d[1]) - this.yScale(d[0])) / 2 + 4)
            .attr('display', 'flex')
            .attr('fill', (d) => this._helper.invertColor(this.zScale(d.key)))
            .attr('dominant-baseline', !this.verticalStackedChart ? 'central' : null)
            .attr('text-anchor', !this.verticalStackedChart ? null : 'middle')
            .text(d => {
            if (!this.verticalStackedChart) {
                if (d[1] - d[0] !== 0 && (this.xScale(d[1]) - this.xScale(d[0])) > 13) {
                    return d[1] - d[0];
                }
            }
            else {
                if (d[1] - d[0] !== 0 && (this.yScale(d[0]) - this.yScale(d[1])) > 15) {
                    return d[1] - d[0];
                }
            }
        });
    }
    /**
    * @description Function is called when clicking on the bars and the data for filter is emitted
    * @author Sreejith T
    * @date 28/09/2021
    * @param {MouseEvent} event
    * @param {D3StackedBarGraphMouseOverData} data
    */
    onClick(event, data) {
        const dataForEmit = {
            label: data.data.State,
            value: data.data
        };
        this.pointSelection.emit(dataForEmit);
    }
    /**
    * @description Function used to show the tooltip when is mouse is over on top of the path
    * @author Sreejith T
    * @date 28/09/2021
    * @param {MouseEvent} event
    * @param {D3StackedBarGraphMouseOverData} data
    */
    onMouseOver(event, data) {
        const key = Object.keys(data.data);
        let legend = '';
        key.map((value, index) => {
            if (value !== 'State' && value !== 'Title') {
                const title = this._shortText.transform(value, 10);
                legend += `<span class="tool-tip-marker"></span>
        <label class="tool-tip-text ">${value}&nbsp;:&nbsp;${this._shortNumber.transform(data.data[value])}</label>`;
            }
        });
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
            .html(`<div class="w-100 ">
      <label class="tool-tip-text w-100 text-center">${data.data.Title ? data.data.Title : data.data.State}</label>
      <div class="d-flex align-items-center justify-content-center" style =" flex-wrap: wrap;">${legend}</div></div>`)
            .style('display', 'flex');
    }
    /**
       * @description Function used to move the tooltip according the position of the mouse pointer
       * @author Sreejith T
       * @date 28/09/2021
       * @param {MouseEvent} event
       */
    onMouseMove(event, d) {
        const width = parseInt(d3__WEBPACK_IMPORTED_MODULE_0__.select(this.chartContainer.nativeElement).style('width'));
        if (width / 2 < event.offsetX) {
            d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
                .style('top', event.offsetY - 10 + 'px')
                .style('right', -event.offsetX + width + 20 + 'px')
                .style('left', 0);
        }
        else {
            d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
                .style('top', event.offsetY - 10 + 'px')
                .style('left', event.offsetX + 20 + 'px')
                .style('right', 0);
        }
    }
    /**
       * @description Function used to hide the tooltip when is mouse is moved out from the path
       * @author Sreejith T
       * @date 28/09/2021
       * @param {MouseEvent} event
       */
    onMouseOut(event) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this.tooltipContainer.nativeElement)
            .html('')
            .style('display', 'none');
    }
    ngOnDestroy() {
        clearTimeout(this.timeOut);
    }
}
StackedBarGraphComponent.ɵfac = function StackedBarGraphComponent_Factory(t) { return new (t || StackedBarGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_1__.ShortTextPipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_pipe_short_number_pipe__WEBPACK_IMPORTED_MODULE_3__.ShortNumberPipe)); };
StackedBarGraphComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StackedBarGraphComponent, selectors: [["app-stacked-bar-graph"]], viewQuery: function StackedBarGraphComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tooltipContainer = _t.first);
    } }, inputs: { data: "data", verticalStackedChart: "verticalStackedChart", chartConfiguration: "chartConfiguration" }, outputs: { pointSelection: "pointSelection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 0, consts: [["id", "do-stackedBarChart", 1, "height"], ["stackedBarChart", ""], [1, "tool-tip", 2, "display", "none", "position", "absolute"], ["stackedBarChartTooltip", ""]], template: function StackedBarGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, styles: [".do-d-rel[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.height[_ngcontent-%COMP%] {\n  max-height: 324px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWNrZWQtYmFyLWdyYXBoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzdGFja2VkLWJhci1ncmFwaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kby1kLXJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWlnaHQge1xyXG4gICAgbWF4LWhlaWdodDogMzI0cHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ 78073:
/*!*********************************************!*\
  !*** ./src/app/core/constants/constants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiEndpoints": () => (/* binding */ ApiEndpoints),
/* harmony export */   "ApiStatus": () => (/* binding */ ApiStatus),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "passwordTypeUrl": () => (/* binding */ passwordTypeUrl),
/* harmony export */   "LocalStorageKey": () => (/* binding */ LocalStorageKey),
/* harmony export */   "dateFormat": () => (/* binding */ dateFormat),
/* harmony export */   "returnUrl": () => (/* binding */ returnUrl),
/* harmony export */   "pickerFormat": () => (/* binding */ pickerFormat),
/* harmony export */   "sideBar": () => (/* binding */ sideBar),
/* harmony export */   "userRole": () => (/* binding */ userRole),
/* harmony export */   "CreatePasswordConstants": () => (/* binding */ CreatePasswordConstants),
/* harmony export */   "sidebar": () => (/* binding */ sidebar),
/* harmony export */   "tableConfig": () => (/* binding */ tableConfig),
/* harmony export */   "tableOption": () => (/* binding */ tableOption),
/* harmony export */   "validationRule": () => (/* binding */ validationRule),
/* harmony export */   "autoStatusExcludedApiUrls": () => (/* binding */ autoStatusExcludedApiUrls),
/* harmony export */   "tableMoreOption": () => (/* binding */ tableMoreOption),
/* harmony export */   "commonEvent": () => (/* binding */ commonEvent),
/* harmony export */   "timeSheetFilter": () => (/* binding */ timeSheetFilter),
/* harmony export */   "dateFilter": () => (/* binding */ dateFilter)
/* harmony export */ });
var ApiEndpoints;
(function (ApiEndpoints) {
    // employee //
    ApiEndpoints["employeeGrid"] = "employee-list/";
    ApiEndpoints["employeeCsv"] = "employee-list/csv_download";
    ApiEndpoints["employeeXls"] = "employee-list/xls_download";
    // login//
    ApiEndpoints["login"] = "login/";
    // time-entry//
    ApiEndpoints["timeEntryGrid"] = "employee-time-entry-list-new";
    ApiEndpoints["timeEntryCsv"] = "employee-time-list/csv_download";
    ApiEndpoints["timeEntryXls"] = "employee-time-list/xls_download";
    ApiEndpoints["timeEntryChart"] = "filter-charts?request_for=timeentry";
    ApiEndpoints["projectList"] = "project/list";
    ApiEndpoints["taskList"] = "task/list";
    ApiEndpoints["timeEntryCreate"] = "time-entry/create/";
    ApiEndpoints["timeEntryEdit"] = "time-entry/";
    ApiEndpoints["timeEntryDetails"] = "employee-time-entry-list/";
    ApiEndpoints["timeEntryDateWise"] = "employee-time-entry-date-wise-list/";
    // time Management//
    ApiEndpoints["timeManagementDetails"] = "employee-time-entry-list/";
    ApiEndpoints["timeChart"] = "filter-charts?request_for=timesheet";
    ApiEndpoints["timeManagementGrid"] = "employee-time-entry-approve-list/";
    ApiEndpoints["approve"] = "time-entry/approve/";
    // _wbsElement //
    ApiEndpoints["wbsElementList"] = "WBSElementmaster/list";
    // common //
    ApiEndpoints["notificationDropDown"] = "notification/dropdown/list/";
    ApiEndpoints["userList"] = "user-list/";
    ApiEndpoints["notificationDetails"] = "notification-details/";
    ApiEndpoints["notificationList"] = "notification/details/";
    ApiEndpoints["notificationCount"] = "notification-count/";
    // user //
    ApiEndpoints["allUserList"] = "all-users-list/";
})(ApiEndpoints || (ApiEndpoints = {}));
var ApiStatus;
(function (ApiStatus) {
    ApiStatus[ApiStatus["ok"] = 200] = "ok";
    ApiStatus[ApiStatus["serverDown"] = 500] = "serverDown";
    ApiStatus[ApiStatus["created"] = 201] = "created";
    ApiStatus[ApiStatus["unAuthorized"] = 401] = "unAuthorized";
    ApiStatus[ApiStatus["badRequest"] = 400] = "badRequest";
    ApiStatus[ApiStatus["noContent"] = 204] = "noContent";
    ApiStatus[ApiStatus["forbidden"] = 403] = "forbidden";
    ApiStatus[ApiStatus["notFound"] = 404] = "notFound";
    ApiStatus[ApiStatus["notAcceptable"] = 406] = "notAcceptable";
    ApiStatus[ApiStatus["conflict"] = 409] = "conflict";
    ApiStatus[ApiStatus["unprocessableEntity"] = 422] = "unprocessableEntity";
    ApiStatus[ApiStatus["failedDependency"] = 424] = "failedDependency";
    ApiStatus[ApiStatus["timeOut"] = 504] = "timeOut";
    ApiStatus[ApiStatus["corsOrigin"] = 0] = "corsOrigin";
})(ApiStatus || (ApiStatus = {}));
const login = {
    password: 'password',
    confirmPassword: 'con_password',
    token: 'token'
};
const passwordTypeUrl = {
    userActivate: 'user-activate',
    userReset: 'reset-user-password',
    clientActivate: 'client-activate',
    clientReactivate: 'client-reactivate'
};
var LocalStorageKey;
(function (LocalStorageKey) {
    LocalStorageKey["userLogin"] = "clientDetails";
    LocalStorageKey["timeDetails"] = "timeDetails";
    LocalStorageKey["userDetails"] = "userDetails";
    LocalStorageKey["sessionId"] = "sso-sessionid";
    LocalStorageKey["validatedData"] = "validatedData";
    LocalStorageKey["usersDetails"] = "userDetail";
    LocalStorageKey["gridDataPreview"] = "gridDataPreview";
    LocalStorageKey["issueDetails"] = "issueDetails";
    LocalStorageKey["controlDetails"] = "controlDetails";
    LocalStorageKey["isUpdate"] = "isUpdate";
    LocalStorageKey["notificationId"] = "notificationId";
    LocalStorageKey["userType"] = "userType";
    LocalStorageKey["customField"] = "customField";
    LocalStorageKey["builderChanged"] = "builderChanged";
})(LocalStorageKey || (LocalStorageKey = {}));
const dateFormat = {
    serverDate: 'YYYY-MM-DD',
    userDate: 'DD MMM yyyy',
    monthYear: 'MMM YYYY',
    fullMonthYear: 'MMMM YYYY',
    timeSheetDate: 'MMMM DD, YYYY',
    timeSheetDateFilter: 'MMM DD, YYYY',
    date: 'DD-MM-YYYY HH:mm:ss',
    fullDate: 'YYYY-MM-DD  HH:mm:ss',
    userFullDate: 'DD MMM YYYY hh:mm A',
    time: 'hh:mm A',
    serverTime: 'H:M:S',
    createTimeApiFormat: 'yyyy-MM-dd',
    mediumDateFormat: 'hh. mm a, MMM dd yyyy',
    addTime: 'HH:mm:ss',
    movementTime: 'MM/DD/yyyy, HH:mm',
    extractTime: 'dd MMMM yyyy, hh:mm a',
    extractHr: 'hh:mm a'
};
const returnUrl = 'returnUrl';
const pickerFormat = {
    parse: {
        dateInput: 'DD-MM-YYYY',
    },
    display: {
        dateInput: 'MMM DD, YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    },
};
const sideBar = {
    full: 'full',
    iconBar: 'iconBar',
    overlay: 'overlay',
    miniSidebar: 'mini-sidebar',
    primary: 'primary',
    subMenuSelection: 'subMenuSelection',
    english: 'english',
    arabic: 'arabic',
    ar: 'ar',
    enUs: 'en-us'
};
const userRole = {
    employee: 'Employee',
    admin: 'Admin',
    manager: 'Manager',
    all: 'All'
};
var CreatePasswordConstants;
(function (CreatePasswordConstants) {
    CreatePasswordConstants["mustMatch"] = "mustMatch";
    CreatePasswordConstants["passwordMustMatch"] = "Passwords must match";
    CreatePasswordConstants["passwordMustHaveAMinimumOf"] = "Password must have a minimum of :";
    CreatePasswordConstants["minimumLength"] = "minimumLength";
    CreatePasswordConstants["passwordMinimumLength"] = "Eight characters";
    CreatePasswordConstants["upperCase"] = "upperCase";
    CreatePasswordConstants["passwordMinimumOneUpperCase"] = "One uppercase letter";
    CreatePasswordConstants["lowerCase"] = "lowerCase";
    CreatePasswordConstants["passwordMinimumOneLowerCase"] = "One lowercase letter";
    CreatePasswordConstants["number"] = "number";
    CreatePasswordConstants["passwordMinimumOneNumber"] = "One number";
    CreatePasswordConstants["specialCharacter"] = "specialCharacter";
    CreatePasswordConstants["passwordOneSpecialCharacter"] = "One special character";
    CreatePasswordConstants["password"] = "password";
    CreatePasswordConstants["confirmPassword"] = "confirmPassword";
    CreatePasswordConstants["type"] = "type";
    CreatePasswordConstants["id"] = "id";
    CreatePasswordConstants["body"] = "body";
    CreatePasswordConstants["hoverFocus"] = "hover focus";
    CreatePasswordConstants["resetUserPassword"] = "Reset A User's Password";
    CreatePasswordConstants["CreateNewPassword"] = "Create A New Password";
    CreatePasswordConstants["CreateNewUserPassword"] = "Create A New User Password";
    CreatePasswordConstants["CreateNewClientPassword"] = "Create A New Client Password";
    CreatePasswordConstants["success"] = "success";
    CreatePasswordConstants["failed"] = "failed";
    CreatePasswordConstants["error"] = "Error";
    CreatePasswordConstants["message"] = "message";
    CreatePasswordConstants["msg"] = "msg";
    CreatePasswordConstants["loading"] = "Loading...";
})(CreatePasswordConstants || (CreatePasswordConstants = {}));
const sidebar = {
    primary: 'primary',
    mainMenu: 'mainMenu',
    title: 'title',
};
const tableConfig = {
    tableLimitOption: [5, 10, 25, 50, 100],
    pager: 10,
    tableLimit: 10,
};
const tableOption = [
    10, 25, 50, 100
];
const validationRule = {
    emailMinLength: 5,
    emailMaxLength: 70,
    phoneNumberMinLength: 10,
    phoneNumberMaxLength: 15,
    textAreaMinLength: 0,
    textAreaMaxLength: 65535,
    nameMinLength: 2,
    nameMaxLength: 100,
    passwordMinLength: 6,
    passwordMaxLength: 25,
    mobileMinLength: 10,
    mobileMaxLength: 10,
    textMinLength: 0,
    textMaxLength: 255,
    string: 'string',
    titleTextBoxMaxLength: 500,
    assetTitleBox: 500,
    incidentTitleTextBoxMaxLength: 100,
    auditCustomField: 70,
};
const autoStatusExcludedApiUrls = [
    ApiEndpoints.login
];
const tableMoreOption = {
    mainIcon: 'ri-menu-line',
    option: [
        {
            icon: 'ri-eye-line',
            class: '',
            label: 'View Details',
            event: 'View'
        },
        {
            icon: 'ri-edit-2-fill',
            class: '',
            label: 'Edit',
            event: 'Edit'
        },
        {
            icon: 'ri-delete-bin-6-fill',
            class: 'danger',
            label: 'Delete',
            event: 'Delete'
        },
    ]
};
const commonEvent = {
    view: 'View',
    edit: 'Edit',
    delete: 'Delete'
};
const timeSheetFilter = [{
        label: 'Day'
    },
    {
        label: 'Week'
    },
    {
        label: 'Month'
    },
    {
        label: 'Quarterly'
    },
    {
        label: 'Year'
    }];
const dateFilter = [
    {
        label: '1W',
        type: 'days',
        range: 7
    },
    {
        label: '2W',
        type: 'days',
        range: 14
    },
    {
        label: '1M',
        type: 'months',
        range: 1
    },
    {
        label: '3M',
        type: 'months',
        range: 3
    },
    {
        label: '1Y',
        type: 'year',
        range: 1
    },
];


/***/ }),

/***/ 22767:
/*!***************************************************!*\
  !*** ./src/app/core/constants/login-constants.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginUrls": () => (/* binding */ loginUrls),
/* harmony export */   "loginValues": () => (/* binding */ loginValues),
/* harmony export */   "loginValue": () => (/* binding */ loginValue),
/* harmony export */   "returnUrl": () => (/* binding */ returnUrl)
/* harmony export */ });
const loginUrls = {
    dashboard: '/employee-details',
    employee: '/task-entry',
    manager: '/task-entry',
    login: '/login',
    logout: '/logout',
    redirect: '/redirect'
};
const loginValues = {
    successfullyLoggedIn: 'Successfully logged in',
    email: 'email',
    password: 'password'
};
const loginValue = {
    detail: 'detail',
    email: 'email',
    message: 'message',
    msg: 'msg'
};
const returnUrl = 'returnUrl';


/***/ }),

/***/ 31501:
/*!****************************************************!*\
  !*** ./src/app/core/constants/warning-messages.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toastMessages": () => (/* binding */ toastMessages)
/* harmony export */ });
const toastMessages = {
    deleted: 'Deleted',
    success: 'Success',
    updated: 'Updated',
    created: 'Created',
    duplicated: 'Duplicate created successfully',
    validationError: 'Please fill all the mandatory fields',
    validationErrorAllField: 'Please fill all the fields',
    invalidDate: 'Please select valid date',
    invalidTime: 'Please enter valid time',
    invalidEmail: 'Invalid email',
    noLocalPath: 'No local path is added',
    typeSomething: 'Please add a comment',
    pleaseSelectOneItem: 'Please select at least one item',
    duplicateTableRelation: 'Duplicate table, Please edit the relation',
    fieldDisabled: 'This field is disabled',
    fieldNameRequired: 'Field Name is required.',
    noFieldFoundInExpression: 'No field is found in this expression',
    noChartSelected: 'No chart selected',
    noDashboardTitle: 'Please provide dashboard title',
    noGraphCreated: 'Please add at least one chart',
    warningForGoBack: 'Changes you made may not be saved.',
    invalidExpression: 'Please enter a valid expression',
    noExpression: 'Expression field cannot be empty.',
    selectExistingTemplate: 'Please select an exisiting template.',
    riskNotTagged: 'This risk is not tagged to any audit. Please tag an audit to continue.',
    controlNotTagged: 'This control is not tagged to any audit. Please tag an audit to continue.',
    selectSameSlug: 'Please select same module',
    expressionNullError: 'Please enter expression.',
    fieldNameExists: 'The field name can\'t be duplicate or same as the calculation functions',
    duplicateValue: 'This field already exist',
    limitExceeds: 'The maximum length of this field is 70 characters',
    emptyField: 'You can\'t save without a value',
    duplicateCustomValue: 'duplicate custom  field exist',
    limitExceed: 'The maximum length of custom field is 70 characters',
    savCustomField: 'please save the custom fields',
    checkCustom: 'please check  custom fields validation and fill all the mandatory fields',
    gateWayTimeOutToast: 'gateWay TimeOut ',
    validation: 'please give a valid input',
    errorMessageAdmin: 'server is disabled. Please contact your administrator',
    Date: 'Start Time And Start Time Must Be Greater Than End Time And End Time ',
};


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _pipe_title_case_expect_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe/title-case-expect.pipe */ 71951);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe/short-text.pipe */ 48984);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ 86608);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ 64106);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _render_tablemoreoption_tablemoreoption_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/tablemoreoption/tablemoreoption.component */ 47035);
/* harmony import */ var _render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render/custom-render/custom-render.component */ 13640);
/* harmony import */ var _pipe_dateago_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/dateago.pipe */ 96301);
/* harmony import */ var src_app_core_pipe_default_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/pipe/default-date.pipe */ 17762);
/* harmony import */ var _pipe_short_number_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe/short-number.pipe */ 61233);
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/auth/authentication.service */ 97268);
/* harmony import */ var _service_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/storage/storage.service */ 23387);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 83315);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var _directive_dragndrop_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directive/dragndrop.directive */ 15869);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-select-dropdown */ 34772);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _render_icon_render_icon_render_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./render/icon-render/icon-render.component */ 52974);
/* harmony import */ var _render_id_render_id_render_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./render/id-render/id-render.component */ 94144);
/* harmony import */ var angular_mentions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-mentions */ 6449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);





























class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService,
        _pipe_dateago_pipe__WEBPACK_IMPORTED_MODULE_4__.DateagoPipe,
        _pipe_short_number_pipe__WEBPACK_IMPORTED_MODULE_6__.ShortNumberPipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe,
        src_app_core_pipe_default_date_pipe__WEBPACK_IMPORTED_MODULE_5__.DefaultDatePipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.TitleCasePipe,
        _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService,
        _service_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService,
        _pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_1__.ShortTextPipe, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _pipe_title_case_expect_pipe__WEBPACK_IMPORTED_MODULE_0__.TitleCaseExpectPipe
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__.DragDropModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule.forRoot({ preventDuplicates: true }),
            ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__.SelectDropDownModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
            angular_mentions__WEBPACK_IMPORTED_MODULE_27__.MentionModule
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule,
        ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__.SelectDropDownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        angular_mentions__WEBPACK_IMPORTED_MODULE_27__.MentionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_render_tablemoreoption_tablemoreoption_component__WEBPACK_IMPORTED_MODULE_2__.TableMoreOptionComponent,
        _render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_3__.CustomRenderComponent,
        _pipe_dateago_pipe__WEBPACK_IMPORTED_MODULE_4__.DateagoPipe,
        _pipe_short_number_pipe__WEBPACK_IMPORTED_MODULE_6__.ShortNumberPipe,
        src_app_core_pipe_default_date_pipe__WEBPACK_IMPORTED_MODULE_5__.DefaultDatePipe,
        _directive_dragndrop_directive__WEBPACK_IMPORTED_MODULE_9__.DragNDropDirective,
        _pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_1__.ShortTextPipe,
        _render_icon_render_icon_render_component__WEBPACK_IMPORTED_MODULE_10__.IconRenderComponent,
        _render_id_render_id_render_component__WEBPACK_IMPORTED_MODULE_11__.IdRenderComponent,
        _pipe_title_case_expect_pipe__WEBPACK_IMPORTED_MODULE_0__.TitleCaseExpectPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__.DragDropModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__.SelectDropDownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        angular_mentions__WEBPACK_IMPORTED_MODULE_27__.MentionModule], exports: [_render_tablemoreoption_tablemoreoption_component__WEBPACK_IMPORTED_MODULE_2__.TableMoreOptionComponent,
        _render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_3__.CustomRenderComponent,
        _pipe_dateago_pipe__WEBPACK_IMPORTED_MODULE_4__.DateagoPipe,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule,
        _pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_1__.ShortTextPipe,
        ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_25__.SelectDropDownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatNativeDateModule,
        _render_icon_render_icon_render_component__WEBPACK_IMPORTED_MODULE_10__.IconRenderComponent,
        _pipe_title_case_expect_pipe__WEBPACK_IMPORTED_MODULE_0__.TitleCaseExpectPipe,
        _pipe_short_number_pipe__WEBPACK_IMPORTED_MODULE_6__.ShortNumberPipe,
        angular_mentions__WEBPACK_IMPORTED_MODULE_27__.MentionModule] }); })();


/***/ }),

/***/ 15869:
/*!*******************************************************!*\
  !*** ./src/app/core/directive/dragndrop.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragNDropDirective": () => (/* binding */ DragNDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class DragNDropDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.background = '#9ecbec ';
        this.opacity = '1';
    }
    // Dragover listener
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    }
    // Dragleave listener
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    // Drop listener
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
    ngOnInit() {
    }
}
DragNDropDirective.ɵfac = function DragNDropDirective_Factory(t) { return new (t || DragNDropDirective)(); };
DragNDropDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DragNDropDirective, selectors: [["", "appDragNDrop", ""]], hostVars: 4, hostBindings: function DragNDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragNDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragNDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragNDropDirective_drop_HostBindingHandler($event) { return ctx.ondrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.background)("opacity", ctx.opacity);
    } }, outputs: { fileDropped: "fileDropped" } });


/***/ }),

/***/ 55715:
/*!********************************************************!*\
  !*** ./src/app/core/helper/function.helper.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionService": () => (/* binding */ FunctionService)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ 35602);
/* harmony import */ var src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helper/storage.service */ 23995);









class FunctionService {
    constructor(datePipe, _cookie, _storage) {
        this.datePipe = datePipe;
        this._cookie = _cookie;
        this._storage = _storage;
        this.sidebarSubMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.sidebarSettingsSubMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.randomIntegerValue = 0;
        this.layoutOptions = {
            theme: 'light',
            dir: 'ltr',
            layout: 'vertical',
            sideBarType: 'full',
            sideBarPosition: 'fixed',
            headerPosition: 'fixed',
            boxed: 'full',
            navBarBg: 'skin6',
            sideBarBg: 'skin5',
            logoBg: 'skin6' // six possible values: skin(1/2/3/4/5/6)
        };
    }
    get random() {
        return Math.floor(Math.random() * 6) + 1;
    }
    getRandomString(length = 5) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    getPercentage(value, total) {
        const radix = 10;
        try {
            const percentage = (value / total) * 100;
            // eslint-disable-next-line radix
            if (isNaN(parseInt(percentage, radix))) {
                return 0;
            }
            else {
                return parseInt(percentage, radix);
            }
        }
        catch (error) {
            return 0;
        }
    }
    convertToServerDate(date = new Date(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.serverDate) {
        try {
            return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(format);
        }
        catch (error) {
            return date;
        }
    }
    convertToCreateTimeApiFormat(date = new Date(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.createTimeApiFormat) {
        try {
            // return moment(date).format('YYYY-DD-MM');
            return this.datePipe.transform(date, format);
        }
        catch (error) {
            return date;
        }
    }
    convertToCreateTimeApiTimeFormat(date = new Date(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.addTime) {
        try {
            // return moment(date).format('YYYY-DD-MM');
            return this.datePipe.transform(date, format);
        }
        catch (error) {
            return date;
        }
    }
    convertToClientDate(date = new Date(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.userDate) {
        try {
            return this.datePipe.transform(date, format);
        }
        catch (error) {
            return date;
        }
    }
    convertDateToTimesheetFormat(date, format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.timeSheetDate) {
        try {
            return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(format); // this.datePipe.transform(date, format);
        }
        catch (error) {
            return date;
        }
    }
    getCurrentWeek(date = moment__WEBPACK_IMPORTED_MODULE_2__(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.serverDate) {
        const currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(date);
        const weekStart = currentDate.clone().startOf('week');
        const days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment__WEBPACK_IMPORTED_MODULE_2__(weekStart).add(i, 'days').format(format));
        }
        return days;
    }
    getPreviousWeek(date = moment__WEBPACK_IMPORTED_MODULE_2__(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.timeSheetDate) {
        const currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(date).subtract(1, 'days');
        const weekStart = currentDate.clone().startOf('week');
        const days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment__WEBPACK_IMPORTED_MODULE_2__(weekStart).add(i, 'days').format(format));
        }
        return days;
    }
    getNextWeek(date = moment__WEBPACK_IMPORTED_MODULE_2__(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.timeSheetDate) {
        const currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(date).add(1, 'days');
        const weekStart = currentDate.clone().startOf('week');
        const days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment__WEBPACK_IMPORTED_MODULE_2__(weekStart).add(i, 'days').format(format));
        }
        return days;
    }
    getDateRange(type = 'days', range = 12, format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.timeSheetDateFilter, date = moment__WEBPACK_IMPORTED_MODULE_2__()) {
        const t = type;
        const currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(date).subtract(range, t);
        const weekStart = currentDate.clone().startOf('day');
        const days = [];
        for (let i = 0; i <= range; i++) {
            days.push(moment__WEBPACK_IMPORTED_MODULE_2__(weekStart).add(i, t).format(format));
        }
        return days;
    }
    stringToDate(date = moment__WEBPACK_IMPORTED_MODULE_2__(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.date) {
        try {
            return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(format);
        }
        catch (error) {
            return date;
        }
    }
    stringToTime(time, date = moment__WEBPACK_IMPORTED_MODULE_2__(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.fullDate) {
        try {
            return moment__WEBPACK_IMPORTED_MODULE_2__(`${date} ${time}`).format(format);
        }
        catch (error) {
            return time;
        }
    }
    getMovementDate(date, format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.movementTime) {
        try {
            return moment__WEBPACK_IMPORTED_MODULE_2__(date).format(format); // this.datePipe.transform(date, format);
        }
        catch (error) {
            return date;
        }
    }
    getNextYearDate(date = moment__WEBPACK_IMPORTED_MODULE_2__(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.fullDate) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(date).add(1, 'years').format(format);
    }
    getPreviousYearDate(date = moment__WEBPACK_IMPORTED_MODULE_2__(), format = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.dateFormat.fullDate) {
        return new Date(moment__WEBPACK_IMPORTED_MODULE_2__(date).subtract(1, 'years').format(format));
    }
    convertStringToJson(data) {
        for (let i = 0; i < data.length; i++) {
            data = data.replace('\'', '"');
        }
        return JSON.parse(data);
    }
    getUserDetails() {
        return this._storage.getLocalStorage(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKey.userDetails);
    }
    setUser(data) {
        // Checking production variable for setting values
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
            document.cookie = `${_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKey.userLogin}=${JSON.stringify(data)};path=/;Domain=.${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.cookieDomain}`;
        }
        else {
            document.cookie = `${_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKey.userLogin}=${JSON.stringify(data)};path=/;`;
        }
    }
    get getUser() {
        if (this._cookie.get(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKey.userLogin)) {
            return JSON.parse(this._cookie.get(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKey.userLogin));
        }
        return '';
    }
    get isLogged() {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
            if (this._cookie.get(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKey.sessionId)) {
                return this._cookie.get(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKey.sessionId);
            }
        }
        else {
            return this.getUser;
        }
        return true;
    }
    isValidEmail(email) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return (true);
        }
        return (false);
    }
    deleteCookie() {
        return new Promise((resolve, reject) => {
            const cookies = document.cookie.split('; ');
            for (let c = 0; c < cookies.length; c++) {
                const d = window.location.hostname.split('.');
                while (d.length > 0) {
                    const cookieBase = encodeURIComponent(cookies[c].split(';')[0].split('=')[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                    const p = location.pathname.split('/');
                    document.cookie = cookieBase + '/';
                    while (p.length > 0) {
                        document.cookie = cookieBase + p.join('/');
                        p.pop();
                    }
                    d.shift();
                }
            }
            document.cookie.split('; ').map(v => {
                document.cookie = v.split('=')[0] + `=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;Domain=.${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.cookieDomain}`;
            });
            document.cookie = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKey.userLogin + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            // document.cookie = 'key' + `=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
            document.cookie = 'sso-sessionid' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = 'auth' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = 'csrftoken' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            return resolve(true);
        });
    }
    invertColor(hex) {
        try {
            if (hex.indexOf('#') === 0) {
                hex = hex.slice(1);
            }
            // convert 3-digit hex to 6-digits.
            if (hex.length === 3) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            if (hex.length !== 6) {
                return '#000';
            }
            const rgb = this.hexToRgb(hex);
            if (rgb.r > 190) {
                return '#000';
            }
            return '#fff';
        }
        catch (error) {
            return '#fff';
        }
    }
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    timeConverter(time) {
        if (time) {
            if (time === null || time === void 0 ? void 0 : time.includes('AM' || 0 || 0)) {
                const timeArray = time.split(':', 2);
                if (timeArray.length === 2) {
                    return (timeArray[0] === '12' ? '00' : timeArray[0]) + ':' + timeArray[1].slice(0, 2);
                }
                else {
                    return false;
                }
            }
            if (time === null || time === void 0 ? void 0 : time.includes('PM' || 0 || 0)) {
                const timeArray = time.split(':', 2);
                if (timeArray.length === 2) {
                    return (+timeArray[0] + 12) + ':' + (timeArray[1].slice(0, 2));
                }
                else {
                    return false;
                }
            }
        }
        else {
            return time;
        }
        return time;
    }
}
FunctionService.ɵfac = function FunctionService_Factory(t) { return new (t || FunctionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService)); };
FunctionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FunctionService, factory: FunctionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 23995:
/*!************************************************!*\
  !*** ./src/app/core/helper/storage.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class StorageService {
    constructor() { }
    setLocalStorage(key, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            data = JSON.stringify(data);
            yield localStorage.setItem(key, data);
        });
    }
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    clearLocalStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.clear();
        });
    }
    removeLocalStorage(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.removeItem(key);
        });
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 27995:
/*!*****************************************************!*\
  !*** ./src/app/core/helper/toast.helper.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 83315);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



class ToastService {
    constructor(_toaster, _translate) {
        this._toaster = _toaster;
        this._translate = _translate;
    }
    success(text = '') {
        this._toaster.success(this._translate.instant(text), '', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true
        });
    }
    error(text = '') {
        this._toaster.error(this._translate.instant(text), '', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true
        });
    }
    warning(text = '') {
        this._toaster.warning(this._translate.instant(text), '', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true
        });
    }
    networkError(text = 'Currently unable to handle the request. HTTP Error 500') {
        this._toaster.error(this._translate.instant(text), '', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true
        });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 15157:
/*!*******************************************************!*\
  !*** ./src/app/core/helper/validationrule.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationruleService": () => (/* binding */ ValidationruleService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



class ValidationruleService {
    constructor() {
        this.EMAIL_REGEXP = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
        this.PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
        this.PASSWORD_REGEXP_2 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!#@$%^&(){}[:;<>,.?\'\"`\\/~_+\-=|\]]).{8,}$/;
        this.UPPERCASE_LETTERS = /(?=.*[A-Z])/;
        this.LOWERCASE_LETTERS = /(?=.*[a-z])/;
        this.SPECIAL_CHARACTERS = /(?=.*[*.!#@$%^&(){}[:;<>,.?\'\"`\\/~_+\-=|\]])/;
        this.NUMBERS = /(?=.*[0-9])/;
        this.time = /^(0?[0-9]|1[0-2]):([0-5]\d)(\s?((?:A|P)\.?M\.?))?$/i;
        this.textValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.textMinLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.textMaxLength)
        ]);
        this.mobileValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.mobileMinLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.mobileMaxLength)
        ]);
        this.emailValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.emailMaxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.emailMinLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(new RegExp(this.EMAIL_REGEXP))
        ]);
        this.passwordValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.passwordMinLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.passwordMaxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(new RegExp(this.PASSWORD_REGEXP))
        ]);
        this.dateValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required
        ]);
        this.radioValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required
        ]);
        this.lastNameValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
        ]);
        this.nameValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.nameMaxLength)
        ]);
        this.middleNameValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
        ]);
        this.negativeValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(0)
        ]);
        this.dropDownValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(1),
        ]);
        this.requiredValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
        ]);
        this.enhancedPasswordValidation = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(8),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(new RegExp(this.PASSWORD_REGEXP_2))
        ]);
        this.timeValidator = _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(new RegExp(this.time))
        ]);
    }
    textAreaValidation(maxLength = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.textAreaMaxLength, minLength = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.textAreaMinLength) {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(maxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(minLength),
        ]);
    }
    textBoxValidation(maxLength = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.textMaxLength, minLength = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.textMinLength) {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(maxLength),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(minLength),
        ]);
    }
    noWhitespaceValidator(control) {
        if (typeof control.value === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.validationRule.string) {
            const isWhitespace = (control.value || '').trim().length === 0;
            const isValid = !isWhitespace;
            return isValid ? null : { 'whitespace': true };
        }
        return null;
    }
    upperCaseValidator(password) {
        const regex = new RegExp(this.UPPERCASE_LETTERS);
        if (regex.test(password)) {
            return true;
        }
        else {
            return false;
        }
    }
    lowerCaseValidator(password) {
        const regex = new RegExp(this.LOWERCASE_LETTERS);
        if (regex.test(password)) {
            return true;
        }
        else {
            return false;
        }
    }
    specialCharacterValidator(password) {
        const regex = new RegExp(this.SPECIAL_CHARACTERS);
        if (regex.test(password)) {
            return true;
        }
        else {
            return false;
        }
    }
    numberValidator(password) {
        const regex = new RegExp(this.NUMBERS);
        if (regex.test(password)) {
            return true;
        }
        else {
            return false;
        }
    }
    minimumPasswordLength(password) {
        if (password.length >= 8) {
            return true;
        }
        else {
            return false;
        }
    }
    passwordsMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    setPasswordErrors(controlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            control.setErrors(null);
            // Setup minimum password length error
            if (this.minimumPasswordLength(control.value)) {
                control.setErrors({ minimumLength: true });
            }
            else {
                control.setErrors(null);
            }
            // Setup no number error
            if (this.numberValidator(control.value)) {
                control.setErrors({ noNumber: true });
            }
            else {
                control.setErrors(null);
            }
            // Setup no upper case letter error
            if (this.upperCaseValidator(control.value)) {
                control.setErrors({ noUpperCase: true });
            }
            else {
                control.setErrors(null);
            }
            // Setup no lower case letter error
            if (this.lowerCaseValidator(control.value)) {
                control.setErrors({ noLowerCase: true });
            }
            else {
                control.setErrors(null);
            }
            // Setup no special character error
            if (this.specialCharacterValidator(control.value)) {
                control.setErrors({ noSpecialCharacter: true });
            }
            else {
                control.setErrors(null);
            }
        };
    }
}
ValidationruleService.ɵfac = function ValidationruleService_Factory(t) { return new (t || ValidationruleService)(); };
ValidationruleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ValidationruleService, factory: ValidationruleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 45464:
/*!*************************************************************!*\
  !*** ./src/app/core/interceptor/auth-header.interceptor.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHeaderInterceptor": () => (/* binding */ AuthHeaderInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);


class AuthHeaderInterceptor {
    constructor(_helper) {
        this._helper = _helper;
    }
    intercept(request, next) {
        const user = this._helper.getUser;
        const idToken = user ? user.key : false;
        if (idToken) {
            const url = request.url;
            // let url = request.url.replace ('http://', `${environment.protocol}`);
            // url = url.replace (`${environment.baseUrl}`, `${environment.protocol}${user?.domain}`);
            const cloned = request.clone({
                headers: request.headers.set('Authorization', `Token ${idToken}`),
                url,
                withCredentials: true
            });
            return next.handle(cloned);
        }
        else {
            const cloned = request.clone({
                withCredentials: true
            });
            return next.handle(cloned);
        }
    }
}
AuthHeaderInterceptor.ɵfac = function AuthHeaderInterceptor_Factory(t) { return new (t || AuthHeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_0__.FunctionService)); };
AuthHeaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthHeaderInterceptor, factory: AuthHeaderInterceptor.ɵfac });


/***/ }),

/***/ 56300:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



class ErrorInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(er => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(er);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 5674:
/*!********************************************************!*\
  !*** ./src/app/core/interceptor/loader.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_loader_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/loader/loader.service */ 8891);






class LoaderInterceptor {
    constructor(loaderService, router) {
        this.loaderService = loaderService;
        this.router = router;
        this.requests = [];
        this.router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                // this.requests = [];
                this.loaderService.isLoading.next(false);
            }
        });
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }
    intercept(req, next) {
        // if (this.router)
        if (!req.url.includes('notification')) {
            this.requests.push(req);
            this.loaderService.show();
            // this.requests.push(req);
            this.loaderService.isLoading.next(true);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable.create((observer) => {
            const subscription = next.handle(req)
                .subscribe(event => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
                    this.removeRequest(req);
                    observer.next(event);
                }
            }, err => {
                this.removeRequest(req);
                observer.error(err);
            }, () => {
                this.removeRequest(req);
                observer.complete();
            });
            // remove request from queue when cancelled
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_service_loader_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
LoaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });


/***/ }),

/***/ 79395:
/*!**************************************************************!*\
  !*** ./src/app/core/interceptor/status-check.interceptor.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusCheckInterceptor": () => (/* binding */ StatusCheckInterceptor)
/* harmony export */ });
/* harmony import */ var _constants_warning_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants/warning-messages */ 31501);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../constants/constants */ 78073);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helper/toast.helper.service */ 27995);
/* harmony import */ var _service_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../service/login/login.service */ 76285);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ 35602);









class StatusCheckInterceptor {
    constructor(_toast, _loginApi, _cookie) {
        this._toast = _toast;
        this._loginApi = _loginApi;
        this._cookie = _cookie;
    }
    intercept(request, next) {
        let excludeUrl = false;
        _constants_constants__WEBPACK_IMPORTED_MODULE_1__.autoStatusExcludedApiUrls.map(urls => {
            var _a;
            if ((_a = request.url) === null || _a === void 0 ? void 0 : _a.includes(urls)) {
                excludeUrl = true;
            }
        });
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(evt => {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse) {
                if (evt.url.includes('.json') || evt.url.includes('selected_fields_list')) {
                }
                else {
                    evt.body.status = evt.status;
                }
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            if (!excludeUrl) {
                this.showHttpErrorToast(err);
            }
            else {
                if ((err === null || err === void 0 ? void 0 : err.status) === _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.corsOrigin) {
                    this.showHttpErrorToast(err);
                }
                else {
                    err.error.status = err.status;
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({ body: err.error }));
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(err);
        }));
    }
    showHttpErrorToast(err) {
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
            const status = err.status;
            switch (status) {
                case _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.serverDown:
                    this.showMessage(err);
                    break;
                case _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.unAuthorized: {
                    this._loginApi.forceLogout();
                    this.showMessage(err);
                    break;
                }
                case _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.forbidden: {
                    this._loginApi.forceLogout();
                    this.showMessage(err);
                    break;
                }
                case _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.badRequest: {
                    if (err.error instanceof Array) {
                        const key = Object.keys(err.error);
                        const errors = err.error;
                        key.forEach(el => {
                            if (errors[el] instanceof Array) {
                                errors[el].forEach(error => {
                                    this._toast.warning(el + '  : ' + error);
                                });
                            }
                        });
                    }
                    else if (err.error instanceof Object) {
                        const key = Object.keys(err.error);
                        const errors = err.error;
                        key.forEach(el => {
                            if (errors[el] instanceof Object) {
                                const subKey = Object.keys(errors[el]);
                                subKey.forEach(fieldName => {
                                    this._toast.warning(fieldName + '  : ' + errors[el][fieldName]);
                                });
                            }
                        });
                    }
                    else {
                        this.showMessage(err);
                    }
                    break;
                }
                case _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.notFound: {
                    this.showMessage(err);
                    break;
                }
                case _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.timeOut: {
                    this._toast.error(_constants_warning_messages__WEBPACK_IMPORTED_MODULE_0__.toastMessages.gateWayTimeOutToast);
                    break;
                }
                case _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.corsOrigin: {
                    this._toast.error(_constants_warning_messages__WEBPACK_IMPORTED_MODULE_0__.toastMessages.errorMessageAdmin);
                    break;
                }
                case _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.conflict: {
                    if (err.error instanceof Array) {
                        const key = Object.keys(err.error);
                        const errors = err.error;
                        key.forEach(el => {
                            if (errors[el] instanceof Array) {
                                errors[el].forEach(error => {
                                    this._toast.warning(el + '  : ' + error);
                                });
                            }
                            else {
                                this.showMessage(err);
                            }
                        });
                    }
                    else if (err.error instanceof Object) {
                        const key = Object.keys(err.error);
                        const errors = err.error;
                        key.forEach(el => {
                            if (errors[el] instanceof Object) {
                                const subKey = Object.keys(errors[el]);
                                subKey.forEach(fieldName => {
                                    this._toast.warning(fieldName + '  : ' + errors[el][fieldName]);
                                });
                            }
                            else {
                                this.showMessage(err);
                            }
                        });
                    }
                    else {
                        this.showMessage(err);
                    }
                    break;
                }
                case _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.unprocessableEntity: {
                    if (err.error instanceof Array) {
                        const key = Object.keys(err.error);
                        const errors = err.error;
                        key.forEach(el => {
                            if (errors[el] instanceof Array) {
                                errors[el].forEach(error => {
                                    this._toast.warning(el + '  : ' + error);
                                });
                            }
                            else {
                                this.showMessage(err);
                            }
                        });
                    }
                    else if (err.error instanceof Object) {
                        const key = Object.keys(err.error);
                        const errors = err.error;
                        key.forEach(el => {
                            if (errors[el] instanceof Object) {
                                const subKey = Object.keys(errors[el]);
                                subKey.forEach(fieldName => {
                                    this._toast.warning(fieldName + '  : ' + errors[el][fieldName]);
                                });
                            }
                            else {
                                this.showMessage(err);
                            }
                        });
                    }
                    else {
                        this.showMessage(err);
                    }
                    break;
                }
                case _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.failedDependency: {
                    if (err.error instanceof Array) {
                        const key = Object.keys(err.error);
                        const errors = err.error;
                        key.forEach(el => {
                            if (errors[el] instanceof Array) {
                                errors[el].forEach(error => {
                                    this._toast.warning(el + '  : ' + error);
                                });
                            }
                            else {
                                this.showMessage(err);
                            }
                        });
                    }
                    else if (err.error instanceof Object) {
                        const key = Object.keys(err.error);
                        const errors = err.error;
                        key.forEach(el => {
                            if (errors[el] instanceof Object) {
                                const subKey = Object.keys(errors[el]);
                                subKey.forEach(fieldName => {
                                    this._toast.warning(fieldName + '  : ' + errors[el][fieldName]);
                                });
                            }
                            else {
                                this.showMessage(err);
                            }
                        });
                    }
                    else {
                        this.showMessage(err);
                    }
                    break;
                }
                default:
                    {
                        this.showMessage(err);
                        break;
                    }
            }
        }
    }
    showMessage(err) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (err.error['detail']) {
            this._toast.warning(err.error['detail']);
        }
        else if (err.error['details']) {
            if ((_a = err.error['details']) === null || _a === void 0 ? void 0 : _a.email) {
                (_b = err.error['details']) === null || _b === void 0 ? void 0 : _b.email.forEach(notification => {
                    this._toast.warning(notification);
                });
            }
            else if ((_c = err.error['details']) === null || _c === void 0 ? void 0 : _c.nodata) {
                (_d = err.error['details']) === null || _d === void 0 ? void 0 : _d.nodata.forEach(notification => {
                    this._toast.warning(notification);
                });
            }
            else if ((_e = err.error['details']) === null || _e === void 0 ? void 0 : _e.name) {
                (_f = err.error['details']) === null || _f === void 0 ? void 0 : _f.name.forEach(notification => {
                    this._toast.warning(notification);
                });
            }
            else if ((_g = err.error['details']) === null || _g === void 0 ? void 0 : _g.non_field_errors) {
                (_h = err.error['details']) === null || _h === void 0 ? void 0 : _h.non_field_errors.forEach(notification => {
                    this._toast.warning(notification);
                });
            }
            else if ((_j = err.error['details']) === null || _j === void 0 ? void 0 : _j.budget) {
                (_k = err.error['details']) === null || _k === void 0 ? void 0 : _k.budget.forEach(category => {
                    this._toast.warning(category);
                });
            }
            else if ((_l = err.error['details']) === null || _l === void 0 ? void 0 : _l.sub_budget) {
                (_m = err.error['details']) === null || _m === void 0 ? void 0 : _m.sub_budget.forEach(subCategory => {
                    this._toast.warning(subCategory);
                });
            }
        }
        else if (err.error['message']) {
            this._toast.warning(err.error['message']);
        }
        else if (err.error['msg']) {
            this._toast.warning(err.error['msg']);
        }
        else if (err.error['error']) {
            this._toast.warning(err.error['error']);
        }
        else {
            this._toast.networkError();
        }
    }
}
StatusCheckInterceptor.ɵfac = function StatusCheckInterceptor_Factory(t) { return new (t || StatusCheckInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_service_login_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__.CookieService)); };
StatusCheckInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: StatusCheckInterceptor, factory: StatusCheckInterceptor.ɵfac });


/***/ }),

/***/ 96301:
/*!*******************************************!*\
  !*** ./src/app/core/pipe/dateago.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateagoPipe": () => (/* binding */ DateagoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DateagoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) { // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            }
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                if (i) {
                    counter = Math.floor(seconds / intervals[i]);
                    if (counter > 0) {
                        if (counter === 1) {
                            return counter + ' ' + i + ' ago'; // singular (1 day ago)
                        }
                        else {
                            return counter + ' ' + i + 's ago'; // plural (2 days ago)
                        }
                    }
                }
            }
        }
        return value;
    }
}
DateagoPipe.ɵfac = function DateagoPipe_Factory(t) { return new (t || DateagoPipe)(); };
DateagoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateagoPipe, pure: true });


/***/ }),

/***/ 17762:
/*!************************************************!*\
  !*** ./src/app/core/pipe/default-date.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultDatePipe": () => (/* binding */ DefaultDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);


class DefaultDatePipe {
    constructor(date) {
        this.date = date;
    }
    transform(value, format = 'dd MMM yyyy') {
        return this.date.transform(value, format);
    }
}
DefaultDatePipe.ɵfac = function DefaultDatePipe_Factory(t) { return new (t || DefaultDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe, 16)); };
DefaultDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "defaultDate", type: DefaultDatePipe, pure: true });


/***/ }),

/***/ 61233:
/*!************************************************!*\
  !*** ./src/app/core/pipe/short-number.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortNumberPipe": () => (/* binding */ ShortNumberPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);


class ShortNumberPipe {
    constructor(_number) {
        this._number = _number;
    }
    transform(number, args) {
        if (isNaN(number)) {
            return args ? number : '-';
        } // will only work value is a number
        if (number === null) {
            return 0;
        }
        if (number === 0) {
            return 0;
        }
        number = parseInt(number, 10);
        let abs = Math.abs(number);
        const rounder = Math.pow(10, 1);
        const isNegative = number < 0; // will also work for Negetive numbers
        let key = '';
        number = this._number.transform(number, '1.0-0');
        const powers = [
            { key: 'Q', value: Math.pow(10, 15) },
            { key: 'T', value: Math.pow(10, 12) },
            { key: 'B', value: Math.pow(10, 9) },
            { key: 'M', value: Math.pow(10, 6) },
            { key: 'K', value: 1000 }
        ];
        for (let i = 0; i < powers.length; i++) {
            let reduced = abs / powers[i].value;
            reduced = Math.round(reduced * rounder) / rounder;
            if (reduced >= 1) {
                abs = reduced;
                key = powers[i].key;
                break;
            }
        }
        if (number < 10 && number !== 0) {
            return '0' + number;
        }
        return (isNegative ? '-' : '') + abs + key;
    }
}
ShortNumberPipe.ɵfac = function ShortNumberPipe_Factory(t) { return new (t || ShortNumberPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, 16)); };
ShortNumberPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shortNumber", type: ShortNumberPipe, pure: true });


/***/ }),

/***/ 48984:
/*!**********************************************!*\
  !*** ./src/app/core/pipe/short-text.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortTextPipe": () => (/* binding */ ShortTextPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ShortTextPipe {
    transform(value, length = 15) {
        try {
            if (value === undefined || value === null) {
                return value;
            }
            const trail = '...';
            return value.length > length ? value.substring(0, length) + trail : value;
        }
        catch (error) {
            return value;
        }
    }
}
ShortTextPipe.ɵfac = function ShortTextPipe_Factory(t) { return new (t || ShortTextPipe)(); };
ShortTextPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shortText", type: ShortTextPipe, pure: true });


/***/ }),

/***/ 71951:
/*!*****************************************************!*\
  !*** ./src/app/core/pipe/title-case-expect.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleCaseExpectPipe": () => (/* binding */ TitleCaseExpectPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TitleCaseExpectPipe {
    transform(value) {
        if (!value) {
            return value;
        } // safeguard
        value = value.toLowerCase();
        // regex to find all words EXCEPT the ones we don't want capitalized
        const words = /\b(?!of|by|the|to|a)\w+/g;
        // capitalize the first letters of said words
        const newVal = value.replace(words, (match) => {
            return match.replace(/^\w/, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
        });
        // always capitalize the first character of newVal
        return newVal.charAt(0).toUpperCase() + newVal.substr(1);
    }
}
TitleCaseExpectPipe.ɵfac = function TitleCaseExpectPipe_Factory(t) { return new (t || TitleCaseExpectPipe)(); };
TitleCaseExpectPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "titleCaseExpect", type: TitleCaseExpectPipe, pure: true });


/***/ }),

/***/ 13640:
/*!**********************************************************************!*\
  !*** ./src/app/core/render/custom-render/custom-render.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomRenderComponent": () => (/* binding */ CustomRenderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CustomRenderComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomRenderComponent.ɵfac = function CustomRenderComponent_Factory(t) { return new (t || CustomRenderComponent)(); };
CustomRenderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomRenderComponent, selectors: [["app-custom-render"]], inputs: { value: "value", rowData: "rowData" }, decls: 1, vars: 1, template: function CustomRenderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tcmVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 52974:
/*!******************************************************************!*\
  !*** ./src/app/core/render/icon-render/icon-render.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconRenderComponent": () => (/* binding */ IconRenderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);




const _c0 = function (a0) { return { "color": a0 }; };
function IconRenderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconRenderComponent_ng_container_0_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.iconClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", (ctx_r0.value == null ? null : ctx_r0.value.route) ? ctx_r0.value == null ? null : ctx_r0.value.route : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.value == null ? null : ctx_r0.value.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.value == null ? null : ctx_r0.value.color));
} }
function IconRenderComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconRenderComponent_ng_container_1_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.iconClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.value == null ? null : ctx_r1.value.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.value == null ? null : ctx_r1.value.color));
} }
class IconRenderComponent {
    constructor() {
        this.customEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    iconClick() {
        this.customEvent.emit(this.value);
    }
}
IconRenderComponent.ɵfac = function IconRenderComponent_Factory(t) { return new (t || IconRenderComponent)(); };
IconRenderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconRenderComponent, selectors: [["app-icon-render"]], inputs: { value: "value" }, outputs: { customEvent: "customEvent" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "routerLink"], [1, "pointer", 3, "ngStyle", "click"]], template: function IconRenderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IconRenderComponent_ng_container_0_Template, 3, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IconRenderComponent_ng_container_1_Template, 2, 5, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value == null ? null : ctx.value.route);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.value == null ? null : ctx.value.route));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY29uLXJlbmRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 94144:
/*!**************************************************************!*\
  !*** ./src/app/core/render/id-render/id-render.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdRenderComponent": () => (/* binding */ IdRenderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipe/short-text.pipe */ 48984);






const _c0 = function (a0) { return { "color": a0 }; };
function IdRenderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IdRenderComponent_ng_container_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.idClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "shortText");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.value == null ? null : ctx_r0.value.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", (ctx_r0.value == null ? null : ctx_r0.value.route) ? ctx_r0.value == null ? null : ctx_r0.value.route : null)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx_r0.value == null ? null : ctx_r0.value.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.value == null ? null : ctx_r0.value.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 9, ctx_r0.value == null ? null : ctx_r0.value.id, 25)), "");
} }
function IdRenderComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IdRenderComponent_ng_container_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.idClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "shortText");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.value == null ? null : ctx_r1.value.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx_r1.value == null ? null : ctx_r1.value.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.value == null ? null : ctx_r1.value.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 8, ctx_r1.value == null ? null : ctx_r1.value.id, 25)), "");
} }
class IdRenderComponent {
    constructor() {
        this.customEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    idClick() {
        this.customEvent.emit(this.value);
    }
}
IdRenderComponent.ɵfac = function IdRenderComponent_Factory(t) { return new (t || IdRenderComponent)(); };
IdRenderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IdRenderComponent, selectors: [["app-id-render"]], inputs: { value: "value" }, outputs: { customEvent: "customEvent" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "d-flex", 3, "routerLink", "ngStyle", "click"], [1, "mt--1"], [1, "d-flex", 3, "ngStyle", "click"]], template: function IdRenderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, IdRenderComponent_ng_container_0_Template, 6, 14, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IdRenderComponent_ng_container_1_Template, 6, 13, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.value == null ? null : ctx.value.route);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.value == null ? null : ctx.value.route));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_0__.ShortTextPipe], styles: [".mt--1[_ngcontent-%COMP%] {\n  margin-top: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkLXJlbmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiaWQtcmVuZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10LS0xIHtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 47035:
/*!**************************************************************************!*\
  !*** ./src/app/core/render/tablemoreoption/tablemoreoption.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableMoreOptionComponent": () => (/* binding */ TableMoreOptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





function TableMoreOptionComponent_div_5_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.icon);
} }
function TableMoreOptionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableMoreOptionComponent_div_5_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.eventFired(item_r1.event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableMoreOptionComponent_div_5_i_1_Template, 1, 3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, item_r1.label));
} }
class TableMoreOptionComponent {
    constructor(config) {
        this.optionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.customEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        config.placement = 'auto';
        config.autoClose = true;
    }
    eventFired(ev) {
        const data = {
            data: this.row,
            event: ev
        };
        this.customEvent.emit(data);
        this.optionClick.emit(data);
    }
}
TableMoreOptionComponent.ɵfac = function TableMoreOptionComponent_Factory(t) { return new (t || TableMoreOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownConfig)); };
TableMoreOptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableMoreOptionComponent, selectors: [["app-tablemoreoption"]], inputs: { row: "row", value: "value" }, outputs: { optionClick: "optionClick", customEvent: "customEvent" }, decls: 6, vars: 2, consts: [[1, "row"], [1, "col"], ["ngbDropdown", "", "container", "body", 1, "d-inline-block", "pointer", "option-menu"], ["ngbDropdownToggle", "", 1, "", 3, "ngClass"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "class", "click", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "click"], [3, "class", 4, "ngIf"], [1, "do-more-option-text"]], template: function TableMoreOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableMoreOptionComponent_div_5_Template, 5, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.value.mainIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value.option);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".do-more-option-text[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n  .dropdown-toggle:after {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlbW9yZW9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBSVE7RUFDSSx3QkFBQTtBQURaIiwiZmlsZSI6InRhYmxlbW9yZW9wdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kby1tb3JlLW9wdGlvbi10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgICAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 67083:
/*!***************************************************!*\
  !*** ./src/app/core/service/auth/auth.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _helper_function_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helper/function.helper.service */ 55715);


class AuthService {
    constructor(_helper) {
        this._helper = _helper;
    }
    get isAuth() {
        if (this._helper.getUser) {
            return this._helper.getUser;
        }
        return '';
    }
    get isLoggedIn() {
        if (this._helper.isLogged) {
            return true;
        }
        return false;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_0__.FunctionService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 97268:
/*!*************************************************************!*\
  !*** ./src/app/core/service/auth/authentication.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/http.service */ 3726);
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.service */ 23387);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../helper/function.helper.service */ 55715);







class AuthenticationService {
    constructor(http, _storageService, _router, _helper) {
        this.http = http;
        this._storageService = _storageService;
        this._router = _router;
        this._helper = _helper;
    }
    login(formData) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        // return this.http.post(ApiEndpoints.login, formData);
    }
    getToken() {
        return localStorage.getItem(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKey.userDetails);
    }
    getUserId() {
        return JSON.parse(localStorage.getItem(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.LocalStorageKey.userDetails));
    }
    getUserDetails(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        // return this.http.get(ApiEndpoints.user + `${id}/detail/`);
    }
    forceLogout() {
        this._helper.deleteCookie().then(v => {
            this._storageService.clearLocalStorage();
            this._router.navigate(['/login']);
        });
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 59113:
/*!***********************************************************!*\
  !*** ./src/app/core/service/common/common-api.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonApiService": () => (/* binding */ CommonApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/constants */ 78073);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 3726);





class CommonApiService {
    constructor(_http) {
        this._http = _http;
        this.showCommentWidgetSidebar = false;
        this.commentData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.sidebarStatusCheck$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.cudCommentEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.replyComponentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    applyGlobalFilter(data) {
        // return this._http.post(ApiEndpoints.GlobalFilter, data);
    }
    addToDropdownItem(data) {
        // return this._http.post(ApiEndpoints.GlobalFilter, data);
    }
    getAppliedFilter() {
        // return this._http.get(ApiEndpoints.GetGlobalFilter);
    }
    createDropdownItem(data) {
        // return this._http.post(ApiEndpoints.CreateDropdownItem, data);
    }
    selectLanguage(data) {
        //  return this._http.put(ApiEndpoints.languageselector, data);
    }
    getTableauTicket() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        //  return this._http.get(ApiEndpoints.tableauTicket);
    }
    notification() {
        return this._http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiEndpoints.notificationDropDown);
    }
    notificationCount() {
        return this._http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiEndpoints.notificationCount);
    }
    setCommentData(val) {
        this.commentData$.next(val);
    }
    get getCommentData() {
        return this.commentData$.asObservable();
    }
    setSideBarStatusCheckEvent(val) {
        this.sidebarStatusCheck$.next(val);
    }
    get getSideBarStatusCheckEvent() {
        return this.sidebarStatusCheck$.asObservable();
    }
}
CommonApiService.ɵfac = function CommonApiService_Factory(t) { return new (t || CommonApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
CommonApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CommonApiService, factory: CommonApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 52743:
/*!*******************************************************!*\
  !*** ./src/app/core/service/common/common.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ 3726);


class CommonService {
    constructor(_http) {
        this._http = _http;
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); };
CommonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 62309:
/*!**************************************************************!*\
  !*** ./src/app/core/service/common/communication.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationService": () => (/* binding */ CommunicationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class CommunicationService {
    constructor() {
        this.tableCollapse$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    setTableCollapse(val) {
        this.tableCollapse$.next(val);
    }
    get getTableCollapse() {
        return this.tableCollapse$.asObservable();
    }
}
CommunicationService.ɵfac = function CommunicationService_Factory(t) { return new (t || CommunicationService)(); };
CommunicationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommunicationService, factory: CommunicationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3726:
/*!*****************************************************!*\
  !*** ./src/app/core/service/common/http.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



class HttpService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseVersion + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiVersion;
    }
    post(url, data = {}) {
        return this.http.post(this.apiUrl + url, data);
    }
    fileUpload(url, data = {}) {
        return this.http.post(this.apiUrl + url, data);
    }
    put(url, data = {}) {
        return this.http.put(this.apiUrl + url, data);
    }
    get(url) {
        return this.http.get(this.apiUrl + url);
    }
    delete(url) {
        return this.http.delete(this.apiUrl + url);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8891:
/*!*******************************************************!*\
  !*** ./src/app/core/service/loader/loader.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    hide() {
        this.isLoading.next(false);
    }
    show() {
        this.isLoading.next(true);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 76285:
/*!*****************************************************!*\
  !*** ./src/app/core/service/login/login.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/constants */ 78073);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/http.service */ 3726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helper/storage.service */ 23995);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ 35602);








class LoginService {
    constructor(http, router, _storage, _helper, _cookie, _activatedRoute) {
        this.http = http;
        this.router = router;
        this._storage = _storage;
        this._helper = _helper;
        this._cookie = _cookie;
        this._activatedRoute = _activatedRoute;
    }
    login(data) {
        //  return of ({detail: 'logout Successful', status: 200});
        return this.http.post(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiEndpoints.login, data);
    }
    userProfile() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        //  return this.http.get(ApiEndpoints.userProfile);
    }
    userList() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        //   return this.http.get(ApiEndpoints.adminUserGrid);
    }
    logOut() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ detail: 'logout Successful' });
        //  return this.http.post(ApiEndpoints.Logout);
    }
    resetPassword(data) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        //  return this.http.post(ApiEndpoints.passwordReset, data);
    }
    reactivateClientPassword(data) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        //  return this.http.post(ApiEndpoints.reactivateClientPassword, data);
    }
    activateClientPassword(data) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        // return this.http.post(ApiEndpoints.activateClientPassword, data);
    }
    resetUserPassword(data) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        // return this.http.post(ApiEndpoints.resetUserPassword, data);
    }
    activateUserPassword(data) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        //   return this.http.post(ApiEndpoints.activateUserPassword, data);
    }
    tokenVerification(token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        // return this.http.get(ApiEndpoints.tokenValidation + token);
    }
    resetTokenVerification(token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('');
        // return this.http.get(ApiEndpoints.resetTokenValidation + token);
    }
    forceLogout() {
        this._helper.deleteCookie().then(v => {
            this._storage.clearLocalStorage();
            this.router.navigate(['/login'], { queryParams: { returnUrl: this._activatedRoute.snapshot.queryParamMap.get('returnUrl') || this.router.url } });
        });
    }
    forceLogoutPasswordCreate() {
        this._helper.deleteCookie().then(v => {
            this._storage.clearLocalStorage();
            this.router.navigate(['/login']);
        });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 15377:
/*!*********************************************************************!*\
  !*** ./src/app/core/service/notifications/notifications.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../constants/constants */ 78073);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/http.service */ 3726);




class NotificationsService {
    constructor(_http) {
        this._http = _http;
    }
    getViewNotification(gridParams = { q: '', offset: 0, limit: 10 }) {
        const keys = Object.keys(gridParams);
        const value = Object.values(gridParams);
        let query = '?';
        for (let i = 0; i < keys.length; i++) {
            if (value[i] !== '') {
                query += keys[i] + '=' + encodeURIComponent(value[i]) + '&';
            }
        }
        return this._http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiEndpoints.notificationList + query);
    }
    getUnreadNotifications() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    getUnreadCount() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    getNotificationDetails(id) {
        return this._http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ApiEndpoints.notificationDetails + '?notification_id=' + id);
    }
    markAllNotificationsRead() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    deleteNotification(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    markasUnread(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    markasread(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    flag(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    unFlag(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    multipleFlag(dataId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    multipleUnFlag(dataId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    multipleMarkasread(dataId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    multipleMarkasunread(dataId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    multipleDelete(dataId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    getDetailNotification(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
    submitRemarks(data) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)('done');
    }
}
NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_common_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService)); };
NotificationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 23387:
/*!*********************************************************!*\
  !*** ./src/app/core/service/storage/storage.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class StorageService {
    constructor() { }
    setLocalStorage(key, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            data = JSON.stringify(data);
            yield localStorage.setItem(key, data);
        });
    }
    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    clearLocalStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.clear();
        });
    }
    removeLocalStorage(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.removeItem(key);
        });
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13233:
/*!**************************************!*\
  !*** ./src/app/guard/admin.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var _core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/constants/login-constants */ 22767);
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/service/auth/auth.service */ 67083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/helper/function.helper.service */ 55715);






class AdminGuard {
    constructor(_auth, router, _helper) {
        this._auth = _auth;
        this.router = router;
        this._helper = _helper;
    }
    canActivate(next, state) {
        if (this._auth.isLoggedIn) {
            const user = this._helper.getUser;
            if ((user === null || user === void 0 ? void 0 : user.user_type) === _core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.userRole.admin) {
                return true;
            }
            else {
                this.router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__.loginUrls.logout], { queryParams: { returnUrl: state.url } });
            }
        }
        else {
            this.router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__.loginUrls.logout], { queryParams: { returnUrl: state.url } });
        }
        return;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService)); };
AdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60980:
/*!****************************************!*\
  !*** ./src/app/guard/manager.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerGuard": () => (/* binding */ ManagerGuard)
/* harmony export */ });
/* harmony import */ var _core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/constants/login-constants */ 22767);
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/service/auth/auth.service */ 67083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/helper/function.helper.service */ 55715);






class ManagerGuard {
    constructor(_auth, _router, _helper) {
        this._auth = _auth;
        this._router = _router;
        this._helper = _helper;
    }
    canActivate(next, state) {
        if (this._auth.isLoggedIn) {
            const user = this._helper.getUser;
            if ((user === null || user === void 0 ? void 0 : user.user_type) === _core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.userRole.manager) {
                return true;
            }
            else if ((user === null || user === void 0 ? void 0 : user.user_type) === _core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.userRole.admin) {
                return true;
            }
            else {
                this._router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__.loginUrls.logout], { queryParams: { returnUrl: state.url } });
            }
        }
        else {
            this._router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__.loginUrls.logout], { queryParams: { returnUrl: state.url } });
        }
        return;
    }
}
ManagerGuard.ɵfac = function ManagerGuard_Factory(t) { return new (t || ManagerGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService)); };
ManagerGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ManagerGuard, factory: ManagerGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 62741:
/*!*******************************************!*\
  !*** ./src/app/guard/publicauth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicAuthGuard": () => (/* binding */ PublicAuthGuard)
/* harmony export */ });
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/constants/constants */ 78073);
/* harmony import */ var _core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/constants/login-constants */ 22767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/service/auth/auth.service */ 67083);
/* harmony import */ var _core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../core/helper/function.helper.service */ 55715);






class PublicAuthGuard {
    constructor(router, _auth, _helper) {
        this.router = router;
        this._auth = _auth;
        this._helper = _helper;
    }
    canActivate(next, state) {
        const user = this._helper.getUser;
        if (this._auth.isLoggedIn) {
            if (user === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.admin) {
                this.router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginUrls.dashboard]);
            }
            else {
                this.router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginUrls.employee]);
            }
            if (this._auth.isAuth !== '') {
                if (user === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.admin) {
                    this.router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginUrls.dashboard]);
                }
                else {
                    this.router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginUrls.employee]);
                }
            }
            else {
                this.router.navigate(['/logout']);
            }
        }
        return true;
    }
}
PublicAuthGuard.ɵfac = function PublicAuthGuard_Factory(t) { return new (t || PublicAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService)); };
PublicAuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PublicAuthGuard, factory: PublicAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 86376:
/*!*************************************!*\
  !*** ./src/app/guard/role.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var _core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/constants/login-constants */ 22767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/service/auth/auth.service */ 67083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);






class RoleGuard {
    constructor(_auth, router, _helper) {
        this._auth = _auth;
        this.router = router;
        this._helper = _helper;
    }
    canActivate(next, state) {
        if (this._auth.isLoggedIn) {
            const user = this._helper.getUser;
            if ((user === null || user === void 0 ? void 0 : user.user_type) === src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.employee || (user === null || user === void 0 ? void 0 : user.user_type) === src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.admin || (user === null || user === void 0 ? void 0 : user.user_type) === src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.manager) {
                return true;
            }
            else {
                this.router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginUrls.logout], { queryParams: { returnUrl: state.url } });
            }
        }
        else {
            this.router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_1__.loginUrls.logout], { queryParams: { returnUrl: state.url } });
        }
        return false;
    }
}
RoleGuard.ɵfac = function RoleGuard_Factory(t) { return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService)); };
RoleGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RoleGuard, factory: RoleGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71658:
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankComponent": () => (/* binding */ BlankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class BlankComponent {
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank-layout"]], decls: 1, vars: 0, template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 76729:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helper/storage.service */ 23995);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var _core_service_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/service/common/common.service */ 52743);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/header-navigation/navigation.component */ 80496);
/* harmony import */ var _shared_httploader_httploader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/httploader/httploader.component */ 79152);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ 17500);













const _c0 = function (a0) { return { "show-sidebar": a0 }; };
class FullComponent {
    constructor(router, _storage, _function, _common) {
        this.router = router;
        this._storage = _storage;
        this._function = _function;
        this._common = _common;
        this.config = {};
        this.tabStatus = 'justified';
        this.isCollapsed = false;
        this.showSettings = false;
        this.showMobileMenu = false;
        this.expandLogo = false;
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
    }
    Logo() {
        this.expandLogo = !this.expandLogo;
    }
    closeMobileView() {
        this.showMobileMenu = false;
    }
    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
        this.defaultSidebar = this._function.layoutOptions.sideBarType;
        this.handleSidebar();
    }
    /* function for copying the array to filter*/
    onResize(event) {
        this.handleSidebar();
    }
    handleSidebar() {
        this.innerWidth = window.innerWidth;
        switch (this.defaultSidebar) {
            case 'full':
            case 'iconbar':
                if (this.innerWidth < 1170) {
                    this._function.layoutOptions.sideBarType = 'mini-sidebar';
                }
                else {
                    this._function.layoutOptions.sideBarType = this.defaultSidebar;
                }
                break;
            case 'overlay':
                if (this.innerWidth < 767) {
                    this._function.layoutOptions.sideBarType = 'mini-sidebar';
                }
                else {
                    this._function.layoutOptions.sideBarType = this.defaultSidebar;
                }
                break;
            default:
        }
    }
    toggleSidebarType() {
        switch (this._function.layoutOptions.sideBarType) {
            case 'full':
            case 'iconbar':
                this._function.layoutOptions.sideBarType = 'mini-sidebar';
                break;
            case 'overlay':
                this.showMobileMenu = !this.showMobileMenu;
                break;
            case 'mini-sidebar':
                if (this.defaultSidebar === 'mini-sidebar') {
                    this._function.layoutOptions.sideBarType = 'full';
                }
                else {
                    this._function.layoutOptions.sideBarType = this.defaultSidebar;
                }
                break;
            default:
        }
    }
    sideBarTypeSet(event) {
        this.sideBarType = event;
    }
    /* for global filter start*/
    /* for global filter end*/
    onClickLogo() {
        const user = this._function.getUser;
        // window.location.href = user.client_url + environment.baseVersion;
        window.location.href = user.client_url + '/';
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_service_common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService)); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], hostBindings: function FullComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
    } }, decls: 18, vars: 23, consts: [["id", "main-wrapper", "data-layout", "vertical", "data-sidebartype", "full", 3, "ngClass", "dir"], [1, "topbar"], [1, "navbar", "top-navbar", "navbar-expand-md", 3, "ngClass"], [1, "navbar-header", "d-ls-none", 3, "ngClass"], ["href", "javascript:void(0) ", "data-target", "#navbarSupportedContent\n                    ", "aria-controls", "navbarSupportedContent ", 1, "topbartoggler", "d-block", "d-md-none", "waves-effect", "waves-light", 3, "click"], [1, "ri-align-left", "icon-colour"], ["id", "navbarSupportedContent ", 1, "navbar-collapse", "collapse", "px-3"], [1, "w-100", 3, "sideBarType", "toggleSidebar"], [1, "left-sidebar", 3, "mouseover", "mouseout"], [1, "page-sidebar", 3, "perfectScrollbar"], [3, "mobileView", "sideBarComments", "mobileClose"], [1, "page-wrapper", "px-3"], [1, "container-fluid"], [1, "footer", "text-right", "copy-right"], [1, "chat-windows"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FullComponent_Template_a_click_4_listener() { return ctx.showMobileMenu = !ctx.showMobileMenu; })("click", function FullComponent_Template_a_click_4_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "app-navigation", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("toggleSidebar", function FullComponent_Template_app_navigation_toggleSidebar_7_listener() { return ctx.toggleSidebarType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-httploader");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "aside", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseover", function FullComponent_Template_aside_mouseover_9_listener() { return ctx.Logo(); })("mouseout", function FullComponent_Template_aside_mouseout_9_listener() { return ctx.Logo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "app-sidebar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sideBarComments", function FullComponent_Template_app_sidebar_sideBarComments_11_listener($event) { return ctx.sideBarTypeSet($event); })("mobileClose", function FullComponent_Template_app_sidebar_mobileClose_11_listener() { return ctx.closeMobileView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx._function.layoutOptions.sideBarType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](21, _c0, ctx.showMobileMenu))("dir", ctx._function.layoutOptions.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-theme", ctx._function.layoutOptions.theme)("data-layout", ctx._function.layoutOptions.layout)("data-sidebartype", ctx._function.layoutOptions.sideBarType)("data-sidebar-position", ctx._function.layoutOptions.sideBarPosition)("data-header-position", ctx._function.layoutOptions.headerPosition)("data-boxed-layout", ctx._function.layoutOptions.boxed);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-navbarbg", ctx._function.layoutOptions.navBarBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx._function.layoutOptions.navBarBg == "skin6" ? "navbar-light" : "navbar-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.expandLogo ? "expand-logo" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-logobg", ctx._function.layoutOptions.logoBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-navbarbg", ctx._function.layoutOptions.navBarBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sideBarType", ctx.sideBarType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-sidebarbg", ctx._function.layoutOptions.sideBarBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("mobileView", ctx.showMobileMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Copyright \u00A9 (", ctx.version, ") ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Dir, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavbar, _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__.NavigationComponent, _shared_httploader_httploader_component__WEBPACK_IMPORTED_MODULE_5__.HttploaderComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarDirective, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], styles: ["header[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n\n.navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.icon-colour[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #0e2046;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0FBQVI7O0FBSUE7RUFDSSx3QkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb24tY29sb3VyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMGUyMDQ2O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 80496:
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/constants/login-constants */ 22767);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var src_app_core_service_common_common_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/common/common-api.service */ 59113);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_core_service_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/login/login.service */ 76285);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/helper/storage.service */ 23995);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/helper/toast.helper.service */ 27995);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _core_pipe_short_number_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/pipe/short-number.pipe */ 61233);
/* harmony import */ var _core_pipe_title_case_expect_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/pipe/title-case-expect.pipe */ 71951);
/* harmony import */ var _core_pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/pipe/short-text.pipe */ 48984);
/* harmony import */ var _core_pipe_dateago_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/pipe/dateago.pipe */ 96301);





















function NavigationComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "shortNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx_r0.notificationCount));
} }
const _c0 = function (a0, a1) { return { "ri-home-2-line": a0, "ri-settings-5-line": a1 }; };
function NavigationComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavigationComponent_li_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r6.settings(ctx_r6.sideBarType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](1, _c0, ctx_r1.sideBarType === "setting", ctx_r1.sideBarType === "home"));
} }
function NavigationComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavigationComponent_span_31_Template_small_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r8.markAllAsRead(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "Mark all as read"));
} }
const _c1 = function (a0, a1) { return { "notification-dropdown-unread": a0, "notification-dropdown-read": a1 }; };
function NavigationComponent_div_35_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavigationComponent_div_35_div_3_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13); const item_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r12.onNotificationIdClick(item_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "titleCaseExpect");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "shortText");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](12, _c1, item_r11["unread"] == true, item_r11["unread"] == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("src", (item_r11 == null ? null : item_r11.actor == null ? null : item_r11.actor.profile_Pic) || "/assets/images/png/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 5, item_r11 == null ? null : item_r11.actor == null ? null : item_r11.actor.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](14, 7, item_r11 == null ? null : item_r11.verb, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 10, item_r11 == null ? null : item_r11.timestamp));
} }
function NavigationComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, NavigationComponent_div_35_div_3_Template, 19, 15, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("perfectScrollbar", ctx_r3.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r3.notification);
} }
function NavigationComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "No Notifications"));
} }
function NavigationComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavigationComponent_div_37_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r14.viewAllNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 1, "View all Notifications"), " ");
} }
const _c2 = function (a0) { return { "no-count": a0 }; };
const _c3 = function (a0) { return { "w-340": a0 }; };
class NavigationComponent {
    constructor(_commonApi, _router, login, _function, _storage, translate, _toast) {
        var _a, _b;
        this._commonApi = _commonApi;
        this._router = _router;
        this.login = login;
        this._function = _function;
        this._storage = _storage;
        this.translate = translate;
        this._toast = _toast;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.closeSideBar = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.selectedFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.config = {};
        this.showSearch = false;
        this.showSettings = false;
        this.filterHeader = [];
        this.languageDropdown = [];
        this.showLanguages = false;
        this.notificationCount = 0;
        // This is for Notifications
        this.notifications = [];
        this.selectedFilter = [];
        this.isAllChecked = true;
        this.unread = false;
        this.firstSix = [];
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_2__.SubSink();
        this.defaultCount = 6;
        this.languageselector = [];
        this.askauraaInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl();
        this.userRoles = (_b = (_a = this._function) === null || _a === void 0 ? void 0 : _a.getUser) === null || _b === void 0 ? void 0 : _b.user_type;
        this.previousStrLength = 0;
        this.showSearchButton = false;
    }
    ngOnInit() {
        this.notification();
        this.notificationsCount();
    }
    toggle() {
        this.toggleSidebar.emit();
    }
    logout() {
        this._router.navigate(['/logout']);
    }
    notification() {
        this.subs.add(this._commonApi.notification().subscribe(res => {
            if (src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                delete res.Status;
                this.notification = res;
            }
        }));
    }
    notificationsCount() {
        this.subs.add(this._commonApi.notificationCount().subscribe(res => {
            if (src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                delete res.Status;
                this.notificationCount = res === null || res === void 0 ? void 0 : res.count;
            }
        }));
    }
    onNotificationIdClick(item) {
        this.closeNotification();
        this._router.navigate([`/notification/${item === null || item === void 0 ? void 0 : item.notification_id}`]);
    }
    openNotification() {
        this.showNotificationList = true;
    }
    closeNotification() {
        this.showNotificationList = false;
    }
    viewAllNotification() {
        this.closeSideBar.emit();
        this.closeNotification();
        this._router.navigate(['/notification']);
    }
    settings(type) {
        if (type === 'setting') {
            if (this.userRoles === src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.userRole.admin) {
                this._router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__.loginUrls.dashboard]);
            }
            else {
                this._router.navigate([_core_constants_login_constants__WEBPACK_IMPORTED_MODULE_0__.loginUrls.employee]);
            }
        }
        if (type === 'home') {
            this._router.navigate(['/control-panel/user']);
        }
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_service_common_common_api_service__WEBPACK_IMPORTED_MODULE_3__.CommonApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_service_login_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_5__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_helper_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_7__.ToastService)); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], inputs: { sideBarType: "sideBarType" }, outputs: { toggleSidebar: "toggleSidebar", closeSideBar: "closeSideBar", selectedFilters: "selectedFilters" }, decls: 38, vars: 21, consts: [[1, "navbar-nav", "float-left", "mr-auto"], [1, "nav-item", "d-none", "d-md-block", 3, "click"], [1, "ri-align-left", "icon-colour"], [1, "navbar-nav", "float-right", "gap"], [1, "nav-item", "do-position-re"], ["class", "do-no-count", 4, "ngIf"], [1, "btn-cricle", 3, "ngClass", "click"], [1, "bell-icon"], [0, "xlink", "href", "assets/images/svg/navigation.svg#icon-notification"], ["class", "nav-item ", 4, "ngIf"], ["ngbDropdown", "", 1, "nav-item"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn-cricle"], ["src", "assets/images/svg/user-set.svg", "alt", "settings"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", ""], [1, "ri-key-fill", "px-2"], [1, "dropdown-divider"], ["ngbDropdownItem", "", 3, "click"], [1, "ri-login-circle-fill", "px-2"], [1, "customizer-notification", 3, "ngClass"], [1, "d-flex", "justify-content-between", "card-header", "pt-3", "pb-2"], [1, "notification-text", "text-dark"], ["class", "read-all text-blue ", 4, "ngIf"], [1, "btn-cricle", "notificationClose", 3, "click"], [1, "ri-close-fill"], [4, "ngIf"], ["class", "text-algin-center ", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "do-no-count"], [1, "nav-item"], [1, "btn-cricle", 3, "click"], [1, "setting", 3, "ngClass"], [1, "read-all", "text-blue"], [1, "pointer", 3, "click"], [3, "perfectScrollbar"], [1, "card-body", "commentScroll", "py-0", "px-3"], [4, "ngFor", "ngForOf"], [1, "notif-card", 3, "ngClass"], [1, "p-1", 3, "click"], [1, "d-flex"], [1, "mr-ar-0"], ["alt", "", 1, "nav-notification-prof", 3, "src"], [1, "ml-3", "notifi-line-height", "pointer"], [1, "mb-0", "notification-name"], [1, "mb-0", "notification-message"], [1, "mb-0", "notification-time", "mr-ar-10"], [1, "text-algin-center"], [1, ""], [1, "view-all-notifications", "pointer", 3, "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavigationComponent_Template_li_click_1_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, NavigationComponent_span_5_Template, 3, 3, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_6_listener() { return ctx.openNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "use", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, NavigationComponent_li_10_Template, 3, 4, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_21_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "aside", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, NavigationComponent_span_31_Template, 4, 3, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_32_listener() { return ctx.closeNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, NavigationComponent_div_35_Template, 4, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, NavigationComponent_div_36_Template, 4, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, NavigationComponent_div_37_Template, 5, 3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.notificationCount !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](17, _c2, ctx.notificationCount !== 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.userRoles === "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 11, "Reset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](24, 13, "Logout"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](19, _c3, ctx.showNotificationList));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](30, 15, "Notifications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.notification == null ? null : ctx.notification.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.notification == null ? null : ctx.notification.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.notification == null ? null : ctx.notification.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.notification == null ? null : ctx.notification.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownItem, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _core_pipe_short_number_pipe__WEBPACK_IMPORTED_MODULE_8__.ShortNumberPipe, _core_pipe_title_case_expect_pipe__WEBPACK_IMPORTED_MODULE_9__.TitleCaseExpectPipe, _core_pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_10__.ShortTextPipe, _core_pipe_dateago_pipe__WEBPACK_IMPORTED_MODULE_11__.DateagoPipe], styles: [".language-box[_ngcontent-%COMP%] {\n  position: relative;\n  direction: ltr;\n}\n.language-box[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.language-box[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .with-arrow[_ngcontent-%COMP%] {\n  right: 12px;\n}\n.language-box[_ngcontent-%COMP%]   span.selected-language[_ngcontent-%COMP%] {\n  position: relative;\n  top: -15px;\n  right: 5px;\n  background: #115caa;\n  color: #ffffff;\n  font-size: 10px;\n  font-weight: 400;\n  text-transform: uppercase;\n  padding: 1px;\n  border-radius: 3px;\n}\n.language-box[_ngcontent-%COMP%]   .select-language[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 2px;\n}\n.language-box[_ngcontent-%COMP%]   .select-language[_ngcontent-%COMP%]   .language-list[_ngcontent-%COMP%] {\n  padding: 4px 5px;\n  cursor: pointer;\n}\n.language-box[_ngcontent-%COMP%]   .select-language[_ngcontent-%COMP%]   .language-list[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n.askauraasideBar[_ngcontent-%COMP%] {\n  width: 430px;\n  right: 0;\n  margin-top: 3rem;\n  height: 100% !important;\n}\n.askauraaSidebarWidth[_ngcontent-%COMP%] {\n  width: 500px !important;\n}\n.customizer[_ngcontent-%COMP%] {\n  background: #fff;\n  position: fixed;\n  height: 100%;\n  width: 280px;\n  top: 49px;\n  left: auto;\n  right: 0;\n  z-index: -1;\n  transition: 0.3s ease-in;\n}\n.suggested-font[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.askAuraaSidebarContent[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem !important;\n}\n.askauraatitle[_ngcontent-%COMP%] {\n  color: #115caa !important;\n  font-weight: 500;\n}\n.suggestedquestions[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #115caa !important;\n}\n.iconSize[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.icon-colour[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #0e2046;\n}\n.btn-cricle[_ngcontent-%COMP%] {\n  display: block;\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  background-color: white;\n  border: none;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.18);\n}\n.btn-cricle.notificationClose[_ngcontent-%COMP%] {\n  font-size: 22px;\n  padding-left: 5px;\n  box-shadow: unset;\n  margin-top: -5px;\n  margin-right: -12px;\n}\n.btn-cricle.no-count[_ngcontent-%COMP%] {\n  background: radial-gradient(15px 15px at 100% 3px, rgba(0, 0, 0, 0) 1109px, white);\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 0;\n  overflow: hidden;\n  left: unset;\n  right: 0;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.18);\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.bell-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.dropdown-divider[_ngcontent-%COMP%] {\n  height: 0;\n  margin: 0.5rem0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n.customizer-notification[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);\n  z-index: 20;\n  background: #fff;\n  position: fixed;\n  height: 100%;\n  width: 0;\n  top: 2PX;\n  left: auto;\n  right: 0;\n  transition: 0.5s ease-in-out;\n}\n.list-style-none[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.w-340[_ngcontent-%COMP%] {\n  width: 340px !important;\n}\n.nav-notification-prof[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.notif-card.notification-dropdown-unread[_ngcontent-%COMP%] {\n  padding-left: 0rem;\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid #dadada;\n}\n.notifi-line-height[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 0.875rem;\n  font-weight: 100;\n}\n.notifi-line-height[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n  color: #5c5957 !important;\n  font-weight: 500;\n  font-size: 13px;\n}\n.notifi-line-height[_ngcontent-%COMP%]   .notification-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n}\n.view-all-notifications[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 28%;\n}\n.notification-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  line-height: 20px;\n  color: black;\n  font-weight: 500;\n  font-size: 1.3rem !important;\n}\n.read-all[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  line-height: 1.2px;\n  color: #003b6d !important;\n}\n.commentScroll[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  overflow-y: scroll;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  flex-direction: unset;\n}\n.gap[_ngcontent-%COMP%] {\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n.setting[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.do-no-count[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px;\n  position: absolute;\n  right: -6px;\n  top: -4px;\n  border-radius: 50%;\n  align-items: center;\n  background-color: #115caa;\n  font-size: 12px;\n  color: #ffffff;\n  min-width: 18px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtBQUdaO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUdaO0FBRlk7RUFDSSxpQkFBQTtBQUloQjtBQUVBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVBLHdCQUFBO0FBQUo7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0FBQUo7QUFHQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUFBSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNFLGtGQUFBO0FBQ047QUFHQTtFQUNJLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSw2Q0FBQTtBQUFKO0FBR0E7RUFDSSx3QkFBQTtBQUFKO0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUdBO0VBQ0UsbUJBQUE7RUFDRSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0FBQUo7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQUFKO0FBR0E7RUFDSSx1QkFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBSUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURSO0FBR0k7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURSO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUZKO0FBTUk7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUhSO0FBUUk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBTFI7QUFRQTtFQUNFLDBCQUFBO0VBQ0Usa0JBQUE7QUFMSjtBQU9BO0VBQ0UscUJBQUE7QUFKRjtBQU1BO0VBQ0UsY0FBQTtFQUFBLFNBQUE7QUFIRjtBQUtBO0VBQ0UsZUFBQTtBQUZGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmd1YWdlLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIC53aXRoLWFycm93IHtcclxuICAgICAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3Bhbi5zZWxlY3RlZC1sYW5ndWFnZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTE1Y2FhO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuICAgIC5zZWxlY3QtbGFuZ3VhZ2Uge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIC5sYW5ndWFnZS1saXN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYXNrYXVyYWFzaWRlQmFyIHtcclxuICAgIHdpZHRoOiA0MzBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXNrYXVyYWFTaWRlYmFyV2lkdGgge1xyXG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b21pemVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICB0b3A6IDQ5cHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIC8vIGJveC1zaGFkb3c6IDFweCAwIDIwcHggcmdiKDAgMCAwKTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluO1xyXG59XHJcblxyXG4uc3VnZ2VzdGVkLWZvbnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uYXNrQXVyYWFTaWRlYmFyQ29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFza2F1cmFhdGl0bGUge1xyXG4gICAgY29sb3I6ICMxMTVjYWEgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zdWdnZXN0ZWRxdWVzdGlvbnMge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMTE1Y2FhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uU2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi5pY29uLWNvbG91ciB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzBlMjA0NjtcclxufVxyXG5cclxuLmJ0bi1jcmljbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxOCUpO1xyXG4gICAgJi5ub3RpZmljYXRpb25DbG9zZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcclxuICAgIH1cclxuICAgICYubm8tY291bnQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTVweCAxNXB4IGF0IDEwMCUgM3B4LCByZ2JhKDAsIDAsIDAsIDApIDExMDlweCwgcmdiKDI1NSAyNTUgMjU1KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDE4JSk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJlbGwtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWRpdmlkZXIge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAwLjVyZW0wO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4uY3VzdG9taXplci1ub3RpZmljYXRpb24ge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDQwJSk7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHRvcDogMlBYO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubGlzdC1zdHlsZS1ub25lIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udy0zNDAge1xyXG4gICAgd2lkdGg6IDM0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtbm90aWZpY2F0aW9uLXByb2Yge1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG59XHJcblxyXG4ubm90aWYtY2FyZC5ub3RpZmljYXRpb24tZHJvcGRvd24tdW5yZWFkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRhZGE7XHJcbn1cclxuXHJcbi5ub3RpZmktbGluZS1oZWlnaHQge1xyXG4gICAgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gICAgLm5vdGlmaWNhdGlvbi10aW1lIHtcclxuICAgICAgICBjb2xvcjogIzVjNTk1NyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLm5vdGlmaWNhdGlvbi1uYW1lIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxufVxyXG5cclxuLnZpZXctYWxsLW5vdGlmaWNhdGlvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNHB4O1xyXG4gICAgbGVmdDogMjglO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLXRleHQge1xyXG4gICAgaDQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVhZC1hbGwge1xyXG4gICAgc21hbGwge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJweDtcclxuICAgICAgICBjb2xvcjogIzAwM2I2ZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5jb21tZW50U2Nyb2xsIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHVuc2V0O1xyXG59XHJcbi5nYXAge1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG4uc2V0dGluZyB7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi5kby1uby1jb3VudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtNnB4O1xyXG4gIHRvcDogLTRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE1Y2FhO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtaW4td2lkdGg6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 79152:
/*!***********************************************************!*\
  !*** ./src/app/shared/httploader/httploader.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttploaderComponent": () => (/* binding */ HttploaderComponent)
/* harmony export */ });
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_service_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/loader/loader.service */ 8891);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);




function HttploaderComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 1);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", "query");
} }
class HttploaderComponent {
    constructor(_loader) {
        this._loader = _loader;
        this.showLoader = true;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        this.subs.add(this._loader.isLoading.subscribe(res => {
            this.showLoader = res;
        }));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
HttploaderComponent.ɵfac = function HttploaderComponent_Factory(t) { return new (t || HttploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_loader_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService)); };
HttploaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HttploaderComponent, selectors: [["app-httploader"]], decls: 1, vars: 1, consts: [["class", "top-loader", 3, "mode", 4, "ngIf"], [1, "top-loader", 3, "mode"]], template: function HttploaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HttploaderComponent_mat_progress_bar_0_Template, 1, 1, "mat-progress-bar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJodHRwbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 64456:
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);

const ROUTES = [
    // {
    //   path: '/dashboard',
    //   localPath: '/dashboard',
    //   title: 'Dashboard',
    //   img: 'assets/images/svg/sidebar.svg#dashboard',
    //   class: '',
    //   extralink: false,
    //   masterViewOnly: false,
    //   role: userRole.contributor,
    //   submenu: [
    //   ]
    // },
    {
        path: '/employee-details',
        localPath: '/employee-details',
        title: 'Employee Details',
        img: 'assets/images/svg/sidebar.svg#users',
        class: '',
        extralink: false,
        masterViewOnly: false,
        role: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.admin,
        submenu: []
    },
    {
        path: '/project-settings',
        localPath: '/project-settings',
        title: 'WBS Master',
        img: 'assets/images/svg/sidebar.svg#boxes',
        class: '',
        extralink: false,
        masterViewOnly: false,
        role: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.admin,
        submenu: []
    },
    {
        path: '/task-entry',
        localPath: '/task-entry',
        title: 'Time Entry',
        img: 'assets/images/svg/sidebar.svg#calender',
        class: '',
        extralink: false,
        masterViewOnly: false,
        role: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.all,
        submenu: []
    },
    {
        path: '/time-management',
        localPath: '/time-management',
        title: 'Time Approval',
        img: 'assets/images/svg/sidebar.svg#business',
        class: '',
        extralink: false,
        masterViewOnly: false,
        role: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.manager,
        submenu: []
    },
];


/***/ }),

/***/ 53352:
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/settings-menu-items.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SETTINGSROUTES": () => (/* binding */ SETTINGSROUTES)
/* harmony export */ });
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);

const SETTINGSROUTES = [
    {
        path: '',
        localPath: '',
        title: 'User Management',
        img: 'assets/images/svg/sidebar.svg#users',
        class: 'has-arrow',
        extralink: false,
        masterViewOnly: false,
        role: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.all,
        submenu: [
            {
                path: '/control-panel/user',
                localPath: '/control-panel/user',
                title: 'Users',
                icon: '',
                class: '',
                extralink: false,
                masterViewOnly: false,
                role: src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.userRole.all,
                submenu: [],
                subTitle: false
            },
        ]
    }
];


/***/ }),

/***/ 17500:
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/constants/constants */ 78073);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-items */ 64456);
/* harmony import */ var _settings_menu_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-menu-items */ 53352);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);















function SidebarComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.mobileViewClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_ng_container_13_li_1_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 24);
} if (rf & 2) {
    const sidebarnavItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, sidebarnavItem_r4.icon));
} }
function SidebarComponent_ng_container_13_li_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("side-menu-img ", ctx_r10.checkMainMenu(sidebarnavItem_r4.title, sidebarnavItem_r4), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("href", sidebarnavItem_r4.img, null, "xlink");
} }
function SidebarComponent_ng_container_13_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_li_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const sidebarnavItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r13.addExpandClass(sidebarnavItem_r4.title, sidebarnavItem_r4); return ctx_r13.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_li_1_a_1_i_1_Template, 1, 3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SidebarComponent_ng_container_13_li_1_a_1_span_2_Template, 3, 4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r4.class))("routerLinkActive", sidebarnavItem_r4.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", sidebarnavItem_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", sidebarnavItem_r4.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 5, sidebarnavItem_r4.title));
} }
function SidebarComponent_ng_container_13_li_1_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 24);
} if (rf & 2) {
    const sidebarnavItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, sidebarnavItem_r4.icon));
} }
function SidebarComponent_ng_container_13_li_1_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("side-menu-img ", ctx_r18.checkMainMenu(sidebarnavItem_r4.title, sidebarnavItem_r4), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("href", sidebarnavItem_r4.img, null, "xlink");
} }
function SidebarComponent_ng_container_13_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_li_1_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const sidebarnavItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.addExpandClass(sidebarnavItem_r4.title, sidebarnavItem_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_li_1_a_2_i_1_Template, 1, 3, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SidebarComponent_ng_container_13_li_1_a_2_span_2_Template, 3, 4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx_r7.getPath(sidebarnavItem_r4.path), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c0, sidebarnavItem_r4.class))("routerLinkActive", sidebarnavItem_r4.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", sidebarnavItem_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", sidebarnavItem_r4.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 6, sidebarnavItem_r4.title));
} }
function SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_a_2_hr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "hr", 33);
} }
function SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32); const sidebarnavSubItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r30.addActiveClass(sidebarnavSubItem_r26.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_a_2_hr_5_Template, 1, 0, "hr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](sidebarnavSubItem_r26.subTitle ? "disable-a-tag" : "sidebar-sub-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r26.submenu.length > 0 || sidebarnavSubItem_r26.subTitle ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c0, sidebarnavSubItem_r26.class))("routerLink", sidebarnavSubItem_r26.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](sidebarnavSubItem_r26.subTitle ? "" : "bullet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](sidebarnavSubItem_r26.subTitle ? "submenu-title" : "hide-menu ml-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 11, sidebarnavSubItem_r26.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r26.subTitle);
} }
function SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_a_3_hr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "hr", 33);
} }
function SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const sidebarnavSubItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r35.addActiveClass(sidebarnavSubItem_r26.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_a_3_hr_5_Template, 1, 0, "hr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](sidebarnavSubItem_r26.subTitle ? "disable-a-tag" : "sidebar-sub-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r26.submenu.length > 0 || sidebarnavSubItem_r26.subTitle ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c0, sidebarnavSubItem_r26.class))("href", ctx_r28.getPath(sidebarnavSubItem_r26.path), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](sidebarnavSubItem_r26.subTitle ? "" : "bullet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](sidebarnavSubItem_r26.subTitle ? "submenu-title" : "hide-menu ml-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 11, sidebarnavSubItem_r26.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r26.subTitle);
} }
function SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_Template_li_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const sidebarnavSubItem_r26 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r39.addActiveClass(sidebarnavSubItem_r26.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_a_2_Template, 6, 15, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_a_3_Template, 6, 15, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sidebarnavSubItem_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](sidebarnavSubItem_r26.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r25.showSubMenu === sidebarnavSubItem_r26.title || ctx_r25.customSubMenu === sidebarnavSubItem_r26.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !sidebarnavSubItem_r26.extralink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r26.extralink);
} }
const _c1 = function (a0) { return { in: a0 }; };
function SidebarComponent_ng_container_13_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_li_1_ul_3_ng_container_1_Template, 4, 6, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ctx_r8.showMenu === sidebarnavItem_r4.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", sidebarnavItem_r4.submenu);
} }
function SidebarComponent_ng_container_13_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_li_1_a_1_Template, 6, 9, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SidebarComponent_ng_container_13_li_1_a_2_Template, 6, 10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SidebarComponent_ng_container_13_li_1_ul_3_Template, 2, 4, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("sidebar-item ", ctx_r5.checkMainMenu(sidebarnavItem_r4.title), " pointer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r5.showMenu === sidebarnavItem_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", sidebarnavItem_r4.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r4.path) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !sidebarnavItem_r4.extralink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", sidebarnavItem_r4.extralink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", sidebarnavItem_r4.submenu.length > 0);
} }
function SidebarComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SidebarComponent_ng_container_13_li_1_Template, 4, 11, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", sidebarnavItem_r4.role === ctx_r1.userRole ? true : ctx_r1.userRole === "Admin" ? true : sidebarnavItem_r4.role === "All" ? true : false);
} }
class SidebarComponent {
    constructor(document, router, activatedRoute, _helper) {
        var _a, _b;
        this.document = document;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._helper = _helper;
        this.mobileView = false;
        this.mobileClose = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.sideBarComments = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.showMenu = '';
        this.showSubMenu = '';
        this.userRole = (_a = this._helper.getUser) === null || _a === void 0 ? void 0 : _a.user_type;
        this.userName = (_b = this._helper.getUser) === null || _b === void 0 ? void 0 : _b.user_name;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_1__.SubSink();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this.activatedRoute).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(routeMain => {
            while (routeMain.firstChild) {
                routeMain = routeMain.firstChild;
            }
            return routeMain;
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(routePrimary => routePrimary.outlet === _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.sidebar.primary))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(routeBehaviour => routeBehaviour.data))
            .subscribe(event => {
            this.mainMenuSelected = event.mainMenu;
            this.showMenu = event[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.sidebar.mainMenu];
            this.showSubMenu = event[_core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.sidebar.title];
        });
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.activatedRoute))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(route => route.outlet === 'primary'))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(route => route.data))
            .subscribe(event => {
            this.mainMenuSelected = event.mainMenu;
            this.showMenu = event['mainMenu'];
            this.showSubMenu = event['title'];
            this.sideBarSettings();
        });
    }
    // End open close
    ngOnInit() {
        this.isClient = this._helper.getUser.is_client;
        this.sideBarSettings();
        this.setSubTab();
    }
    // this is for the open close
    addExpandClass(element, ev) {
        if (ev.submenu && ev.submenu.length) {
            if (element === this.showMenu) {
                this.showMenu = '0';
            }
            else {
                this.showMenu = element;
            }
        }
        else {
            if (element === this.showMenu) {
                // this.showMenu = '0';
            }
            else {
                this.showMenu = element;
            }
        }
    }
    addActiveClass(element) {
        if (element === this.showSubMenu) {
            // this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    }
    checkMainMenu(item, sidebar) {
        if (this.showMenu === item || this.mainMenuSelected === item) {
            return 'selected';
        }
    }
    sideBarSettings() {
        this.redirectUri = this.router.url;
        if (this.redirectUri.includes('/control-panel')) {
            this.sideBarComments.emit('setting');
            this.sidebarnavItems = _settings_menu_items__WEBPACK_IMPORTED_MODULE_4__.SETTINGSROUTES.filter(sidebarnavItem => sidebarnavItem);
        }
        else {
            this.sideBarComments.emit('home');
            this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_3__.ROUTES.filter(sidebarnavItem => sidebarnavItem);
        }
    }
    setSubTab() {
        this.subs.add(this._helper.sidebarSubMenuItem.subscribe(menuItem => {
            this.customSubMenu = menuItem;
        }));
    }
    getPath(path) {
        if (path === '') {
            return 'javascript:void(0)';
        }
        else {
            const user = this._helper.getUser;
            const url = path.replace(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.domain, `${user.domain}`);
            return url;
        }
    }
    close() {
        if (this.mobileView) {
            this.mobileViewClose();
        }
    }
    mobileViewClose() {
        this.mobileClose.emit();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_5__.FunctionService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { mobileView: "mobileView" }, outputs: { mobileClose: "mobileClose", sideBarComments: "sideBarComments" }, decls: 14, vars: 3, consts: [[1, "do-sidebar-icon", "d-flex"], [1, "brand-link", "px-5"], [1, "brand-text"], ["src", "assets/images/svg/logo_text.svg"], [3, "click", 4, "ngIf"], [1, "user-panel", "mt-3", "pb-3", "mb-3"], [1, "image"], ["src", "assets/images/png/user.png", "alt", "User Image", 1, "img-circle", "elevation-2"], [1, "hide-menu", "info"], ["id", "lblDName"], [1, "sidebar-nav"], ["id", "sidebarnav", 1, "page-sidebar"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "ri-close-line"], [3, "class", "active", "routerLink", 4, "ngIf"], [3, "routerLink"], ["class", "sidebar-link waves-effect waves-dark", 3, "ngClass", "routerLinkActive", "click", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "href", "ngClass", "routerLinkActive", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse first-level no-sub-bar", 3, "ngClass", 4, "ngIf"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "ngClass", "routerLinkActive", "click"], [3, "ngClass", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "hide-menu"], [3, "ngClass"], ["fill", "none", 1, "sidebar-svg-icons"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "href", "ngClass", "routerLinkActive", "click"], ["aria-expanded", "false", 1, "collapse", "first-level", "no-sub-bar", 3, "ngClass"], [1, "sidebar-item", 3, "click"], [3, "class", "routerLinkActive", "ngClass", "routerLink", "click", 4, "ngIf"], [3, "class", "routerLinkActive", "ngClass", "href", "click", 4, "ngIf"], [3, "routerLinkActive", "ngClass", "routerLink", "click"], ["class", "m-0", 4, "ngIf"], [1, "m-0"], [3, "routerLinkActive", "ngClass", "href", "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SidebarComponent_span_4_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SidebarComponent_ng_container_13_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".submenu-title[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  color: #999999;\n}\n\n.brand-link[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  padding: 0.8125rem 0.5rem;\n  transition: width 0.3s ease-in-out;\n  white-space: nowrap;\n  width: 305px;\n}\n\n.brand-link[_ngcontent-%COMP%]   .brand-image[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: 0.8rem;\n  margin-right: 0.5rem;\n  max-height: 33px;\n}\n\n.brand-link[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;\n  display: block;\n}\n\n.router-link-active[_ngcontent-%COMP%] {\n  color: #566edf;\n}\n\n.user-panel[_ngcontent-%COMP%] {\n  display: flex;\n  border: 0 !important;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 0 !important;\n}\n\n.user-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  border-radius: 50%;\n  background-color: #ccc;\n  padding: 0;\n  box-shadow: 0px 4px 9px #00000033;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23) !important;\n}\n\n.user-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n  height: 100%;\n}\n\n.user-panel[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 5px 5px 10px;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.user-panel[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n}\n\n.no-sub-bar[_ngcontent-%COMP%] {\n  list-style: circle;\n}\n\n.sidebar-svg-icons[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n}\n\n.collapse.in[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sidebar-item.selected[_ngcontent-%COMP%]    > .sidebar-link[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n  background: none;\n  opacity: 1;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%] {\n  display: flex;\n  white-space: nowrap;\n  align-items: center;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]   .hide-menu[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBaEJKOztBQW1CQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWhCSjs7QUFpQkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBZlI7O0FBaUJJO0VBQ0ksNEVBQUE7RUFDQSxjQUFBO0FBZlI7O0FBcUJBO0VBQ0UsY0FBQTtBQW5CRjs7QUFxQkE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBbEJKOztBQW1CSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUZBQUE7QUFqQlI7O0FBa0JRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQWhCWjs7QUFtQkk7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWpCUjs7QUFrQlE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFoQlo7O0FBcUJBO0VBQ0Usa0JBQUE7QUFsQkY7O0FBb0JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFqQko7O0FBb0JFO0VBQ0UseUJBQUE7QUFqQko7O0FBdUJBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFwQko7O0FBdUJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFwQko7O0FBcUJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBbkJSIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbWlkIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbSB7XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbn1cclxufVxyXG5AbWl4aW4gbGcge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTY5cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gIH1cclxuXHJcblxyXG4uc3VibWVudS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4uYnJhbmQtbGluayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBwYWRkaW5nOiAwLjgxMjVyZW0gMC41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAzMDVweDtcclxuICAgIC5icmFuZC1pbWFnZSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzM3B4O1xyXG4gICAgfVxyXG4gICAgLmJyYW5kLXRleHQge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC4zcyBsaW5lYXIsIG9wYWNpdHkgLjNzIGVhc2UsIHZpc2liaWxpdHkgLjNzIGVhc2U7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaW1nIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gIGNvbG9yOiAjNTY2ZWRmO1xyXG59XHJcbi51c2VyLXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgLmltYWdlIHtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOXB4ICMwMDAwMDAzMztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAuMjMpIWltcG9ydGFudDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5vLXN1Yi1iYXIge1xyXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcclxufVxyXG4uc2lkZWJhci1zdmctaWNvbnMge1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbn1cclxuLmNvbGxhcHNlIHtcclxuICAmLmluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5lbGVtZW50LnN0eWxlIHt9XHJcblxyXG4uc2lkZWJhci1uYXYgdWwgLnNpZGViYXItaXRlbS5zZWxlY3RlZD4uc2lkZWJhci1saW5rIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNpZGViYXItbmF2IHVsIC5zaWRlYmFyLWl0ZW0gLnNpZGViYXItbGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuaGlkZS1tZW51IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 59605:
/*!*************************************************!*\
  !*** ./src/app/widget/badge/badge.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeComponent": () => (/* binding */ BadgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);


const _c0 = function (a0, a1) { return { "background-color": a0, "color": a1 }; };
function BadgeComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r0.color, ctx_r0.fontColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.value);
} }
class BadgeComponent {
    constructor() {
        this.fontColor = '#fff';
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        if (this.value) {
            this.color = (_a = this.value) === null || _a === void 0 ? void 0 : _a.color;
            this.fontColor = ((_b = this.value) === null || _b === void 0 ? void 0 : _b.fontColor) ? (_c = this.value) === null || _c === void 0 ? void 0 : _c.fontColor : this.fontColor;
            this.value = (_d = this.value) === null || _d === void 0 ? void 0 : _d.value;
        }
    }
    ngOnChanges() {
    }
}
BadgeComponent.ɵfac = function BadgeComponent_Factory(t) { return new (t || BadgeComponent)(); };
BadgeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeComponent, selectors: [["app-badge"]], inputs: { value: "value", rowData: "rowData", cell: "cell", color: "color", fontColor: "fontColor" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "badges", 3, "ngStyle"]], template: function BadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BadgeComponent_span_0_Template, 3, 5, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".badges[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 4px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6ImJhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlcyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 67662:
/*!***************************************************************!*\
  !*** ./src/app/widget/date-pickert/date-pickert.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePickerComponent": () => (/* binding */ DatePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/helper/validationrule.service */ 15157);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






class DatePickerComponent {
    constructor(_formBuilder, _rule) {
        this._formBuilder = _formBuilder;
        this._rule = _rule;
        this.dataFilterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.setForm();
    }
    setForm() {
        this.datePicker = this._formBuilder.group({
            startDate: [new Date(), this._rule.requiredValidation],
            endDate: [new Date(), this._rule.requiredValidation],
        });
    }
    click() {
        if (!this.datePicker.controls.endDate.value) {
            this.datePicker.controls.endDate.patchValue(this.datePicker.controls.startDate.value);
        }
        this.dataFilterClick.emit(this.datePicker.value);
    }
}
DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) { return new (t || DatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_0__.ValidationruleService)); };
DatePickerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatePickerComponent, selectors: [["app-date-picker"]], outputs: { dataFilterClick: "dataFilterClick" }, decls: 14, vars: 9, consts: [[3, "formGroup"], [1, "max-w-180", "mx-2", "px-2", "bg-white", "do-radius", "pointer", 3, "click"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "startDate", "placeholder", "Start date", "readonly", "", 1, "pointer"], ["matEndDate", "", "formControlName", "endDate", "placeholder", "End date", "readonly", "", 1, "pointer"], [3, "startView"], ["picker", ""], ["mat-button", "", "matDateRangePickerCancel", "", 1, "btn", "btn", "btn-outline-danger", "mx-2"], ["mat-raised-button", "", "matDateRangePickerApply", "", 1, "btn", "btn-primary", 3, "click"]], template: function DatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerComponent_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-date-range-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-date-range-picker", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-date-range-picker-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerComponent_Template_button_click_11_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.datePicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("startView", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 7, "Apply"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDateRangePicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerActions, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerCancel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerApply], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".max-w-180[_ngcontent-%COMP%] {\n  max-width: 210px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtcGlja2VydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZGF0ZS1waWNrZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heC13LTE4MCB7XHJcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 26731:
/*!*****************************************************************!*\
  !*** ./src/app/widget/iframe-loader/iframe-loader.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IframeLoaderComponent": () => (/* binding */ IframeLoaderComponent)
/* harmony export */ });
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_service_common_common_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/common/common-api.service */ 59113);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);




function IframeLoaderComponent_iframe_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "safe");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 2, ctx_r0.budgetTableau, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"])("ngStyle", ctx_r0.customStyle);
} }
class IframeLoaderComponent {
    constructor(_commonApi) {
        this._commonApi = _commonApi;
        this.height = '1618px';
        this.width = '100%';
        this.customStyle = {
            'width': '100%',
            'height': '1618px',
            'border': 'none'
        };
        this.budgetAvailable = false;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    ngOnChanges() {
        this.customStyle.width = this.width;
        this.customStyle.height = this.height;
        if (this.iframeUrl) {
            this.getTicket();
        }
    }
    ngOnInit() {
    }
    getTicket() {
        this.subs.add(this._commonApi.getTableauTicket().subscribe(res => {
            this.budgetTableau = `https://ask.beinex.com/trusted/${res['iframe_ticket']}/${this.iframeUrl}?:embed=yes&:toolbar=no`;
            this.budgetAvailable = true;
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
IframeLoaderComponent.ɵfac = function IframeLoaderComponent_Factory(t) { return new (t || IframeLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_common_common_api_service__WEBPACK_IMPORTED_MODULE_1__.CommonApiService)); };
IframeLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IframeLoaderComponent, selectors: [["app-iframe-loader"]], inputs: { iframeUrl: "iframeUrl", height: "height", width: "width" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "src", "ngStyle", 4, "ngIf"], [3, "src", "ngStyle"]], template: function IframeLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, IframeLoaderComponent_iframe_0_Template, 2, 5, "iframe", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.budgetAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZnJhbWUtbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 25583:
/*!*******************************************************!*\
  !*** ./src/app/widget/lengends/lengends.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LengendsComponent": () => (/* binding */ LengendsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);


function LengendsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
} }
class LengendsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LengendsComponent.ɵfac = function LengendsComponent_Factory(t) { return new (t || LengendsComponent)(); };
LengendsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LengendsComponent, selectors: [["app-lengends"]], inputs: { legends: "legends" }, decls: 2, vars: 1, consts: [[1, "legends", "scroll-legend"], ["class", "item mr-2", 4, "ngFor", "ngForOf"], [1, "item", "mr-2"], [1, "apex-legend-marker"], [1, "apex-legend-text"]], template: function LengendsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LengendsComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.legends);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".item[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlbmdlbmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6ImxlbmdlbmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 71335:
/*!*************************************************************!*\
  !*** ./src/app/widget/modal-basic/modal-basic.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalBasicComponent": () => (/* binding */ ModalBasicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);



const _c0 = ["modal"];
function ModalBasicComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalBasicComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx_r4.config);
} }
function ModalBasicComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalBasicComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalBasicComponent_ng_template_0_div_0_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalBasicComponent_ng_template_0_div_1_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalBasicComponent_ng_template_0_div_2_Template, 2, 0, "div", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.hideHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.hideBody);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.hideFooter);
} }
const _c1 = [[["", 8, "app-modal-header"]], [["", 8, "app-modal-body"]], [["", 8, "app-modal-footer"]]];
const _c2 = [".app-modal-header", ".app-modal-body", ".app-modal-footer"];
class ModalBasicComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.center = false;
        this.isSmallModal = false;
        this.hideHeader = false;
        this.hideFooter = false;
        this.hideBody = false;
        this.disableOutSideClick = false;
        this.config = {};
        this.visible = false;
        this.visibleAnimate = false;
    }
    ngOnInit() {
    }
    show() {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
        if (!this.isSmallModal) {
            this.modalService.dismissAll();
            this.modalService.open(this.modal, { size: 'lg', centered: this.center, scrollable: true });
        }
        else {
            this.modalService.dismissAll();
            this.modalService.open(this.modal, { size: '', centered: this.center, scrollable: true });
        }
    }
    hide() {
        this.visibleAnimate = false;
        this.visible = false;
        this.modalService.dismissAll();
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('modal')) {
            if (!this.disableOutSideClick) {
                this.hide();
            }
        }
    }
    ngOnDestroy() {
        this.hide();
    }
}
ModalBasicComponent.ɵfac = function ModalBasicComponent_Factory(t) { return new (t || ModalBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
ModalBasicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalBasicComponent, selectors: [["app-modal-basic"]], viewQuery: function ModalBasicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, inputs: { center: "center", isSmallModal: "isSmallModal", dialogClass: "dialogClass", hideHeader: "hideHeader", hideFooter: "hideFooter", hideBody: "hideBody", disableOutSideClick: "disableOutSideClick" }, ngContentSelectors: _c2, decls: 2, vars: 0, consts: [["modal", ""], ["class", "modal-header", 4, "ngIf"], ["class", "modal-body", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-body"], [3, "perfectScrollbar"], [1, "px-2", 2, "overflow-y", "auto", "height", "100%", "overflow-x", "hidden"], [1, "modal-footer"]], template: function ModalBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalBasicComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1iYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 35042:
/*!*****************************************************!*\
  !*** ./src/app/widget/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SquareBarComponent": () => (/* binding */ SquareBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




const _c0 = function (a0) { return { "nav-item-active": a0 }; };
function SquareBarComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SquareBarComponent_span_1_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onDataFilterClick(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, i_r2 === ctx_r0.selectedDataFilter));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, item_r1.label)));
} }
class SquareBarComponent {
    constructor() {
        this.dataFilter = [];
        this.selectedDataFilter = 0;
        this.dataFilterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onDataFilterClick(index) {
        const data = {
            data: this.dataFilter[index],
            index: index
        };
        this.dataFilterClick.emit(data);
    }
}
SquareBarComponent.ɵfac = function SquareBarComponent_Factory(t) { return new (t || SquareBarComponent)(); };
SquareBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SquareBarComponent, selectors: [["app-nav-bar"]], inputs: { dataFilter: "dataFilter", selectedDataFilter: "selectedDataFilter" }, outputs: { dataFilterClick: "dataFilterClick" }, decls: 2, vars: 1, consts: [[1, "nav", "nav-pills", "nav-justified", "bg-white", "rounded-pill", "anchor-nav", "d-flex", "align-items-center", "justify-content-se"], ["class", "nav-item pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "nav-item", "pointer", 3, "ngClass", "click"]], template: function SquareBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SquareBarComponent_span_1_Template, 4, 8, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataFilter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".chart-title[_ngcontent-%COMP%] {\n  white-space: normal !important;\n}\n\nnav[_ngcontent-%COMP%] {\n  height: 24px;\n  border-top-left-radius: 6px !important;\n  border-bottom-left-radius: 6px !important;\n  border-top-right-radius: 6px !important;\n  border-bottom-right-radius: 6px !important;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 31px;\n  text-align: center;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  color: #555555;\n  height: 24px;\n  margin-bottom: 0px;\n}\n\n.nav-item-active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1863a3;\n  height: 24px;\n}\n\nnav.anchor-nav[_ngcontent-%COMP%]:first-child, nav.anchor-nav[_ngcontent-%COMP%]:last-child {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksWUFOSztFQU9MLHNDQUFBO0VBQ0EseUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFFQSxZQUFBO0FBRko7O0FBS0E7O0VBRUksZ0JBQUE7QUFGSiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvcmRlcjogNnB4O1xyXG4kaGVpZ2h0OiAyNHB4O1xyXG4uY2hhcnQtdGl0bGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5uYXYge1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvcmRlciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMzFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogcmdiYSg4NSwgODUsIDg1LCAxKTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm5hdi1pdGVtLWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQsIDk5LCAxNjMsIDEpO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIHJnYmEoMjQsOTksMTYzLDEpO1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5uYXYuYW5jaG9yLW5hdjpmaXJzdC1jaGlsZCxcclxubmF2LmFuY2hvci1uYXY6bGFzdC1jaGlsZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 34024:
/*!***************************************************************!*\
  !*** ./src/app/widget/table/grid-item/grid-item.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridItemComponent": () => (/* binding */ GridItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


const _c0 = ["container"];
class GridItemComponent {
    constructor(componentFactoryResolver, _changeDetector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this._changeDetector = _changeDetector;
        this.columnSetting = {};
        this.customEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.valuePrepareFunction) {
            this.value = this.valuePrepareFunction(this.value, this.row);
        }
    }
    ngAfterViewInit() {
        if (this.columnSetting.type !== 'custom') {
            return;
        }
        if (this.columnSetting.renderComponent) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.columnSetting.renderComponent);
            const viewContainerRef = this.container;
            this.componentRef = this.container;
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.value = this.value;
            componentRef.instance.row = this.row;
            componentRef.instance.headValue = this.headValue;
            componentRef.instance.key = this.key;
            if (componentRef.instance.customEvent) {
                componentRef.instance.customEvent.subscribe(val => this.customEvent.emit(val));
            }
        }
    }
    ngAfterViewChecked() {
        this._changeDetector.detectChanges();
    }
    ngOnDestroy() {
    }
}
GridItemComponent.ɵfac = function GridItemComponent_Factory(t) { return new (t || GridItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
GridItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridItemComponent, selectors: [["app-grid-item"]], viewQuery: function GridItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, inputs: { valuePrepareFunction: "valuePrepareFunction", row: "row", value: "value", headValue: "headValue", key: "key", columnSetting: "columnSetting" }, outputs: { customEvent: "customEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["container", ""]], template: function GridItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 92880:
/*!*************************************************!*\
  !*** ./src/app/widget/table/table.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_service_common_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/common/communication.service */ 62309);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-item/grid-item.component */ 34024);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _core_pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/pipe/short-text.pipe */ 48984);









const _c0 = ["table"];
const _c1 = ["tbody"];
const _c2 = ["tr"];
const _c3 = ["trHead"];
function TableComponent_th_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, item_r7.value.title), " ");
} }
function TableComponent_th_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, item_r7.value.title), " ");
} }
function TableComponent_th_8_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](item_r7.value.icon);
} }
function TableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_th_8_ng_container_1_Template, 3, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_th_8_ng_container_2_Template, 3, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TableComponent_th_8_i_3_Template, 1, 2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](item_r7.value.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.value.capitalize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r7.value.capitalize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.value.icon);
} }
function TableComponent_tbody_9_ng_container_2_td_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_tbody_9_ng_container_2_td_3_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const head_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const grid_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r26.itemClicked(head_r21, grid_r16[head_r21.key], grid_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "shortText");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const head_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const grid_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", head_r21.value.valuePrepareFunction ? head_r21.value.valuePrepareFunction(grid_r16[head_r21.key]) : grid_r16[head_r21.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, head_r21.value.valuePrepareFunction ? head_r21.value.valuePrepareFunction(grid_r16[head_r21.key]) : grid_r16[head_r21.key], 50), " ");
} }
function TableComponent_tbody_9_ng_container_2_td_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_tbody_9_ng_container_2_td_3_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const head_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const grid_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r32.itemClicked(head_r21, grid_r16[head_r21.key], grid_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const head_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const grid_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", grid_r16[head_r21.key], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function TableComponent_tbody_9_ng_container_2_td_3_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const gridIndex_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r38.collapsedIndex === gridIndex_r17 ? "la la-minus" : "la la-plus");
} }
function TableComponent_tbody_9_ng_container_2_td_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_tbody_9_ng_container_2_td_3_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const head_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const gridIndex_r17 = ctx_r41.index; const grid_r16 = ctx_r41.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); ctx_r40.onCollapseClicked(gridIndex_r17, head_r21, grid_r16); return ctx_r40.itemClicked(head_r21, grid_r16[head_r21.key], grid_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_tbody_9_ng_container_2_td_3_div_3_ng_container_1_Template, 2, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grid_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !grid_r16.disableCollapse);
} }
function TableComponent_tbody_9_ng_container_2_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_tbody_9_ng_container_2_td_3_div_1_Template, 3, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_tbody_9_ng_container_2_td_3_div_2_Template, 1, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TableComponent_tbody_9_ng_container_2_td_3_div_3_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-grid-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("customEvent", function TableComponent_tbody_9_ng_container_2_td_3_Template_app_grid_item_customEvent_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r45.OnCustomEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const head_r21 = ctx.$implicit;
    const grid_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](head_r21.value.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", head_r21.value.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", head_r21.value.type === "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", head_r21.value.type === "collapse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("valuePrepareFunction", head_r21.value.valuePrepareFunction)("columnSetting", head_r21.value)("key", grid_r16[head_r21.key])("headValue", head_r21)("value", grid_r16[head_r21.key])("row", grid_r16);
} }
function TableComponent_tbody_9_ng_container_2_tr_4_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-grid-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("customEvent", function TableComponent_tbody_9_ng_container_2_tr_4_Template_app_grid_item_customEvent_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r48.OnCustomEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grid_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r20.tableHeader.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("valuePrepareFunction", ctx_r20.tempSettings.collapsedData.valuePrepareFunction)("columnSetting", ctx_r20.tempSettings.collapsedData)("value", grid_r16[ctx_r20.tempSettings.key])("row", grid_r16);
} }
const _c4 = function (a0) { return { "collapsed-row": a0 }; };
function TableComponent_tbody_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TableComponent_tbody_9_ng_container_2_td_3_Template, 5, 11, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TableComponent_tbody_9_ng_container_2_tr_4_Template, 3, 5, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const grid_r16 = ctx.$implicit;
    const gridIndex_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c4, ctx_r15.collapsedIndex === gridIndex_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r15.tableHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.collapsedIndex === gridIndex_r17 && ctx_r15.tempSettings.collapsible && !grid_r16.disableCollapse);
} }
function TableComponent_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody", null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_tbody_9_ng_container_2_Template, 5, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.gridData);
} }
function TableComponent_tbody_10_app_loader_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader-bar", 29);
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showLoader", ctx_r51.showLoader);
} }
function TableComponent_tbody_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TableComponent_tbody_10_app_loader_bar_3_Template, 1, 1, "app-loader-bar", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r4.tableHeader.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r4.gridData == null ? null : ctx_r4.gridData.length) == 0);
} }
function TableComponent_tbody_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r5.tableHeader.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, "No Data Available"), " ");
} }
function TableComponent_tfoot_13_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 38);
} }
function TableComponent_tfoot_13_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 38);
} }
function TableComponent_tfoot_13_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ngb-pagination", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function TableComponent_tfoot_13_Template_ngb_pagination_pageChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r54.currentPage = $event; return ctx_r54.tablePageChange($event); })("pageChange", function TableComponent_tfoot_13_Template_ngb_pagination_pageChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r55); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r56.currentPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TableComponent_tfoot_13_ng_template_12_Template, 1, 0, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TableComponent_tfoot_13_ng_template_13_Template, 1, 0, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate7"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 12, "Showing"), " ", ctx_r6.footerText.start, " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 14, "to"), " ", ctx_r6.footerText.to, " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 16, "of"), " ", ctx_r6.footerText.total, " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 18, "entries"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", ctx_r6.tableLimit)("maxSize", 5)("rotate", true)("collectionSize", ctx_r6.pagerArray.length)("page", ctx_r6.currentPage);
} }
class TableComponent {
    constructor(change, _communication, _renderer, el) {
        this.change = change;
        this._communication = _communication;
        this._renderer = _renderer;
        this.el = el;
        this.gridData = [];
        this.settings = {
            column: {},
            class: ''
        };
        this.currentPage = 1;
        this.showPager = true;
        this.tableLimit = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.tableConfig.tableLimit; // ! No need for this
        this.totalCount = _core_constants_constants__WEBPACK_IMPORTED_MODULE_0__.tableConfig.pager;
        this.customEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.innerTableEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.collapsedIndex = null; // initialized null in order to avoid default active collapse.
        /**  Table footer */
        this.headLength = 0;
        this.footerText = {
            start: 1,
            to: this.tableLimit,
            total: this.totalCount
        };
        this.pagerArray = [];
        /**  Table footer End*/
        /** Table variable */
        this.tableHeader = [];
        this.tempSettings = {};
        /** Table variable end  */
        this.showLoader = false;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (!this.currentPage) {
            this.currentPage = 1;
        }
        this.setTableHeader();
        this.collapsedIndex = null;
    }
    ngAfterViewInit() {
        this.headLength = this.trHead.toArray()[0].nativeElement.childNodes.length - 1;
    }
    //   @HostListener('window:resize', ['$event'])
    //   onResize(event) {
    // const div = this._renderer.createElement('tr');
    // const text = this._renderer.createText('Inserted inside div');
    // this._renderer.appendChild(div, text);
    //     if(this.headLength !== -1){
    //     //  console.log( this.table)
    //         if(this.table?.nativeElement.offsetWidth !== this.table?.nativeElement.scrollWidth) {
    //        //   this.trHead.toArray()[0].nativeElement.childNodes[this.headLength ].className = 'do-d-none';
    //          // console.log(this.tr.toArray())
    //             this.trHead.toArray()[0].nativeElement.childNodes[this.headLength].className = 'do-d-none';
    //               this.tr.toArray().map((tr,index) => {
    //                 tr.nativeElement.childNodes[this.headLength].className = 'do-d-none';
    //                 console.log( tr, index)
    //                 this._renderer.insertBefore(this.tbody?.nativeElement,div,   tr.nativeElement);
    //                // this._renderer.appendChild(tr.nativeElement, div);
    //               });
    //               this.headLength -=1;
    //         }
    //        // console.log(this.tbody ,this.tbody.offsetWidth !== this.tbody.scrollWidth);
    //        // console.log(this.tr.toArray())
    //       //  console.log(this.tr.toArray());
    //       }
    //   }
    setTableHeader() {
        const column = this.settings.column;
        const key = Object.keys(column);
        const value = Object.values(column);
        this.tableHeader = [];
        for (let i = 0; i < key.length; i++) {
            this.change.detectChanges();
            this.tableHeader.push({ key: key[i], value: value[i] });
        }
        this.setPagerArray();
    }
    setPagerArray() {
        this.pagerArray = [];
        if (this.totalCount > 0) {
            for (let i = 0; i < this.totalCount; i++) {
                this.pagerArray.push(i);
            }
            this.setFooterText();
        }
    }
    setFooterText() {
        try {
            const to = (this.currentPage * this.tableLimit) > this.totalCount ? this.totalCount : (this.currentPage * this.tableLimit);
            const from = (this.currentPage * this.tableLimit - this.tableLimit) + 1;
            this.footerText = {
                start: from <= 1 ? 1 : from,
                to: to,
                total: this.totalCount
            };
        }
        catch (error) { }
    }
    OnCustomEvent(ev) {
        try {
            this.customEvent.emit(ev);
            if (ev.clickable) {
                this.itemClicked(ev.headValue, ev.item, ev.rowData);
            }
        }
        catch (error) { }
    }
    itemClicked(headValue, item, rowData) {
        if (headValue.key) {
            const data = {
                key: headValue.key,
                item,
                rowData
            };
            if (headValue.value.clickable) {
                this.itemClick.emit(data);
            }
        }
        else {
            const data = {
                key: headValue,
                item,
                rowData
            };
            this.itemClick.emit(data);
        }
    }
    tablePageChange(ev) {
        this.pageChange.emit(ev);
    }
    /**
    * @param index
    * @description when user click on collapse item, we need to identify its index to collapse the table
    */
    onCollapseClicked(index, headerSettings, grid) {
        if (grid.disableCollapse) {
            return;
        }
        this.tempSettings = this.settings.column[headerSettings.key];
        this.tempSettings.collapsible = true; // Default this is undefined
        this._communication.setTableCollapse(headerSettings); // Sending value to subject
        if (this.collapsedIndex === index) { // Checking if the value already set
            this.tempSettings.collapsible = !this.tempSettings.collapsible;
            this.collapsedIndex = null; // Removing the index
            return;
        }
        this.collapsedIndex = index;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_service_common_communication_service__WEBPACK_IMPORTED_MODULE_1__.CommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef)); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tbody = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tr = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.trHead = _t);
    } }, inputs: { gridData: "gridData", settings: "settings", currentPage: "currentPage", showPager: "showPager", tableLimit: "tableLimit", totalCount: "totalCount" }, outputs: { customEvent: "customEvent", itemClick: "itemClick", pageChange: "pageChange", innerTableEvent: "innerTableEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 7, consts: [[1, "row", "m-0", "table-parent-row"], [1, "col-md-12", "p-0"], [1, "table-responsive"], ["table", ""], [1, "table", "mb-0"], ["trHead", ""], ["class", "text-black", "scope", "col", 3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["scope", "col", 1, "text-black"], [3, "class", 4, "ngIf"], ["tbody", ""], [4, "ngFor", "ngForOf"], [3, "ngClass"], ["tr", ""], ["scope", "row", 3, "class", 4, "ngFor", "ngForOf"], ["class", "collapsed-row", 4, "ngIf"], ["scope", "row"], [3, "title", "click", 4, "ngIf"], [3, "innerHTML", "click", 4, "ngIf"], ["class", "text-right", 3, "click", 4, "ngIf"], [3, "valuePrepareFunction", "columnSetting", "key", "headValue", "value", "row", "customEvent"], [3, "title", "click"], [3, "innerHTML", "click"], [1, "text-right", 3, "click"], [2, "font-size", "22px"], [1, "collapsed-row"], [1, "pointer"], [3, "valuePrepareFunction", "columnSetting", "value", "row", "customEvent"], [3, "showLoader", 4, "ngIf"], [3, "showLoader"], [1, "font-size-16", "fw-400", "text-black", "text-center"], [1, "pt-2"], [1, "row"], [1, "col-12", "col-sm-6"], [1, "smaller", "pt-2"], ["size", "sm", 1, "d-flex", "footer-end", "pt-2", 3, "pageSize", "maxSize", "rotate", "collectionSize", "page", "pageChange"], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], [1, "arrow"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tr", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TableComponent_th_8_Template, 4, 5, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TableComponent_tbody_9_Template, 3, 1, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TableComponent_tbody_10_Template, 4, 2, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TableComponent_tbody_11_Template, 6, 4, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TableComponent_tfoot_13_Template, 14, 20, "tfoot", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.settings.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tableHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showLoader && (ctx.gridData == null ? null : ctx.gridData.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLoader && ctx.gridData.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showLoader && (ctx.gridData == null ? null : ctx.gridData.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.gridData == null ? null : ctx.gridData.length) != 0 && ctx.showPager);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_2__.GridItemComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationNext], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _core_pipe_short_text_pipe__WEBPACK_IMPORTED_MODULE_3__.ShortTextPipe], styles: ["a[aria-label=Previous] {\n  background-color: unset !important;\n}\n  a[aria-label=Previous] span:before {\n  content: \"\";\n  position: absolute;\n  width: 9px;\n  height: 9px;\n  display: block;\n  border-top: 2px solid #0e2046;\n  border-left: 2px solid #0e2046;\n  transform: rotate(-45deg);\n  right: 10px;\n  top: 10px;\n}\n  a[aria-label=Next] span:before {\n  content: \"\";\n  position: absolute;\n  width: 9px;\n  height: 9px;\n  display: block;\n  border-top: 2px solid #0e2046;\n  border-right: 2px solid #0e2046;\n  position: absolute;\n  transform: rotate(45deg);\n  right: 10px;\n  top: 10px;\n}\n  .page-link {\n  background-color: unset;\n  border: unset;\n  border-radius: 50%;\n  padding: 0.25rem 11px !important;\n  text-align: center;\n}\n  .pagination .page-item:first-child {\n  position: relative;\n  border: 0 !important;\n  background-color: #cad9f3;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 0;\n  margin: 0 5px;\n}\n  .pagination .page-item:first-child .page-link:hover {\n  background-color: #cad9f3 !important;\n}\n  .pagination .page-item:nth-last-child(1) {\n  position: relative;\n  border: 0 !important;\n  background-color: #cad9f3;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 0;\n  margin: 0 5px;\n}\n  .pagination .page-item:nth-last-child(1) .page-link:hover {\n  background-color: #cad9f3 !important;\n}\n  .pagination .page-item.active .page-link {\n  border-style: solid;\n  background-color: white;\n  color: #000;\n  border-width: 1px;\n  border-color: #8b8b8b;\n}\n  .pagination .page-item.disabled .page-link {\n  background-color: #cad9f3 !important;\n}\nth[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntbody[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-last-child(odd) {\n  white-space: nowrap;\n  background: white;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-last-child(even) {\n  white-space: nowrap;\n  background-color: #e5e3ea;\n}\n.do-d-none[_ngcontent-%COMP%] {\n  display: none;\n}\n.footer-end[_ngcontent-%COMP%] {\n  justify-content: end;\n}\n@media (max-width: 576px) {\n  .footer-end[_ngcontent-%COMP%] {\n    justify-content: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFJO0VBQ0ksa0NBQUE7QUFaUjtBQWNZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFaaEI7QUFrQlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBaEJoQjtBQW9CSTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFHQSxrQkFBQTtBQXBCUjtBQXdCWTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBdEJoQjtBQXVCZ0I7RUFDSSxvQ0FBQTtBQXJCcEI7QUF3Qlk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQXRCaEI7QUF1QmdCO0VBQ0ksb0NBQUE7QUFyQnBCO0FBd0JZO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBdEJoQjtBQXdCWTtFQUNJLG9DQUFBO0FBdEJoQjtBQTRCQTtFQUNJLG1CQUFBO0FBekJKO0FBNEJBO0VBQ0ksZUFBQTtBQXpCSjtBQTBCSTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUF4QlI7QUEwQkk7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBeEJSO0FBNEJBO0VBQ0ksYUFBQTtBQXpCSjtBQTRCQTtFQUNJLG9CQUFBO0FBekJKO0FBekZJO0VBaUhKO0lBR1Esc0JBQUE7RUF2Qk47QUFDRiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0YWJsZS1tZCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxlLW1vYmlsZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuIDo6bmctZGVlcCB7XHJcbiAgICBhW2FyaWEtbGFiZWw9XCJQcmV2aW91c1wiXSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDlweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwZTIwNDY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwZTIwNDY7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhW2FyaWEtbGFiZWw9XCJOZXh0XCJdIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDlweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwZTIwNDY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMGUyMDQ2O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFnZS1saW5rIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgICAgICBib3JkZXI6IHVuc2V0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDExcHggIWltcG9ydGFudDtcclxuICAgICAgICAvLyB3aWR0aDogMzBweDtcclxuICAgICAgICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgIC5wYWdlLWl0ZW0ge1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZDlmMztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgICAgICAmIC5wYWdlLWxpbms6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWQ5ZjMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZDlmMztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgICAgICAmIC5wYWdlLWxpbms6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWQ5ZjMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYigxMzksIDEzOSwgMTM5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmRpc2FibGVkIC5wYWdlLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZDlmMyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG50aCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG50Ym9keSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0cjpudGgtbGFzdC1jaGlsZChvZGQpIHtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgdHI6bnRoLWxhc3QtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTNlYTtcclxuICAgIH1cclxufVxyXG5cclxuLmRvLWQtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyLWVuZCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgIEBpbmNsdWRlIHRhYmxlLW1vYmlsZSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 70430:
/*!***************************************************************!*\
  !*** ./src/app/widget/timedropdown/timedropdown.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeDropdownComponent": () => (/* binding */ TimeDropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






const _c0 = ["timePicker"];
const _c1 = function (a0) { return { "active": a0 }; };
function TimeDropdownComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeDropdownComponent_ng_container_3_Template_li_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.timeClick(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r2 === ctx_r1.time));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
} }
class TimeDropdownComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changedValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.height = false;
        this.timeList = ['12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];
        this.onTouched = (event) => { };
        this.onChange = (event) => { };
    }
    ngOnInit() {
        this.unListener = this.renderer.listen('document', 'mouseup', (event) => {
            const container = this.timePicker.nativeElement;
            if (!container.contains(event.target)) {
                this.height = false;
            }
        });
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(obj) {
        this.time = obj;
    }
    valueChanged(data) {
        this.changedValue.emit(data);
    }
    timeClick(time) {
        this.time = time;
        this.onChange(time);
        this.height = false;
    }
    ngOnDestroy() {
        this.unListener();
    }
}
TimeDropdownComponent.ɵfac = function TimeDropdownComponent_Factory(t) { return new (t || TimeDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
TimeDropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeDropdownComponent, selectors: [["app-timeDropdown"]], viewQuery: function TimeDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.timePicker = _t.first);
    } }, inputs: { time: "time" }, outputs: { changedValue: "changedValue" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TimeDropdownComponent),
                multi: true,
            },
        ])], decls: 7, vars: 6, consts: [[1, "main-time"], ["id", "timePicker", 1, "time"], ["timePicker", ""], [4, "ngFor", "ngForOf"], [1, "ri-time-line", "time-icon", "pointer", 3, "click"], ["type", "text", "id", "ContentPlaceHolder1_txtLName ", 1, "time-input", 3, "ngModel", "placeholder", "ngModelChange", "change"], [1, "time-item", 3, "ngClass", "click"]], template: function TimeDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimeDropdownComponent_ng_container_3_Template, 3, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeDropdownComponent_Template_i_click_4_listener() { return ctx.height = !ctx.height; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimeDropdownComponent_Template_input_ngModelChange_5_listener($event) { return ctx.time = $event; })("change", function TimeDropdownComponent_Template_input_change_5_listener($event) { ctx.onChange(ctx.time); ctx.onTouched($event); return ctx.valueChanged(ctx.time); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("open", ctx.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "Time"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["#timePicker[_ngcontent-%COMP%] {\n  transition: 0.3s;\n  transition-timing-function: ease-in-out;\n}\n\n#timePicker[open=true][_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n\n#timePicker[open=false][_ngcontent-%COMP%] {\n  max-height: 0px;\n}\n\n.time[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  background-color: white;\n  top: 35px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  font-size: 100%;\n  list-style: none;\n  overflow: auto;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);\n}\n\n.main-time[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n}\n\n.time-icon[_ngcontent-%COMP%] {\n  font-weight: 60;\n  position: absolute;\n  right: 15px;\n  bottom: 6px;\n}\n\n.time-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #9f9f9f;\n  font-size: 14px;\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  border-radius: 0.25rem;\n}\n\n.time-item[_ngcontent-%COMP%] {\n  padding: 1px 11px;\n  font-weight: 400;\n  color: #444;\n  cursor: pointer;\n}\n\n.time-item[_ngcontent-%COMP%]:hover {\n  background-color: #c4c4c4;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  \n  background: transparent;\n  \n}\n\n.active[_ngcontent-%COMP%] {\n  color: rgba(13, 107, 231, 0.781);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVkcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsdUNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQUk7RUFDSSx5QkFBQTtBQUVSOztBQUVBO0VBQ0ksUUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0Q0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSiIsImZpbGUiOiJ0aW1lZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGltZVBpY2tlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jdGltZVBpY2tlcltvcGVuPXRydWVdIHtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4jdGltZVBpY2tlcltvcGVuPWZhbHNlXSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0b3A6IDM1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiKDAgMCAwIC8gMjAlKTtcclxufVxyXG5cclxuLm1haW4tdGltZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi50aW1lLWljb24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3R0b206IDZweDtcclxufVxyXG5cclxuLnRpbWUtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWY5ZjlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMS43NXJlbSAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxuLnRpbWUtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxcHggMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICAvKiBSZW1vdmUgc2Nyb2xsYmFyIHNwYWNlICovXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC8qIE9wdGlvbmFsOiBqdXN0IG1ha2Ugc2Nyb2xsYmFyIGludmlzaWJsZSAqL1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiByZ2JhKDEzLCAxMDcsIDIzMSwgMC43ODEpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 88503:
/*!*****************************************!*\
  !*** ./src/app/widget/widget.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetModule": () => (/* binding */ WidgetModule)
/* harmony export */ });
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 35042);
/* harmony import */ var _iframe_loader_iframe_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iframe-loader/iframe-loader.component */ 26731);
/* harmony import */ var _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-basic/modal-basic.component */ 71335);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../core/core.module */ 40294);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table/table.component */ 92880);
/* harmony import */ var _table_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/grid-item/grid-item.component */ 34024);
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badge/badge.component */ 59605);
/* harmony import */ var _timedropdown_timedropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timedropdown/timedropdown.component */ 70430);
/* harmony import */ var _lengends_lengends_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lengends/lengends.component */ 25583);
/* harmony import */ var _date_pickert_date_pickert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-pickert/date-pickert.component */ 67662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);














class WidgetModule {
}
WidgetModule.ɵfac = function WidgetModule_Factory(t) { return new (t || WidgetModule)(); };
WidgetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: WidgetModule });
WidgetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](WidgetModule, { declarations: [_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent,
        _table_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_5__.GridItemComponent,
        _badge_badge_component__WEBPACK_IMPORTED_MODULE_6__.BadgeComponent,
        _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_2__.ModalBasicComponent,
        _timedropdown_timedropdown_component__WEBPACK_IMPORTED_MODULE_7__.TimeDropdownComponent,
        _iframe_loader_iframe_loader_component__WEBPACK_IMPORTED_MODULE_1__.IframeLoaderComponent,
        _lengends_lengends_component__WEBPACK_IMPORTED_MODULE_8__.LengendsComponent,
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.SquareBarComponent,
        _date_pickert_date_pickert_component__WEBPACK_IMPORTED_MODULE_9__.DatePickerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule], exports: [_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent,
        _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_2__.ModalBasicComponent,
        _timedropdown_timedropdown_component__WEBPACK_IMPORTED_MODULE_7__.TimeDropdownComponent,
        _iframe_loader_iframe_loader_component__WEBPACK_IMPORTED_MODULE_1__.IframeLoaderComponent,
        _lengends_lengends_component__WEBPACK_IMPORTED_MODULE_8__.LengendsComponent,
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.SquareBarComponent,
        _date_pickert_date_pickert_component__WEBPACK_IMPORTED_MODULE_9__.DatePickerComponent,
        _badge_badge_component__WEBPACK_IMPORTED_MODULE_6__.BadgeComponent] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    version: '2021.1',
    iconUrl: '',
    domain: 'dargonoil',
    cookieDomain: 'dargonoil',
    baseUrl: 'http://local.beinex.in:16007',
    baseVersion: '',
    apiVersion: '/api/v1/',
    protocol: 'http://'
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch();


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 62275,
	"./af.js": 62275,
	"./ar": 90857,
	"./ar-dz": 11218,
	"./ar-dz.js": 11218,
	"./ar-kw": 14754,
	"./ar-kw.js": 14754,
	"./ar-ly": 66680,
	"./ar-ly.js": 66680,
	"./ar-ma": 92178,
	"./ar-ma.js": 92178,
	"./ar-sa": 56522,
	"./ar-sa.js": 56522,
	"./ar-tn": 95682,
	"./ar-tn.js": 95682,
	"./ar.js": 90857,
	"./az": 70164,
	"./az.js": 70164,
	"./be": 79774,
	"./be.js": 79774,
	"./bg": 60947,
	"./bg.js": 60947,
	"./bm": 21832,
	"./bm.js": 21832,
	"./bn": 89650,
	"./bn-bd": 74477,
	"./bn-bd.js": 74477,
	"./bn.js": 89650,
	"./bo": 66005,
	"./bo.js": 66005,
	"./br": 98492,
	"./br.js": 98492,
	"./bs": 70534,
	"./bs.js": 70534,
	"./ca": 52061,
	"./ca.js": 52061,
	"./cs": 84737,
	"./cs.js": 84737,
	"./cv": 61167,
	"./cv.js": 61167,
	"./cy": 77996,
	"./cy.js": 77996,
	"./da": 9528,
	"./da.js": 9528,
	"./de": 14540,
	"./de-at": 49430,
	"./de-at.js": 49430,
	"./de-ch": 67978,
	"./de-ch.js": 67978,
	"./de.js": 14540,
	"./dv": 83426,
	"./dv.js": 83426,
	"./el": 6616,
	"./el.js": 6616,
	"./en-au": 63816,
	"./en-au.js": 63816,
	"./en-ca": 32162,
	"./en-ca.js": 32162,
	"./en-gb": 83305,
	"./en-gb.js": 83305,
	"./en-ie": 61954,
	"./en-ie.js": 61954,
	"./en-il": 43060,
	"./en-il.js": 43060,
	"./en-in": 59923,
	"./en-in.js": 59923,
	"./en-nz": 13540,
	"./en-nz.js": 13540,
	"./en-sg": 16505,
	"./en-sg.js": 16505,
	"./eo": 41907,
	"./eo.js": 41907,
	"./es": 86640,
	"./es-do": 41246,
	"./es-do.js": 41246,
	"./es-mx": 56131,
	"./es-mx.js": 56131,
	"./es-us": 36430,
	"./es-us.js": 36430,
	"./es.js": 86640,
	"./et": 62551,
	"./et.js": 62551,
	"./eu": 32711,
	"./eu.js": 32711,
	"./fa": 54572,
	"./fa.js": 54572,
	"./fi": 33390,
	"./fi.js": 33390,
	"./fil": 87860,
	"./fil.js": 87860,
	"./fo": 48216,
	"./fo.js": 48216,
	"./fr": 99291,
	"./fr-ca": 98527,
	"./fr-ca.js": 98527,
	"./fr-ch": 58407,
	"./fr-ch.js": 58407,
	"./fr.js": 99291,
	"./fy": 47054,
	"./fy.js": 47054,
	"./ga": 49540,
	"./ga.js": 49540,
	"./gd": 73917,
	"./gd.js": 73917,
	"./gl": 51486,
	"./gl.js": 51486,
	"./gom-deva": 56245,
	"./gom-deva.js": 56245,
	"./gom-latn": 48868,
	"./gom-latn.js": 48868,
	"./gu": 59652,
	"./gu.js": 59652,
	"./he": 89019,
	"./he.js": 89019,
	"./hi": 42040,
	"./hi.js": 42040,
	"./hr": 63402,
	"./hr.js": 63402,
	"./hu": 79322,
	"./hu.js": 79322,
	"./hy-am": 27609,
	"./hy-am.js": 27609,
	"./id": 57942,
	"./id.js": 57942,
	"./is": 98275,
	"./is.js": 98275,
	"./it": 73053,
	"./it-ch": 4378,
	"./it-ch.js": 4378,
	"./it.js": 73053,
	"./ja": 46176,
	"./ja.js": 46176,
	"./jv": 679,
	"./jv.js": 679,
	"./ka": 92726,
	"./ka.js": 92726,
	"./kk": 72953,
	"./kk.js": 72953,
	"./km": 86957,
	"./km.js": 86957,
	"./kn": 59181,
	"./kn.js": 59181,
	"./ko": 47148,
	"./ko.js": 47148,
	"./ku": 27752,
	"./ku.js": 27752,
	"./ky": 65675,
	"./ky.js": 65675,
	"./lb": 41263,
	"./lb.js": 41263,
	"./lo": 65746,
	"./lo.js": 65746,
	"./lt": 11143,
	"./lt.js": 11143,
	"./lv": 38753,
	"./lv.js": 38753,
	"./me": 44054,
	"./me.js": 44054,
	"./mi": 31573,
	"./mi.js": 31573,
	"./mk": 30202,
	"./mk.js": 30202,
	"./ml": 68523,
	"./ml.js": 68523,
	"./mn": 79794,
	"./mn.js": 79794,
	"./mr": 56681,
	"./mr.js": 56681,
	"./ms": 56975,
	"./ms-my": 39859,
	"./ms-my.js": 39859,
	"./ms.js": 56975,
	"./mt": 3691,
	"./mt.js": 3691,
	"./my": 5152,
	"./my.js": 5152,
	"./nb": 7607,
	"./nb.js": 7607,
	"./ne": 21526,
	"./ne.js": 21526,
	"./nl": 86368,
	"./nl-be": 40076,
	"./nl-be.js": 40076,
	"./nl.js": 86368,
	"./nn": 68420,
	"./nn.js": 68420,
	"./oc-lnc": 51906,
	"./oc-lnc.js": 51906,
	"./pa-in": 94504,
	"./pa-in.js": 94504,
	"./pl": 54721,
	"./pl.js": 54721,
	"./pt": 74645,
	"./pt-br": 54548,
	"./pt-br.js": 54548,
	"./pt.js": 74645,
	"./ro": 71977,
	"./ro.js": 71977,
	"./ru": 26042,
	"./ru.js": 26042,
	"./sd": 78849,
	"./sd.js": 78849,
	"./se": 27739,
	"./se.js": 27739,
	"./si": 50084,
	"./si.js": 50084,
	"./sk": 92449,
	"./sk.js": 92449,
	"./sl": 23086,
	"./sl.js": 23086,
	"./sq": 33139,
	"./sq.js": 33139,
	"./sr": 30607,
	"./sr-cyrl": 30063,
	"./sr-cyrl.js": 30063,
	"./sr.js": 30607,
	"./ss": 40131,
	"./ss.js": 40131,
	"./sv": 21665,
	"./sv.js": 21665,
	"./sw": 5642,
	"./sw.js": 5642,
	"./ta": 33622,
	"./ta.js": 33622,
	"./te": 74825,
	"./te.js": 74825,
	"./tet": 48336,
	"./tet.js": 48336,
	"./tg": 39238,
	"./tg.js": 39238,
	"./th": 99463,
	"./th.js": 99463,
	"./tk": 39986,
	"./tk.js": 39986,
	"./tl-ph": 29672,
	"./tl-ph.js": 29672,
	"./tlh": 40043,
	"./tlh.js": 40043,
	"./tr": 51212,
	"./tr.js": 51212,
	"./tzl": 50110,
	"./tzl.js": 50110,
	"./tzm": 80482,
	"./tzm-latn": 38309,
	"./tzm-latn.js": 38309,
	"./tzm.js": 80482,
	"./ug-cn": 42495,
	"./ug-cn.js": 42495,
	"./uk": 54157,
	"./uk.js": 54157,
	"./ur": 80984,
	"./ur.js": 80984,
	"./uz": 64141,
	"./uz-latn": 43662,
	"./uz-latn.js": 43662,
	"./uz.js": 64141,
	"./vi": 12607,
	"./vi.js": 12607,
	"./x-pseudo": 66460,
	"./x-pseudo.js": 66460,
	"./yo": 92948,
	"./yo.js": 92948,
	"./zh-cn": 62658,
	"./zh-cn.js": 62658,
	"./zh-hk": 39352,
	"./zh-hk.js": 39352,
	"./zh-mo": 38274,
	"./zh-mo.js": 38274,
	"./zh-tw": 98451,
	"./zh-tw.js": 98451
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map