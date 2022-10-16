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
exports.MetricsController = void 0;
const logsHandler_1 = require("../handlers/logsHandler");
const statusModel_1 = require("../models/statusModel");
const logsEnums_1 = require("../types/enums/logsEnums");
class MetricsController {
    /**
     * Stores temperature data into the database
     * @param {Temperature} data
     */
    static storeStatus(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const StatusModel = yield (0, statusModel_1.getStatusModel)();
            try {
                yield StatusModel.create(data);
            }
            catch (error) {
                logsHandler_1.LogsHandler.log({ topic: logsEnums_1.LogTypeEnum.VALIDATION_ERROR, message: error });
            }
        });
    }
}
exports.MetricsController = MetricsController;
//# sourceMappingURL=metricsController.js.map