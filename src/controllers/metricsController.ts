import { LogsHandler } from '../handlers/logsHandler';
import { getStatusModel, Status } from '../models/statusModel';
import { LogTypeEnum } from '../types/enums/logsEnums';

export class MetricsController {
    /**
     * Stores temperature data into the database
     * @param {Temperature} data
     */
    static async storeStatus(data: Status) {
        const StatusModel = await getStatusModel();
        try {
            await StatusModel.create(data);
        } catch (error) {
            LogsHandler.log({ topic: LogTypeEnum.VALIDATION_ERROR, message: error });
        }
    }
}
