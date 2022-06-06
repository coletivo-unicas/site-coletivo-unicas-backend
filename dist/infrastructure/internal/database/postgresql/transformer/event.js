"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEventModel = exports.toEventEntity = void 0;
var event_1 = require("../../../../../domain/entity/event");
var event_2 = require("../model/event");
function toEventEntity(m) {
    return new event_1.EventEntity(m.ID, m.title, m.link);
}
exports.toEventEntity = toEventEntity;
function toEventModel(e) {
    return new event_2.EventModel(e.ID, e.title, e.link);
}
exports.toEventModel = toEventModel;
