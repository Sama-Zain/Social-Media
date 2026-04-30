import {resolve} from "path";
import dotenv from "dotenv";

dotenv.config({ path: resolve('./src/config/dev.env') });

function getEnv(key: string ): string {
    const value = process.env[key];
    if (value === undefined) {
        throw new Error(`Missing env var: ${key}`);
    }
    return value;
}

export const PORT = getEnv('PORT');
export const MONGODB_URI = getEnv('MONGODB_URI');
export const SALT =getEnv('SALT');
export const ENCRYPTION_SECRET_KEY = getEnv('ENCRYPTION_SECRET_KEY');
//USER
export const JWT__USER_SECRET_KEY = getEnv('TOKEN_ACCESS_USER_SECRET_KEY');
export const REFRESH__USERTOKEN = getEnv('TOKEN_REFRESH_USER_SECRET_KEY');
//ADMIN
export const JWT__ADMIN_SECRET_KEY = getEnv('TOKEN_ACCESS_ADMIN_SECRET_KEY');
export const REFRESH__ADMINTOKEN = getEnv('TOKEN_REFRESH_ADMIN_SECRET_KEY');
// EXPIRESIN
export const EXPIRESIN = getEnv('ACCESS_EXPIRES');
export const REFRESH_TOKEN_EXPIRESIN = getEnv('REFRESH_EXPIRES');
//SOCAIL API
export const CLIENT_ID = getEnv('CLIENT_ID'); 
//cors
export const WHITE_LIST=getEnv('WHITE_LIST').split(',');
// EMAIL
export const User_Email = getEnv('USER_EMAIL');
export const User_Password = getEnv('USER_PASSWORD');
