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
exports.DiscordHandler = void 0;
const discordController_1 = require("../controllers/discordController");
const logsHandler_1 = require("./logsHandler");
const logsEnums_1 = require("../types/enums/logsEnums");
const discordValidation_1 = require("../validation/discordValidation");
class DiscordHandler {
    /**
     *  Posts webhook to Discord Channel
     * @param {DiscordWebhook} data
     */
    static postWebhook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { value, error } = discordValidation_1.webhookPostInputSchema.validate(data, this.validationOptions);
                if (error)
                    throw error;
                yield discordController_1.DiscordController.postWebhook(value);
            }
            catch (error) {
                logsHandler_1.LogsHandler.log({ topic: logsEnums_1.LogTypeEnum.VALIDATION_ERROR, message: error });
            }
        });
    }
}
exports.DiscordHandler = DiscordHandler;
/**
 * Validation options of mqtt handler
 */
DiscordHandler.validationOptions = { abortEarly: false, errors: { wrap: { label: "'" } } };
//# sourceMappingURL=discordHandler.js.map