"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventUseCaseValidate = void 0;
var validate_1 = require("./validate");
var CreateEventUseCaseValidate = /** @class */ (function () {
    function CreateEventUseCaseValidate() {
    }
    CreateEventUseCaseValidate.prototype.createEvent = function (req) {
        if ((0, validate_1.checkStringEmpty)(req.title))
            return 'O título não pode ficar vazio.';
        if ((0, validate_1.checkStringEmpty)(req.link))
            return 'O link não pode ficar vazio.';
        return null;
    };
    return CreateEventUseCaseValidate;
}());
exports.CreateEventUseCaseValidate = CreateEventUseCaseValidate;
