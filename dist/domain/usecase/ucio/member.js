"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMemberUseCaseResponse = exports.GetMemberUseCaseRequest = exports.ListMembersUseCaseResponse = void 0;
var ListMembersUseCaseResponse = /** @class */ (function () {
    function ListMembersUseCaseResponse(members, error) {
        this.members = members;
        this.error = error;
    }
    return ListMembersUseCaseResponse;
}());
exports.ListMembersUseCaseResponse = ListMembersUseCaseResponse;
var GetMemberUseCaseRequest = /** @class */ (function () {
    function GetMemberUseCaseRequest(ID) {
        this.ID = ID;
    }
    return GetMemberUseCaseRequest;
}());
exports.GetMemberUseCaseRequest = GetMemberUseCaseRequest;
var GetMemberUseCaseResponse = /** @class */ (function () {
    function GetMemberUseCaseResponse(member, error) {
        this.member = member;
        this.error = error;
    }
    return GetMemberUseCaseResponse;
}());
exports.GetMemberUseCaseResponse = GetMemberUseCaseResponse;
