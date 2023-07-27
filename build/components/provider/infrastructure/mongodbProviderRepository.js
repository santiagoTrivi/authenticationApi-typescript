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
exports.mongodbProviderRepository = void 0;
const providerModel_1 = require("./providerModel");
class mongodbProviderRepository {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield providerModel_1.ProviderModel.findOne({ id });
            if (!provider)
                return null;
            const data = {
                id: provider.id,
                provider: provider.provider
            };
            return data;
        });
    }
    getByProvider(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            const providertarget = yield providerModel_1.ProviderModel.findOne({ provider });
            if (!providertarget)
                return null;
            const data = {
                id: providertarget.id,
                provider: providertarget.provider
            };
            return data;
        });
    }
    save(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProvider = new providerModel_1.ProviderModel(provider);
            yield newProvider.save();
            const createdProvider = {
                id: newProvider.id,
                provider: newProvider.provider
            };
            return createdProvider;
        });
    }
}
exports.mongodbProviderRepository = mongodbProviderRepository;
