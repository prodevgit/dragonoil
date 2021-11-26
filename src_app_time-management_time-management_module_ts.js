"use strict";
(self["webpackChunkdragon_oil"] = self["webpackChunkdragon_oil"] || []).push([["src_app_time-management_time-management_module_ts"],{

/***/ 87846:
/*!********************************************************************************************************!*\
  !*** ./src/app/time-management/time-management-landing-page/time-management-landing-page.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeManagementLandingPageComponent": () => (/* binding */ TimeManagementLandingPageComponent)
/* harmony export */ });
/* harmony import */ var _core_render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/render/custom-render/custom-render.component */ 13640);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/constants/constants */ 78073);
/* harmony import */ var _widget_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../widget/badge/badge.component */ 59605);
/* harmony import */ var src_app_core_render_id_render_id_render_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/render/id-render/id-render.component */ 94144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _core_service_time_management_time_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/service/time-management/time-management.service */ 12061);
/* harmony import */ var _widget_date_pickert_date_pickert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widget/date-pickert/date-pickert.component */ 67662);
/* harmony import */ var _widget_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widget/nav-bar/nav-bar.component */ 35042);
/* harmony import */ var _chart_donut_graph_donut_graph_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../chart/donut-graph/donut-graph.component */ 72107);
/* harmony import */ var _widget_lengends_lengends_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widget/lengends/lengends.component */ 25583);
/* harmony import */ var _chart_stacked_bar_graph_stacked_bar_graph_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../chart/stacked-bar-graph/stacked-bar-graph.component */ 73229);
/* harmony import */ var _chart_bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../chart/bar-graph/bar-graph.component */ 42482);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widget_table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../widget/table/table.component */ 92880);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function TimeManagementLandingPageComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", option_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](option_r1);
} }
class TimeManagementLandingPageComponent {
    constructor(_router, _timeService) {
        this._router = _router;
        this._timeService = _timeService;
        this.tableLimitOption = _core_constants_constants__WEBPACK_IMPORTED_MODULE_2__.tableConfig.tableLimitOption;
        this.tableLimit = _core_constants_constants__WEBPACK_IMPORTED_MODULE_2__.tableConfig.tableLimit;
        this.tableSearch = '';
        this.currentPage = 1;
        this.totalCount = 0;
        this.itemsPerPage = _core_constants_constants__WEBPACK_IMPORTED_MODULE_2__.tableConfig.pager;
        this.tableOption = _core_constants_constants__WEBPACK_IMPORTED_MODULE_2__.tableOption;
        this.timeSheetFilter = _core_constants_constants__WEBPACK_IMPORTED_MODULE_2__.timeSheetFilter;
        this.activeTimeSheetFilter = 0;
        this.tableSettings = {
            column: {
                id: {
                    title: 'Id',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'custom',
                    renderComponent: src_app_core_render_id_render_id_render_component__WEBPACK_IMPORTED_MODULE_4__.IdRenderComponent,
                    valuePrepareFunction: (value, row) => {
                        value = {
                            id: row === null || row === void 0 ? void 0 : row.id,
                            icon: 'ri-more-2-fill',
                            color: '#3298DB',
                            event: 'view',
                            row: row,
                            route: `/time-management/detail/${row === null || row === void 0 ? void 0 : row.id}`
                        };
                        return value;
                    }
                },
                wbselementname: {
                    title: 'WBS Element Name',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                wbsshortdescription: {
                    title: 'WBS Short Description',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                start_date: {
                    title: 'Start Date',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                start_time: {
                    title: 'Start Time',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                end_time: {
                    title: 'End Time',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                end_date: {
                    title: 'End Date',
                    icon: '',
                    clickable: true,
                    class: 'pointer',
                    type: 'text',
                },
                assignee: {
                    title: 'Assignee',
                    icon: '',
                    class: 'pointer',
                    type: 'custom',
                    renderComponent: _core_render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_0__.CustomRenderComponent,
                    valuePrepareFunction: (value, row) => {
                        var _a;
                        return (_a = row === null || row === void 0 ? void 0 : row.assignee) === null || _a === void 0 ? void 0 : _a.name;
                    }
                },
                ApprovalStatus: {
                    title: 'Status',
                    type: 'custom',
                    renderComponent: _widget_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__.BadgeComponent,
                    valuePrepareFunction: (value, row) => {
                        if (row) {
                            if (row.status === 'APPROVED') {
                                value = {
                                    color: '#9DE10A',
                                    value: row.status,
                                    fontColor: 'white'
                                };
                            }
                            else if (row.status === 'CANCELLED') {
                                value = {
                                    color: '#ff5252',
                                    value: row.status,
                                    fontColor: 'white'
                                };
                            }
                            else if (row.status === 'REJECTED') {
                                value = {
                                    color: '#e00404',
                                    value: row.status,
                                    fontColor: 'white'
                                };
                            }
                            else if (row.status === 'PENDING') {
                                value = {
                                    color: '#f77300',
                                    value: row.status,
                                    fontColor: 'white'
                                };
                            }
                            else {
                                value = {
                                    color: '',
                                    value: row.status,
                                    fontColor: '#000000'
                                };
                            }
                        }
                        return value;
                    }
                },
            }
        };
        this.stackedChartConfiguration = {
            width: 400,
            height: 320,
            margin: { top: 40, right: 40, bottom: 40, left: 40 },
            offsetHeight: 40
        };
        this.employeeChartConfiguration = {
            width: 300,
            height: 200,
            margin: { top: 40, right: 40, bottom: 40, left: 40 },
            offsetHeight: 40
        };
        this.approvalStatus = [];
        this.departmentChart = {
            color: [],
            label: [],
            data: [],
        };
        this.dateFilter = _core_constants_constants__WEBPACK_IMPORTED_MODULE_2__.dateFilter;
        this.selectedDateFilter = null;
        this.timeChart = {};
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_1__.SubSink();
    }
    ngOnInit() {
        this.gridData = [];
        this.setChart();
        this.timeDetails();
    }
    onTimesheetFilterClick(event) {
        this.activeTimeSheetFilter = event.index;
    }
    setChart() {
        this.subs.add(this._timeService.chart().subscribe(res => {
            var _a, _b, _c, _d, _e;
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_2__.ApiStatus.ok === res.status) {
                this.approvalStatus = (_b = (_a = res.timesheet) === null || _a === void 0 ? void 0 : _a.time_entry_approval_status) === null || _b === void 0 ? void 0 : _b.data;
                this.approvalCount = (_d = (_c = res.timesheet) === null || _c === void 0 ? void 0 : _c.time_entry_approval_status) === null || _d === void 0 ? void 0 : _d.count;
                this.departmentChart = this.horizontal((_e = res.timesheet) === null || _e === void 0 ? void 0 : _e.time_entry_by_department);
                //  this. timeChart = this.horizontal(res.employeeHorizontal);
            }
        }));
    }
    horizontal(res) {
        const color = [];
        const label = [];
        const data = [];
        res.forEach((element, i) => {
            label.push(element.type);
            element.details.forEach((el, j) => {
                if (!data[j]) {
                    data[j] = { name: '', data: [] };
                }
                const label = data[j].name = el.label;
                data[j].data.push(el.value);
                color[j] = el.color;
            });
        });
        return { color,
            label,
            data };
    }
    tablePageChange(offSet) {
        this.timeDetails(offSet, this.tableSearch, this.tableLimit);
    }
    timeDetails(offSet = 1, search = this.tableSearch, limit = this.tableLimit) {
        const gridParams = {
            q: search,
            offset: (offSet - 1) * this.tableLimit,
            limit: limit,
        };
        this.subs.add(this._timeService.grid(gridParams).subscribe(res => {
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_2__.ApiStatus.ok === res.status) {
                this.gridData = res.results;
                this.totalCount = res.count;
            }
        }));
    }
    search() {
        this.currentPage = 1;
        this.timeDetails();
    }
    dataFilterClick(event) {
        this.selectedDateFilter = event.index;
    }
    create() {
        this._router.navigate(['/task-entry/create/time']);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
TimeManagementLandingPageComponent.ɵfac = function TimeManagementLandingPageComponent_Factory(t) { return new (t || TimeManagementLandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_service_time_management_time_management_service__WEBPACK_IMPORTED_MODULE_5__.TimeManagementService)); };
TimeManagementLandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: TimeManagementLandingPageComponent, selectors: [["app-time-management-landing-page"]], decls: 62, vars: 39, consts: [[1, "py-2"], [1, "row"], [1, "col-12", "col-sm-6"], [1, "title-blue"], [1, "col-12", "col-md-6"], [1, "title-right", "d-flex", "py-1"], [3, "dataFilter", "selectedDataFilter", "dataFilterClick"], [1, "chart-task"], [1, "col-12", "col-md-4"], [1, "h-100", "pb-16"], [1, "card", "card-round", "h-100"], [1, "do-header", "card-header"], [1, "do-card-title"], [1, "card-body", "d-flex", "justify-content-center", "p-0"], [3, "data", "center"], [1, "card-footer"], [3, "legends"], [1, "card-body"], [3, "data"], [3, "data", "horizontalGraph"], [1, "card", "card-round"], [1, "col-sm-12", "col-md-6"], ["id", "example_length", 1, "table-head"], ["aria-controls", "example", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["id", "example_filter", 1, "dataTables_filter"], ["type", "search", 1, "form-control", "form-control-sm", 3, "ngModel", "search", "ngModelChange"], [3, "currentPage", "settings", "gridData", "totalCount", "tableLimit", "pageChange"], [3, "value"]], template: function TimeManagementLandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "app-date-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "app-nav-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dataFilterClick", function TimeManagementLandingPageComponent_Template_app_nav_bar_dataFilterClick_9_listener($event) { return ctx.dataFilterClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "app-donut-graph", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "app-lengends", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "app-stacked-bar-graph", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "app-nav-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("dataFilterClick", function TimeManagementLandingPageComponent_Template_app_nav_bar_dataFilterClick_40_listener($event) { return ctx.onTimesheetFilterClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](42, "app-bar-graph", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function TimeManagementLandingPageComponent_Template_select_ngModelChange_51_listener($event) { return ctx.tableLimit = $event; })("ngModelChange", function TimeManagementLandingPageComponent_Template_select_ngModelChange_51_listener() { return ctx.timeDetails(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](52, TimeManagementLandingPageComponent_ng_container_52_Template, 3, 2, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("search", function TimeManagementLandingPageComponent_Template_input_search_60_listener() { return ctx.search(); })("ngModelChange", function TimeManagementLandingPageComponent_Template_input_ngModelChange_60_listener($event) { return ctx.tableSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "app-table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("pageChange", function TimeManagementLandingPageComponent_Template_app_table_pageChange_61_listener($event) { return ctx.tablePageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 25, "Time Approval"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataFilter", ctx.dateFilter)("selectedDataFilter", ctx.selectedDateFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 27, "Approval Status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("data", ctx.approvalStatus)("center", ctx.approvalCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("legends", ctx.approvalStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](29, 29, "Department wise Time Spent"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("data", ctx.departmentChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](38, 31, "Date Wise Timesheet"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataFilter", ctx.timeSheetFilter)("selectedDataFilter", ctx.activeTimeSheetFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("data", ctx.departmentChart)("horizontalGraph", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](50, 33, "Show"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.tableLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.tableOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](54, 35, "entries"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](59, 37, "Search"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.tableSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("currentPage", ctx.currentPage)("settings", ctx.tableSettings)("gridData", ctx.gridData)("totalCount", ctx.totalCount)("tableLimit", ctx.tableLimit);
    } }, directives: [_widget_date_pickert_date_pickert_component__WEBPACK_IMPORTED_MODULE_6__.DatePickerComponent, _widget_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__.SquareBarComponent, _chart_donut_graph_donut_graph_component__WEBPACK_IMPORTED_MODULE_8__.DonutGraphComponent, _widget_lengends_lengends_component__WEBPACK_IMPORTED_MODULE_9__.LengendsComponent, _chart_stacked_bar_graph_stacked_bar_graph_component__WEBPACK_IMPORTED_MODULE_10__.StackedBarGraphComponent, _chart_bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_11__.BarGraphComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _widget_table_table_component__WEBPACK_IMPORTED_MODULE_12__.TableComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lLW1hbmFnZW1lbnQtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5103:
/*!*******************************************************************!*\
  !*** ./src/app/time-management/time-management-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeManagementRoutingModule": () => (/* binding */ TimeManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _time_managemnet_detail_time_managemnet_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-managemnet-detail/time-managemnet-detail.component */ 81244);
/* harmony import */ var _time_management_landing_page_time_management_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-management-landing-page/time-management-landing-page.component */ 87846);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [{
        path: '',
        component: _time_management_landing_page_time_management_landing_page_component__WEBPACK_IMPORTED_MODULE_1__.TimeManagementLandingPageComponent,
        data: {
            title: 'Time Approval',
            mainMenu: 'Time Approval',
            hideTitle: true,
            urls: []
        }
    },
    {
        path: 'detail/:id',
        component: _time_managemnet_detail_time_managemnet_detail_component__WEBPACK_IMPORTED_MODULE_0__.TimeManagemnetDetailComponent,
        data: {
            title: 'Time Approval',
            mainMenu: 'Time Approval',
            hideTitle: true,
            urls: []
        }
    },
];
class TimeManagementRoutingModule {
}
TimeManagementRoutingModule.ɵfac = function TimeManagementRoutingModule_Factory(t) { return new (t || TimeManagementRoutingModule)(); };
TimeManagementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TimeManagementRoutingModule });
TimeManagementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TimeManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 86226:
/*!***********************************************************!*\
  !*** ./src/app/time-management/time-management.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeManagementModule": () => (/* binding */ TimeManagementModule)
/* harmony export */ });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/core.module */ 40294);
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../widget/widget.module */ 88503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _time_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-management-routing.module */ 5103);
/* harmony import */ var _time_management_landing_page_time_management_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time-management-landing-page/time-management-landing-page.component */ 87846);
/* harmony import */ var _chart_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chart/chart.module */ 76534);
/* harmony import */ var _time_managemnet_detail_time_managemnet_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-managemnet-detail/time-managemnet-detail.component */ 81244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);








