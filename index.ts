/* eslint-disable import/first */
import * as dotenv from 'dotenv';
import cron from 'node-cron';
import { validateEnv } from './src/validation/envFileValidation';

dotenv.config();
const env = validateEnv();
if (env) throw Error(env.toString());

import { DiscordHandler } from './src/handlers/discordHandler';
import { EMOTES, HEART_BEAT, SPREADSHEET_UPLOAD_SCHEDULE } from './src/utils/constants';
import MetricsHandler from './src/handlers/metricsHandler';
import { GsheetController } from './src/controllers/gsheetController';

cron.schedule(HEART_BEAT, async () => {
    await DiscordHandler.postWebhook({
        url: process.env.DISCORD_WEBHOOK as string,
        payload: `I'm still Online ${EMOTES[Math.floor(Math.random() * EMOTES.length) + 1]}`
    });
    await MetricsHandler.store({ value: 1, deviceId: process.env.DEVICE_ID });
});
cron.schedule(SPREADSHEET_UPLOAD_SCHEDULE, async () => {
    const _sheet = new GsheetController();
});

DiscordHandler.postWebhook({ url: process.env.DISCORD_WEBHOOK as string, payload: "I'm Online 🌞" });
