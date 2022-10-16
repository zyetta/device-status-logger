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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordController = void 0;
const discord_webhook_node_1 = require("discord-webhook-node");
const constants_1 = require("../utils/constants");
class DiscordController {
}
exports.DiscordController = DiscordController;
_a = DiscordController;
/**
 * Posts webhook to appropriate channel
 * @param {DiscordWebhook} data
 */
DiscordController.postWebhook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const hook = new discord_webhook_node_1.Webhook(data.url);
    hook.setUsername('Norman the Doorman');
    hook.setAvatar(constants_1.PROFILE_URL);
    yield hook.send(data.payload);
});
//# sourceMappingURL=discordController.js.map