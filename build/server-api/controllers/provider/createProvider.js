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
exports.createProviderController = void 0;
const mongodbProviderRepository_1 = require("../../../components/provider/infrastructure/mongodbProviderRepository");
const createProviderUseCase_1 = require("../../../components/provider/application/createProviderUseCase");
const uuidv4_1 = require("uuidv4");
const serverResponse_1 = require("../../network/serverResponse");
const providerRepository = new mongodbProviderRepository_1.mongodbProviderRepository;
const createdProviderUseCase = new createProviderUseCase_1.CreateProviderUseCase(providerRepository);
const createProviderController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { providername } = req.body;
    const newProvider = {
        id: (0, uuidv4_1.uuid)(),
        provider: providername
    };
    try {
        const provider = yield createdProviderUseCase.run(newProvider);
        return (0, serverResponse_1.successResponse)(res, {
            message: "Provider created",
            success: true,
            status_code: 201,
            results: provider
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createProviderController = createProviderController;
