import Joi, { ValidationOptions } from 'joi';

import { ColorsEnum } from '../types/enums/generalEnums';

const validationOptions: ValidationOptions = { abortEarly: false, errors: { wrap: { label: "'" } } };
const envFileInputSchema = Joi.object({
    // Mongo Credentials
    mongoClusterUri: Joi.string().required(),
    // Discord Credentials
    discordWebhook: Joi.string().required(),
    // Google Credentials
    googleToken: Joi.string().required(),
    // Device Id
    deviceId: Joi.string().required()
});

export const validateEnv = () => {
    const data = {
        mongoClusterUri: process.env.CLUSTER_URI,
        googleToken: process.env.GOOGLE_TOKEN,
        discordWebhook: process.env.DISCORD_WEBHOOK,
        deviceId: process.env.DEVICE_ID
    };
    const { value: _value, error } = envFileInputSchema.validate(data, validationOptions);
    if (error) return error;
    console.log(ColorsEnum.BG_GREEN, "All '.env' variables loaded successfully 🌞", ColorsEnum.RESET);
    return null;
};
