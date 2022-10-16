"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogsModel = exports.LogsSchema = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../utils/constants");
const mongo_1 = require("../config/mongo");
exports.LogsSchema = new mongoose_1.Schema({
    topic: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true, collection: 'logs' });
/** Define CRUD Interfaces */
let Model;
const getLogsModel = () => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, mongo_1.getConnectionToDatabase)(constants_1.DATABASE);
    if (conn) {
        if (!Model) {
            console.log('Init new LogsModel ... ');
            Model = yield conn.model('LogsModel', exports.LogsSchema);
        }
        return Model;
    }
    throw Error('Unable to get');
});
exports.getLogsModel = getLogsModel;
//# sourceMappingURL=logsModel.js.map