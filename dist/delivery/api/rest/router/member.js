"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRouter = void 0;
var express_1 = require("express");
var member_1 = require("../controller/member");
var MemberRouter = /** @class */ (function () {
    function MemberRouter() {
        this.router = (0, express_1.Router)();
        this.router.get('/members', new member_1.ListMembersController().listMembers);
    }
    MemberRouter.prototype.getRouter = function () {
        return this.router;
    };
    return MemberRouter;
}());
exports.MemberRouter = MemberRouter;
