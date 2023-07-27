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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbUserRepository = void 0;
const userModel_1 = require("./userModel");
class MongodbUserRepository {
    getById(id) {
        throw new Error("Method not implemented.");
    }
    getByUsername(username) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel_1.UserModel.findOne({ username });
            if (!user)
                return null;
            const usertarget = {
                id: user.id,
                username: user.username,
                email: user.email,
                password: (_a = user.password) !== null && _a !== void 0 ? _a : ''
            };
            return usertarget;
        });
    }
    getByEmail(email) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
    save(user) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new userModel_1.UserModel(user);
            yield newUser.save();
            const createdUser = {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                password: (_a = newUser.password) !== null && _a !== void 0 ? _a : ''
            };
            return createdUser;
        });
    }
    update(user) {
        throw new Error("Method not implemented.");
    }
    delete(user) {
        throw new Error("Method not implemented.");
    }
}
exports.MongodbUserRepository = MongodbUserRepository;
