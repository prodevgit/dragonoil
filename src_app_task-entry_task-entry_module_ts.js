"use strict";
(self["webpackChunkdragon_oil"] = self["webpackChunkdragon_oil"] || []).push([["src_app_task-entry_task-entry_module_ts"],{

/***/ 57347:
/*!*****************************************!*\
  !*** ./src/app/core/mock/time-entry.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeChart": () => (/* binding */ timeChart)
/* harmony export */ });
const timeChart = {
    horizontal: [
        {
            'type': 'QA',
            'details': [
                {
                    'label': 'Utilized',
                    'value': 22,
                    'color': '#FFC107',
                    'amount': 446
                },
                {
                    'label': 'Available',
                    'value': 78,
                    'color': '#62c84a',
                    'amount': 1554
                }
            ],
            'total_amount': 2000
        },
        {
            'type': 'HR',
            'details': [
                {
                    'label': 'Utilized',
                    'value': 24,
                    'color': '#FFC107',
                    'amount': 480
                },
                {
                    'label': 'Available',
                    'value': 76,
                    'color': '#62c84a',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }
    ],
    donut: {
        'data': [
            {
                'label': 'Sick Leave DOHL',
                'data': 35,
                'color': ' rgb(242, 126, 58)'
            },
            {
                'label': 'Annual Leave DOHL',
                'data': 10,
                'color': 'rgb(229, 53, 53)'
            },
            {
                'label': 'Military Service Leave DOHL',
                'data': 70,
                'color': 'rgb(102, 187, 102)'
            },
            {
                'label': 'Training Leave DOHL',
                'data': 20,
                'color': 'rgb(249, 184, 89)'
            }
        ],
        'count': 9266,
    },
    bar: {
        'data': [
            {
                'label': '20-11-2021',
                'data': 2235,
                'color': ' rgb(242, 126, 58)'
            },
            {
                'label': '21-11-2021',
                'data': 1800,
                'color': 'rgb(229, 53, 53)'
            },
            {
                'label': '22-11-2021',
                'data': 2700,
                'color': 'rgb(102, 187, 102)'
            },
            {
                'label': '23-11-2021',
                'data': 2270,
                'color': 'rgb(249, 184, 89)'
            }
        ],
        'count': 926,
    },
    donutApprove: {
        'data': [
            {
                'label': 'APPROVED',
                'data': 7000,
                'color': 'green'
            },
            {
                'label': 'CANCELLED',
                'data': 500,
                'color': 'red'
            },
            {
                'label': 'REJECTED',
                'data': 300,
                'color': '#ed5324'
            },
            {
                'label': 'PENDING',
                'data': 200,
                'color': '#d9ba0b'
            }
        ],
        'count': 926,
    },
    timesheet: { time_entry_by_department: [
            {
                'type': 'Human Capital Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 6,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 293,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 91,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 10,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 12,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 4,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 6,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 1,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 6,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 3,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 8,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 45,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 4,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 8,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 2,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 3,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 1,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 1,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 1,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 1,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 12,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 15,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 927,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 10,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 7,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 243,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 6,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 6,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 132,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 12,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 2,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 1,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 5,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 1,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 1,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Procurement Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 2,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 536,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 132,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 40,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 3,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 3,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 28,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 1,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 5,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 18,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 34,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 91,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 79,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 16,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 6,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 9,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 12,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 1,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 2,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 5,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 82,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 3,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 1,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 70,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 2,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 1,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 22,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Engineering Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 14,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 424,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 76,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 52,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 1,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 2,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 9,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 1,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 6,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 10,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 32,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 52,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 42,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 13,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 4,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 4,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 1,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 1,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 1,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 14,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 5,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 6,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 3,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 8,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 1,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 4,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Engineering & Projects Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 8,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 150,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 30,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 5,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 1,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 3,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 6,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 1,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 1,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 12,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 3,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 15,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 5,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 3,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 1,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 2,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 1,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 1,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 1,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Asset Integrity Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 1,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 149,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 37,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 18,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 17,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 1,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 4,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 1,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 1,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 4,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 37,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 26,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 29,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 14,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 1,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 2,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 60,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 1,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Communication Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 4,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 183,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 67,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 6,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 1,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 7,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 13,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 1,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 7,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 6,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 7,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 35,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 19,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 1,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 1,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 5,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 1,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Reservoir Development Operations Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 9,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 240,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 32,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 27,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 1,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 10,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 3,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 21,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 3,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 70,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 10,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 8,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 3,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 7,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 1,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Finance Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 7,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 317,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 89,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 12,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 1,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 52,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 1,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 20,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 28,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 65,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 8,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 1,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 2,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 4,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Reservoir Development Studies Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 2,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 191,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 38,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 25,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 7,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 7,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 4,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 1,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 2,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 27,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 15,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 6,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 1,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 3,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Project Management Office Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 169,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 46,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 12,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 1,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 27,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 1,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 24,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 29,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 15,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 9,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 8,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 1,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Projects Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 197,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 34,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 8,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 6,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 6,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 2,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 3,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 8,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 9,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 24,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 1,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 4,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Drilling Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 253,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 42,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 22,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 2,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 1,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 5,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 29,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 27,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 50,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 1,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 4,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Marketing Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 12,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 3,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 2,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 1,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 2,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 11,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 5,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 1,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 1,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Information Technology Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 363,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 146,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 9,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 2,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 4,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 19,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 127,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 2,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'HSE Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 56,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 4,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 12,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 1,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 3,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 2,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'New Ventures and Exploration Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 98,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 19,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 4,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 1,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 3,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 5,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'New Venture /Engineering & Projects Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 29,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 3,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 5,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 7,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 2,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'A&D Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 25,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 6,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 5,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 7,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 2,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'CEO Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 21,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 5,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 7,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 14,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 8,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Operating Asset  Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 68,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 11,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 21,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 1,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 3,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Technical Support (Egypt/Iraq) Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 79,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 5,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 1,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 1,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 3,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Internal Audit Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 49,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 12,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 7,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 0,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 2,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Legal Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 108,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 36,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 4,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 0,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 0,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Corporate Services Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 33,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 6,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 6,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 0,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 0,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Non-Operated Assets Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 34,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 3,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 0,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 0,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 0,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Field Human Capital Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 2,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 1,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 0,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 0,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 0,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            },
            {
                'type': 'Field HSE Department',
                'details': [
                    {
                        'label': 'Military Service Leave DOHL',
                        'value': 0,
                        'color': '#6ce0e0'
                    },
                    {
                        'label': 'Annual Leave DOHL',
                        'value': 0,
                        'color': '#6cd6e0'
                    },
                    {
                        'label': 'Sick Leave DOHL',
                        'value': 0,
                        'color': '#e06cb1'
                    },
                    {
                        'label': 'Business Trip Leave DOHL',
                        'value': 0,
                        'color': '#9187c5'
                    },
                    {
                        'label': 'Study Leave DOHL',
                        'value': 0,
                        'color': '#40bf53'
                    },
                    {
                        'label': 'Escort Leave In UAE',
                        'value': 0,
                        'color': '#2d7d86'
                    },
                    {
                        'label': 'Training Leave DOHL',
                        'value': 0,
                        'color': '#862d6b'
                    },
                    {
                        'label': 'Maternity Leave DOHL',
                        'value': 0,
                        'color': '#2d3086'
                    },
                    {
                        'label': 'Hospitalization Leave DOHL',
                        'value': 0,
                        'color': '#bf4075'
                    },
                    {
                        'label': 'Business Travel',
                        'value': 0,
                        'color': '#522d86'
                    },
                    {
                        'label': 'Permission â€“ Official',
                        'value': 0,
                        'color': '#ac7d53'
                    },
                    {
                        'label': 'Permission â€“ Personal',
                        'value': 0,
                        'color': '#87a6c5'
                    },
                    {
                        'label': 'DOHL_PERMISSION',
                        'value': 0,
                        'color': '#1f7493'
                    },
                    {
                        'label': 'Absent',
                        'value': 0,
                        'color': '#931f3c'
                    },
                    {
                        'label': 'Compensatory Time Off',
                        'value': 0,
                        'color': '#1f3393'
                    },
                    {
                        'label': 'Compassionate Leave DOHL',
                        'value': 0,
                        'color': '#3a5978'
                    },
                    {
                        'label': 'Working Hour',
                        'value': 0,
                        'color': '#a8e06c'
                    },
                    {
                        'label': 'OverTime',
                        'value': 0,
                        'color': '#e06cc1'
                    },
                    {
                        'label': 'Escort Leave Internation DOHL',
                        'value': 0,
                        'color': '#9740bf'
                    },
                    {
                        'label': 'Paternity Leave DOHL',
                        'value': 0,
                        'color': '#5940bf'
                    },
                    {
                        'label': 'Leave Without Pay',
                        'value': 0,
                        'color': '#40b7bf'
                    },
                    {
                        'label': 'Permission â€“ Child Feeding Hours',
                        'value': 0,
                        'color': '#53d22d'
                    },
                    {
                        'label': 'Working Day',
                        'value': 0,
                        'color': '#53ac9c'
                    },
                    {
                        'label': 'Travel Day 1 to Home',
                        'value': 0,
                        'color': '#2d3d86'
                    },
                    {
                        'label': 'Travel Day 2 to Home',
                        'value': 0,
                        'color': '#361f93'
                    },
                    {
                        'label': 'Off Rotation',
                        'value': 0,
                        'color': '#6f53ac'
                    },
                    {
                        'label': 'Travel Day 1 to Field',
                        'value': 0,
                        'color': '#933c1f'
                    },
                    {
                        'label': 'Travel Day 2 to Field',
                        'value': 0,
                        'color': '#532d86'
                    },
                    {
                        'label': 'Off Rotation (50%)',
                        'value': 0,
                        'color': '#63ac53'
                    },
                    {
                        'label': 'Off Rotation (20%)',
                        'value': 0,
                        'color': '#3a7869'
                    },
                    {
                        'label': 'Off Rotation (30%)',
                        'value': 0,
                        'color': '#2d5e86'
                    },
                    {
                        'label': 'Training',
                        'value': 0,
                        'color': '#7982d2'
                    },
                    {
                        'label': 'Work Outside Turkmenistan',
                        'value': 0,
                        'color': '#d24b2d'
                    },
                    {
                        'label': 'Travel Dubai-Hazar/Ashabat',
                        'value': 0,
                        'color': '#84bf40'
                    },
                    {
                        'label': 'Educational Leave',
                        'value': 0,
                        'color': '#b7c587'
                    }
                ]
            }
        ]
    },
    dateHorizontal: [
        {
            'type': '2020-11-1',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-17',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-2',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-3',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-5',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-6',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-7',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-8',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-9',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-10',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-11',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-12',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-13',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-14',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-15',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-16',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-12-17',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-12-18',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-12-19',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }, {
            'type': '2020-11-17',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        },
        {
            'type': '2020-11-17',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 176,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        },
        {
            'type': '2020-11-18',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 22,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 78,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 76,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 76,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        },
        {
            'type': '2020-11-31',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 222,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 376,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        },
        {
            'type': '2020-11-19',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 232,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 178,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 276,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 376,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        },
        {
            'type': '2020-11-20',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 122,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 278,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 276,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 376,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        },
        {
            'type': '2020-11-21',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 322,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 278,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 176,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 764,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        },
        {
            'type': '2020-11-23',
            'details': [
                {
                    'label': 'Sick Leave DOHL',
                    'value': 222,
                    'color': ' rgb(242, 126, 58)',
                    'amount': 446
                },
                {
                    'label': 'Annual Leave DOHL',
                    'value': 74,
                    'color': 'rgb(229, 53, 53)',
                    'amount': 1554
                },
                {
                    'label': 'Military Service Leave DOHL',
                    'value': 76,
                    'color': 'rgb(249, 184, 89)',
                    'amount': 1520
                },
                {
                    'label': 'Training Leave DOHL',
                    'value': 18,
                    'color': 'rgb(102, 187, 102)',
                    'amount': 1520
                }
            ],
            'total_amount': 2000
        }
    ],
    status: 200
};


/***/ }),

