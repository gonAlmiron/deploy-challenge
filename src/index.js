import server from './services/server';
import logger from './logs/logger';
import Config from './config';

const PORT = process.env.PORT || Config.PORT;

server.listen(PORT, () => logger.info(`Server UP - Escuchando en el puerto ${PORT} - PID WORKER ${process.pid} `));

server.on('error', (err) => logger.error(err));