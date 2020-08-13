import { FastifyInstance } from 'fastify';
import { registerRoutes } from '../../utils/fastify';
import betsRoutesMap from './bets.routes.map';

export default (fastify: FastifyInstance, opts: object, next: Function) => {
  registerRoutes(fastify, betsRoutesMap);

  next();
};
