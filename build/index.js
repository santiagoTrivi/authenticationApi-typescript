"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./server-api/config/config");
const server_1 = __importDefault(require("./server-api/server"));
const routers_1 = __importDefault(require("./server-api/network/routers"));
dotenv_1.default.config();
const port = config_1.config.server.port;
const server = new server_1.default(port);
server.routers('/rest-api/v1', routers_1.default);
server.listen();
