import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(currentDir, '../.env');

dotenv.config({ path: envPath });

const required = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const nodeEnv = process.env.NODE_ENV || 'development';
const port = Number(process.env.PORT);

const env = {
  nodeEnv,
  port: Number.isInteger(port) && port > 0 && port <= 65535 ? port : 5000,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  mongodbUri: nodeEnv === 'test' ? (process.env.MONGODB_URI || '') : required('MONGODB_URI'),
};

export default env;