/***/ 33756:
/*!***************************************************************!*\
  !*** ./src/app/core/service/time-entry/time-entry.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeEntryService": () => (/* binding */ TimeEntryService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/http.service */ 3726);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);





class TimeEntryService {
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
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeEntryGrid + query);
    }
    gridDate(gridParams = { q: '', offset: 0, limit: 10, start_date: this._function.convertToServerDate(new Date()), end_date: this._function.convertToServerDate(new Date()) }) {
        const keys = Object.keys(gridParams);
        const value = Object.values(gridParams);
        let query = '?';
        for (let i = 0; i < keys.length; i++) {
            if (value[i] !== '') {
                query += keys[i] + '=' + encodeURIComponent(value[i]) + '&';
            }
        }
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeEntryDateWise + query);
    }
    chart() {
        //  return of (timeChart);
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeEntryChart);
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
    userList() {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.userList);
    }
    timeDetails(id) {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeEntryDetails + '?id=' + id);
    }
    taskList() {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.taskList);
    }
    create(formData) {
        return this.http.post(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeEntryCreate, formData);
    }
    edit(formData, id) {
        return this.http.put(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiEndpoints.timeEntryEdit + id + '/edit/', formData);
    }
}
TimeEntryService.ɵfac = function TimeEntryService_Factory(t) { return new (t || TimeEntryService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_common_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService)); };
TimeEntryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TimeEntryService, factory: TimeEntryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 35350:
/*!*****************************************************************************************!*\
  !*** ./src/app/task-entry/task-entry-landing-page/task-entry-landing-page.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskEntryLandingPageComponent": () => (/* binding */ TaskEntryLandingPageComponent)
