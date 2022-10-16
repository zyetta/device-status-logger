"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const joi_1 = __importDefault(require("joi"));
const generalEnums_1 = require("../types/enums/generalEnums");
const validationOptions = { abortEarly: false, errors: { wrap: { label: "'" } } };
const envFileInputSchema = joi_1.default.object({
    // Mongo Credentials
    mongoClusterUri: joi_1.default.string().required(),
    // Discord Credentials
    discordWebhook: joi_1.default.string().required(),
    // Device Id
    deviceId: joi_1.default.string().required()
});
const validateEnv = () => {
    const data = {
        mongoClusterUri: process.env.CLUSTER_URI,
        discordWebhook: process.env.DISCORD_WEBHOOK,
        deviceId: process.env.DEVICE_ID
    };
    const { value: _value, error } = envFileInputSchema.validate(data, validationOptions);
    if (error)
        return error;
    console.log(generalEnums_1.ColorsEnum.BG_GREEN, "All '.env' variables loaded successfully 🌞", generalEnums_1.ColorsEnum.RESET);
    return null;
};
exports.validateEnv = validateEnv;
//# sourceMappingURL=envFileValidation.js.map