class TimeManagementModule {
}
TimeManagementModule.ɵfac = function TimeManagementModule_Factory(t) { return new (t || TimeManagementModule)(); };
TimeManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TimeManagementModule });
TimeManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _time_management_routing_module__WEBPACK_IMPORTED_MODULE_2__.TimeManagementRoutingModule,
            _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            _chart_chart_module__WEBPACK_IMPORTED_MODULE_4__.ChartModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TimeManagementModule, { declarations: [_time_management_landing_page_time_management_landing_page_component__WEBPACK_IMPORTED_MODULE_3__.TimeManagementLandingPageComponent,
        _time_managemnet_detail_time_managemnet_detail_component__WEBPACK_IMPORTED_MODULE_5__.TimeManagemnetDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _time_management_routing_module__WEBPACK_IMPORTED_MODULE_2__.TimeManagementRoutingModule,
        _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _chart_chart_module__WEBPACK_IMPORTED_MODULE_4__.ChartModule] }); })();


/***/ }),

/***/ 81244:
/*!********************************************************************************************!*\
  !*** ./src/app/time-management/time-managemnet-detail/time-managemnet-detail.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeManagemnetDetailComponent": () => (/* binding */ TimeManagemnetDetailComponent)
/* harmony export */ });
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _core_service_time_management_time_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/service/time-management/time-management.service */ 12061);
/* harmony import */ var src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helper/toast.helper.service */ 27995);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var angular_mentions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-mentions */ 6449);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);










