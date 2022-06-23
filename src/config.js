export const DEV_SERVER_ADDRESS = 'http://localhost';
export const PROD_SERVER_ADDRESS = 'http://44.201.255.53';
export const DEV_SERVER_PORT = 3000;
export const PROD_SERVER_PORT = 80;

export const URL = process.env.NODE_ENV === 'production' ? `${PROD_SERVER_ADDRESS}:${PROD_SERVER_PORT}` : `${DEV_SERVER_ADDRESS}:${DEV_SERVER_PORT}`;
