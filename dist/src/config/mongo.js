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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectionToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let connURI;
let conn = null;
const connOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 50,
    family: 4
};
function getConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Connecting to Mongo Client ...');
        connURI = process.env.CLUSTER_URI;
        if (!conn)
            conn = mongoose_1.default.createConnection(connURI, connOptions);
        return conn;
    });
}
function getConnectionToDatabase(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`getConnectionToDatabase: creating connection to ${databaseName}`);
        conn = yield getConnection();
        if (conn)
            return conn.useDb(databaseName);
        return undefined;
    });
}
exports.getConnectionToDatabase = getConnectionToDatabase;
//# sourceMappingURL=mongo.js.map