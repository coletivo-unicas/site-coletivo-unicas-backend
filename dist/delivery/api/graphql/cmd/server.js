"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmdGraphql = void 0;
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var morgan_1 = __importDefault(require("morgan"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = require("../config/config");
var index_1 = require("../router/index");
var CmdGraphql = /** @class */ (function () {
    function CmdGraphql() {
        this.app = (0, express_1.default)();
        this.middleware();
        this.router();
    }
    CmdGraphql.prototype.router = function () {
        new index_1.Router(this.app);
    };
    CmdGraphql.prototype.middleware = function () {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    CmdGraphql.prototype.server = function () {
        var server = http_1.default.createServer(this.app);
        server.listen(config_1.PORT, function () {
            console.log("site-coletivo-unicas-backend is Running... at port ".concat(config_1.PORT));
        });
    };
    return CmdGraphql;
}());
exports.CmdGraphql = CmdGraphql;
