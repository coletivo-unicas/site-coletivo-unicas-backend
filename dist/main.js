"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cmd_1 = require("./delivery/api/rest/cmd/cmd");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.init = function () {
        new cmd_1.CmdRest().server();
    };
    return Main;
}());
new Main().init();
