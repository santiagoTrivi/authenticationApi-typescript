"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = require("../controllers/user/createUser");
const errorHandle_1 = require("../middewares/errorHandle");
const createProvider_1 = require("../controllers/provider/createProvider");
const router = (0, express_1.Router)();
router
    .post('/user', createUser_1.createUser, errorHandle_1.errorHanddle)
    .post('/provider', createProvider_1.createProviderController, errorHandle_1.errorHanddle);
exports.default = router;
