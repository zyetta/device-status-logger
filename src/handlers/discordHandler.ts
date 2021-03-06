import { ValidationOptions } from 'joi';
import { DiscordController } from '../controllers/discordController';
import { DiscordWebhook } from '../types/discordTypes';
import { LogsHandler } from './logsHandler';
import { LogTypeEnum } from '../types/enums/logsEnums';
import { webhookPostInputSchema } from '../validation/discordValidation';

export class DiscordHandler {
    /**
     * Validation options of mqtt handler
     */
    private static validationOptions: ValidationOptions = { abortEarly: false, errors: { wrap: { label: "'" } } };

    /**
     *  Posts webhook to Discord Channel
     * @param {DiscordWebhook} data
     */
    public static async postWebhook(data: DiscordWebhook) {
        try {
            const { value, error } = webhookPostInputSchema.validate(data, this.validationOptions);
            if (error) throw error;
            await DiscordController.postWebhook(value);
        } catch (error) {
            LogsHandler.log({ topic: LogTypeEnum.VALIDATION_ERROR, message: error });
        }
    }
}
