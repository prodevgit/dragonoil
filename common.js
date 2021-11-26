"use strict";
(self["webpackChunkdragon_oil"] = self["webpackChunkdragon_oil"] || []).push([["common"],{

/***/ 12061:
/*!*************************************************************************!*\
  !*** ./src/app/core/service/time-management/time-management.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeManagementService": () => (/* binding */ TimeManagementService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/http.service */ 3726);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);





class TimeManagementService {
    constructor(http, _function) {
        this.http = http;
        this._function = _function;
    }
    grid(gridParams = { q: '', offset: 0, limit: 10 }) {
        const keys = Object.keys(gridParams);
        const value = Object.values(gridParams);
        let query = '?';
        for (let i = 0; i < keys.length; i++) {
            if (value[i] !== '') {
                query += keys[i] + '=' + encodeURIComponent(value[i]) + '&';
            }
        }
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeManagementGrid + query);
    }
    chart() {
        // return of ({ timesheet: timeChart.timesheet ,status: 200 })
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeChart);
    }
    timeEntryXls() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiVersion + _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeEntryXls;
    }
    timeEntryCsv() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiVersion + _constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeEntryCsv;
    }
    projectList() {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.projectList);
    }
    taskList() {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.taskList);
    }
    timeDetails(id) {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeManagementDetails + '?id=' + id);
    }
    userList() {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.userList);
    }
    approve(data) {
        return this.http.post(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.approve, data);
    }
}
TimeManagementService.ɵfac = function TimeManagementService_Factory(t) { return new (t || TimeManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_common_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService)); };
TimeManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TimeManagementService, factory: TimeManagementService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map