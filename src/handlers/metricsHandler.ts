import { ValidationOptions } from 'joi';
import { LogsHandler } from './logsHandler';
import { LogTypeEnum } from '../types/enums/logsEnums';
import { MetricsController } from '../controllers/metricsController';
import { MetricsInputSchema } from '../validation/metricsValidation';

export default class MetricsHandler {
    /**
     * Validation options of mqtt handler
     */
    private static validationOptions: ValidationOptions = { abortEarly: false, errors: { wrap: { label: "'" } } };

    /**
     * Handler for incoming messages
     * @param {any} data
     */
    public static async store(data: any) {
        try {
            const { value, error } = MetricsInputSchema.validate(data, this.validationOptions);
            if (error) throw error;
            await MetricsController.storeStatus({ value: value.value });
        } catch (error) {
            LogsHandler.log({ topic: LogTypeEnum.VALIDATION_ERROR, message: error });
        }
    }
}
