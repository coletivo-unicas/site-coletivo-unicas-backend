"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toProjectEntity = void 0;
var project_1 = require("../../../../../domain/entity/project");
function toProjectEntity(m) {
    return new project_1.ProjectEntity(m.ID, m.title, m.location, m.donation);
}
exports.toProjectEntity = toProjectEntity;
