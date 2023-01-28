import { Webhook } from 'discord-webhook-node';
import { DiscordWebhook } from '../types/discordTypes';
import { PROFILE_URL } from '../utils/constants';

export class DiscordController {
    /**
     * Posts webhook to appropriate channel
     * @param {DiscordWebhook} data
     */
    public static postWebhook = async (data: DiscordWebhook): Promise<void> => {
        const hook = new Webhook(data.url);
        hook.setUsername('Device Status');
        hook.setAvatar(PROFILE_URL);
        await hook.send(data.payload);
    };
}
