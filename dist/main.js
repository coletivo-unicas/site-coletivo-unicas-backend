"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./delivery/api/graphql/cmd/server");
var cmd_1 = require("./delivery/api/rest/cmd/cmd");
var GRAPHQL = 'site-coletivo-unicas-backend';
var REST = 'site-coletivo-unicas-backend-rest-api';
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.initDev = function () {
        new server_1.CmdGraphql().server();
    };
    Main.prototype.init = function () {
        if (this.checkEnvVar()) {
            if (process.env.SERVER == GRAPHQL) {
                new server_1.CmdGraphql().server();
            }
            else if (process.env.SERVER == REST) {
                new cmd_1.CmdRest().server();
            }
        }
    };
    Main.prototype.checkEnvVar = function () {
        if (!process.env.SERVER) {
            console.log('env var SERVER not found');
            return false;
        }
        return true;
    };
    return Main;
}());
//new Main().init()
new Main().initDev();
