"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMOTES = exports.PROFILE_URL = exports.HEART_BEAT = exports.SPREADSHEET_RANGES = exports.TOKEN_PATH = exports.SPREADSHEET_SCOPES = exports.DATABASE = void 0;
exports.DATABASE = 'database';
// R+W to all Spreadsheets
exports.SPREADSHEET_SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
exports.TOKEN_PATH = '.token.json';
// The order of these values will affect the GsheetController
exports.SPREADSHEET_RANGES = ['Logs!A:C'];
exports.HEART_BEAT = '*/10 * * * *';
exports.PROFILE_URL = 'https://i.imgur.com/BosWxIE.png';
exports.EMOTES = ['🌞', '🌻', '🌈', '🌸', '🌟', '🌚', '🦥', '🦨'];
//# sourceMappingURL=constants.js.map