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
const logsHandler_1 = require("./logsHandler");
const logsEnums_1 = require("../types/enums/logsEnums");
const metricsController_1 = require("../controllers/metricsController");
const metricsValidation_1 = require("../validation/metricsValidation");
class MetricsHandler {
    /**
     * Handler for incoming messages
     * @param {any} data
     */
    static store(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { value, error } = metricsValidation_1.MetricsInputSchema.validate(data, this.validationOptions);
                if (error)
                    throw error;
                yield metricsController_1.MetricsController.storeStatus(value);
            }
            catch (error) {
                logsHandler_1.LogsHandler.log({ topic: logsEnums_1.LogTypeEnum.VALIDATION_ERROR, message: error });
            }
        });
    }
}
exports.default = MetricsHandler;
/**
 * Validation options of mqtt handler
 */
MetricsHandler.validationOptions = { abortEarly: false, errors: { wrap: { label: "'" } } };
//# sourceMappingURL=metricsHandler.js.map