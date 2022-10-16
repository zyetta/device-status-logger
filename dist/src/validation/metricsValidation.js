"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsInputSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.MetricsInputSchema = joi_1.default.object({
    value: joi_1.default.number().default(1),
    deviceId: joi_1.default.string().required()
});
//# sourceMappingURL=metricsValidation.js.map