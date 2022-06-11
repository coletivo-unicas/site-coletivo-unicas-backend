"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var achievement_1 = require("./achievement");
var cors_1 = require("./cors");
var event_1 = require("./event");
var member_1 = require("./member");
var product_1 = require("./product");
var project_1 = require("./project");
var Router = /** @class */ (function () {
    function Router(app) {
        app.get('/favicon.ico', function (req, res) { return res.status(204); });
        app.get('/', function (req, res) { return res.send("Hello World!"); });
        app.use(new cors_1.CorsRouter().getRouter());
        app.use(new event_1.EventRouter().getRouter());
        app.use(new achievement_1.AchievementRouter().getRouter());
        app.use(new project_1.ProjectRouter().getRouter());
        app.use(new member_1.MemberRouter().getRouter());
        app.use(new product_1.ProductRouter().getRouter());
    }
    return Router;
}());
exports.Router = Router;
