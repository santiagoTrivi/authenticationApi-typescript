"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const DATABASE = process.env.DATABASE || '';
const JWT_PRIVATE_KEY = process.env.PRIVATE_KEY || '';
const JWT_PUBLIC_KEY = process.env.PUBLIC_KEY || '';
exports.config = {
    server: {
        port: PORT
    },
    mongo: {
        url: DATABASE
    },
    JWT: {
        JWT_PRIVATE_KEY,
        JWT_PUBLIC_KEY
    }
};