function TimeManagemnetDetailComponent_div_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "blockquote", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00A0\u00A0 ", ctx_r0.timeDetails == null ? null : ctx_r0.timeDetails.comment, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 2, "Date"), ": 8/5/2021 2:02:09 PM");
} }
function TimeManagemnetDetailComponent_div_150_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TimeManagemnetDetailComponent_div_150_Template_textarea_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.comment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimeManagemnetDetailComponent_div_150_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.approve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimeManagemnetDetailComponent_div_150_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, "Enter your comments..."));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mention", ctx_r1.userList)("ngModel", ctx_r1.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 7, "Approve Entry"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 9, "Reject Entry"), " ");
} }
const _c0 = function (a0, a1, a2, a3) { return { "badge-pending": a0, "badge-approve": a1, "badge-rejected": a2, "badge-cancelled": a3 }; };
class TimeManagemnetDetailComponent {
    constructor(_router, _timeService, _toast, _activated) {
        this._router = _router;
        this._timeService = _timeService;
        this._toast = _toast;
        this._activated = _activated;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    ngOnInit() {
        this.comment = '';
        this.getUserList();
        this.subs.add(this._activated.params.subscribe(res => {
            this.id = res['id'];
            if (this.id) {
                this.getDetail();
            }
        }));
    }
    view() {
        this._router.navigate(['/time-management']);
    }
    getUserList() {
        this.subs.add(this._timeService.userList()
            .subscribe(data => {
            if (data.status === src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok) {
                this.userList = [];
                data.forEach(element => {
                    this.userList.push(element.name);
                });
            }
        }));
    }
    getDetail() {
        this.subs.add(this._timeService.timeDetails(this.id).subscribe(res => {
            if (src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                delete res.Status;
                this.timeDetails = res[0];
            }
        }));
    }
    approve() {
        var _a, _b, _c;
        const approve = new FormData();
        approve.append('request_id', (_c = (_b = (_a = this.timeDetails) === null || _a === void 0 ? void 0 : _a.approval_level_set[0]) === null || _b === void 0 ? void 0 : _b.level1) === null || _c === void 0 ? void 0 : _c.request_id);
        approve.append('time_id', +this.id);
        approve.append('action_type', 'approve');
        approve.append('request_type', 'create');
        approve.append('comment', this.comment);
        this.subs.add(this._timeService.approve(approve).subscribe(res => {
            if (src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                this._toast.success(res.message);
                this.view();
            }
        }));
    }
    reject() {
        var _a, _b, _c;
        const reject = new FormData();
        reject.append('request_id', (_c = (_b = (_a = this.timeDetails) === null || _a === void 0 ? void 0 : _a.approval_level_set[0]) === null || _b === void 0 ? void 0 : _b.level1) === null || _c === void 0 ? void 0 : _c.request_id);
        reject.append('time_id', +this.id);
        reject.append('action_type', 'reject');
        reject.append('request_type', 'create');
        reject.append('comment', this.comment);
        this.subs.add(this._timeService.approve(reject).subscribe(res => {
            if (src_app_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                this._toast.success(res.message);
                this.view();
            }
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
TimeManagemnetDetailComponent.ɵfac = function TimeManagemnetDetailComponent_Factory(t) { return new (t || TimeManagemnetDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_service_time_management_time_management_service__WEBPACK_IMPORTED_MODULE_2__.TimeManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
TimeManagemnetDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TimeManagemnetDetailComponent, selectors: [["app-time-managemnet-detail"]], decls: 151, vars: 80, consts: [[1, "py-2"], [1, "row"], [1, "col-12", "col-md-8"], [1, "title-blue"], [1, "col-12", "col-md-4"], [1, "title-right"], [1, "btn-blue-gradient", 3, "click"], [1, "card", "card-round"], [1, "card-body", "form-Font"], [1, "col-12"], [1, "invoice", "p-3"], [1, "ri-global-line"], ["id", "ContentPlaceHolder1_rptrDetail_lblStatus_0", 1, "badge", 3, "ngClass"], [1, "float-right"], [1, "col-12", "col-sm-6", "col-md-4"], [1, "form-group"], [1, "text-danger"], [1, "form-control"], [1, "col-12", "col-md-6"], [1, "lead"], [1, "table-responsive"], [1, "table"], [2, "width", "50%"], [2, "font-size", "22px"], ["class", "row no-print", 4, "ngIf"], [1, "row", "no-print"], ["id", "ContentPlaceHolder1_rptrDetail_pnlComment_0"], [1, ""], [1, "quote-secondary"], [1, "ri-chat-1-line"], ["rows", "2", "cols", "20", "id", "ContentPlaceHolder1_rptrDetail_txtComment_0", 1, "form-control", 3, "mention", "placeholder", "ngModel", "ngModelChange"], [1, "col-12", "mt-4"], [1, "btn", "btn-default", "btn-approve", "float-right", 3, "click"], [1, "ri-checkbox-circle-line"], ["id", "ContentPlaceHolder1_rptrDetail_lbtnReject_0", 1, "btn", "btn-default", "btn-reject", "float-right", 2, "margin-right", "5px", 3, "click"], [1, "ri-close-circle-line"]], template: function TimeManagemnetDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimeManagemnetDetailComponent_Template_button_click_8_listener() { return ctx.view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "AED 100.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "AED 120.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "11:00:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](134, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "AED 800.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "AED 360.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](146, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "AED 1160.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](149, TimeManagemnetDetailComponent_div_149_Template, 11, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](150, TimeManagemnetDetailComponent_div_150_Template, 13, 11, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 33, "Time Entry Details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 35, "Master Details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](75, _c0, (ctx.timeDetails == null ? null : ctx.timeDetails.status) === "PENDING", (ctx.timeDetails == null ? null : ctx.timeDetails.status) === "APPROVED", (ctx.timeDetails == null ? null : ctx.timeDetails.status) === "REJECTED", (ctx.timeDetails == null ? null : ctx.timeDetails.status) === "CANCELLED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.timeDetails == null ? null : ctx.timeDetails.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Entry Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 37, ctx.timeDetails == null ? null : ctx.timeDetails.created_date), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 39, "WBS Company Code"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.timeDetails == null ? null : ctx.timeDetails.CompanyCode == null ? null : ctx.timeDetails.CompanyCode.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 41, "Assignee"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.timeDetails == null ? null : ctx.timeDetails.assignee == null ? null : ctx.timeDetails.assignee.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](46, 43, "End Date"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.timeDetails == null ? null : ctx.timeDetails.end_date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](54, 45, "End Time"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.timeDetails == null ? null : ctx.timeDetails.end_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](62, 47, "start Time"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.timeDetails == null ? null : ctx.timeDetails.start_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](70, 49, "WBS Element Name"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.timeDetails == null ? null : ctx.timeDetails.wbselementname);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](78, 51, "WBS Short Description"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.timeDetails == null ? null : ctx.timeDetails.wbsshortdescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](86, 53, "Start Date"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.timeDetails == null ? null : ctx.timeDetails.start_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](95, 55, "User Charges"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](102, 57, "Working Hours"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](108, 59, "Charge / Hour"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](114, 61, "Overtime / Hour"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](120, 63, "Time"), " & ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](121, 65, "Expense"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](128, 67, "Total Hour's worked"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](134, 69, "Normal Expense"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](140, 71, "Overtime Expense"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](146, 73, "Total"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.timeDetails == null ? null : ctx.timeDetails.status) !== "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.timeDetails == null ? null : ctx.timeDetails.status) === "PENDING");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, angular_mentions__WEBPACK_IMPORTED_MODULE_8__.MentionDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["blockquote[_ngcontent-%COMP%] {\n  background: #fff;\n  border-left: 0.7rem solid #6c757d;\n  padding: 0.5em 0.7rem;\n}\n\ntr[_ngcontent-%COMP%] {\n  background-color: #e5e3ea85;\n  border-bottom: 15px solid #f8f8f8;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n  border-radius: 20px;\n  margin-left: 20px;\n  font-size: 16px;\n  position: relative;\n  top: -5px;\n}\n\n.badge.badge-success[_ngcontent-%COMP%] {\n  color: #40835c !important;\n  background-color: #bcfad6 !important;\n}\n\nsmall[_ngcontent-%COMP%], .small[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\ntbody[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.btn-reject[_ngcontent-%COMP%] {\n  background: #f7b0b0 !important;\n  border: 0 !important;\n  color: #c83f5a;\n  border-radius: 30px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.btn-approve[_ngcontent-%COMP%] {\n  background: #bcfad6 !important;\n  border: 0 !important;\n  color: #40835c;\n  border-radius: 30px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.badge-pending[_ngcontent-%COMP%] {\n  background-color: #f77300;\n}\n\n.badge-approve[_ngcontent-%COMP%] {\n  background-color: #9DE10A;\n}\n\n.badge-rejected[_ngcontent-%COMP%] {\n  background-color: #e00404;\n}\n\n.badge-cancelled[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtbWFuYWdlbW5ldC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFBSTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7QUFFUjs7QUFFQTs7RUFFSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoidGltZS1tYW5hZ2VtbmV0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJsb2NrcXVvdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1sZWZ0OiAwLjdyZW0gc29saWQgIzZjNzU3ZDtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAuN3JlbTtcclxufVxyXG5cclxudHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTNlYTg1O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCAjZjhmOGY4O1xyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICAmLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gICAgICAgIGNvbG9yOiAjNDA4MzVjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JjZmFkNiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5zbWFsbCxcclxuLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxudGJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYnRuLXJlamVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdiMGIwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjYzgzZjVhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tYXBwcm92ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmNmYWQ2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDA4MzVjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5iYWRnZS1wZW5kaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzczMDA7XHJcbn1cclxuXHJcbi5iYWRnZS1hcHByb3ZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5REUxMEE7XHJcbn1cclxuXHJcbi5iYWRnZS1yZWplY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTAwNDA0O1xyXG59XHJcblxyXG4uYmFkZ2UtY2FuY2VsbGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjUyNTJcclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_time-management_time-management_module_ts.js.map