/* harmony export */ });
/* harmony import */ var _widget_badge_badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../widget/badge/badge.component */ 59605);
/* harmony import */ var _core_render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/render/custom-render/custom-render.component */ 13640);
/* harmony import */ var _core_render_tablemoreoption_tablemoreoption_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/render/tablemoreoption/tablemoreoption.component */ 47035);
/* harmony import */ var _core_mock_time_entry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/mock/time-entry */ 57347);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/constants/constants */ 78073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _core_service_time_entry_time_entry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/service/time-entry/time-entry.service */ 33756);
/* harmony import */ var _widget_date_pickert_date_pickert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widget/date-pickert/date-pickert.component */ 67662);
/* harmony import */ var _widget_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widget/nav-bar/nav-bar.component */ 35042);
/* harmony import */ var _chart_donut_graph_donut_graph_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../chart/donut-graph/donut-graph.component */ 72107);
/* harmony import */ var _widget_lengends_lengends_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widget/lengends/lengends.component */ 25583);
/* harmony import */ var _chart_bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../chart/bar-graph/bar-graph.component */ 42482);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widget_table_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../widget/table/table.component */ 92880);
/* harmony import */ var _widget_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../widget/modal-basic/modal-basic.component */ 71335);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















const _c0 = ["timeModal"];
const _c1 = ["exportModal"];
function TaskEntryLandingPageComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](option_r3);
} }
class TaskEntryLandingPageComponent {
    constructor(_router, _timeService) {
        this._router = _router;
        this._timeService = _timeService;
        this.timeSheetFilter = _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.timeSheetFilter;
        this.dateFilter = _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.dateFilter;
        this.selectedDateFilter = null;
        this.activeTimeSheetFilter = 0;
        this.tableLimitOption = _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.tableConfig.tableLimitOption;
        this.tableLimit = _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.tableConfig.tableLimit;
        this.tableSearch = '';
        this.currentPage = 1;
        this.totalCount = 0;
        this.itemsPerPage = _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.tableConfig.pager;
        this.tableOption = _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.tableOption;
        this.descriptionChart = [];
        this.stackedChartConfiguration = {
            width: 400,
            height: 320,
            margin: { top: 40, right: 40, bottom: 40, left: 40 },
            offsetHeight: 40
        };
        this.tableMoreOption = _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.tableMoreOption;
        this.timeEntryDetails = {
            EndDate: '-',
            EndTime: '-',
            StartDate: '-',
            StartTime: '-',
            WBSElementName: '-',
            WBSShortDescription: '-',
            comment: '-',
            id: 0,
            companyCode: '-'
        };
        this.tableSettings = {
            column: {
                '': {
                    title: '',
                    class: 'pointer',
                    icon: '',
                    type: 'custom',
                    renderComponent: _core_render_tablemoreoption_tablemoreoption_component__WEBPACK_IMPORTED_MODULE_2__.TableMoreOptionComponent,
                    valuePrepareFunction: (value, row) => {
                        if (row.id) {
                            return this.tableMoreOption;
                        }
                        else {
                            return '';
                        }
                    }
                },
                id: {
                    title: 'Id',
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
                    renderComponent: _core_render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_1__.CustomRenderComponent,
                    valuePrepareFunction: (value, row) => {
                        var _a;
                        return (_a = row === null || row === void 0 ? void 0 : row.assignee) === null || _a === void 0 ? void 0 : _a.name;
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
                approver: {
                    title: 'Approver',
                    icon: '',
                    class: 'pointer',
                    type: 'custom',
                    renderComponent: _core_render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_1__.CustomRenderComponent,
                    valuePrepareFunction: (value, row) => {
                        var _a, _b, _c;
                        if (row === null || row === void 0 ? void 0 : row.approval_level_set) {
                            if (((_a = row === null || row === void 0 ? void 0 : row.approval_level_set) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
                                return (_c = (_b = row === null || row === void 0 ? void 0 : row.approval_level_set[0]) === null || _b === void 0 ? void 0 : _b.level1) === null || _c === void 0 ? void 0 : _c.approver;
                            }
                        }
                        return '-';
                    }
                },
                ApprovalStatus: {
                    title: 'Status',
                    type: 'custom',
                    renderComponent: _widget_badge_badge_component__WEBPACK_IMPORTED_MODULE_0__.BadgeComponent,
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
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_4__.SubSink();
    }
    ngOnInit() {
        this.gridData = [];
        this.setChart();
        this.timeDetails();
    }
    setChart() {
        this.subs.add(this._timeService.chart().subscribe(res => {
            var _a, _b, _c, _d;
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.ApiStatus.ok === res.status) {
                this.descriptionChart = (_b = (_a = res === null || res === void 0 ? void 0 : res.timeentry) === null || _a === void 0 ? void 0 : _a.time_hours_by_project) === null || _b === void 0 ? void 0 : _b.data;
                this.timeType = (_d = (_c = res === null || res === void 0 ? void 0 : res.timeentry) === null || _c === void 0 ? void 0 : _c.time_spend_by_type) === null || _d === void 0 ? void 0 : _d.data;
                this.TimeSheet = _core_mock_time_entry__WEBPACK_IMPORTED_MODULE_3__.timeChart.bar.data;
            }
        }));
    }
    customEvent(event) {
        var _a, _b;
        if (event.event === _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.commonEvent.view) {
            this.timeEntryDetails = {
                EndDate: event.data.end_date,
                EndTime: event.data.end_time,
                StartDate: event.data.start_date,
                StartTime: event.data.end_date,
                WBSElementName: event.data.wbselementname,
                WBSShortDescription: event.data.wbsshortdescription,
                comment: event.data.comment,
                id: event.data.id,
                companyCode: (_a = event.data.CompanyCode) === null || _a === void 0 ? void 0 : _a.value
            };
            this.openModal();
        }
        if (event.event === _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.commonEvent.edit) {
            this._router.navigate([`/task-entry/edit/${(_b = event === null || event === void 0 ? void 0 : event.data) === null || _b === void 0 ? void 0 : _b.id}`]);
        }
        if (event.event === _core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.commonEvent.delete) {
        }
    }
    openModal() {
        this.timeModal.show();
    }
    closeModal() {
        this.timeModal.hide();
    }
    // horizontalChart(res) {
    //   const color = [];
    //   const label = [];
    //   const data = [];
    //   res.forEach ((element, i) => {
    //     label.push (element.type);
    //     element.details.forEach ((el, j) => {
    //       if (!data[j]) {
    //         data[j] = { name: '', data: [] };
    //       }
    //       const label = data[j].name = el.label;
    //       data[j].data.push (el.value);
    //       color[j] = el.color;
    //     });
    //   });
    //   this.TimeSheet.data = data;
    //   this.TimeSheet['label'] = label;
    //   this.TimeSheet['color'] = color;
    // }
    create() {
        this._router.navigate(['/task-entry/create']);
    }
    onTimesheetFilterClick(event) {
        this.activeTimeSheetFilter = event.index;
    }
    dataFilterClick(event) {
        this.selectedDateFilter = event.index;
    }
    tablePageChange(offSet) {
        this.currentPage = (offSet);
        this.timeDetails(offSet, this.tableSearch, this.tableLimit);
    }
    timeDetails(offSet = 1, search = this.tableSearch, limit = this.tableLimit) {
        const gridParams = {
            q: search,
            page: offSet,
            limit: limit,
        };
        this.subs.add(this._timeService.grid(gridParams).subscribe(res => {
            var _a, _b;
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_5__.ApiStatus.ok === res.status) {
                this.gridData = (_a = res['time-entry-list']) === null || _a === void 0 ? void 0 : _a.result;
                this.totalCount = (_b = res['time-entry-list']) === null || _b === void 0 ? void 0 : _b.total_count;
            }
        }));
    }
    search() {
        this.currentPage = 1;
        this.timeDetails();
    }
    downloadCsv() {
        window.open(this._timeService.timeEntryCsv(), '_self');
    }
    downloadXls() {
        window.open(this._timeService.timeEntryXls(), '_self');
    }
    openExportPopUp() {
        this.exportModal.show();
    }
    closeExportModal() {
        this.exportModal.hide();
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
TaskEntryLandingPageComponent.ɵfac = function TaskEntryLandingPageComponent_Factory(t) { return new (t || TaskEntryLandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_service_time_entry_time_entry_service__WEBPACK_IMPORTED_MODULE_6__.TimeEntryService)); };
TaskEntryLandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: TaskEntryLandingPageComponent, selectors: [["app-task-entry-landing-page"]], viewQuery: function TaskEntryLandingPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.timeModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.exportModal = _t.first);
    } }, decls: 170, vars: 114, consts: [[1, "py-2"], [1, "row"], [1, "col-12", "col-md-8"], [1, "title-blue"], [1, "col-12", "col-md-4"], [1, "title-right"], [1, "btn-blue-gradient", 3, "click"], [1, "col-12"], [1, "title-right", "d-flex", "py-2"], [3, "dataFilter", "selectedDataFilter", "dataFilterClick"], [1, "chart-task"], [1, "h-100", "pb-16"], [1, "card", "card-round", "h-100"], [1, "do-header", "card-header"], [1, "do-card-title"], [1, "card-body", "d-flex", "justify-content-center", "p-0"], [1, "chart-width-mr-du"], [3, "data", "center", "subCenter", "centerSymbol"], [1, "card-footer"], [3, "legends"], [1, "card-body"], [3, "data", "horizontalGraph"], [1, "chart-width-mr-st"], [1, "card", "card-round"], [1, "mr-top-badge", "pb-2"], [1, "col-12", "col-md-2", "col-xl-1", "badge-style"], [1, "col-12", "col-sm-12"], [1, "py-1", "badge-hover", 3, "click"], [1, "col-sm-12", "col-md-6"], ["id", "example_length", 1, "table-head"], ["name", "example_length", "aria-controls", "example", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["id", "example_filter", 1, "dataTables_filter"], ["type", "text", "placeholder", "", "aria-controls", "example", 1, "form-control", "form-control-sm", 3, "ngModel", "keyup.enter", "ngModelChange"], [3, "settings", "gridData", "totalCount", "currentPage", "tableLimit", "pageChange", "customEvent"], [3, "disableOutSideClick", "hideHeader", "hideFooter", "hideBody", "dialogClass"], ["exportModal", ""], [1, "app-modal-header", "w-100", "d-flex", "justify-content-center", "align-items-center"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", 3, "click"], [1, "ri-close-line"], [1, "app-modal-footer", "w-100", "text-center"], [1, "exp-heading"], [1, "exp-subheading"], [1, "mt-2"], [1, "d-flex", "justify-content-center", "mt-3"], [1, "p-2"], [1, "export-icons"], ["src", "assets/images/svg/csv.svg", "height", "60px", "alt", "homepage", 1, "mt-3"], [1, "btn", "btn-primary", "pointer", "mt-3", 3, "click"], ["src", "assets/images/svg/xls.svg", "height", "60px", "alt", "homepage", 1, "mt-3"], [1, "p-3", "mb-5", "mt-3"], ["id", "cancel", 1, "btn", "btn-danger", "pointer", 3, "click"], [3, "disableOutSideClick", "hideHeader", "hideFooter", "hideBody", "isSmallModal", "dialogClass"], ["timeModal", ""], [1, "app-modal-header", "w-100", "d-flex", "justify-content-center", "align-items-center", "pr-2"], [1, "float-left", "do-black"], [1, "app-modal-body"], [1, "app-modal-footer", "w-100"], ["type", "button ", 1, "btn", "btn-secondary", "float-right", 3, "click"], [3, "value"]], template: function TaskEntryLandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TaskEntryLandingPageComponent_Template_button_click_8_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "app-date-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "app-nav-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("dataFilterClick", function TaskEntryLandingPageComponent_Template_app_nav_bar_dataFilterClick_14_listener($event) { return ctx.dataFilterClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "app-donut-graph", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "app-lengends", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "app-bar-graph", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "app-nav-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("dataFilterClick", function TaskEntryLandingPageComponent_Template_app_nav_bar_dataFilterClick_46_listener($event) { return ctx.onTimesheetFilterClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](49, "app-bar-graph", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TaskEntryLandingPageComponent_Template_div_click_57_listener() { return ctx.openExportPopUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function TaskEntryLandingPageComponent_Template_select_ngModelChange_66_listener($event) { return ctx.tableLimit = $event; })("ngModelChange", function TaskEntryLandingPageComponent_Template_select_ngModelChange_66_listener() { return ctx.timeDetails(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](67, TaskEntryLandingPageComponent_ng_container_67_Template, 3, 2, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup.enter", function TaskEntryLandingPageComponent_Template_input_keyup_enter_75_listener() { return ctx.search(); })("ngModelChange", function TaskEntryLandingPageComponent_Template_input_ngModelChange_75_listener($event) { return ctx.tableSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "app-table", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("pageChange", function TaskEntryLandingPageComponent_Template_app_table_pageChange_76_listener($event) { return ctx.tablePageChange($event); })("customEvent", function TaskEntryLandingPageComponent_Template_app_table_customEvent_76_listener($event) { return ctx.customEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "app-modal-basic", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TaskEntryLandingPageComponent_Template_button_click_80_listener() { return ctx.closeExportModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](81, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](93, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](96, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TaskEntryLandingPageComponent_Template_button_click_98_listener() { return ctx.downloadCsv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](102, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](103, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](104, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](105, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TaskEntryLandingPageComponent_Template_button_click_105_listener() { return ctx.downloadXls(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](108, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TaskEntryLandingPageComponent_Template_button_click_109_listener() { return ctx.closeExportModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](112, "app-modal-basic", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](115, "h5", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](117, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TaskEntryLandingPageComponent_Template_button_click_117_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](118, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](119, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](121, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](126, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](131, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](138, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](141, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](146, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](148, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](149, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](151, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](153, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](154, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](156, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](158, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](159, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](160);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](161, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](163, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](164, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](166, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](167, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function TaskEntryLandingPageComponent_Template_button_click_167_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](169, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 66, "Time Entry Master"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 68, "Create Entry"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataFilter", ctx.dateFilter)("selectedDataFilter", ctx.selectedDateFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 70, "Time Spent by Type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx.timeType)("center", 105)("subCenter", "Overall Time Spend")("centerSymbol", "hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("legends", ctx.timeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](35, 72, "WBS Description by Time "));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx.descriptionChart)("horizontalGraph", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](44, 74, "Timesheet"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataFilter", ctx.timeSheetFilter)("selectedDataFilter", ctx.activeTimeSheetFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", ctx.TimeSheet)("horizontalGraph", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](59, 76, "Export"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](65, 78, "Show"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.tableLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.tableOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](69, 80, "entries"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](74, 82, "Search"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.tableSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("settings", ctx.tableSettings)("gridData", ctx.gridData)("totalCount", ctx.totalCount)("currentPage", ctx.currentPage)("tableLimit", ctx.tableLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disableOutSideClick", false)("hideHeader", false)("hideFooter", false)("hideBody", true)("dialogClass", "bigger-modal-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](87, 84, "Export"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](92, 86, "Choose the file format you want to download."), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](100, 88, "Download CSV"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](107, 90, "Download XLS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](111, 92, "Cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disableOutSideClick", false)("hideHeader", false)("hideFooter", false)("hideBody", false)("isSmallModal", true)("dialogClass", "bigger-modal-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.timeEntryDetails.WBSElementName);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](123, 94, "Id"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.timeEntryDetails.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](128, 96, "End Date"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.timeEntryDetails.EndDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](133, 98, "End Time"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.timeEntryDetails.EndTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](138, 100, "Start Date"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.timeEntryDetails.StartDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](143, 102, "Start Time"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.timeEntryDetails.StartTime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](148, 104, "WBS Element Name"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.timeEntryDetails.WBSElementName);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](153, 106, "WBS Short Description"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.timeEntryDetails.WBSShortDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](158, 108, "comment"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.timeEntryDetails.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](163, 110, "companyCode"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.timeEntryDetails.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](169, 112, "close"));
    } }, directives: [_widget_date_pickert_date_pickert_component__WEBPACK_IMPORTED_MODULE_7__.DatePickerComponent, _widget_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__.SquareBarComponent, _chart_donut_graph_donut_graph_component__WEBPACK_IMPORTED_MODULE_9__.DonutGraphComponent, _widget_lengends_lengends_component__WEBPACK_IMPORTED_MODULE_10__.LengendsComponent, _chart_bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_11__.BarGraphComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _widget_table_table_component__WEBPACK_IMPORTED_MODULE_12__.TableComponent, _widget_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_13__.ModalBasicComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: ["dt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stZW50cnktbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUiIsImZpbGUiOiJ0YXNrLWVudHJ5LWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImR0IHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 88885:
/*!*********************************************************!*\
  !*** ./src/app/task-entry/task-entry-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskEntryRoutingModule": () => (/* binding */ TaskEntryRoutingModule)
/* harmony export */ });
/* harmony import */ var _time_entry_create_time_entry_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-entry-create/time-entry-create.component */ 99377);
/* harmony import */ var _task_entry_landing_page_task_entry_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-entry-landing-page/task-entry-landing-page.component */ 35350);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [{
        path: '',
        component: _task_entry_landing_page_task_entry_landing_page_component__WEBPACK_IMPORTED_MODULE_1__.TaskEntryLandingPageComponent,
        data: {
            title: 'Time Entry',
            mainMenu: 'Time Entry',
            hideTitle: true,
            urls: []
        }
    },
    {
        path: 'create',
        component: _time_entry_create_time_entry_create_component__WEBPACK_IMPORTED_MODULE_0__.TimeEntryCreateComponent,
        data: {
            title: 'Time Entry',
            mainMenu: 'Time Entry',
            hideTitle: true,
            urls: []
        }
    },
    {
        path: 'create/:title',
        component: _time_entry_create_time_entry_create_component__WEBPACK_IMPORTED_MODULE_0__.TimeEntryCreateComponent,
        data: {
            title: 'Time Management',
            mainMenu: 'Time Management',
            hideTitle: true,
            urls: []
        }
    },
    {
        path: 'edit/:id',
        component: _time_entry_create_time_entry_create_component__WEBPACK_IMPORTED_MODULE_0__.TimeEntryCreateComponent,
        data: {
            title: 'Time Entry',
            mainMenu: 'Time Entry',
            hideTitle: true,
            urls: []
        }
    },
    {
        path: 'edit/:title/:id',
        component: _time_entry_create_time_entry_create_component__WEBPACK_IMPORTED_MODULE_0__.TimeEntryCreateComponent,
        data: {
            title: 'Time Management',
            mainMenu: 'Time Management',
            hideTitle: true,
            urls: []
        }
    },
];
class TaskEntryRoutingModule {
}
TaskEntryRoutingModule.ɵfac = function TaskEntryRoutingModule_Factory(t) { return new (t || TaskEntryRoutingModule)(); };
TaskEntryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TaskEntryRoutingModule });
TaskEntryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TaskEntryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 9376:
/*!*************************************************!*\
  !*** ./src/app/task-entry/task-entry.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskEntryModule": () => (/* binding */ TaskEntryModule)
