"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsHandler = void 0;
const logsController_1 = require("../controllers/logsController");
const generalEnums_1 = require("../types/enums/generalEnums");
const utils_1 = require("../utils/utils");
const logsValidation_1 = require("../validation/logsValidation");
class LogsHandler {
    static log(data) {
        const logs = { topic: data.topic, message: (0, utils_1.anyToString)(data.message) };
        const { value, error } = logsValidation_1.LogsInputSchema.validate(logs, this.validationOptions);
        if (error)
            throw error;
        logsController_1.LogsController.storeLogs(value);
        console.log(generalEnums_1.ColorsEnum.FG_RED, value, generalEnums_1.ColorsEnum.RESET);
    }
}
exports.LogsHandler = LogsHandler;
/**
 * Validation options of mqtt handler
 */
LogsHandler.validationOptions = { abortEarly: false, errors: { wrap: { label: "'" } } };
//# sourceMappingURL=logsHandler.js.map