import { DiscordWebhook } from '../types/discordTypes';
import { PROFILE_URL } from '../utils/constants';
// eslint-disable-next-line import/order
import { Webhook } from 'discord-webhook-node';

export class DiscordController {
    /**
     * Posts webhook to appropriate channel
     * @param {DiscordWebhook} data
     */
    public static postWebhook = async (data: DiscordWebhook): Promise<void> => {
        const hook = new Webhook(data.url);
        hook.setUsername('Norman the Doorman');
        hook.setAvatar(PROFILE_URL);
        await hook.send(data.payload);
    };
}
