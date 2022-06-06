"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
var config_1 = __importDefault(require("./config/config"));
var sequelize = new sequelize_1.Sequelize(config_1.default.database, config_1.default.username, config_1.default.password, config_1.default.options);
exports.sequelize = sequelize;
