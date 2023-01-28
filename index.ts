/* eslint-disable import/first */
import * as dotenv from 'dotenv';
import cron from 'node-cron';
import { validateEnv } from './src/validation/envFileValidation';

dotenv.config();
const env = validateEnv();
if (env) throw Error(env.toString());

import { DiscordHandler } from './src/handlers/discordHandler';
import { EMOTES, HEART_BEAT } from './src/utils/constants';
import MetricsHandler from './src/handlers/metricsHandler';

cron.schedule(HEART_BEAT, async () => {
    await DiscordHandler.postWebhook({
        url: process.env.DISCORD_WEBHOOK as string,
        payload: `${process.env.DEVICE_ID} - I'm still Online ${
            EMOTES[Math.floor(Math.random() * (EMOTES.length - 1)) + 1]
        }`
    });
    await MetricsHandler.store({ value: 1, deviceId: process.env.DEVICE_ID });
});

DiscordHandler.postWebhook({
    url: process.env.DISCORD_WEBHOOK as string,
    payload: `${process.env.DEVICE_ID} - I'm Online 🌞`
});
