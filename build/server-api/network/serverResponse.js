"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (res, response) => {
    res
        .status(response.status_code)
        .json({ response });
};
exports.successResponse = successResponse;
const errorResponse = (res, response) => {
    res
        .status(response.status_code)
        .json({ response });
};
exports.errorResponse = errorResponse;