/* harmony export */ });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/core.module */ 40294);
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../widget/widget.module */ 88503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _task_entry_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-entry-routing.module */ 88885);
/* harmony import */ var _task_entry_landing_page_task_entry_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-entry-landing-page/task-entry-landing-page.component */ 35350);
/* harmony import */ var _chart_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chart/chart.module */ 76534);
/* harmony import */ var _time_entry_create_time_entry_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-entry-create/time-entry-create.component */ 99377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);








class TaskEntryModule {
}
TaskEntryModule.ɵfac = function TaskEntryModule_Factory(t) { return new (t || TaskEntryModule)(); };
TaskEntryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TaskEntryModule });
TaskEntryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _task_entry_routing_module__WEBPACK_IMPORTED_MODULE_2__.TaskEntryRoutingModule,
            _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            _chart_chart_module__WEBPACK_IMPORTED_MODULE_4__.ChartModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TaskEntryModule, { declarations: [_task_entry_landing_page_task_entry_landing_page_component__WEBPACK_IMPORTED_MODULE_3__.TaskEntryLandingPageComponent,
        _time_entry_create_time_entry_create_component__WEBPACK_IMPORTED_MODULE_5__.TimeEntryCreateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _task_entry_routing_module__WEBPACK_IMPORTED_MODULE_2__.TaskEntryRoutingModule,
        _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _chart_chart_module__WEBPACK_IMPORTED_MODULE_4__.ChartModule] }); })();


