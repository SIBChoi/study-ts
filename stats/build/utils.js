"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datestringToDate = void 0;
const datestringToDate = (dateString) => {
    // 10/08/2018 => [10, 08, 2018]
    const dateArr = dateString.split('/').map((date) => parseInt(date));
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0] + 1);
};
exports.datestringToDate = datestringToDate;
