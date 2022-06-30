/* eslint-disable import/first */
import * as dotenv from 'dotenv';
import cron from 'node-cron';
import { validateEnv } from './src/validation/envFileValidation';

dotenv.config();
const env = validateEnv();
if (env) throw Error(env.toString());

import { DiscordHandler } from './src/handlers/discordHandler';
import { SPREADSHEET_UPLOAD_SCHEDULE } from './src/utils/constants';
import MetricsHandler from './src/handlers/metricsHandler';

cron.schedule(SPREADSHEET_UPLOAD_SCHEDULE, () => {
    DiscordHandler.postWebhook({ url: process.env.DISCORD_WEBHOOK as string, payload: "I'm still Online 🌻" });
    MetricsHandler.store({ value: true });
});

DiscordHandler.postWebhook({ url: process.env.DISCORD_WEBHOOK as string, payload: "I'm Online 🌞" });
