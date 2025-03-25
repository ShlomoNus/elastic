import { loadEnvFiles } from '@utils/vars';
import { cleanEnv, str, num } from 'envalid';

loadEnvFiles();

export const CONFIG = cleanEnv(process.env, {
    DB_NAME: str({ devDefault: 'localUsers' }),
    Port: num({ devDefault: 5050 }),
    Secret: str({ devDefault: '12345' }),
});
