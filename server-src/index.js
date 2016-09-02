import path from 'path';
process.env.NODE_CONFIG_DIR = path.join(__dirname, './configs');
import app from './app'
export default app
