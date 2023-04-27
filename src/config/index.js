import dotenv from 'dotenv';

dotenv.config();

export default {
    PUERTO: process.env.PUERTO || 3000
}