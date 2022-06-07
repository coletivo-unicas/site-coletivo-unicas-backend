"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./delivery/api/graphql/cmd/server");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.init = function () {
        new server_1.CmdGraphql().server();
    };
    return Main;
}());
new Main().init();
