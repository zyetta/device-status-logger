import Joi from 'joi';

export const MetricsInputSchema = Joi.object({
    value: Joi.boolean().default(true)
});
