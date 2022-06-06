"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEventsUseCaseResponse = exports.CreateEventUseCaseResponse = exports.CreateEventUseCaseRequest = void 0;
var CreateEventUseCaseRequest = /** @class */ (function () {
    function CreateEventUseCaseRequest(title, link) {
        this.title = title;
        this.link = link;
    }
    return CreateEventUseCaseRequest;
}());
exports.CreateEventUseCaseRequest = CreateEventUseCaseRequest;
var CreateEventUseCaseResponse = /** @class */ (function () {
    function CreateEventUseCaseResponse(event, error) {
        this.event = event;
        this.error = error;
    }
    return CreateEventUseCaseResponse;
}());
exports.CreateEventUseCaseResponse = CreateEventUseCaseResponse;
var ListEventsUseCaseResponse = /** @class */ (function () {
    function ListEventsUseCaseResponse(events, error) {
        this.events = events;
        this.error = error;
    }
    return ListEventsUseCaseResponse;
}());
exports.ListEventsUseCaseResponse = ListEventsUseCaseResponse;
