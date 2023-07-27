"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const database_1 = require("./config/database");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
class ServerChat {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.databaseHandle();
        this.middlewares();
    }
    databaseHandle() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, database_1.mongodb)();
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use((0, cookie_parser_1.default)());
        if (process.env.NODE_ENV === 'development') {
            this.app.use((0, morgan_1.default)('dev'));
            console.log('morgan is on');
        }
    }
    routers(mainPath, routers) {
        this.app.use(mainPath, routers);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running on http//localhost:${this.port}/`);
        });
    }
}
exports.default = ServerChat;
