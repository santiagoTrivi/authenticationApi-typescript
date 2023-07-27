"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnathorizedError = void 0;
const ErrorServeer_1 = require("../ErrorServeer");
class UnathorizedError extends ErrorServeer_1.ErrorServer {
    constructor(message, property) {
        super(message);
        this.property = property;
        this.errorCode = 401;
        this.errorType = 'UNATHORIZED_ERROR';
        Object.setPrototypeOf(this, UnathorizedError.prototype);
    }
    errorinit() {
        return [{ message: this.message, property: this.property }];
    }
}
exports.UnathorizedError = UnathorizedError;
