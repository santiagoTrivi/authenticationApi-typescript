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
exports.GetProvider = void 0;
const UnauthorizedError_1 = require("../../common/domain/exceptions/UnauthorizedError");
class GetProvider {
    constructor(providerRepo) {
        this.run = (data) => __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.providerRepository.getByProvider(data);
            if (!provider)
                throw new UnauthorizedError_1.UnathorizedError('Provider not registered', 'Provider');
            return provider;
        });
        this.providerRepository = providerRepo;
    }
}
exports.GetProvider = GetProvider;
