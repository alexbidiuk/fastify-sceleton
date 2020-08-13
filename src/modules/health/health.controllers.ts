import { FastifyReply, FastifyRequest } from 'fastify';
import { HttpResponse } from '../../types/server';
import { getStatus } from './health.service';

const healthController = (
  req: FastifyRequest,
  res: FastifyReply<HttpResponse>,
) => {
  return res.send(getStatus());
};

export { healthController };
