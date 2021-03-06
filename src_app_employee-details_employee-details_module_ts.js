"use strict";
(self["webpackChunkdragon_oil"] = self["webpackChunkdragon_oil"] || []).push([["src_app_employee-details_employee-details_module_ts"],{

/***/ 74201:
/*!***********************************************************!*\
  !*** ./src/app/core/service/employee/employee.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeService": () => (/* binding */ EmployeeService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/http.service */ 3726);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);





class EmployeeService {
    constructor(http, _function) {
        this.http = http;
        this._function = _function;
    }
    grid(gridParams = { q: '', page: 0, limit: 10 }) {
        const keys = Object.keys(gridParams);
        const value = Object.values(gridParams);
        let query = '?';
        for (let i = 0; i < keys.length; i++) {
            if (value[i] !== '') {
                query += keys[i] + '=' + encodeURIComponent(value[i]) + '&';
            }
        }
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.employeeGrid + query);
    }
    employeeXls() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiVersion + _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.employeeXls;
    }
    employeeCsv() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiVersion + _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.employeeCsv;
    }
}
EmployeeService.??fac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_common_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService)); };
EmployeeService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: EmployeeService, factory: EmployeeService.??fac, providedIn: 'root' });


/***/ }),

/***/ 58088:
/*!*******************************************************************************!*\
  !*** ./src/app/employee-details/employee-create/employee-create.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeCreateComponent": () => (/* binding */ EmployeeCreateComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_warning_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/constants/warning-messages */ 31501);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helper/validationrule.service */ 15157);
/* harmony import */ var src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helper/toast.helper.service */ 27995);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-select-dropdown */ 34772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);










function EmployeeCreateComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "This field is required"), " ");
} }
const _c0 = function (a0) { return { maxLength: a0 }; };
function EmployeeCreateComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, "Maximum field length exceeded", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](4, _c0, ctx_r1.formControl.firstName.errors == null ? null : ctx_r1.formControl.firstName.errors.maxlength == null ? null : ctx_r1.formControl.firstName.errors.maxlength.requiredLength)), " ");
} }
const _c1 = function (a0) { return { minLength: a0 }; };
function EmployeeCreateComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, "Minimum field length required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](4, _c1, ctx_r2.formControl.firstName.errors == null ? null : ctx_r2.formControl.firstName.errors.minlength == null ? null : ctx_r2.formControl.firstName.errors.minlength.requiredLength)), " ");
} }
function EmployeeCreateComponent_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "This field is required"), " ");
} }
function EmployeeCreateComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, "Maximum field length exceeded", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](4, _c0, ctx_r4.formControl.lastName.errors == null ? null : ctx_r4.formControl.lastName.errors.maxlength == null ? null : ctx_r4.formControl.lastName.errors.maxlength.requiredLength)), " ");
} }
function EmployeeCreateComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, "Minimum field length required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](4, _c1, ctx_r5.formControl.lastName.errors == null ? null : ctx_r5.formControl.lastName.errors.minlength == null ? null : ctx_r5.formControl.lastName.errors.minlength.requiredLength)), " ");
} }
function EmployeeCreateComponent_p_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "This field is required"), " ");
} }
function EmployeeCreateComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, "Maximum field length exceeded", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](4, _c0, ctx_r7.formControl.email.errors == null ? null : ctx_r7.formControl.email.errors.maxlength == null ? null : ctx_r7.formControl.email.errors.maxlength.requiredLength)), " ");
} }
function EmployeeCreateComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, "Minimum field length required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](4, _c1, ctx_r8.formControl.email.errors == null ? null : ctx_r8.formControl.email.errors.minlength == null ? null : ctx_r8.formControl.email.errors.minlength.requiredLength)), " ");
} }
function EmployeeCreateComponent_p_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "Email must be a valid email address"), " ");
} }
function EmployeeCreateComponent_p_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "This field is required"), " ");
} }
function EmployeeCreateComponent_span_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "This field is required"), " ");
} }
function EmployeeCreateComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "This field is required"), " ");
} }
function EmployeeCreateComponent_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "This field is required"), " ");
} }
function EmployeeCreateComponent_span_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "This field is required"), " ");
} }
function EmployeeCreateComponent_span_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 1, "This field is required"), " ");
} }
function EmployeeCreateComponent_span_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, "Maximum field length exceeded", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](4, _c0, ctx_r16.formControl.email.errors == null ? null : ctx_r16.formControl.email.errors.maxlength == null ? null : ctx_r16.formControl.email.errors.maxlength.requiredLength)), " ");
} }
function EmployeeCreateComponent_span_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](2, 1, "Minimum field length required", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](4, _c1, ctx_r17.formControl.email.errors == null ? null : ctx_r17.formControl.email.errors.minlength == null ? null : ctx_r17.formControl.email.errors.minlength.requiredLength)), " ");
} }
class EmployeeCreateComponent {
    constructor(_router, _formBuilder, _rule, _toast, activated) {
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._rule = _rule;
        this._toast = _toast;
        this.activated = activated;
        this.dropdownConfigKey = {
            displayKey: 'value',
            search: true,
            clearOnSelection: true,
            placeholder: 'select',
            height: '150px'
        };
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_1__.SubSink();
        this.users = [
            { key: 1, value: 'Rahul Vijayan' },
            { key: 1, value: 'almas aliyar' }
        ];
        this.role = [
            'user', 'manager'
        ];
        this.status = [
            'Active',
            'InActive'
        ];
        this.Designation = [
            'Sales Manager',
            'Purchase Manager',
            'Supervisor'
        ];
        this.submitted = false;
    }
    ngOnInit() {
        this.setForm(true);
        this.getIdFromUrl();
    }
    getIdFromUrl() {
        this.subs.add(this.activated.params.subscribe(res => {
            this.id = res['id'];
            if (this.id) {
                this.setForm(false);
            }
            else {
                this.setForm(true);
            }
        }));
    }
    get formControl() {
        return this.employeeDataForm.controls;
    }
    setForm(create) {
        if (create) {
            this.employeeDataForm = this._formBuilder.group({
                firstName: ['', [this._rule.requiredValidation, this._rule.noWhitespaceValidator, this._rule.textBoxValidation()]],
                lastName: ['', [this._rule.requiredValidation, this._rule.noWhitespaceValidator, this._rule.textBoxValidation()]],
                email: ['', this._rule.emailValidation],
                contact: ['', [this._rule.requiredValidation]],
                reportingTo: ['', this._rule.requiredValidation],
                role: ['', this._rule.requiredValidation],
                hourChange: ['', this._rule.requiredValidation],
                overTimeCharge: ['', this._rule.requiredValidation],
                workingHours: ['', this._rule.requiredValidation],
                status: [''],
                designation: [''],
                address: ['', [this._rule.requiredValidation, this._rule.textAreaValidation()]]
            });
        }
        else {
            this.employeeDataForm = this._formBuilder.group({
                firstName: ['', [this._rule.requiredValidation, this._rule.noWhitespaceValidator, this._rule.textBoxValidation()]],
                lastName: ['', [this._rule.requiredValidation, this._rule.noWhitespaceValidator, this._rule.textBoxValidation()]],
                email: ['', this._rule.emailValidation],
                contact: ['', [this._rule.requiredValidation]],
                reportingTo: ['', this._rule.requiredValidation],
                role: ['', this._rule.requiredValidation],
                hourChange: [, this._rule.requiredValidation],
                overTimeCharge: [0, this._rule.requiredValidation],
                workingHours: [0, this._rule.requiredValidation],
                status: [''],
                designation: [''],
                address: ['']
            });
        }
    }
    submit() {
        this.submitted = true;
        const formValue = this.employeeDataForm.value;
        if (this.employeeDataForm.invalid) {
            this._toast.error(_core_constants_warning_messages__WEBPACK_IMPORTED_MODULE_0__.toastMessages.validation);
            return;
        }
        this.create();
    }
    create() {
        this._toast.success(_core_constants_warning_messages__WEBPACK_IMPORTED_MODULE_0__.toastMessages.created);
        this.view();
    }
    view() {
        this._router.navigate(['/employee-details']);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
EmployeeCreateComponent.??fac = function EmployeeCreateComponent_Factory(t) { return new (t || EmployeeCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_2__.ValidationruleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
EmployeeCreateComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: EmployeeCreateComponent, selectors: [["app-employee-create"]], decls: 151, vars: 98, consts: [[1, "py-2"], [1, "row"], [1, "col-12", "col-md-8"], [1, "title-blue"], [1, "col-12", "col-md-4"], [1, "float-right"], [1, "btn-blue-gradient", 3, "click"], [1, "card", "card-round"], [1, "card-body"], [1, "row", "form-Font"], [3, "formGroup"], [1, "col-md-12"], [1, "col-md-4"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend", "do-blue-gradient", "do-rd-25"], [1, "input-group-text", "do-tr-br-0"], [1, "col-md-8"], [1, "col-md-6"], ["for", "exampleInputEmail1"], [1, "text-danger"], ["formControlName", "firstName", "name", "ctl00$ContentPlaceHolder1$txtFName", "type", "text", "id", "ContentPlaceHolder1_txtFName", 1, "form-control", 3, "placeholder"], ["class", "font-size-12 text-danger", 4, "ngIf"], ["formControlName", "lastName", "name", "ctl00$ContentPlaceHolder1$txtLName", "type", "text", "id", "ContentPlaceHolder1_txtLName", 1, "form-control", 3, "placeholder"], ["for", "exampleInputPassword1"], ["formControlName", "email", "name", "ctl00$ContentPlaceHolder1$txtEmail", "type", "email", "id", "ContentPlaceHolder1_txtEmail", 1, "form-control", 3, "placeholder"], ["formControlName", "contact", "name", "ctl00$ContentPlaceHolder1$txtContact", "type", "number", "id", "ContentPlaceHolder1_txtContact", 1, "form-control", 3, "placeholder"], [3, "formControl", "multiple", "config", "options"], ["formControlName", "hourChange", "name", "ctl00$ContentPlaceHolder1$txtHrCharge", "type", "number", "id", "ContentPlaceHolder1_txtHrCharge", "placeholder", "000", 1, "form-control"], ["formControlName", "overTimeCharge", "name", "ctl00$ContentPlaceHolder1$txtOverTimeCharge", "type", "number", "id", "ContentPlaceHolder1_txtOverTimeCharge", "placeholder", "000", 1, "form-control"], ["formControlName", "workingHours", "name", "ctl00$ContentPlaceHolder1$txtWorkingHrs", "type", "number", "id", "ContentPlaceHolder1_txtWorkingHrs", "placeholder", "00", 1, "form-control"], ["formControlName", "address", "name", "ctl00$ContentPlaceHolder1$txtAddress", "rows", "2", "cols", "20", "id", "ContentPlaceHolder1_txtAddress", "placeholder", "", 1, "form-control"], [1, "button"], [1, "btn-white", "mx-2", 3, "click"], [1, "btn-orange-gradient", 3, "click"], [1, "font-size-12", "text-danger"]], template: function EmployeeCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EmployeeCreateComponent_Template_button_click_8_listener() { return ctx.view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](25, "DO-E 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](36, EmployeeCreateComponent_span_36_Template, 3, 3, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](37, EmployeeCreateComponent_span_37_Template, 3, 6, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](38, EmployeeCreateComponent_span_38_Template, 3, 6, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](41, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](44, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](46, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](48, EmployeeCreateComponent_span_48_Template, 3, 3, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](49, EmployeeCreateComponent_span_49_Template, 3, 6, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](50, EmployeeCreateComponent_span_50_Template, 3, 6, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](53, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](56, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](57, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](58, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](59, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](61, EmployeeCreateComponent_p_61_Template, 3, 3, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](62, EmployeeCreateComponent_span_62_Template, 3, 6, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](63, EmployeeCreateComponent_span_63_Template, 3, 6, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](64, EmployeeCreateComponent_p_64_Template, 3, 3, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](67, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](70, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](72, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](73, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](75, EmployeeCreateComponent_p_75_Template, 3, 3, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](78, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](81, "ngx-select-dropdown", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](82, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](83, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](84, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](87, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](88, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](89, "ngx-select-dropdown", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](90, EmployeeCreateComponent_span_90_Template, 3, 3, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](92, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](93, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](96, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](97, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](98, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](99, EmployeeCreateComponent_span_99_Template, 3, 3, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](100, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](101, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](102, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](105, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](106, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](107, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](108, EmployeeCreateComponent_span_108_Template, 3, 3, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](109, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](110, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](111, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](114, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](115, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](116, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](117, EmployeeCreateComponent_span_117_Template, 3, 3, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](118, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](119, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](120, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](123, "ngx-select-dropdown", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](124, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](125, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](126, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](129, "ngx-select-dropdown", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](130, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](131, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](132, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](134, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](135, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](136, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](137, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](138, EmployeeCreateComponent_span_138_Template, 3, 3, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](139, EmployeeCreateComponent_span_139_Template, 3, 6, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](140, EmployeeCreateComponent_span_140_Template, 3, 6, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](141, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](142, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](143, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](144, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](145, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EmployeeCreateComponent_Template_button_click_145_listener() { return ctx.view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](148, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EmployeeCreateComponent_Template_button_click_148_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](150, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.id ? "Edit Employee" : _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](5, 56, "Create Employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](10, 58, "Detail view"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.employeeDataForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](23, 60, "ID"), " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](31, 62, "First Name"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](35, 64, "Enter name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted && (ctx.formControl.firstName.errors == null ? null : ctx.formControl.firstName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.formControl.firstName.errors == null ? null : ctx.formControl.firstName.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.formControl.firstName.errors == null ? null : ctx.formControl.firstName.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](43, 66, "Last Name"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](47, 68, "Enter name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted && (ctx.formControl.lastName.errors == null ? null : ctx.formControl.lastName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.formControl.lastName.errors == null ? null : ctx.formControl.lastName.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.formControl.lastName.errors == null ? null : ctx.formControl.lastName.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](55, 70, "Email address"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](60, 72, "Enter email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted && (ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](69, 74, "Contact"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](74, 76, "Number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted && (ctx.formControl.contact.errors == null ? null : ctx.formControl.contact.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](80, 78, "Reporting To"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formControl", ctx.formControl.reportingTo)("multiple", false)("config", ctx.dropdownConfigKey)("options", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](86, 80, "Role"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formControl", ctx.formControl.role)("multiple", false)("config", ctx.dropdownConfigKey)("options", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted && (ctx.formControl.role.errors == null ? null : ctx.formControl.role.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](95, 82, "Hour Charge"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted && (ctx.formControl.hourChange.errors == null ? null : ctx.formControl.hourChange.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](104, 84, "Over Time Charge"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted && (ctx.formControl.overTimeCharge.errors == null ? null : ctx.formControl.overTimeCharge.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](113, 86, "Working Hours"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted && (ctx.formControl.workingHours.errors == null ? null : ctx.formControl.workingHours.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](122, 88, "Status"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formControl", ctx.formControl.status)("multiple", false)("config", ctx.dropdownConfigKey)("options", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](128, 90, "Designation"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formControl", ctx.formControl.designation)("multiple", false)("config", ctx.dropdownConfigKey)("options", ctx.Designation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](134, 92, "Address"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted && (ctx.formControl.address.errors == null ? null : ctx.formControl.address.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.formControl.address.errors == null ? null : ctx.formControl.address.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.formControl.address.errors == null ? null : ctx.formControl.address.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](147, 94, "Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.id ? "Update" : _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](150, 96, "Submit"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_8__.NgxSelectDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 44609:
/*!***********************************************************************************************************!*\
  !*** ./src/app/employee-details/employee-details-landing-page/employee-details-landing-page.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDetailsLandingPageComponent": () => (/* binding */ EmployeeDetailsLandingPageComponent)
/* harmony export */ });
/* harmony import */ var _core_render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/render/custom-render/custom-render.component */ 13640);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/constants/constants */ 78073);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var _core_render_id_render_id_render_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/render/id-render/id-render.component */ 94144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/service/employee/employee.service */ 74201);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widget_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widget/table/table.component */ 92880);
/* harmony import */ var _widget_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widget/modal-basic/modal-basic.component */ 71335);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);













const _c0 = ["exportModal"];
const _c1 = ["empModal"];
function EmployeeDetailsLandingPageComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????propertyInterpolate"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](option_r3);
} }
class EmployeeDetailsLandingPageComponent {
    constructor(_router, _employeeService) {
        this._router = _router;
        this._employeeService = _employeeService;
        this.tableOption = src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.tableOption;
        this.tableLimitOption = src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.tableConfig.tableLimitOption;
        this.tableLimit = src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.tableConfig.tableLimit;
        this.tableSearch = '';
        this.currentPage = 1;
        this.totalCount = src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.tableConfig.pager;
        this.itemsPerPage = src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.tableConfig.pager;
        this.employeeDetail = {
            userId: '',
            employeeName: '',
            positionTitle: '',
            companyName: '',
            employeeType: '',
            deptName: '',
            hireDate: '',
            emailAddress: '',
            companyCode: '',
            deptCode: '',
            emailAddressOriginal: '',
            employeeClass: '',
            endDate: '',
            firstName: '',
            lastName: '',
            managerUserId: '',
            managerName: '',
            oldEmployeeId: '',
        };
        this.tableSettings = {
            column: {
                UserId: {
                    title: 'ID',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'custom',
                    renderComponent: _core_render_id_render_id_render_component__WEBPACK_IMPORTED_MODULE_3__.IdRenderComponent,
                    valuePrepareFunction: (value, row) => {
                        value = {
                            id: row === null || row === void 0 ? void 0 : row.UserId,
                            color: '#3298DB',
                            event: 'view',
                            row: row,
                        };
                        return value;
                    }
                },
                FullName: {
                    title: 'Employee Name',
                    icon: '',
                    type: 'text',
                },
                PositionTitle: {
                    title: 'Position Title',
                    icon: '',
                    type: 'text',
                },
                CompanyName: {
                    title: 'Company Name',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                EmployeeType: {
                    title: 'Employee Type',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                DeptName: {
                    title: 'Department Name',
                    icon: '',
                    type: 'text',
                },
                HireDate: {
                    title: 'Hire Date',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                EmailAddress: {
                    title: 'Email Address',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                CompanyCode: {
                    title: 'Company Code',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                DeptCode: {
                    title: 'Department Code',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                EmailAddress_Original: {
                    title: 'Email Address Original',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                EmployeeClass: {
                    title: 'Employee Class',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                EndDate: {
                    title: 'End Date',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                FirstName: {
                    title: 'First Name',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                LastName: {
                    title: 'Last Name',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                ManagerUserId: {
                    title: 'Manager User Id',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'custom',
                    renderComponent: _core_render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_0__.CustomRenderComponent,
                    valuePrepareFunction: (value, row) => {
                        var _a, _b;
                        if ((_a = row === null || row === void 0 ? void 0 : row.ManagerUserId) === null || _a === void 0 ? void 0 : _a.manager_id) {
                            return (_b = row === null || row === void 0 ? void 0 : row.ManagerUserId) === null || _b === void 0 ? void 0 : _b.manager_id;
                        }
                        return '-';
                    }
                },
                ManagerUserName: {
                    title: 'Manager Name',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'custom',
                    renderComponent: _core_render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_0__.CustomRenderComponent,
                    valuePrepareFunction: (value, row) => {
                        var _a, _b;
                        if ((_a = row === null || row === void 0 ? void 0 : row.ManagerUserId) === null || _a === void 0 ? void 0 : _a.manager_id) {
                            return (_b = row === null || row === void 0 ? void 0 : row.ManagerUserId) === null || _b === void 0 ? void 0 : _b.name;
                        }
                        return '-';
                    }
                },
                OldEmployeeId: {
                    title: 'Old Employee Id',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
            }
        };
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_2__.SubSink();
    }
    ngOnInit() {
        this.gridData = [];
        this.employeeDetails();
    }
    tablePageChange(offSet) {
        this.currentPage = (offSet);
        this.employeeDetails(offSet, this.tableSearch, this.tableLimit);
    }
    employeeDetails(offSet = 1, search = this.tableSearch, limit = this.tableLimit) {
        this.currentPage = offSet;
        const gridParams = {
            q: search,
            page: offSet,
            limit: limit,
        };
        this.subs.add(this._employeeService.grid(gridParams).subscribe(res => {
            var _a, _b;
            if (src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                this.gridData = (_a = res.employee) === null || _a === void 0 ? void 0 : _a.result;
                this.totalCount = (_b = res.employee) === null || _b === void 0 ? void 0 : _b.total_count;
            }
        }));
    }
    search() {
        this.currentPage = 1;
        this.totalCount = this.tableLimit;
        this.employeeDetails();
    }
    openModal() {
        this.empModal.show();
    }
    closeModal() {
        this.empModal.hide();
    }
    tableEvent(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        if ((event === null || event === void 0 ? void 0 : event.event) === 'view') {
            this.employeeDetail = {
                userId: (_a = event === null || event === void 0 ? void 0 : event.row) === null || _a === void 0 ? void 0 : _a.UserId,
                employeeName: (_b = event === null || event === void 0 ? void 0 : event.row) === null || _b === void 0 ? void 0 : _b.FullName,
                positionTitle: (_c = event === null || event === void 0 ? void 0 : event.row) === null || _c === void 0 ? void 0 : _c.PositionTitle,
                companyName: (_d = event === null || event === void 0 ? void 0 : event.row) === null || _d === void 0 ? void 0 : _d.CompanyName,
                employeeType: (_e = event === null || event === void 0 ? void 0 : event.row) === null || _e === void 0 ? void 0 : _e.EmployeeType,
                deptName: (_f = event === null || event === void 0 ? void 0 : event.row) === null || _f === void 0 ? void 0 : _f.DeptName,
                hireDate: (_g = event === null || event === void 0 ? void 0 : event.row) === null || _g === void 0 ? void 0 : _g.HireDate,
                emailAddress: (_h = event === null || event === void 0 ? void 0 : event.row) === null || _h === void 0 ? void 0 : _h.EmailAddress,
                companyCode: (_j = event === null || event === void 0 ? void 0 : event.row) === null || _j === void 0 ? void 0 : _j.EmailAddress,
                deptCode: (_k = event === null || event === void 0 ? void 0 : event.row) === null || _k === void 0 ? void 0 : _k.DeptCode,
                emailAddressOriginal: (_l = event === null || event === void 0 ? void 0 : event.row) === null || _l === void 0 ? void 0 : _l.EmailAddress_Original,
                employeeClass: (_m = event === null || event === void 0 ? void 0 : event.row) === null || _m === void 0 ? void 0 : _m.EmployeeClass,
                endDate: (_o = event === null || event === void 0 ? void 0 : event.row) === null || _o === void 0 ? void 0 : _o.EndDate,
                firstName: (_p = event === null || event === void 0 ? void 0 : event.row) === null || _p === void 0 ? void 0 : _p.FirstName,
                lastName: (_q = event === null || event === void 0 ? void 0 : event.row) === null || _q === void 0 ? void 0 : _q.LastName,
                managerUserId: (_r = event === null || event === void 0 ? void 0 : event.row) === null || _r === void 0 ? void 0 : _r.ManagerUserId,
                managerName: (_s = event === null || event === void 0 ? void 0 : event.row) === null || _s === void 0 ? void 0 : _s.ManagerUserName,
                oldEmployeeId: (_t = event === null || event === void 0 ? void 0 : event.row) === null || _t === void 0 ? void 0 : _t.OldEmployeeId,
            };
            this.openModal();
        }
    }
    create() {
        this._router.navigate(['/employee-details/create']);
    }
    openExportPopUp() {
        this.exportModal.show();
    }
    closeExportModal() {
        this.exportModal.hide();
    }
    downloadCsv() {
        window.open(this._employeeService.employeeCsv(), '_self');
    }
    downloadXls() {
        window.open(this._employeeService.employeeXls(), '_self');
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
EmployeeDetailsLandingPageComponent.??fac = function EmployeeDetailsLandingPageComponent_Factory(t) { return new (t || EmployeeDetailsLandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__.EmployeeService)); };
EmployeeDetailsLandingPageComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({ type: EmployeeDetailsLandingPageComponent, selectors: [["app-employee-details-landing-page"]], viewQuery: function EmployeeDetailsLandingPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????viewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????viewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????loadQuery"]()) && (ctx.exportModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????loadQuery"]()) && (ctx.empModal = _t.first);
    } }, decls: 168, vars: 124, consts: [[1, "py-2"], [1, "row"], [1, "col-12", "col-sm-8"], [1, "title-blue"], [1, "col-12", "col-sm-4"], [1, "title-right"], [1, "btn-blue-gradient", 3, "click"], [1, "card", "card-round"], [1, "card-body"], [1, "col-sm-12", "col-md-6"], ["id", "example_length", 1, "table-head"], [1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["id", "example_filter", 1, "dataTables_filter"], ["type", "text", "placeholder", "", "aria-controls", "example", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup.enter"], [3, "settings", "gridData", "totalCount", "currentPage", "customEvent", "pageChange"], [3, "disableOutSideClick", "hideHeader", "hideFooter", "hideBody", "isSmallModal", "dialogClass"], ["empModal", ""], [1, "app-modal-header", "w-100", "d-flex", "justify-content-center", "align-items-center", "pr-2"], [1, "float-left", "do-black"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", 3, "click"], [1, "ri-close-line"], [1, "app-modal-body"], [1, "app-modal-footer", "w-100"], ["type", "button ", 1, "btn", "btn-secondary", "float-right", 3, "click"], [3, "disableOutSideClick", "hideHeader", "hideFooter", "hideBody", "dialogClass"], ["exportModal", ""], [1, "app-modal-header", "w-100", "d-flex", "justify-content-center", "align-items-center"], [1, "app-modal-footer", "w-100", "text-center"], [1, "exp-heading"], [1, "exp-subheading"], [1, "mt-2"], [1, "d-flex", "justify-content-center", "mt-3"], [1, "p-2"], [1, "export-icons"], ["src", "assets/images/svg/csv.svg", "height", "60px", "alt", "homepage", 1, "mt-3"], [1, "btn", "btn-primary", "pointer", "mt-3", 3, "click"], ["src", "assets/images/svg/xls.svg", "height", "60px", "alt", "homepage", 1, "mt-3"], [1, "p-3", "mb-5", "mt-3"], ["id", "cancel", 1, "btn", "btn-danger", "pointer", 3, "click"], [3, "value"]], template: function EmployeeDetailsLandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmployeeDetailsLandingPageComponent_Template_button_click_8_listener() { return ctx.openExportPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("ngModelChange", function EmployeeDetailsLandingPageComponent_Template_select_ngModelChange_19_listener($event) { return ctx.tableLimit = $event; })("ngModelChange", function EmployeeDetailsLandingPageComponent_Template_select_ngModelChange_19_listener() { return ctx.employeeDetails(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](20, EmployeeDetailsLandingPageComponent_ng_container_20_Template, 3, 2, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("ngModelChange", function EmployeeDetailsLandingPageComponent_Template_input_ngModelChange_28_listener($event) { return ctx.tableSearch = $event; })("keyup.enter", function EmployeeDetailsLandingPageComponent_Template_input_keyup_enter_28_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](29, "app-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("customEvent", function EmployeeDetailsLandingPageComponent_Template_app_table_customEvent_29_listener($event) { return ctx.tableEvent($event); })("pageChange", function EmployeeDetailsLandingPageComponent_Template_app_table_pageChange_29_listener($event) { return ctx.tablePageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](30, "app-modal-basic", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](33, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmployeeDetailsLandingPageComponent_Template_button_click_35_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](38, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](39, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](44, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](49, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](54, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](59, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](64, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](69, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](74, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](79, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](84, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](89, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](94, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](99, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](104, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](109, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](114, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](119, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](124, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](126, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](129, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](130, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmployeeDetailsLandingPageComponent_Template_button_click_130_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](133, "app-modal-basic", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](135, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](136, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmployeeDetailsLandingPageComponent_Template_button_click_136_listener() { return ctx.closeExportModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](137, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](138, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](139, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](140, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](141, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](144, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](146, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](148, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](149, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](150, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](151, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](152, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](153, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](154, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmployeeDetailsLandingPageComponent_Template_button_click_154_listener() { return ctx.downloadCsv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](156, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](157, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](158, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](159, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](160, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](161, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmployeeDetailsLandingPageComponent_Template_button_click_161_listener() { return ctx.downloadXls(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](163, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](164, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](165, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmployeeDetailsLandingPageComponent_Template_button_click_165_listener() { return ctx.closeExportModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](167, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](5, 66, "Employee Details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](10, 68, "Export"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](18, 70, "Show"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngModel", ctx.tableLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.tableOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](22, 72, "entries"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](27, 74, "Search"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngModel", ctx.tableSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("settings", ctx.tableSettings)("gridData", ctx.gridData)("totalCount", ctx.totalCount)("currentPage", ctx.currentPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disableOutSideClick", false)("hideHeader", false)("hideFooter", false)("hideBody", false)("isSmallModal", true)("dialogClass", "bigger-modal-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.employeeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](41, 76, "User Id"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](46, 78, "Employee Name"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.employeeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](51, 80, "Position Title"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.positionTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](56, 82, "Company Name"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](61, 84, "Employee Type"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.employeeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](66, 86, "Department Name"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.deptName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](71, 88, "Hire Date"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.hireDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](76, 90, "Email"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.emailAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](81, 92, "Company Code"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.companyCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](86, 94, "Department Code"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.deptCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](91, 96, "Email Address Original"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.emailAddressOriginal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](96, 98, "Employee Class"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.employeeClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](101, 100, "End Date"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](106, 102, "FirstName"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](111, 104, "LastName"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](116, 106, "Manager User Id"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.managerUserId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](121, 108, "Manager Name"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.managerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](126, 110, "Old Employee Id"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.employeeDetail.oldEmployeeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](132, 112, "close"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disableOutSideClick", false)("hideHeader", false)("hideFooter", false)("hideBody", true)("dialogClass", "bigger-modal-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](143, 114, "Export"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](148, 116, "Choose the file format you want to download."), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](156, 118, "Download CSV"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](163, 120, "Download XLS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](167, 122, "Cancel"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _widget_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _widget_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_6__.ModalBasicComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["??NgSelectMultipleOption"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1kZXRhaWxzLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 15251:
/*!*********************************************************************!*\
  !*** ./src/app/employee-details/employee-details-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDetailsRoutingModule": () => (/* binding */ EmployeeDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _employee_details_landing_page_employee_details_landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-details-landing-page/employee-details-landing-page.component */ 44609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _employee_details_landing_page_employee_details_landing_page_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeDetailsLandingPageComponent,
        data: {
            title: 'Employee Details',
            mainMenu: 'Employee Details',
            hideTitle: true,
            urls: []
        }
    },
    // {
    //   path: 'create',
    //   component: EmployeeCreateComponent,
    //   data: {
    //     title: 'Employee Create',
    //     mainMenu: 'Employee Details',
    //     hideTitle: true,
    //     urls: []
    //   }
    // },
    // {
    //   path: 'edit/:id',
    //   component: EmployeeCreateComponent,
    //   data: {
    //     title: 'Employee Edit',
    //     mainMenu: 'Employee Details',
    //     hideTitle: true,
    //     urls: []
    //   }
    // },
];
class EmployeeDetailsRoutingModule {
}
EmployeeDetailsRoutingModule.??fac = function EmployeeDetailsRoutingModule_Factory(t) { return new (t || EmployeeDetailsRoutingModule)(); };
EmployeeDetailsRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: EmployeeDetailsRoutingModule });
EmployeeDetailsRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](EmployeeDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 47658:
/*!*************************************************************!*\
  !*** ./src/app/employee-details/employee-details.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDetailsModule": () => (/* binding */ EmployeeDetailsModule)
/* harmony export */ });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/core.module */ 40294);
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../widget/widget.module */ 88503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _employee_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-details-routing.module */ 15251);
/* harmony import */ var _employee_details_landing_page_employee_details_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-details-landing-page/employee-details-landing-page.component */ 44609);
/* harmony import */ var _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-create/employee-create.component */ 58088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);







class EmployeeDetailsModule {
}
EmployeeDetailsModule.??fac = function EmployeeDetailsModule_Factory(t) { return new (t || EmployeeDetailsModule)(); };
EmployeeDetailsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: EmployeeDetailsModule });
EmployeeDetailsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _employee_details_routing_module__WEBPACK_IMPORTED_MODULE_2__.EmployeeDetailsRoutingModule,
            _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](EmployeeDetailsModule, { declarations: [_employee_details_landing_page_employee_details_landing_page_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeDetailsLandingPageComponent,
        _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeCreateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _employee_details_routing_module__WEBPACK_IMPORTED_MODULE_2__.EmployeeDetailsRoutingModule,
        _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_employee-details_employee-details_module_ts.js.map