"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const jwt_key = config_1.config.JWT;
class Jsonwebtoken {
    constructor() {
        this.sign = (uuid) => {
            return new Promise((resolve, reject) => {
                const payload = { uuid };
                jsonwebtoken_1.default.sign(payload, jwt_key.JWT_PRIVATE_KEY, { expiresIn: '5h' }, (err, token) => {
                    if (err) {
                        console.log(err);
                        reject('the token could not be generaterd');
                    }
                    else {
                        resolve(token);
                    }
                });
            });
        };
        this.verify = () => {
        };
    }
}
exports.default = Jsonwebtoken;
