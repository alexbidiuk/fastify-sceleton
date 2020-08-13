import { FastifyInstance } from 'fastify';

const registerRoutes = (
  fastifyInstance: FastifyInstance,
  routesMap: object,
) => {
  Object.values(routesMap).forEach(({ method, url, options, controller }) =>
    fastifyInstance[method](url, options, controller),
  );
};

export { registerRoutes };
