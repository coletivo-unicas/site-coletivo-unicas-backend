"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRouter = void 0;
var express_1 = require("express");
var event_1 = require("../controller/event");
var EventRouter = /** @class */ (function () {
    function EventRouter() {
        this.router = (0, express_1.Router)();
        this.router.get('/events', new event_1.ListEventsController().listEvents);
    }
    EventRouter.prototype.getRouter = function () {
        return this.router;
    };
    return EventRouter;
}());
exports.EventRouter = EventRouter;
