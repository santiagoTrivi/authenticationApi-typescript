"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorServer = void 0;
class ErrorServer extends Error {
    constructor(message, property) {
        super(message);
        Object.setPrototypeOf(this, ErrorServer.prototype);
    }
}
exports.ErrorServer = ErrorServer;
