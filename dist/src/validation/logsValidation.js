"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsInputSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.LogsInputSchema = joi_1.default.object({
    topic: joi_1.default.string().required(),
    message: joi_1.default.string().required()
});
//# sourceMappingURL=logsValidation.js.map