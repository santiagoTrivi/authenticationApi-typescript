"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHanddle = void 0;
const serverResponse_1 = require("../network/serverResponse");
const ErrorServeer_1 = require("../../components/common/domain/ErrorServeer");
const errorHanddle = (error, req, res, next) => {
    if (error instanceof ErrorServeer_1.ErrorServer) {
        return (0, serverResponse_1.errorResponse)(res, {
            message: error.message,
            success: false,
            status_code: error.errorCode,
        });
    }
    else {
        console.log(error);
        return (0, serverResponse_1.errorResponse)(res, {
            message: 'server error',
            success: false,
            status_code: 500,
            errors: error.message
        });
    }
};
exports.errorHanddle = errorHanddle;
