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
exports.createUser = void 0;
const mongodbUserRepository_1 = require("../../../components/user/infrastructure/mongodbUserRepository");
const createUserUsecase_1 = require("../../../components/user/application/createUserUsecase");
const uuidv4_1 = require("uuidv4");
const bcrypt_1 = __importDefault(require("bcrypt"));
const serverResponse_1 = require("../../network/serverResponse");
const monngoUserRepository = new mongodbUserRepository_1.MongodbUserRepository();
const createUserUsecase = new createUserUsecase_1.CreateUserUseCase(monngoUserRepository);
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { username, email, password, birtdate } = req.body;
    const salt = bcrypt_1.default.genSaltSync();
    password = bcrypt_1.default.hashSync(password, salt);
    const newUser = {
        id: (0, uuidv4_1.uuid)(),
        username: username,
        email: email,
        password: password,
        birtdate: birtdate
    };
    try {
        const user = yield createUserUsecase.run(newUser);
        return (0, serverResponse_1.successResponse)(res, {
            message: "user created",
            results: user,
            status_code: 201,
            success: true
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
