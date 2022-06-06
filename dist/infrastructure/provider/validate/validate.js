"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDateEmpty = exports.checkBooleanEmpty = exports.checkListEmpty = exports.checkStringEmpty = exports.checkNumberEmpty = void 0;
function checkNumberEmpty(e) {
    return e === undefined || e === null || Number.isNaN(e);
}
exports.checkNumberEmpty = checkNumberEmpty;
function checkStringEmpty(e) {
    return e === undefined || e === null || e.trim() === '';
}
exports.checkStringEmpty = checkStringEmpty;
function checkListEmpty(arr) {
    return arr === undefined || arr === null || arr.length <= 0;
}
exports.checkListEmpty = checkListEmpty;
function checkBooleanEmpty(e) {
    return e === undefined || e === null;
}
exports.checkBooleanEmpty = checkBooleanEmpty;
function checkDateEmpty(e) {
    return e === undefined || e === null;
}
exports.checkDateEmpty = checkDateEmpty;
