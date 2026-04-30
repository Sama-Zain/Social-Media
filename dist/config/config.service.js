"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Password = exports.User_Email = exports.WHITE_LIST = exports.CLIENT_ID = exports.REFRESH_TOKEN_EXPIRESIN = exports.EXPIRESIN = exports.REFRESH__ADMINTOKEN = exports.JWT__ADMIN_SECRET_KEY = exports.REFRESH__USERTOKEN = exports.JWT__USER_SECRET_KEY = exports.ENCRYPTION_SECRET_KEY = exports.SALT = exports.MONGODB_URI = exports.PORT = void 0;
const path_1 = require("path");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: (0, path_1.resolve)('./src/config/dev.env') });
function getEnv(key) {
    const value = process.env[key];
    if (value === undefined) {
        throw new Error(`Missing env var: ${key}`);
    }
    return value;
}
exports.PORT = getEnv('PORT');
exports.MONGODB_URI = getEnv('MONGODB_URI');
exports.SALT = getEnv('SALT');
exports.ENCRYPTION_SECRET_KEY = getEnv('ENCRYPTION_SECRET_KEY');
//USER
exports.JWT__USER_SECRET_KEY = getEnv('TOKEN_ACCESS_USER_SECRET_KEY');
exports.REFRESH__USERTOKEN = getEnv('TOKEN_REFRESH_USER_SECRET_KEY');
//ADMIN
exports.JWT__ADMIN_SECRET_KEY = getEnv('TOKEN_ACCESS_ADMIN_SECRET_KEY');
exports.REFRESH__ADMINTOKEN = getEnv('TOKEN_REFRESH_ADMIN_SECRET_KEY');
// EXPIRESIN
exports.EXPIRESIN = getEnv('ACCESS_EXPIRES');
exports.REFRESH_TOKEN_EXPIRESIN = getEnv('REFRESH_EXPIRES');
//SOCAIL API
exports.CLIENT_ID = getEnv('CLIENT_ID');
//cors
exports.WHITE_LIST = getEnv('WHITE_LIST').split(',');
// EMAIL
exports.User_Email = getEnv('USER_EMAIL');
exports.User_Password = getEnv('USER_PASSWORD');
