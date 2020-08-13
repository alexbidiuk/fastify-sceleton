import { FastifyInstance } from 'fastify';
import { registerRoutes } from '../../utils/fastify';
import healthRoutesMap from './health.routes.map';

export default (fastify: FastifyInstance, opts: object, next: Function) => {
  registerRoutes(fastify, healthRoutesMap);

  next();
};
