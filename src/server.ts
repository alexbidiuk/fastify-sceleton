import * as fastify from 'fastify';
import * as fastifyCorsPlugin from 'fastify-cors';
import * as fastifySwaggerPlugin from 'fastify-swagger';

import betsRoutesPlugin from './modules/bets/bets.routes.plugin';
import healthRoutesPlugin from './modules/health/health.routes.plugin';
import swaggerConfig from './modules/swagger/swagger.config';
import authHook from './hooks/auth.hook';

let server: fastify.FastifyInstance;

const startServer = ({ httpPort, hostname }) => {
  server = fastify();

  server.register(fastifyCorsPlugin);
  server.register(fastifySwaggerPlugin, swaggerConfig);

  server
    .addHook(authHook.type, authHook.handler)
    .register(betsRoutesPlugin)
    .register(healthRoutesPlugin)
    .listen(httpPort, hostname, (err) => {
      if (err) {
        server.log.error(`Server shut down ${err.message}`);
        process.exit(1);
      }
    });
};

const stopServer = (): Promise<any> => {
  if (server) {
    return server.close();
  }
  return Promise.resolve();
};

export { startServer, stopServer };
