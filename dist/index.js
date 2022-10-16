"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/first */
const dotenv = __importStar(require("dotenv"));
const node_cron_1 = __importDefault(require("node-cron"));
const envFileValidation_1 = require("./src/validation/envFileValidation");
dotenv.config();
const env = (0, envFileValidation_1.validateEnv)();
if (env)
    throw Error(env.toString());
const discordHandler_1 = require("./src/handlers/discordHandler");
const constants_1 = require("./src/utils/constants");
const metricsHandler_1 = __importDefault(require("./src/handlers/metricsHandler"));
node_cron_1.default.schedule(constants_1.HEART_BEAT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield discordHandler_1.DiscordHandler.postWebhook({
        url: process.env.DISCORD_WEBHOOK,
        payload: `I'm still Online ${constants_1.EMOTES[Math.floor(Math.random() * (constants_1.EMOTES.length - 1)) + 1]}`
    });
    yield metricsHandler_1.default.store({ value: 1, deviceId: process.env.DEVICE_ID });
}));
discordHandler_1.DiscordHandler.postWebhook({ url: process.env.DISCORD_WEBHOOK, payload: "I'm Online 🌞" });
//# sourceMappingURL=index.js.map