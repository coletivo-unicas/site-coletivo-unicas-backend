"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
var envPort = process.env.PORT;
var PORT = 3000;
exports.PORT = PORT;
if (envPort) {
    exports.PORT = PORT = parseInt(envPort, 10);
}
