import Joi from 'joi';

export const MetricsInputSchema = Joi.object({
    value: Joi.number().default(1),
    deviceId: Joi.string().required()
});
