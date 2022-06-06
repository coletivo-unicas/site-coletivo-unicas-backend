"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmdRest = void 0;
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var morgan_1 = __importDefault(require("morgan"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = require("../config/config");
var router_1 = require("../router");
var CmdRest = /** @class */ (function () {
    function CmdRest() {
        this.app = (0, express_1.default)();
        this.middleware();
        this.router();
    }
    CmdRest.prototype.router = function () {
        new router_1.Router(this.app);
    };
    CmdRest.prototype.middleware = function () {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(body_parser_1.default.json({ limit: '100mb' }));
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    CmdRest.prototype.server = function () {
        var server = http_1.default.createServer(this.app);
        server.listen(config_1.PORT, function () {
            console.log("site-coletivo-unicas-backend-rest-api is running at port ".concat(config_1.PORT));
        });
    };
    return CmdRest;
}());
exports.CmdRest = CmdRest;
