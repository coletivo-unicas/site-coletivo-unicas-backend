"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorResponse = exports.SuccessResponse = void 0;
var SuccessResponse = /** @class */ (function () {
    function SuccessResponse() {
    }
    SuccessResponse.prototype.success = function (res, body) {
        return res.status(200).json(body);
    };
    return SuccessResponse;
}());
exports.SuccessResponse = SuccessResponse;
var InternalServerErrorResponse = /** @class */ (function () {
    function InternalServerErrorResponse() {
    }
    InternalServerErrorResponse.prototype.internalServerError = function (res, error) {
        return res.status(500).send(error);
    };
    return InternalServerErrorResponse;
}());
exports.InternalServerErrorResponse = InternalServerErrorResponse;
