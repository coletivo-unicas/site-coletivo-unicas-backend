"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAG_PRE_CONDITION_ERROR = exports.TAG_INTERNAL_SERVER_ERROR = exports.InternalServerError = exports.PreconditionError = exports.ErrorEntity = void 0;
var TAG_INTERNAL_SERVER_ERROR = '[INTERNAL SERVER ERROR]';
exports.TAG_INTERNAL_SERVER_ERROR = TAG_INTERNAL_SERVER_ERROR;
var TAG_PRE_CONDITION_ERROR = '[PRE CONDITION ERROR]';
exports.TAG_PRE_CONDITION_ERROR = TAG_PRE_CONDITION_ERROR;
var ErrorEntity = /** @class */ (function () {
    function ErrorEntity(code, message) {
        this.code = code;
        this.message = message;
    }
    return ErrorEntity;
}());
exports.ErrorEntity = ErrorEntity;
var PreconditionError = /** @class */ (function (_super) {
    __extends(PreconditionError, _super);
    function PreconditionError(message) {
        return _super.call(this, PreconditionError.PRECONDITION_ERROR, message) || this;
    }
    PreconditionError.PRECONDITION_ERROR = 1;
    return PreconditionError;
}(ErrorEntity));
exports.PreconditionError = PreconditionError;
var InternalServerError = /** @class */ (function (_super) {
    __extends(InternalServerError, _super);
    function InternalServerError(message) {
        return _super.call(this, InternalServerError.INTERNAL_SERVER_ERROR, message) || this;
    }
    InternalServerError.INTERNAL_SERVER_ERROR = 2;
    return InternalServerError;
}(ErrorEntity));
exports.InternalServerError = InternalServerError;
