"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var cors_1 = require("./cors");
var event_1 = require("./event");
var Router = /** @class */ (function () {
    function Router(app) {
        app.get('/favicon.ico', function (req, res) { return res.status(204); });
        app.get('/', function (req, res) { return res.status(204); });
        app.use(new cors_1.CorsRouter().getRouter());
        app.use(new event_1.EventRouter().getRouter());
    }
    return Router;
}());
exports.Router = Router;