/***/ }),

/***/ 99377:
/*!*****************************************************************************!*\
  !*** ./src/app/task-entry/time-entry-create/time-entry-create.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeEntryCreateComponent": () => (/* binding */ TimeEntryCreateComponent)
/* harmony export */ });
/* harmony import */ var _core_render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/render/custom-render/custom-render.component */ 13640);
/* harmony import */ var _core_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/constants/constants */ 78073);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! subsink */ 54408);
/* harmony import */ var _core_constants_warning_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/constants/warning-messages */ 31501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/helper/validationrule.service */ 15157);
/* harmony import */ var src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/helper/function.helper.service */ 55715);
/* harmony import */ var _core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/helper/toast.helper.service */ 27995);
/* harmony import */ var _core_service_time_entry_time_entry_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/service/time-entry/time-entry.service */ 33756);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-select-dropdown */ 34772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _widget_timedropdown_timedropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widget/timedropdown/timedropdown.component */ 70430);
/* harmony import */ var _widget_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widget/table/table.component */ 92880);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

















function TimeEntryCreateComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "This field is required "), " ");
} }
function TimeEntryCreateComponent_ng_container_47_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "This field is required "), " ");
} }
function TimeEntryCreateComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ngx-select-dropdown", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, TimeEntryCreateComponent_ng_container_47_span_9_Template, 3, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 6, "Assignee"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx_r2.formControl.assignee)("multiple", false)("config", ctx_r2.dropdownConfigName)("options", ctx_r2.userLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.submitted && (ctx_r2.formControl.assignee.errors == null ? null : ctx_r2.formControl.assignee.errors.required));
} }
const _c0 = function (a0) { return { maxLength: a0 }; };
function TimeEntryCreateComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, "Maximum field length exceeded ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c0, ctx_r3.formControl.comment.errors == null ? null : ctx_r3.formControl.comment.errors.maxlength == null ? null : ctx_r3.formControl.comment.errors.maxlength.requiredLength)), " ");
} }
const _c1 = function (a0) { return { minLength: a0 }; };
function TimeEntryCreateComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, "Minimum field length required ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](4, _c1, ctx_r4.formControl.comment.errors == null ? null : ctx_r4.formControl.comment.errors.minlength == null ? null : ctx_r4.formControl.comment.errors.minlength.requiredLength)), " ");
} }
function TimeEntryCreateComponent_p_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Please Enter A Valid Time "), " ");
} }
function TimeEntryCreateComponent_p_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "This field is required "), " ");
} }
function TimeEntryCreateComponent_p_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "Please Enter A Valid Time "), " ");
} }
function TimeEntryCreateComponent_p_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "This field is required "), " ");
} }
function TimeEntryCreateComponent_ng_container_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", option_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r11);
} }
class TimeEntryCreateComponent {
    constructor(_router, _formBuilder, _rule, _helper, _toast, activated, _timeService) {
        var _a;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._rule = _rule;
        this._helper = _helper;
        this._toast = _toast;
        this.activated = activated;
        this._timeService = _timeService;
        this.tableOption = _core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.tableOption;
        this.tableLimitOption = _core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.tableConfig.tableLimitOption;
        this.tableLimit = _core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.tableConfig.tableLimit;
        this.tableSearch = '';
        this.currentPage = 1;
        this.totalCount = 0;
        this.itemsPerPage = _core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.tableConfig.pager;
        this.submitted = false;
        this.userLists = false;
        this.userRole = (_a = this._helper.getUser) === null || _a === void 0 ? void 0 : _a.user_type;
        this.today = new Date();
        this.dropdownConfigWBSElementName = {
            displayKey: 'WBSElementName',
            search: true,
            clearOnSelection: true,
            placeholder: 'select',
            height: '150px'
        };
        this.dropdownConfigName = {
            displayKey: 'name',
            search: true,
            clearOnSelection: true,
            placeholder: 'select',
            height: '150px'
        };
        this.dropdownConfig = {
            search: true,
            clearOnSelection: true,
            placeholder: 'select',
            height: '150px'
        };
        this.tableSettings = {
            column: {
                id: {
                    title: 'Id',
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
                approver: {
                    title: 'Approver',
                    icon: '',
                    class: 'pointer',
                    type: 'custom',
                    renderComponent: _core_render_custom_render_custom_render_component__WEBPACK_IMPORTED_MODULE_0__.CustomRenderComponent,
                    valuePrepareFunction: (value, row) => {
                        var _a, _b;
                        return (_b = (_a = row === null || row === void 0 ? void 0 : row.approval_level_set[0]) === null || _a === void 0 ? void 0 : _a.level1) === null || _b === void 0 ? void 0 : _b.approver;
                    }
                }
            }
        };
        this.dropdownConfigWbsShortDescription = {
            displayKey: 'wbsshortdescription',
            search: true,
            clearOnSelection: true,
            placeholder: 'select',
            height: '150px'
        };
        this.project = [];
        this.wbsShortDescription = [];
        this.type = [
            'working',
            'Leave',
        ];
        this.timeMange = false;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_2__.SubSink();
    }
    ngOnInit() {
        this.timeGrid();
        if (this.userRole === 'Admin') {
            this.userList();
        }
        this.subs.add(this.activated.params.subscribe(res => {
            if (res['title']) {
                this.timeMange = true;
            }
            this.id = res['id'];
            if (this.id) {
                this.setForm(true);
                this.getDetail();
            }
            else {
                this.timeGrid();
                this.setForm(true);
            }
        }));
        this.dropDownList();
    }
    get formControl() {
        return this.timeEntryForm.controls;
    }
    dropDownList() {
        this.subs.add(this._timeService.projectList().subscribe(res => {
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                delete res.Status;
                this.project = [];
                res.map((item) => this.project.push({ WBSElementName: item === null || item === void 0 ? void 0 : item.WBSElementName, WBSCompanyCode: item === null || item === void 0 ? void 0 : item.WBSCompanyCode, WBSShortdescription: item === null || item === void 0 ? void 0 : item.WBSShortdescription }));
            }
        }));
        //     this.subs.add (
        //       this._timeService.taskList ( ).subscribe (res => {
        //         if (ApiStatus.ok === res.status) {
        //           delete res.Status;
        //           this.wbsShortDescription = res;
        //       }
        // }
        //     ));
    }
    userList() {
        this.subs.add(this._timeService.userList().subscribe(res => {
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                delete res.Status;
                this.userLists = res;
            }
        }));
    }
    timeGrid(offSet = 1, search = this.tableSearch, limit = this.tableLimit, startDate = this._helper.convertToServerDate(new Date()), endDate = this._helper.convertToServerDate(new Date())) {
        const gridParams = {
            q: search,
            offset: (offSet - 1) * this.tableLimit,
            limit: limit,
            start_date: startDate,
            end_date: endDate
        };
        this.subs.add(this._timeService.gridDate(gridParams).subscribe(res => {
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                this.gridData = res === null || res === void 0 ? void 0 : res.results;
                this.totalCount = res === null || res === void 0 ? void 0 : res.count;
            }
        }));
    }
    tablePageChange(offSet) {
        this.currentPage = (offSet);
        this.timeGrid(offSet, this.tableSearch, this.tableLimit);
    }
    dateChange() {
        const startDate = this._helper.convertToServerDate(this.timeEntryForm.value.startDate);
        const endDate = this._helper.convertToServerDate(this.timeEntryForm.value.endDate);
        this.timeGrid(1, this.tableSearch, this.tableLimit, startDate, endDate);
    }
    search() {
        this.currentPage = 1;
        this.timeGrid();
    }
    getDetail() {
        this.subs.add(this._timeService.timeDetails(this.id).subscribe(res => {
            var _a, _b;
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                delete res.Status;
                this.timeDetails = res[0];
                this.timeGrid(1, this.tableSearch, this.tableLimit, (_a = this.timeDetails) === null || _a === void 0 ? void 0 : _a.start_date, (_b = this.timeDetails) === null || _b === void 0 ? void 0 : _b.end_date);
                this.setForm(false);
            }
        }));
    }
    setForm(create) {
        var _a, _b, _c, _d, _e, _f;
        if (create) {
            this.timeEntryForm = this._formBuilder.group({
                startDate: [new Date(), this._rule.requiredValidation],
                endDate: [new Date(), this._rule.requiredValidation],
                wbselementname: ['', [this._rule.requiredValidation]],
                wbsshortdescription: [''],
                //  type: ['', [this._rule.requiredValidation]],
                comment: ['', this._rule.textBoxValidation()],
                startTime: ['', [this._rule.timeValidator, this._rule.requiredValidation]],
                endTime: ['', [this._rule.timeValidator, this._rule.requiredValidation]],
                assignee: []
            });
        }
        else {
            this.timeEntryForm = this._formBuilder.group({
                startDate: [((_a = this.timeDetails) === null || _a === void 0 ? void 0 : _a.start_date) ? new Date((_b = this.timeDetails) === null || _b === void 0 ? void 0 : _b.start_date) : new Date(), this._rule.requiredValidation],
                endDate: [((_c = this.timeDetails) === null || _c === void 0 ? void 0 : _c.end_date) ? new Date((_d = this.timeDetails) === null || _d === void 0 ? void 0 : _d.end_date) : new Date(), this._rule.requiredValidation],
                wbselementname: [{ WBSElementName: this.timeDetails.wbselementname, WBSCompanyCode: (_f = (_e = this.timeDetails) === null || _e === void 0 ? void 0 : _e.CompanyCode) === null || _f === void 0 ? void 0 : _f.value, WBSShortdescription: this.timeDetails.wbsshortdescription }, [this._rule.requiredValidation]],
                wbsshortdescription: [this.timeDetails.wbsshortdescription],
                // type: ['working', [this._rule.requiredValidation]],
                comment: [this.timeDetails.comment, this._rule.textBoxValidation()],
                startTime: [this.timeDetails.start_time.slice(0, -3), [this._rule.timeValidator, this._rule.requiredValidation]],
                endTime: [this.timeDetails.end_time.slice(0, -3), [this._rule.timeValidator, this._rule.requiredValidation]],
                assignee: []
            });
        }
    }
    submit() {
        var _a, _b, _c;
        this.submitted = true;
        const formValue = this.timeEntryForm.value;
        if (this.timeEntryForm.invalid) {
            this._toast.error(_core_constants_warning_messages__WEBPACK_IMPORTED_MODULE_3__.toastMessages.validation);
            return;
        }
        if (!this.timeValidation(formValue.startTime, formValue.endTime, this.timeEntryForm.value.startDate, this.timeEntryForm.value.endDate)) {
            this._toast.error(_core_constants_warning_messages__WEBPACK_IMPORTED_MODULE_3__.toastMessages.Date);
            return;
        }
        const formData = {
            wbselementname: (_a = formValue.wbselementname) === null || _a === void 0 ? void 0 : _a.WBSElementName,
            wbsshortdescription: (_b = formValue.wbselementname) === null || _b === void 0 ? void 0 : _b.WBSShortdescription,
            comment: formValue.comment,
            start_date: this._helper.convertToServerDate(formValue.startDate),
            end_date: this._helper.convertToServerDate(formValue.endDate),
            start_time: this._helper.timeConverter(formValue.startTime),
            assignee: (_c = formValue.assignee) === null || _c === void 0 ? void 0 : _c.pk,
            end_time: this._helper.timeConverter(formValue.endTime)
        };
        if (this.id) {
            this.edit(formData);
        }
        else {
            this.create(formData);
        }
    }
    timeValidation(st, et, sd, ed) {
        const startDate = sd.setHours(0, 0, 0, 0);
        const endDate = ed.setHours(0, 0, 0, 0);
        const startTime = +this._helper.timeConverter(st).split(':', 1);
        const endTime = +this._helper.timeConverter(et).split(':', 1);
        const startMin = +this._helper.timeConverter(st).split(':', 2)[1];
        const endMin = +this._helper.timeConverter(et).split(':', 2)[1];
        if (startDate === endDate) {
            if (startTime > endTime) {
                return false;
            }
            else if (startTime === endTime) {
                if (!isNaN(startMin) && !isNaN(endMin)) {
                    if (startMin >= endMin) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }
    create(formData) {
        this.subs.add(this._timeService.create(formData).subscribe(res => {
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                this._toast.success(res.message);
                this.view();
            }
        }));
    }
    edit(formData) {
        this.subs.add(this._timeService.edit(formData, this.id).subscribe(res => {
            if (_core_constants_constants__WEBPACK_IMPORTED_MODULE_1__.ApiStatus.ok === res.status) {
                this._toast.success(res.message);
                this.view();
            }
        }));
    }
    view() {
        if (this.timeMange) {
            this._router.navigate(['/time-management']);
        }
        else {
            this._router.navigate(['/task-entry']);
        }
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
TimeEntryCreateComponent.ɵfac = function TimeEntryCreateComponent_Factory(t) { return new (t || TimeEntryCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_helper_validationrule_service__WEBPACK_IMPORTED_MODULE_4__.ValidationruleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_helper_function_helper_service__WEBPACK_IMPORTED_MODULE_5__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_helper_toast_helper_service__WEBPACK_IMPORTED_MODULE_6__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_service_time_entry_time_entry_service__WEBPACK_IMPORTED_MODULE_7__.TimeEntryService)); };
TimeEntryCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: TimeEntryCreateComponent, selectors: [["app-time-entry-create"]], decls: 105, vars: 69, consts: [[1, "py-2"], [1, "row"], [1, "col-12", "col-md-8"], [1, "title-blue"], [1, "col-12", "col-md-4"], [1, "title-right"], [1, "btn-blue-gradient", 3, "click"], [3, "formGroup"], [1, "card", "card-round"], [1, "card-body", "form-Font"], [1, "col-12"], [1, "text-center", "float-right", "form-control", "max-width-187", 3, "click"], [3, "rangePicker", "min"], ["matStartDate", "", "formControlName", "startDate", "placeholder", "Start date", "readonly", "", 1, "pointer"], ["matEndDate", "", "formControlName", "endDate", "placeholder", "End date", "readonly", "", 1, "pointer"], [3, "closed"], ["picker", ""], [1, "col-12", "col-sm-6", "col-md-4"], [1, "form-group"], [1, "text-danger"], [3, "formControl", "multiple", "config", "options"], ["class", "font-size-12 text-danger ", 4, "ngIf"], ["disabled", "", 1, "form-control"], [4, "ngIf"], ["formControlName", "comment", "type", "text ", "id", "ContentPlaceHolder1_txtLName ", 1, "form-control", 3, "placeholder"], [3, "formControl"], [1, "button"], [1, "col-md-12"], [1, "float-right"], [1, "btn-white", "mx-2", 3, "click"], [1, "btn-orange-gradient", 3, "click"], [1, "card-body"], [1, "col-sm-12", "col-md-6"], ["id", "example_length", 1, "table-head"], ["name", "example_length", "aria-controls", "example", 1, "custom-select", "custom-select-sm", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["id", "example_filter", 1, "dataTables_filter"], ["type", "text", "placeholder", "", "aria-controls", "example", 1, "form-control", "form-control-sm", 3, "ngModel", "keyup.enter", "ngModelChange"], [3, "settings", "gridData", "totalCount", "currentPage", "tableLimit", "pageChange"], [1, "font-size-12", "text-danger"], [3, "value"]], template: function TimeEntryCreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimeEntryCreateComponent_Template_button_click_8_listener() { return ctx.view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimeEntryCreateComponent_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](21); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "mat-date-range-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "mat-date-range-picker", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("closed", function TimeEntryCreateComponent_Template_mat_date_range_picker_closed_20_listener() { return ctx.dateChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "ngx-select-dropdown", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, TimeEntryCreateComponent_span_30_Template, 3, 3, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, TimeEntryCreateComponent_ng_container_47_Template, 10, 8, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, TimeEntryCreateComponent_span_56_Template, 3, 6, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, TimeEntryCreateComponent_span_57_Template, 3, 6, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "app-timeDropdown", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](65, TimeEntryCreateComponent_p_65_Template, 3, 3, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](66, TimeEntryCreateComponent_p_66_Template, 3, 3, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](73, "app-timeDropdown", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](74, TimeEntryCreateComponent_p_74_Template, 3, 3, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](75, TimeEntryCreateComponent_p_75_Template, 3, 3, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimeEntryCreateComponent_Template_button_click_80_listener() { return ctx.view(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimeEntryCreateComponent_Template_button_click_83_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function TimeEntryCreateComponent_Template_select_ngModelChange_94_listener($event) { return ctx.tableLimit = $event; })("ngModelChange", function TimeEntryCreateComponent_Template_select_ngModelChange_94_listener() { return ctx.timeGrid(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](95, TimeEntryCreateComponent_ng_container_95_Template, 3, 2, "ng-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup.enter", function TimeEntryCreateComponent_Template_input_keyup_enter_103_listener() { return ctx.search(); })("ngModelChange", function TimeEntryCreateComponent_Template_input_ngModelChange_103_listener($event) { return ctx.tableSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "app-table", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function TimeEntryCreateComponent_Template_app_table_pageChange_104_listener($event) { return ctx.tablePageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 41, "Time Entry"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 43, "Entry Details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.timeEntryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rangePicker", _r0)("min", ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 45, "WBS Element Name"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.formControl.wbselementname)("multiple", false)("config", ctx.dropdownConfigWBSElementName)("options", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.formControl.wbselementname.errors == null ? null : ctx.formControl.wbselementname.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 47, "WBS Company Code"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.formControl.wbselementname.value == null ? null : ctx.formControl.wbselementname.value.WBSCompanyCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](43, 49, "WBS Short Description"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.formControl.wbselementname.value == null ? null : ctx.formControl.wbselementname.value.WBSShortdescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userRole === "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](52, 51, "Comment"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](55, 53, "Enter name"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formControl.comment.errors == null ? null : ctx.formControl.comment.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.formControl.comment.errors == null ? null : ctx.formControl.comment.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](62, 55, "Start Time"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.formControl.startTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.formControl.startTime.errors == null ? null : ctx.formControl.startTime.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.formControl.startTime.errors == null ? null : ctx.formControl.startTime.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](71, 57, "End Time"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.formControl.endTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.formControl.endTime.errors == null ? null : ctx.formControl.endTime.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.formControl.endTime.errors == null ? null : ctx.formControl.endTime.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](82, 59, "Back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](85, 61, "Submit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](93, 63, "Show"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.tableLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.tableOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](97, 65, "entries"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](102, 67, "Search"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.tableSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("settings", ctx.tableSettings)("gridData", ctx.gridData)("totalCount", ctx.totalCount)("currentPage", ctx.currentPage)("tableLimit", ctx.tableLimit);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDateRangePicker, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_14__.NgxSelectDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _widget_timedropdown_timedropdown_component__WEBPACK_IMPORTED_MODULE_8__.TimeDropdownComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _widget_table_table_component__WEBPACK_IMPORTED_MODULE_9__.TableComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["input[_ngcontent-%COMP%]:focus-visible {\n  outline: -webkit-focus-ring-color auto 0px;\n}\n\n.max-width-187[_ngcontent-%COMP%] {\n  max-width: 187px;\n}\n\nspan.form-control[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtZW50cnktY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJ0aW1lLWVudHJ5LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0OmZvY3VzLXZpc2libGUge1xyXG4gICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gMHB4O1xyXG59XHJcblxyXG4ubWF4LXdpZHRoLTE4NyB7XHJcbiAgICBtYXgtd2lkdGg6IDE4N3B4O1xyXG59XHJcblxyXG5zcGFuLmZvcm0tY29udHJvbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_task-entry_task-entry_module_ts.js.map